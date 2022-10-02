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
        "yPos": 0,
        "height": 130,
        "width": 110,
        "isOpen": true,
        "name": "door1"
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
        enemies: ENEMIES.map(b => (b * tile)),
        height: 900,
        width: 1500,
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