



function renderMainSheet() {
    const StaticList = document.getElementById("section-static");
    const AbilityList = document.getElementById("section-ability");
    const SaveList = document.getElementById("section-ability");

    for (let key in stats) {
        const stat = stats[key];

        if (stat.categories && stat.categories.includes("Static")) {
            const display = document.createElement("p");
            display.textContent = `${key}: ${stat.base}  `;
            StaticList.appendChild(display);
        }
        if (stat.categories && stat.categories.includes("AS")) {
            const display = document.createElement("p");
            display.textContent = `${key}: ${stat.base} +${stat.modifier}`;
            AbilityList.appendChild(display);
        }
        if (stat.categories && stat.categories.includes("Save")) {
            const display = document.createElement("p");
            display.textContent = `${key}: ${stat.base} `;
            SaveList.appendChild(display);
        }
    }
}
