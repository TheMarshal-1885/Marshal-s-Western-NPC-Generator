/**
 * Western NPC Generator for Foundry VTT
 * Created by Troy Mepyans (Marshal Games)
 * 
 * Generates authentic Western NPCs for Savage Worlds and other Western campaigns
 */

import { WesternNPCData } from './npc-data.js';

class WesternNPCGenerator {
    static ID = 'western-npc-generator';
    static TEMPLATES = {
        generator: `modules/${this.ID}/templates/npc-generator.hbs`
    };

    static log(force, ...args) {
        const shouldLog = force || game.modules.get(this.ID)?.api?.debugLogging || false;
        try {
            if (shouldLog) {
                console.log(this.ID, '|', ...args);
            }
        } catch (e) {}
    }

    static initialize() {
        this.log(true, 'Initializing Western NPC Generator');
        
        // Register settings
        this.registerSettings();
        
        // Add button to actors tab
        this.addActorButtons();
        
        // Register API
        game.modules.get(this.ID).api = {
            generateNPC: this.generateNPC.bind(this),
            openDialog: this.openDialog.bind(this),
            debugLogging: false
        };
    }

    static registerSettings() {
        game.settings.register(this.ID, 'autoAddToScene', {
            name: 'AUTO_ADD_TO_SCENE',
            hint: 'AUTO_ADD_TO_SCENE_HINT',
            scope: 'world',
            config: true,
            type: Boolean,
            default: false
        });

        game.settings.register(this.ID, 'defaultNPCType', {
            name: 'DEFAULT_NPC_TYPE',
            hint: 'DEFAULT_NPC_TYPE_HINT',
            scope: 'client',
            config: true,
            type: String,
            choices: {
                'townsfolk': 'Townsfolk',
                'detailed': 'Detailed NPC',
                'lawman': 'Law Enforcement',
                'outlaw': 'Outlaw',
                'quickname': 'Quick Name'
            },
            default: 'townsfolk'
        });
    }

    static addActorButtons() {
        // Add button to actor directory header
        Hooks.on('renderActorDirectory', (app, html) => {
            if (!game.user.isGM) return;

            const button = $(`
                <button class="western-npc-btn" type="button" title="Generate Western NPC">
                    <i class="fas fa-hat-cowboy"></i> Western NPC
                </button>
            `);

            button.on('click', () => this.openDialog());
            html.find('.directory-header .action-buttons').append(button);
        });

        // Add context menu option
        Hooks.on('getActorDirectoryEntryContext', (html, options) => {
            if (!game.user.isGM) return;
            
            options.unshift({
                name: "Generate Western NPC",
                icon: '<i class="fas fa-hat-cowboy"></i>',
                callback: () => this.openDialog()
            });
        });
    }

    static async openDialog() {
        const template = await renderTemplate(this.TEMPLATES.generator, {
            npcTypes: [
                { key: 'townsfolk', label: 'Townsfolk', description: 'Regular citizens with basic details' },
                { key: 'detailed', label: 'Detailed NPC', description: 'Full physical and personality description' },
                { key: 'lawman', label: 'Law Enforcement', description: 'Sheriffs, deputies, and marshals' },
                { key: 'outlaw', label: 'Outlaw', description: 'Criminals and wanted characters' },
                { key: 'quickname', label: 'Quick Name', description: 'Just name and nickname' }
            ],
            genders: [
                { key: 'random', label: 'Random' },
                { key: 'male', label: 'Male' },
                { key: 'female', label: 'Female' }
            ],
            defaultType: game.settings.get(this.ID, 'defaultNPCType')
        });

        new Dialog({
            title: "Western NPC Generator",
            content: template,
            buttons: {
                generate: {
                    icon: '<i class="fas fa-dice"></i>',
                    label: "Generate NPC",
                    callback: (html) => this.handleGeneration(html)
                },
                bulk: {
                    icon: '<i class="fas fa-dice-six"></i>',
                    label: "Generate 5 NPCs",
                    callback: (html) => this.handleBulkGeneration(html)
                },
                cancel: {
                    icon: '<i class="fas fa-times"></i>',
                    label: "Cancel"
                }
            },
            default: "generate",
            render: (html) => {
                // Add event listeners for dynamic updates
                html.find('#npc-type').on('change', (e) => {
                    const type = e.target.value;
                    html.find('.type-description').text(
                        html.find(`option[value="${type}"]`).data('description') || ''
                    );
                });
            }
        }, {
            classes: ['western-npc-generator', 'dialog'],
            width: 400,
            height: 'auto'
        }).render(true);
    }

    static async handleGeneration(html) {
        const formData = new FormData(html.find('form')[0]);
        const options = {
            type: formData.get('npc-type'),
            gender: formData.get('gender'),
            createActor: formData.get('create-actor') === 'on',
            addToScene: formData.get('add-to-scene') === 'on'
        };

        const npc = await this.generateNPC(options);
        await this.displayNPC(npc, options);
    }

    static async handleBulkGeneration(html) {
        const formData = new FormData(html.find('form')[0]);
        const options = {
            type: formData.get('npc-type'),
            gender: formData.get('gender'),
            createActor: formData.get('create-actor') === 'on',
            addToScene: formData.get('add-to-scene') === 'on'
        };

        const npcs = [];
        for (let i = 0; i < 5; i++) {
            const npc = await this.generateNPC(options);
            npcs.push(npc);
            if (options.createActor) {
                await this.createActorFromNPC(npc);
            }
        }

        // Display all NPCs in chat
        const content = npcs.map(npc => this.formatNPCForChat(npc)).join('<hr>');
        ChatMessage.create({
            user: game.user.id,
            content: `<div class="western-npc-bulk"><h3>Generated Western NPCs</h3>${content}</div>`,
            whisper: [game.user.id]
        });
    }

    static randomChoice(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    static async generateNPC(options = {}) {
        const { type = 'townsfolk', gender: genderChoice = 'random' } = options;
        
        // Determine gender
        const gender = genderChoice === 'random' ? 
            this.randomChoice(['male', 'female']) : genderChoice;

        // Generate base info
        const firstName = this.randomChoice(WesternNPCData.names[`${gender}_first`]);
        const lastName = this.randomChoice(WesternNPCData.names.last_names);
        const nickname = Math.random() > 0.7 ? this.randomChoice(WesternNPCData.names.nicknames) : null;
        
        const npc = {
            firstName,
            lastName,
            nickname,
            fullName: `${firstName}${nickname ? ` "${nickname}"` : ''} ${lastName}`,
            gender: gender.charAt(0).toUpperCase() + gender.slice(1),
            type
        };

        // Generate type-specific details
        switch (type) {
            case 'townsfolk':
                this.generateTownsfolk(npc, gender);
                break;
            case 'detailed':
                this.generateDetailedNPC(npc, gender);
                break;
            case 'lawman':
                this.generateLawman(npc, gender);
                break;
            case 'outlaw':
                this.generateOutlaw(npc, gender);
                break;
            case 'quickname':
                // Already have name info, minimal additional data
                break;
        }

        return npc;
    }

    static generateTownsfolk(npc, gender) {
        npc.profession = this.randomChoice(WesternNPCData.professions[gender]);
        npc.height = this.randomChoice(WesternNPCData.physical.heights);
        npc.build = this.randomChoice(WesternNPCData.physical.body_types);
        npc.eyeColor = this.randomChoice(WesternNPCData.physical.eye_colors);
        npc.attitude = this.randomChoice(WesternNPCData.personality.base_attitudes);
    }

    static generateDetailedNPC(npc, gender) {
        this.generateTownsfolk(npc, gender);
        
        npc.faceShape = this.randomChoice(WesternNPCData.physical.face_shapes);
        npc.hairColor = this.randomChoice(WesternNPCData.physical.hair_colors);
        npc.notableTrait = this.randomChoice(WesternNPCData.physical.notable_traits);
        npc.positiveTrait = this.randomChoice(WesternNPCData.personality.positive_traits);
        npc.negativeTrait = this.randomChoice(WesternNPCData.personality.negative_traits);
        npc.quirk = this.randomChoice(WesternNPCData.personality.quirks_habits);
    }

    static generateLawman(npc, gender) {
        const ranks = ["Sheriff", "Deputy", "Marshal", "Town Marshal", "Deputy Marshal"];
        npc.profession = this.randomChoice(ranks);
        npc.yearsService = Math.floor(Math.random() * 20) + 1;
        npc.reputation = this.randomChoice([
            "Fair but firm", "Quick to draw", "By-the-book", 
            "Respected", "Feared", "Corrupt"
        ]);
        
        // Physical traits suitable for law enforcement
        npc.height = this.randomChoice(["5'9-5'10", "5'11-6'0", "6'1-6'2", "6'4-6'6"]);
        npc.build = this.randomChoice(["Toned", "Stocky", "Buff", "Average"]);
        npc.attitude = this.randomChoice(["Stern", "Professional", "Friendly", "Intimidating"]);
        
        // SWADE stats if system is active
        if (game.system.id === 'swade') {
            npc.swadeStats = {
                fighting: 'd8',
                shooting: 'd8',
                intimidation: 'd6',
                notice: 'd8'
            };
        }
    }

    static generateOutlaw(npc, gender) {
        npc.profession = "Outlaw";
        npc.ageRange = this.randomChoice(["15-20", "21-25", "26-30", "30-40", "50-60"]);
        npc.quirk = this.randomChoice(WesternNPCData.outlaw.quirks);
        npc.motivation = this.randomChoice(WesternNPCData.outlaw.criminal_motivations);
        npc.beforeOccupation = this.randomChoice(WesternNPCData.outlaw.before_occupations);
        npc.currentOccupation = this.randomChoice(WesternNPCData.outlaw.current_occupations);
        
        // Generate crimes (1-3)
        const numCrimes = Math.floor(Math.random() * 3) + 1;
        npc.crimes = [];
        const availableCrimes = [...WesternNPCData.outlaw.crimes];
        for (let i = 0; i < numCrimes; i++) {
            const crimeIndex = Math.floor(Math.random() * availableCrimes.length);
            npc.crimes.push(availableCrimes.splice(crimeIndex, 1)[0]);
        }
        
        npc.wantedStatus = this.randomChoice(WesternNPCData.outlaw.wanted_status);
        npc.rewardRange = this.randomChoice(WesternNPCData.outlaw.reward_ranges);
        npc.wantedBy = this.randomChoice(WesternNPCData.outlaw.wanted_by);
    }

    static async displayNPC(npc, options) {
        const content = this.formatNPCForChat(npc);
        
        ChatMessage.create({
            user: game.user.id,
            content: content,
            whisper: options.createActor ? [] : [game.user.id]
        });

        if (options.createActor) {
            await this.createActorFromNPC(npc);
        }
    }

    static formatNPCForChat(npc) {
        let content = `
            <div class="western-npc-card">
                <div class="npc-header">
                    <h3><i class="fas fa-hat-cowboy"></i> ${npc.fullName}</h3>
                </div>
                <div class="npc-details">
                    <p><strong>Gender:</strong> ${npc.gender}</p>
        `;

        if (npc.profession) {
            content += `<p><strong>Profession:</strong> ${npc.profession}</p>`;
        }

        if (npc.type === 'detailed') {
            content += `
                <div class="npc-section">
                    <h4>Physical Description</h4>
                    <p><strong>Height:</strong> ${npc.height} | <strong>Build:</strong> ${npc.build}</p>
                    <p><strong>Face:</strong> ${npc.faceShape} | <strong>Eyes:</strong> ${npc.eyeColor}</p>
                    <p><strong>Hair:</strong> ${npc.hairColor}</p>
                    <p><strong>Notable:</strong> ${npc.notableTrait}</p>
                </div>
                <div class="npc-section">
                    <h4>Personality</h4>
                    <p><strong>Attitude:</strong> ${npc.attitude}</p>
                    <p><strong>Positive:</strong> ${npc.positiveTrait}</p>
                    <p><strong>Negative:</strong> ${npc.negativeTrait}</p>
                    <p><strong>Quirk:</strong> ${npc.quirk}</p>
                </div>
            `;
        } else if (npc.type === 'lawman') {
            content += `
                <div class="npc-section">
                    <h4>Law Enforcement Details</h4>
                    <p><strong>Years of Service:</strong> ${npc.yearsService}</p>
                    <p><strong>Reputation:</strong> ${npc.reputation}</p>
                    <p><strong>Build:</strong> ${npc.build} | <strong>Height:</strong> ${npc.height}</p>
                    <p><strong>Attitude:</strong> ${npc.attitude}</p>
                </div>
            `;
        } else if (npc.type === 'outlaw') {
            content += `
                <div class="npc-section">
                    <h4>Criminal Background</h4>
                    <p><strong>Age:</strong> ${npc.ageRange} | <strong>Motivation:</strong> ${npc.motivation}</p>
                    <p><strong>Former Job:</strong> ${npc.beforeOccupation}</p>
                    <p><strong>Current:</strong> ${npc.currentOccupation}</p>
                    <p><strong>Crimes:</strong> ${npc.crimes.join(', ')}</p>
                    <p><strong>Quirk:</strong> ${npc.quirk}</p>
                </div>
                <div class="npc-section">
                    <h4>Wanted Information</h4>
                    <p><strong>Status:</strong> Wanted ${npc.wantedStatus}</p>
                    <p><strong>Reward:</strong> ${npc.rewardRange}</p>
                    <p><strong>Wanted By:</strong> ${npc.wantedBy}</p>
                </div>
            `;
        } else if (npc.height) {
            content += `
                <div class="npc-section">
                    <p><strong>Height:</strong> ${npc.height} | <strong>Build:</strong> ${npc.build}</p>
                    <p><strong>Eyes:</strong> ${npc.eyeColor} | <strong>Attitude:</strong> ${npc.attitude}</p>
                </div>
            `;
        }

        content += `
                </div>
            </div>
        `;

        return content;
    }

    static async createActorFromNPC(npc) {
        const actorData = {
            name: npc.fullName,
            type: "npc",
            img: "modules/western-npc-generator/artwork/npc-portrait.webp",
            system: {},
            flags: {
                "western-npc-generator": {
                    generated: true,
                    npcData: npc
                }
            }
        };

        // Add biography
        let biography = `<p><strong>Profession:</strong> ${npc.profession || 'Unknown'}</p>`;
        biography += `<p><strong>Gender:</strong> ${npc.gender}</p>`;
        
        if (npc.type === 'detailed') {
            biography += `<h3>Physical Description</h3>`;
            biography += `<p>A ${npc.height} ${npc.gender.toLowerCase()} with a ${npc.build} build and ${npc.faceShape} face. ${npc.eyeColor} eyes and ${npc.hairColor} hair. Notable feature: ${npc.notableTrait}.</p>`;
            biography += `<h3>Personality</h3>`;
            biography += `<p>Generally ${npc.attitude.toLowerCase()}, with a ${npc.positiveTrait.toLowerCase()} nature but can be ${npc.negativeTrait.toLowerCase()}. ${npc.quirk}.</p>`;
        }

        if (game.system.id === 'swade') {
            // Add SWADE-specific data
            actorData.system = {
                details: {
                    biography: { value: biography }
                },
                attributes: {
                    agility: { die: 6 },
                    smarts: { die: 6 },
                    spirit: { die: 6 },
                    strength: { die: 6 },
                    vigor: { die: 6 }
                },
                skills: {
                    fighting: { die: 6 },
                    notice: { die: 6 },
                    shooting: { die: 6 }
                }
            };

            // Adjust stats based on profession
            if (npc.type === 'lawman') {
                actorData.system.skills.fighting.die = 8;
                actorData.system.skills.shooting.die = 8;
                actorData.system.skills.intimidation = { die: 6 };
            } else if (npc.type === 'outlaw') {
                actorData.system.skills.shooting.die = 8;
                actorData.system.skills.stealth = { die: 6 };
            }
        } else {
            // Generic system
            actorData.system.details = { biography: { value: biography } };
        }

        const actor = await Actor.create(actorData);
        
        // Add to current scene if requested
        if (game.settings.get(this.ID, 'autoAddToScene') && canvas.scene) {
            const tokenData = {
                name: npc.fullName,
                actorId: actor.id,
                x: Math.random() * (canvas.dimensions.width - 100),
                y: Math.random() * (canvas.dimensions.height - 100)
            };
            await canvas.scene.createEmbeddedDocuments("Token", [tokenData]);
        }

        ui.notifications.info(`Created actor: ${npc.fullName}`);
        return actor;
    }
}

// Initialize when Foundry is ready
Hooks.once('ready', () => {
    WesternNPCGenerator.initialize();
});

// Add macro support
Hooks.once('ready', () => {
    game.westernNPCGenerator = WesternNPCGenerator;
});

export { WesternNPCGenerator };
