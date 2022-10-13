import express from 'express';
const cors = require('cors');

export default class Server {

    private port: number;
    private server: any;
    
    constructor(port: number) {
        this.port = port;
        this.server = express();
        this.server.use(express.json());
        this.server.use(cors());
    }
    
    public start(): Promise<boolean> {
        const that = this;
        return new Promise(function(resolve,reject) {
            try {
                that.server.post("/game", Server.postGame);
                that.server.listen(that.port, () => {
                    console.log("Server started successfully at port: "   + that.port);
                    resolve(true);
                } );
            } catch (error: any) {
                reject(error);
            }
        });
    }
    // Once the backend implementation is complete, this function can be finished.
    private static postGame(req: express.Request, res: express.Response) {
        // TEMPORARY CODE TO ENSURE THE CONTINUED FUNCTION OF THE APPLICATION
        let gameData = {
            "game": {
                "types": {
                    "player": {
                        "speed": 1,
                        "health": 4
                    },
                    "enemy": {
                        "slime": {
                            "image": "https://media.discordapp.net/attachments/969645894616096858/1028893886124412949/theTriangle.png",
                            "colour": "",
                            "behaviour": "STILL",
                            "speed": 0.2
                        },
                        "goblin": {
                            "image": "https://media.discordapp.net/attachments/969645894616096858/1028893886124412949/theTriangle.png",
                            "colour": "",
                            "behaviour": "FOLLOW",
                            "speed": 0.4
                        }
                    },
                    "terrain": {
                        "terrainType1": {
                            "image": "",
                            "colour": "#042b2b"
                        }
                    },
                    "platform": {
                        "platformType1": {
                            "image": "",
                            "colour": "#008080"
                        }
                    },
                    "door": {
                        "doorType1": {
                            "image": "https://cdn.discordapp.com/attachments/969645894616096858/1029102857728835604/door.png",
                            "key": null
                        },
                        "doorType2": {
                            "image": "https://cdn.discordapp.com/attachments/969645894616096858/1029102857728835604/door.png",
                            "key": "buttonType1"
                        }
                    },
                    "coin": {
                        "coinType1": {
                            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Racket-logo.svg/1200px-Racket-logo.svg.png",
                            "height": 30,
                            "width": 30,
                            "value": 1
                        }
                    },
                    "button": {
                        "buttonType1": {
                            "image": "https://media.discordapp.net/attachments/1017526051989106740/1027763213896515615/key-png-11.png",
                            "height": 50,
                            "width": 50
                        }
                    }
                },
                "levels": [
                    {
                        "name": "level1",
                        "background": "https://media.discordapp.net/attachments/1019466411044765716/1029542966185971822/bg.png",
                        "height": 900,
                        "width": 3000,
                        "playerStartX": 200,
                        "playerStartY": 50,
                        "doors": [
                            {
                                "name": "door1",
                                "type": "doorType1",
                                "goesTo": "level2 door2",
                                "xPos": 2000,
                                "yPos": 50
                            }
                        ],
                        "platforms": [
                            {
                                "name": "plat1",
                                "type": "platformType1",
                                "xPos": 1000,
                                "yPos": 300,
                                "length": 500
                            },
                            {
                                "name": "plat2",
                                "type": "platformType1",
                                "xPos": 500,
                                "yPos": 200,
                                "length": 500 
                            },
                            {
                                "name": "plat3",
                                "type": "platformType1",
                                "xPos": 2000,
                                "yPos": 300,
                                "length": 500
                            }
                        ],
                        "terrain": [
                            {
                                "name": "terrain1",
                                "type": "terrainType1",
                                "xPos": 1500,
                                "yPos": 300,
                                "length": 500
                            },
                            {
                                "name": "terrain2",
                                "type": "terrainType1",
                                "xPos": 0,
                                "yPos": 0,
                                "length": 500
                            },
                            {
                                "name": "terrain3",
                                "type": "terrainType1",
                                "xPos": 1000,
                                "yPos": 0,
                                "length": 2000
                            }
                        ],
                        "coins": [
                            {
                                "name": "c1",
                                "type": "coinType1",
                                "xPos": 1200,
                                "yPos": 500
                            },
                            {
                                "name": "c2",
                                "type": "coinType1",
                                "xPos": 700,
                                "yPos": 400
                            }
                        ],
                        "enemies": [
                            {
                                "name": "slime1",
                                "type": "slime",
                                "xPos": 2500,
                                "yPos": 50
                            },
                            {
                                "name": "goblin1",
                                "type": "goblin",
                                "xPos": 1500,
                                "yPos": 50
                            }
                        ],
                        "buttons": [
                            {
                                "name": "button1",
                                "type": "buttonType1",
                                "xPos": 100,
                                "yPos": 100
                            }
                        ],
                        "checks": [
                            {
                                "conditions": {
                                    "opA": 
                                        {
                                            "opA": "coins",
                                            "op": ">=",
                                            "opB": 2
                                        },
                                    "op": "OR",
                                    "opB":
                                        {
                                            "opA": "buttonType1",
                                            "op": "buttonCheck",
                                            "opB": null
                                        }
                                    },
                                "actions": [ {
                                    "effect": "add",
                                    "category": "door",
                                    "payload": ["d1spawn", "doorType1", 100, 90, "level2 door2"]
                                }, 
                                {
                                    "effect": "remove",
                                    "category": "platform",
                                    "payload": ["platform1"]
                                },
                                {
                                    "effect": "add",
                                    "category": "enemy",
                                    "payload": ["g1spawn", "goblin", 10, 110]
                                }
                            ]   
                            }
                        ]
                    },
                    {
                        "name": "level2",
                        "background": "https://media.discordapp.net/attachments/1019466411044765716/1029542966185971822/bg.png",
                        "height": 900,
                        "width": 2000,
                        "playerStartX": 500,
                        "playerStartY": 250,
                        "doors": [
                            {
                                "name": "door2",
                                "type": "doorType1",
                                "goesTo": "level1 door1",
                                "xPos": 200,
                                "yPos": 50
                            },
                            {
                                "name": "door3",
                                "type": "doorType2",
                                "goesTo": "win",
                                "xPos": 1550,
                                "yPos": 50
                            }
                        ],
                        "platforms": [
                            {
                                "name": "plat4",
                                "type": "platformType1",
                                "xPos": 900,
                                "yPos": 300,
                                "length": 400
                            },
                            {
                                "name": "plat5",
                                "type": "platformType1",
                                "xPos": 500,
                                "yPos": 200,
                                "length": 400
                            },
                            {
                                "name": "plat6",
                                "type": "platformType1",
                                "xPos": 1700,
                                "yPos": 500,
                                "length": 100
                            },
                            {
                                "name": "plat7",
                                "type": "platformType1",
                                "xPos": 1300,
                                "yPos": 650,
                                "length": 100
                            },
                            {
                                "name": "plat8",
                                "type": "platformType1",
                                "xPos": 750,
                                "yPos": 800,
                                "length": 200
                            }
                        ],
                        "terrain": [
                            {
                                "name": "terrain1",
                                "type": "terrainType1",
                                "xPos": 1500,
                                "yPos": 300,
                                "length": 500
                            },
                            {
                                "name": "terrain2",
                                "type": "terrainType1",
                                "xPos": 0,
                                "yPos": 0,
                                "length": 500
                            },
                            {
                                "name": "terrain3",
                                "type": "terrainType1",
                                "xPos": 1000,
                                "yPos": 0,
                                "length": 2000
                            }
                        ],
                        "coins": [
                            {
                                "name": "c1",
                                "type": "coinType1",
                                "xPos": 1200,
                                "yPos": 500
                            },
                            {
                                "name": "c2",
                                "type": "coinType1",
                                "xPos": 700,
                                "yPos": 400
                            }
                        ],
                        "enemies": [
                            {
                                "name": "goblin2",
                                "type": "goblin",
                                "xPos": 1800,
                                "yPos": 350
                            }
                        ],
                        "buttons": [
                            {
                                "name": "red1",
                                "type": "buttonType1",
                                "xPos": 750,
                                "yPos": 850
                            }
                        ],
                        "checks": []
                    }
                ]
            }
        };
        res.status(200).json({"gameData": gameData});
    }

}