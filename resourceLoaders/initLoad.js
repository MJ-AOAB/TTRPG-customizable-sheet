window.stats = {};
window.globalBonuses = [];

window.NON_STACKING_TYPES = ["morale", "luck", "armor", "shield", "natural", "Enatural", "enhancement", "deflection"];
window.STACKING_TYPES = ["competence", "dodge", "untyped", "temp"];


window.createStatic = function(name, value) {
    stats[name] = { base: value
        , categories:["Static"]
     };
};

window.createAC = function( baseValue = 10, categories = []) {
    stats["AC"] = {
        base: baseValue,
        categories,
        bonuses: {
            morale: [],
            luck: [],
            armor: [],
            shield: [],
            natural: [],
            Enatural: [],
            dodge: [],
            deflection: [],
            untyped: [],
            temp: []
        }
    };
};

window.AbilityScore = function(name, value) {
    let mod = (value-10)/2;
    stats[name] = {
        base:value,
        modifier: mod,
        categories:["AS"]
        
    }

}

window.createSave = function(name, baseValue, categories = []) {
    stats[name] = {
        base: baseValue,
        categories,
        bonuses: {
            competence: [],
            morale: [],
            luck: [],
            untyped: [],
            temp: []
        }
    };
};

window.createattack = function(name, Bab, categories = []) {
    stats[name] = {
        base: Bab,
        categories,
        bonuses: {
            enhancement: [],
            morale: [],
            luck: [],
            competence: [],
            untyped: [],
            temp: []
        }
    };
};

window.createSkill = function(name, AS, categories = []) {
    stats[name] = {
        base: AS,
        categories,
        bonuses: {
            enhancement: [],
            morale: [],
            luck: [],
            competence: [],
            untyped: [],
            temp: []
        }
    };
};

// Calculation functions
window.calculateStatModifier = function(value) {
    return (value - 10) / 2;
};

window.calculateStat = function(statName) {
    const stat = stats[statName];
    let total = stat.base;

    let allBonuses = [];

    for (let type in stat.bonuses) {
        allBonuses.push(...stat.bonuses[type].map(b => ({ ...b, type })));
    }

    globalBonuses.forEach(b => {
        if (b.categories.some(cat => stat.categories.includes(cat))) {
            allBonuses.push(b);
        }
    });

    NON_STACKING_TYPES.forEach(type => {
        const filtered = allBonuses.filter(b => b.type === type);
        if (filtered.length > 0) {
            total += Math.max(...filtered.map(b => b.value));
        }
    });

    STACKING_TYPES.forEach(type => {
        const filtered = allBonuses.filter(b => b.type === type);
        total += filtered.reduce((a, b) => a + b.value, 0);
    });

    return total;
};
