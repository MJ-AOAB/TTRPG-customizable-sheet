export const Static = [
        {
                name: "HD",
                value: 11
        },
        {
                name: "BAB",
                value: 11
        },
        {
                name: "CL",
                value: 11
        }
]

export const baseStats = [
  {
    name: "HP",
    value: 165,
    categories: ["cat1", "cat2"]
  },
  {
    name: "Str",
    value: 20,
    categories: ["cat3", "cat4"]
  },
    {
    name: "Dex",
    value: 20,
    categories: ["cat3", "cat4"]
  },
    {
    name: "Con",
    value: 20,
    categories: ["cat3", "cat4"]
  },
    {
    name: "Int",
    value: 10,
    categories: ["cat3", "cat4"]
  },
      {
    name: "Wis",
    value: 24,
    categories: ["cat3", "cat4"]
  },
      {
    name: "Cha",
    value: 7,
    categories: ["cat3", "cat4"]
  },
];


export const baseSaves = [  
        {
        name: "Fort",
        value: 9,
        categories: ["Save", "Fortitude"]
        },
        {
        name: "Ref",
        value: 3,
        categories: ["Save", "Reflex"]
        },
        {
        name: "Will",
        value: 6,
        categories: ["save", "Will"]
        },
]
                
export const skillSetup = [
        {
        name: "Acrobatics",
        ranks: 11,
        CS: true,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Appraise",
        ranks: 0,
        CS: true,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Bluff",
        ranks: 0,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Climb",
        ranks: 0,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Craft(weapons)",
        ranks: 3,
        CS: true,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Diplomacy",
        ranks: 0,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Disable Device",
        ranks: 0,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Disguise",
        ranks: 0,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Escape Artist",
        ranks: 11,
        CS: true,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Fly",
        ranks: 1,
        CS: true,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Handle Animal",
        ranks: 1,
        CS: true,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Heal",
        ranks: 0,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Intimidate",
        ranks: 11,
        CS: true,
        categories: ["Wis", "Skill"]
        },
        {
        name: "Knowledge (Arcana)",
        ranks: 0,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Knowledge(Dungeoneering)",
        ranks: 0,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Knowledge(Engineering)",
        ranks: 0,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Knowledge(Geography)",
        ranks: 0,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Knowledge(History)",
        ranks: 0,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Knowledge(local)",
        ranks: 0,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Knowledge(nature)",
        ranks: 8,
        CS: true,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Knowledge(Nobility)",
        ranks: 0,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Knowledge(Planes)",
        ranks: 3,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Knowledge(Religion)",
        ranks: 0,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Linguistics",
        ranks: 11,
        CS: true,
        categories: ["Dex", "Skill"]
        },
        {
        name:"Perception",
        ranks: 11,
        CS: true,
        categories: ["Wis", "Skill"]
        },
        {
        name: "Perform",
        ranks: 11,
        CS: true,
        categories: ["Cha", "Skill"]
        },
        {
        name: "Profession",
        ranks: 0,
        CS: true,
        categories: ["Wis", "Skill"]
        },
        {
        name: "Ride",
        ranks: 11,
        CS: true,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Sense motive",
        ranks: 11,
        CS: true,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Sleight of hand",
        ranks: 10,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Spellcraft",
        ranks: 0,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Stealth",
        ranks: 11,
        CS: true,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Survival",
        ranks: 1,
        CS: false,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Swim",
        ranks: 10,
        CS: true,
        categories: ["Dex", "Skill"]
        },
        {
        name: "Use Magic Device",
        ranks: 0,
        CS: false,
        categories: ["Dex", "Skill"]
        },


        
]

// skill bonuses = [ [+2,All,Luck], [+3,Perception, insight]]

// resources [Martial Focus, Spirit, 
// Attack of opportunity, inspiration, tension]

// internal[]

//actions     [action,[resources,cost],description,[buff,amount,duration]]