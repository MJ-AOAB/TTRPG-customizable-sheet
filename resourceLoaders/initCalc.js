// Load static values
data.Static.forEach(s => {
    createStatic(s.name, s.value);
});


// Load base stats (Str, Dex, etc.)
data.baseStats.forEach(s => {
    AbilityScore(s.name, s.value);
});

// Load saves
data.baseSaves.forEach(s => {
    createSave(s.name, s.value, s.categories);
});

// Load skills
data.skillSetup.forEach(s => {
    createSkill(s.name, s.ranks, s.categories);
});
