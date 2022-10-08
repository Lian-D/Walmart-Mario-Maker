const tile = 10; // width of one tile
const platformHeight = 25;
const terrainHeight = 50;

const charWidth = 100;
const charHeight = 100;

const doorWidth = 110;
const doorHeight = 170;

const enemyWidth = 70;
const enemyHeight = 150;

const ENEMIES = [
    250,
    390,
];

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
        "xPos": 220,
        "yPos": 40,
        "length": 25
    },
    {
        "xPos": 180,
        "yPos": 65,
        "length": 20
    },
    {
        "xPos": 130,
        "yPos": 80,
        "length": 15
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
        "name": "door1",
        "goesTo": "level2"
    }
];

const DOORS2 = [
    {
        "xPos": 150,
        "yPos": 5,
        "name": "door1",
        "goesTo": "win"
    }
];

const STAGES = {
    "start": {
        doors: DOORS.map(d => ({
            "xPos": d["xPos"] * tile,
            "yPos": d["yPos"] * tile,
            "name": d["name"],
            "goesTo": d["goesTo"]
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
        enemies: ENEMIES.map(b => (b * tile)),
        height: 1800,
        width: 3000,
        playerStartX: 20 * tile,
        playerStartY: 5 * tile,
    },
    "level2": {
        doors: DOORS2.map(d => ({
            "xPos": d["xPos"] * tile,
            "yPos": d["yPos"] * tile,
            "name": d["name"],
            "goesTo": d["goesTo"]
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
        enemies: ENEMIES.map(b => (b * tile)),
        height: 900,
        width: 2000,
        playerStartX: 50 * tile,
        playerStartY: 25 * tile,
    },
};

export {
    charWidth, 
    charHeight, 
    doorWidth,
    doorHeight,
    platformHeight, 
    terrainHeight, 
    tile, 
    enemyWidth, 
    enemyHeight, 
    STAGES,
};