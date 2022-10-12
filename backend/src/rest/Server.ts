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
                "level1": {
                    "doors": [
                        {
                            "xPos": 2000,
                            "yPos": 50,
                            "name": "door1",
                            "key": "red",
                            "goesTo": "level2"
                        }
                    ],
                    "platforms": [
                        {
                            "key": "plat1",
                            "image": "",
                            "colour": "#008080",
                            "xPos": 1000,
                            "yPos": 300,
                            "length": 500
                        },
                        {
                            "key": "plat2",
                            "image": "",
                            "colour": "#008080",
                            "xPos": 500,
                            "yPos": 200,
                            "length": 500 
                        },
                        {
                            "key": "plat3",
                            "image": "",
                            "colour": "#008080",
                            "xPos": 2000,
                            "yPos": 300,
                            "length": 500
                        }
                    ],
                    "terrain": [
                        {
                            "key": "terrain1",
                            "xPos": 1500,
                            "yPos": 300,
                            "length": 500,
                            "name": "terrain1"
                        },
                        {
                            "key": "terrain2",
                            "xPos": 0,
                            "yPos": 0,
                            "length": 500,
                            "name": "terrain2"
                        },
                        {
                            "key": "terrain3",
                            "xPos": 1000,
                            "yPos": 0,
                            "length": 2000,
                            "name": "terrain3"
                        }
                    ],
                    "coins": [
                        {
                            "xPos": 1200,
                            "yPos": 500,
                            "height": 30,
                            "width": 30,
                            "name": "c1"
                        },
                        {
                            "xPos": 700,
                            "yPos": 400,
                            "height": 30,
                            "width": 30,
                            "name": "c2"
                        }
                    ],
                    "enemies": [
                        2500,
                        3900
                    ],
                    "buttons": [
                        {
                            "xPos": 100,
                            "yPos": 100,
                            "height": 50,
                            "width": 50,
                            "name": "red"
                        }
                    ],
                    "checks": [],
                    "background": "https://i.pinimg.com/originals/a5/9b/73/a59b735200362f91e6735b2abcb787b2.png",
                    "height": 900,
                    "width": 3000,
                    "playerStartX": 200,
                    "playerStartY": 50
                },
                "level2": {
                    "doors": [
                        {
                            "xPos": 1550,
                            "yPos": 50,
                            "name": "door2",
                            "key": "red1",
                            "goesTo": "win"
                        }
                    ],
                    "platforms": [
                        {
                            "xPos": 900,
                            "yPos": 300,
                            "length": 500
                        },
                        {
                            "xPos": 500,
                            "yPos": 200,
                            "length": 500 
                        },
                        {
                            "xPos": 1700,
                            "yPos": 500,
                            "length": 100
                        },
                        {
                            "xPos": 1300,
                            "yPos": 650,
                            "length": 100
                        },
                        {
                            "xPos": 800,
                            "yPos": 800,
                            "length": 150
                        }
                    ],
                    "terrain": [
                        {
                            "xPos": 1500,
                            "yPos": 300,
                            "length": 500
                        },
                        {
                            "xPos": 0,
                            "yPos": 0,
                            "length": 500
                        },
                        {
                            "xPos": 1000,
                            "yPos": 0,
                            "length": 2000
                        }
                    ],
                    "coins": [
                        {
                            "xPos": 1200,
                            "yPos": 500,
                            "height": 30,
                            "width": 30,
                            "name": "c1"
                        },
                        {
                            "xPos": 700,
                            "yPos": 400,
                            "height": 30,
                            "width": 30,
                            "name": "c2"
                        }
                    ],
                    "enemies": [
                        2500,
                        3900
                    ],
                    "buttons": [
                        {
                            "xPos": 750,
                            "yPos": 850,
                            "height": 50,
                            "width": 50,
                            "name": "red1"
                        }
                    ],
                    "checks": [],
                    "background": "",
                    "height": 900,
                    "width": 2000,
                    "playerStartX": 500,
                    "playerStartY": 250
                }
            }
        };
        res.status(200).json({"gameData": gameData});
    }

}