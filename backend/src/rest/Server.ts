import express from 'express';


export default class Server {

    private port: number;
    private server: any;
    
    constructor(port: number) {
        this.port = port;
        this.server = express();
        this.server.use(express.json());
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

    private static postGame(req: express.Request, res: express.Response) {
        console.log("receiving response");
        console.log(req.body);
    }

}