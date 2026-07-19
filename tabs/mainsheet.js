



function renderMainSheet() {
    const StaticList = document.getElementById("section-static");
    const AbilityList = document.getElementById("section-ability");

    for (let key in stats) {
        const stat = stats[key];

        if (stat.categories && stat.categories.includes("Static")) {
            const displaySt = document.createElement("p");
            displaySt.textContent = `${key}: ${stat.base}  `;
            StaticList.appendChild(displaySt);
        }
        if (stat.categories && stat.categories.includes("AS")) {
            const displayAS = document.createElement("p");
            displayAS.textContent = `${key}: ${stat.base} +${stat.modifier}`;
            AbilityList.appendChild(displayAS);
        }
    }
}
