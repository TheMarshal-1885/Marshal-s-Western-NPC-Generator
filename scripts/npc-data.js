/**
 * Western NPC Data
 * All the name tables, professions, and character details from the source PDFs
 */

export const WesternNPCData = {
    names: {
        male_first: [
            "Abraham", "Bill", "Addison", "Albert", "Alexander", "Allard", "Aloysius", "Anton", "Archie", "Arley",
            "Arthur", "Ashley", "Ballard", "Barclay", "Beacher", "Beldon", "Bradley", "Braxton", "Brian", "Brock",
            "Burt", "Cade", "Calder", "Calhoun", "Carl", "Chad", "Channing", "Charlie", "Chilton", "Claude",
            "Clay", "Colbert", "Cullen", "Curtis", "Dan", "Daniel", "Darren", "David", "Douglas", "Dover",
            "Dudley", "Eddie", "Edgar", "Edmund", "Edward", "Edwin", "Ellis", "Elton", "Emil", "Emmett",
            "Enoch", "Ethan", "Frank", "Franklin", "Fredrick", "Gaston", "Glenn", "Gordon", "Gus", "Harold",
            "Harvey", "Henry", "Herman", "Horton", "Hunt", "Hyatt", "Isaac", "Irving", "Jack", "James",
            "Jeremiah", "Jerry", "Jessie", "Jim", "Joaquin", "John", "Joseph", "Josiah", "Klaus", "Lawrence",
            "Lawson", "Lee", "Leon", "Leroy", "Lind", "Lloyd", "Lyndon", "Mace", "Marden", "Marion",
            "Marsden", "Marshal", "Martin", "Maurice", "Max", "Mike", "Miles", "Miller", "Milton", "Morven",
            "Nathaniel", "Nicholas", "Nimrod", "Noah", "North", "Owen", "Packard", "Patrick", "Perry", "Peter",
            "Philip", "Radcliff", "Ransford", "Reuben", "Rigby", "Robert", "Roberto", "Rochester", "Rodney", "Rufus",
            "Ruben", "Rutherford", "Scott", "Seaborn", "Shaw", "Shelley", "Shepherd", "Speck", "Terrel", "Theodore",
            "Thomas", "Timothy", "Tom", "Tripp", "Virgil", "Wakefield", "Washington", "Waverly", "West", "Wetherby",
            "Wheeler", "Will", "William", "Winter", "Woodrow"
        ],
        
        female_first: [
            "Abbie", "Ada", "Adeline", "Agnes", "Agatha", "Agrona", "Alice", "Alonia", "Alma", "Amanda",
            "Amy", "Anne", "Annie", "Ariana", "Augusta", "Augustina", "Barbara", "Belle", "Bertie", "Bess",
            "Bessie", "Betsy", "Birdie", "Blanche", "Bridget", "Callie", "Caroline", "Carrie", "Catherine", "Cecelia",
            "Charlotte", "Christiana", "Christina", "Claire", "Clara", "Clarisa", "Claudine", "Cornelia", "Daisy", "Dollie",
            "Dora", "Dorothy", "Effie", "Eleanor", "Eliza", "Ella", "Ellen", "Elsie", "Emily", "Emma",
            "Essie", "Esther", "Estelle", "Etta", "Eugenia", "Eunice", "Eva", "Fannie", "Florence", "Frances",
            "Hannah", "Harriet", "Hattie", "Heloise", "Henriette", "Hope", "Honora", "Ina", "Isabel", "Isabella",
            "Isabelle", "Jane", "Janie", "Jean", "Joan", "Johanna", "Josie", "Kate", "Katherine", "Laura",
            "Leila", "Lela", "Lena", "Lillie", "Lola", "Loretta", "Lottie", "Lucy", "Lucille", "Lula",
            "Mabel", "Madeleine", "Mae", "Maggie", "Mamie", "Margaret", "Marguerite", "Maria", "Marie", "Marion",
            "Martha", "Mary", "Matilda", "Mattie", "Midori", "Mildred", "Milley", "Moira", "Mollie", "Myra",
            "Nancy", "Nannie", "Nellie", "Ollie", "Pearl", "Peggy", "Rebecca", "Rena", "Rosa", "Rose",
            "Rosella", "Rosie", "Roxie", "Sadie", "Sallie", "Sarah", "Shen", "Shirley", "Sophia", "Stella",
            "Susan", "Susie", "Sybilla", "Sylvia", "Theelori", "Theresa", "Vera", "Verna", "Victoria", "Viola",
            "Virginia", "Willie", "Winifred"
        ],
        
        last_names: [
            "Acker", "Adams", "Adulina", "Ainsley", "Alby", "Allerton", "Altham", "Anderson", "Anderton", "Angus",
            "Anstey", "Ashton", "Atherton", "Badger", "Baker", "Barclay", "Barger", "Barkley", "Barnard", "Baptist",
            "Belkmore", "Benson", "Bentger", "Bing", "Bird", "Black", "Blackwood", "Blakely", "Blankley", "Blyth",
            "Boswell", "Boyd", "Bradshaw", "Brent", "Bristol", "Brown", "Buchanan", "Cading", "Casper", "Castellon",
            "Chatham", "Chavez", "Chin", "Chisadre", "Churchill", "Clark", "Clayton", "Clement", "Clifford", "Colby",
            "Colcord", "Colt", "Compton", "Coombs", "Cooper", "Copeland", "Cotton", "Courtright", "Crawford", "Cumberbatch",
            "Dalton", "Davis", "Deighton", "Devlin", "Digby", "Doe", "Dodge", "Drew", "Dunn", "Dwyer",
            "Eaton", "Ebener", "Ellis", "England", "English", "Evans", "Everleigh", "Fagier", "Fisher", "Flores",
            "Fulton", "Gardner", "Garrick", "Goldsby", "Hadlee", "Hale", "Hallewell", "Harlan", "Harley", "Harlow",
            "Harrison", "Hayley", "Hays", "Hernandez", "Higgins", "Hill", "Hughes", "Hunter", "Hurley", "Ibling",
            "Irwin", "Jackson", "Jones", "Jepson", "Ju", "Kendal", "Kendall", "Kenley", "Kensley", "Kent",
            "Kelly", "Kidder", "Kimberley", "King", "Kinsley", "Kirkham", "Kochler", "Lacour", "Lancaster", "Law",
            "LeBeau", "Lee", "Leslie", "Lewis", "Lindsay", "Livingstone", "Long", "Longabaugh", "Lopez", "Lynn",
            "Madkins", "Manley", "Martin", "Mayfield", "McClusky", "McGwin", "McKay", "Middleton", "Miles", "Miller",
            "Mitchell", "Moorhead", "Moore", "Musgrove", "Myerscough", "Nelson", "Nye", "Oakley", "Palter", "Paxton",
            "Phelps", "Poole", "Ramsay", "Ramsey", "Read", "Reed", "Remington", "Reno", "Riley", "Rivera",
            "Rockwell", "Royal", "Sandford", "Sani", "Saunooke", "Saunders", "Schuss", "Scott", "Sheldon", "Smith",
            "Stapleton", "Stoudenmire", "Stratford", "Susemihl", "Takaki", "Teecha", "Thomas", "Thorpe", "Tickle", "Tribole",
            "Tucker", "Upton", "Vance", "Vaughan", "Wade", "Waite", "Walters", "Warwick", "Wentworth", "Whitby",
            "White", "Wilberforce", "Williams", "Wilson", "Winterbourne", "Winthrop", "Wong", "Wright", "Yarberry", "York", "Zakharov"
        ],
        
        nicknames: [
            "Angel Eyes", "Bad Beard", "Bane", "Behind Bars", "Big Nose", "Bilk", "Black Hands", "Bullets", "Quick Blades", "The Blind",
            "Boot-Licker", "The Brain", "Breaker", "Bronco", "Brown Bear", "Bulldozer", "Bullseye", "The Bully", "Cherokee", "Cobra",
            "Cool Hand", "Creed", "Curly", "Deadman", "Devil Horse", "Diamonds", "Dirty", "Dirty Glasses", "Doc", "Dusty Hat",
            "Dutch", "Dynamite", "Ear Slicer", "Explosion", "Eyeglass", "Faith", "Dad", "Mom", "Feather Boots", "Ghost",
            "Golden Teeth", "Grandpa", "Gravedigger", "Grimjaws", "Happy", "Have Mercy", "Hawkeyes", "Hell", "The Hunter", "The Jester",
            "Jester", "Joker", "Judge", "Kid", "Killer", "Double Knife", "White Knight", "Laughing", "Lawful", "Leather",
            "Little", "Long", "Long Shot", "Mamba", "Missing Eye", "News", "Outlaw", "Pale Horse", "Pink", "Pistol",
            "Poker Face", "The Preacher", "Pretty Face", "Prison Break", "Python", "Queen", "Ranger", "Rattlesnake", "Red", "Reelfoot",
            "Rider", "Roses", "Russian", "Shootout", "Sly Eye", "Smiley", "The Snake", "Soapy", "Steel", "Sunrise",
            "Tall", "Texas", "Tiger", "Tiny", "Trigger", "Trigger Finger", "The Twin", "Uncle Tom", "Vile Mouth", "Wild",
            "Woodman", "Books", "Cactus", "Itchy", "Deadeye", "Pappy", "Rattler", "Buck", "The Rose", "Shotgun",
            "Hard Luck", "Dash", "Bulldog", "High Water", "Arkansas", "Ram", "Bell", "Kit", "Parrott", "Whiskey",
            "Rusty", "Junior", "Cotton Mouth", "Butch", "Sure foot", "Big", "Asustadizo", "Six Shot", "Boots", "Tulsa",
            "Rooster", "Powder Face", "Deadwood", "Slick", "Dead Man", "Iron Sight", "King", "Foggy", "Hound Dog", "Bloody",
            "Workhorse", "Hell Cat", "Long Leg", "Mama", "Pokey", "Fox", "Cannonball", "Ace", "Flapjack", "Deadshot",
            "Skinny", "Lefty", "Nanny Goat", "Grave Digger", "Shaky", "Mustang", "Hawk Eye", "Wrong Foot", "Big Bear", "Lady Luck",
            "One Shot", "Log Cabin", "Mighty", "Cutter", "Side Saddle", "Mousey", "Ramblin'", "Trick Shot", "Buster", "Shakespeare",
            "Slippery", "Tanglefoot", "Diamond", "Guapo", "Jumpin'", "Big Bull", "Rocky", "Chicken Leg", "Boot Heel", "Ruthless",
            "Bud", "Old Man", "Cactus Mouth", "Bangtail", "Tippy", "Big Thunder", "Angel", "Arizona Baby", "Blondie", "Cactus Girl",
            "Christine Dusk", "Dusty Gertrude", "Jewel", "Kitty", "Little Mary", "Viper Kiss", "Bull Rider", "Crazy Horse", "Hustler",
            "Lone Rider", "Rattling Joe", "Scorpion Rick", "Stalker", "Wild Bill"
        ]
    },
    
    professions: {
        female: [
            "Laundress", "Dry goods store assistant", "Engraver", "Saddlery and harness maker", "Nursery and garden store attendant",
            "Traveling show trick rider", "Train parlor attendant", "Artificial flower maker", "Singer", "Bookkeeper",
            "Commercial sign and ornamental painter", "Farm stand attendant", "Housekeeper", "Elementary school teacher", "Nurse",
            "House cook", "Baker", "Charity worker", "Author", "Librarian", "Haberdasher", "Hairdresser", "Saloon girl",
            "Detective", "Stage actress", "Milliner", "Dance teacher", "Restaurant owner and operator", "Coach upholsterer", "Nun",
            "Governess", "Sawmill administrative secretary", "Paper binder", "Homemaker", "Lace maker", "Cancan dancer",
            "Church administrative secretary", "Wet nurse", "Photographer", "Beekeeper", "Corset maker", "Piano teacher",
            "Boardinghouse landlady", "Midwife", "Dairy farm laborer", "Seamstress", "Confectionary shop owner", "Camp cook", "Florist", "Maid"
        ],
        
        male: [
            "Farm laborer", "Watchmaker", "Tobacconist", "Mulepacker", "Livery-Stable keeper", "Liquor merchant",
            "Telegraph operator", "Fur trader", "Barber", "Stagecoach driver", "Dry goods merchant", "Cabinetmaker",
            "Hotel desk clerk", "Traveling snake oil salesman", "Gunsmith", "Rail station master", "Lawyer", "Roofer",
            "Barkeep", "Linotype operator", "Iceman", "Postal carrier", "Ranch hand", "Wheelwright", "Professional gambler",
            "Fireman", "Butcher", "Lumberyard worker", "Farrier", "Coal miner", "Student", "Cobbler", "Plasterer",
            "Sheriff", "Pawnbroker", "Carpenter", "Railroad porter", "Butler", "Notary public", "Tailor", "Accountant",
            "Pastor", "Theater proprietor", "Doctor", "Bank clerk", "Journalist", "Blacksmith", "Undertaker", "Granary owner", "Cooper"
        ]
    },
    
    physical: {
        heights: ["4'10-5'0", "6'1-6'2", "5'6-5'8", "5'11-6'0", "5'2-5'3", "6'8-6'10", "5'4-5'5", "4'8-4'9", "6'4-6'6", "5'9-5'10"],
        body_types: ["Triangular", "Gangly", "Toned", "Heavy set", "Slim", "Pear shaped", "Stocky", "Plump", "Willowy", "Buff"],
        face_shapes: ["Round", "Broad", "Rectangular", "Narrow", "Heart", "Elongated", "Diamond", "Square", "Squat", "Oval"],
        eye_colors: ["Grey green", "Honey brown", "Sky blue", "Hazel", "Violet blue", "Dark brown", "Spring green", "Grey blue", "Deep green", "Chestnut brown"],
        hair_colors: ["Ginger", "Deep black", "Platinum blonde", "Auburn", "Salt and pepper", "Mousy brown", "Silvery grey", "Flat black", "Honey blonde", "Chestnut"],
        notable_traits: [
            "Right leg slightly longer than left", "Prominent nose", "Unusually long hands/fingers", "Large birthmark over left eye",
            "Abundant freckles", "Bushy eyebrows", "Prominent dimples", "Slight buck teeth", "Large burn scar on right hand",
            "Prominent widows peak", "Noticeable gap between front teeth", "Missing right pinky", "Notably full lips",
            "Prominent knuckles", "Cleft chin", "Bald spot on back of head", "Blind in left eye", "Long scar down left calf",
            "Deep smile lines", "Prominent crow's feet"
        ]
    },
    
    personality: {
        base_attitudes: [
            "Abrasive", "Chipper", "Reserved", "Gloomy", "Friendly", "Neurotic", "Playful", "Irascible", "Aloof", "Flirtatious",
            "Relaxed", "Boisterous", "Amiable", "Apathetic", "Paranoid", "Jovial", "Haughty", "Withdrawn", "Gregarious", "Brusque"
        ],
        positive_traits: [
            "Brave", "Compassionate", "Reliable", "Optimistic", "Trustworthy", "Enthusiastic", "Ambitious", "Even tempered",
            "Diligent", "Charismatic", "Independent", "Eloquent", "Resourceful", "Curious", "Vivacious", "Open Minded",
            "Courteous", "Humble", "Confident", "Loyal"
        ],
        negative_traits: [
            "Quarrelsome", "Irresponsible", "Sanctimonious", "Hypocritical", "Childish", "Pretentious", "Cocky", "Gullible",
            "Judgmental", "Lazy", "Manipulative", "Inflexible", "Nosy", "Snide", "Greedy", "Self-centered", "Pessimistic",
            "Cowardly", "Reckless", "Vain"
        ],
        quirks_habits: [
            "Never fully finishes a drink", "Frequently interrupts others", "Cracks their knuckles frequently",
            "Often bounces their leg when seated", "Chatters whenever there is a lull", "Has extremely animated expressions",
            "Constantly chews on a toothpick", "Carries on conversations with animals", "Often sings to themselves as they work",
            "Often repeats the punch line of jokes", "Extremely superstitious", "Checks their pocket watch frequently",
            "Terrible sense of direction", "Extremely neat and ordered", "Hates wearing any jewelry", "Tries to 'one up' others stories",
            "Laughs or giggles when nervous", "Always remembers important dates", "Forgets names very easily", "Curses with unusual frequency"
        ]
    },
    
    outlaw: {
        age_ranges: ["15-20", "21-25", "26-30", "30-40", "50-60"],
        quirks: [
            "Collects tiny crystal figures", "Cannot read", "Carves their name everywhere", "Doesn't go anywhere without their pet",
            "Eats too much candy", "Gambling addict", "Has a hard time riding a horse", "Has a twin", "Is afraid of snakes",
            "Is followed by vultures", "Is very superstitious", "Is very strict about hygiene", "It is said they were raised by coyotes",
            "Keeps a bullet for their nemesis", "Likes dramatic entrances or exits", "Never goes out without their beloved poncho",
            "Never seems to run out of bullets", "Scalps their victims", "Wears a holed top hat", "Was thought dead multiple times"
        ],
        criminal_motivations: [
            "Bad company", "Bad timing", "Boredom", "Cupidity", "Fame", "Family business", "Filling a void", "Love", "Rebellion", "Revenge", "Survival", "Thrills"
        ],
        before_occupations: [
            "Banker", "Bartender", "Blacksmith", "Bounty hunter", "Cowboy", "Dancer", "Engineer", "Farmer", "Grocer", "Ironmonger",
            "Miner", "Politician", "Rich idle", "Server", "Sheriff", "Singer", "Soldier", "Stable boy", "Teacher", "Tribesman"
        ],
        current_occupations: [
            "Bank robber", "Cattle rustler", "Horse thief", "Pimp", "Scammer", "Smuggler", "Stagecoach robber", "Train robber"
        ],
        crimes: [
            "Bank robbery", "Cattle rustling", "Horse theft", "Pimping", "Scamming", "Smuggling", "Stagecoach robbery", "Train robbery",
            "Arson", "Blackmailing", "Bombing", "Bribery", "Burglary", "Escaping prison", "Exhibitionism", "Forgery", "Fraud",
            "Homicide", "Kidnapping", "Pickpocketing", "Poaching", "Riot", "Trafficking", "Treason"
        ],
        wanted_status: ["Dead or alive", "Alive", "Dead"],
        wanted_reasons: ["To hang them", "To judge them", "To execute them", "To extradite them"],
        reward_ranges: ["$100-$1000", "$1000-$10000", "$10000-$100000", "$100000+"],
        wanted_by: [
            "A gang leader", "A judge", "A mayor", "A preacher", "A prison director", "A sheriff", "The military",
            "Their ex accomplices", "Their ex lover", "Their family", "Their spouse", "Their victim(s) or victim's family"
        ]
    }
};
