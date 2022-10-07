const ENEMIES = [
    250,
    390,
];

// Defining platforms here for now, but we can probably pass this in as a prop later
const PLATFORMS = [
    {
        "xPos": 100,
        "yPos": 30,
        "length": 50
    },
    {
        "xPos": 50,
        "yPos": 20,
        "length": 50 
    },
    {
        "xPos": 200,
        "yPos": 30,
        "length": 50
    }
];

const BUTTONS = [
    {
        "xPos": 10,
        "yPos": 10,
        "height": 50,
        "width": 50,
        "name": "red1"
    }
];

const COINS = [
    {
        "xPos": 120,
        "yPos": 50,
        "height": 30,
        "width": 30,
        "name": "c1"
    },
    {
        "xPos": 70,
        "yPos": 40,
        "height": 30,
        "width": 30,
        "name": "c2"
    }
];

const TERRAIN = [
    {
        "xPos": 150,
        "yPos": 30,
        "length": 50
    },
    {
        "xPos": 0,
        "yPos": 0,
        "length": 50
    },
    {
        "xPos": 100,
        "yPos": 0,
        "length": 200
    }
]

const DOORS = [
    {
        "xPos": 200,
        "yPos": 5,
        "height": 170,
        "width": 110,
        "isOpen": true,
        "name": "door1",
        "leadsTo": "level2"
    }
];

const DOORS2 = [
    {
        "xPos": 150,
        "yPos": 5,
        "height": 170,
        "width": 110,
        "isOpen": true,
        "name": "door1",
        "leadsTo": null
    }
];

const charWidth = 100;
const charHeight = 100;

const platformHeight = 25;
const terrainHeight = 50;
const tile = 10; // width of one tile

const enemyWidth = 80;
const enemyHeight = 200;

//temporarily defining a single room like this
const STAGES = {
    "start": {
        doors: DOORS.map(d => ({
            "xPos": d["xPos"] * tile,
            "yPos": d["yPos"] * tile,
            "height": d["height"],
            "width": d["width"],
            "isOpen": d["isOpen"],
            "name": d["name"],
            "leadsTo": d["leadsTo"]
        })),
        platforms: PLATFORMS.map(p => (
            {
                "xPos": p["xPos"] * tile,
                "yPos": p["yPos"] * tile,
                "length": p["length"] * tile,
            }
        )),
        terrain: TERRAIN.map(t => (
            {
                "xPos": t["xPos"] * tile,
                "yPos": t["yPos"] * tile,
                "length": t["length"] * tile,
            }
        )),
        coins: COINS.map(c => (
            {
            "xPos": c["xPos"] * tile,
            "yPos": c["yPos"] * tile,
            "height": c["height"],
            "width": c["width"],
            "name": c["name"],
            }
        )),
        buttons: BUTTONS.map(s => (
            {
            "xPos": s["xPos"] * tile,
            "yPos": s["yPos"] * tile,
            "height": s["height"],
            "width": s["width"],
            "name": s["name"],
            }
        )),
        enemies: ENEMIES.map(b => (b * tile)),
        height: 900,
        width: 3000,
        playerStartX: 200,
        playerStartY: 50,
    },
    "level2": {
        doors: DOORS2.map(d => ({
            "xPos": d["xPos"] * tile,
            "yPos": d["yPos"] * tile,
            "height": d["height"],
            "width": d["width"],
            "isOpen": d["isOpen"],
            "name": d["name"],
            "leadsTo": d["leadsTo"]
        })),
        platforms: PLATFORMS.map(p => (
            {
                "xPos": p["xPos"] * tile,
                "yPos": p["yPos"] * tile,
                "length": p["length"] * tile,
            }
        )),
        terrain: TERRAIN.map(t => (
            {
                "xPos": t["xPos"] * tile,
                "yPos": t["yPos"] * tile,
                "length": t["length"] * tile,
            }
        )),
        coins: COINS.map(c => (
            {
            "xPos": c["xPos"] * tile,
            "yPos": c["yPos"] * tile,
            "height": c["height"],
            "width": c["width"],
            "name": c["name"],
            }
        )),
        buttons: BUTTONS.map(s => (
            {
            "xPos": s["xPos"] * tile,
            "yPos": s["yPos"] * tile,
            "height": s["height"],
            "width": s["width"],
            "name": s["name"],
            }
        )),
        enemies: ENEMIES.map(b => (b * tile)),
        height: 900,
        width: 2000,
        playerStartX: 500,
        playerStartY: 250,
    },
};

export {
    charWidth, 
    charHeight, 
    platformHeight, 
    terrainHeight, 
    tile, 
    enemyWidth, 
    enemyHeight, 
    STAGES,
};