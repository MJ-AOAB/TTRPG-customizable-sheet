# TTRPG Customizable Character Sheet

A fully modular, rules‑aware character sheet engine designed for any tabletop RPG.  
Currently optimized for **Pathfinder 1e**, with support for third‑party content, dynamic conditions, automatic bonus calculation, and combat resource tracking.

---

## Overview

This project is a customizable, extensible character sheet system built using **HTML, CSS, and JavaScript**, with an intended **Django backend** for persistence and multi‑character management.

By filling out `data.js` with your character’s information, the sheet automatically calculates totals, applies bonuses, and displays everything in organized sections. The system is designed to handle complex rulesets like Pathfinder 1e, including stacking logic, conditional modifiers, equipment effects, and round‑by‑round combat tracking.

---

##  Current Features

###  Automatic Stat Calculation
- Ability scores, saves, skills, AC, attacks, and resources  
- Full support for stacking vs non‑stacking bonus types  
- Conditional bonuses applied based on categories  
- All totals computed dynamically from your data

###  Modular Tab System
- **Main Page:** Displays major stats and bonuses, each with expandable detail views  
- **Equipment Page:** Manage worn items and see their effects  
- **Battle Page:** Track actions, resources, and conditions during combat  
- **Conditions Page:** View active conditions and apply new ones

###  Third‑Party Friendly
- Add any custom feat, item, spell, or condition  
- Extend the system by simply adding entries to `data.js`  
- No hard‑coded rules — everything is category‑driven

###  Dynamic Bonus Engine
- Global bonuses (conditions, items, effects)  
- Local bonuses (per‑stat modifiers)  
- Automatic stacking logic based on bonus type  
- Designed to support Pathfinder’s complex modifier system

---

##  Intended Features (In Progress)

### Library System
A searchable library of:
- Items  
- Conditions  
- Feats  
- Class features  
- Custom effects  

Apply effects directly to the character sheet with one click.

### Equipment Manager
- Track worn items  
- Automatically apply their bonuses  
- Support for slot‑based equipment  
- Quick toggles for temporary effects

### Battle Manager
- Round‑based resource tracking  
- Action economy helper  
- Condition durations  
- Automatic decrement via “Next Round” button  
- Quick‑apply combat effects

### Condition Sheet
- View all active conditions  
- Add new ones from the library  
- Add custom conditions  
- Automatically apply stat modifiers  
- Remove or expire conditions cleanly

### Django Backend (Planned)
- Save/load multiple characters (useful for gms or players with companions/multiple sheets to run)
- User accounts  
- Cloud storage for libraries  
- Campaign‑wide shared condition/effect lists

---

## 🛠 How It Works

The sheet uses a simple but powerful architecture:

1. **`data.js`** contains your character’s raw information  
2. **`initLoad.js`** converts that data into a unified `stats` object  
3. Each stat stores:
   - base value  
   - categories  
   - bonus arrays  
   - a `Total()` function for dynamic calculation ( for non static values) 
4. Tabs load external HTML files  
5. Each tab has a renderer that displays the relevant stats  
6. Bonuses update totals automatically

This makes the sheet:
- fully dynamic  
- easy to extend  
- rules‑aware  
- system‑agnostic  

---

##  Tech Stack
- **HTML** — structure  
- **CSS** — layout and styling  
- **JavaScript** — logic, rendering, dynamic updates  
- **Django (planned)** — backend, persistence, multi‑character support

---

## Project Goals
- Provide a **universal TTRPG sheet engine**  
- Support complex systems like Pathfinder 1e  
- Allow full customization for homebrew and third‑party content  
- Make combat and condition tracking effortless  
- Offer a clean, modular, expandable codebase  
- Eventually support cloud‑saved characters and shared libraries

---

##  Status
**In active development**  

---

