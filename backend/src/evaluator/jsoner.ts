import { Program } from "../ast/Program";
import { Entity } from "../ast/Entity";
import { Entitybody } from "../ast/Entitybody";
import { Statement } from "../ast/Statement";
import { Level } from "../ast/Level";
import { Levelbody } from "../ast/Levelbody";
import { Levelentity } from "../ast/Levelentity";
import { Exp } from "../ast/Exp";
import { Listobject } from "../ast/Listobject";
import { Player } from "../ast/Player";

export class jsoner {
    private program: Program;

    constructor(program: Program) {
        this.program = program;
    }

    public jsoner(): any {
        // Stub
        let gameJson: any= {};
        gameJson["game"] = {};
        gameJson["game"] = this.entitiesJsoner(this.program.entities);
        gameJson["game"]["levels"] = this.levelsJsoner(this.program.levels);
        return gameJson;
        console.log(gameJson);
    }
    

    private entitiesJsoner(entities: Array<Entity>): Object {
        let entitiesJson: any = {};
        for (let entity of entities) {
            // Cast component and name to string. Component what we call the type
            let type:string  = entity.component as string;
            type = type.toLowerCase();
            let entityName: string = entity.name as string;
            let typeBody: any = {};
            let entityBody: Entitybody = entity.body;
            let statements: Array<Statement> = entityBody.statements;
            for (let s of statements) {
                typeBody[s.property] = s.value.value;
            }
            // If type does not already exist in the JSON, create a key for it, else put the type definition in the existing type object
            if (entitiesJson[type] === undefined) {
                entitiesJson[type] = {};
                entitiesJson[type][entityName] = typeBody;
            } else {
                entitiesJson[type][entityName] = typeBody;
            }
        }
        let player: Player = this.program.player;
        let playerJson: any = {};
        for (let s of player.body.statements) {
            playerJson[s.property] = s.value.value; 
        }
        entitiesJson["player"] = playerJson;
        return {"types": entitiesJson};
    }


    private levelsJsoner(levels: Array<Level>) {
        let levelsJson: Array<any> = [];
        for (let level of levels) {
            let levelJson: any = {};
            levelJson["name"] = level.name;
            let levelBody: Levelbody = level.body;
            let levelStatements: Array<Statement> = levelBody.statements;
            for (let ls of levelStatements) {
                if (ls.property === "player") {
                    levelJson["playerStartX"] = ls.value.value.exps[0].value;
                    levelJson["playerStartY"] = ls.value.value.exps[1].value;
                } else {
                    levelJson[ls.property] = ls.value.value;
                }
                
            }
            let levelEntities: Array<Levelentity> = levelBody.entities;
            let instArr: Array<any> = [];
            for (let levelEnt of levelEntities) {
                let type: string = levelEnt.component as string;
                if (type.toLowerCase() === "terrain" || type.toLowerCase() === "platform") {
                    let arrs: Array<any> = [];
                    let levelEntStatements: Array<Statement> = levelEnt.statements;
                    for (let les of levelEntStatements) {
                        let listO: Array<Listobject> = les.value.value.listobjects; 
                        for (let lo of listO) {
                            let typeJson: any = {};
                            typeJson["name"] = lo.exps[0].value;
                            typeJson["type"] = les.property;
                            typeJson["xPos"] = lo.exps[1].value;
                            typeJson["yPos"] = lo.exps[2].value;
                            typeJson["length"] = lo.exps[3].value;
                            arrs.push(typeJson);
                        }
                        let typeC: string = type.slice();
                        if (type.toLowerCase() !== "terrain") {
                            typeC = typeC + "s";
                        }
                        levelJson[typeC] = arrs;
                    }
                    
                } else if (type.toLowerCase() === "door") {
                    let arrs: Array<any> = [];
                    let levelEntStatements: Array<Statement> = levelEnt.statements;
                    for (let les of levelEntStatements) {
                        let listO: Array<Listobject> = les.value.value.listobjects; 
                        for (let lo of listO) {
                            let typeJson: any = {};
                            typeJson["name"] = lo.exps[0].value;
                            typeJson["type"] = les.property;
                            typeJson["goesTo"] = lo.exps[1].value;
                            typeJson["xPos"] = lo.exps[2].value;
                            typeJson["yPos"] = lo.exps[3].value;
                            arrs.push(typeJson);
                        }
                        let typeC: string = type.slice();
                        typeC = typeC + "s";
                        levelJson[typeC] = arrs;
                    }
                } else {
                    let arrs: Array<any> = [];
                    let levelEntStatements: Array<Statement> = levelEnt.statements;
                    for (let les of levelEntStatements) {
                        let listO: Array<Listobject> = les.value.value.listobjects; 
                        for (let lo of listO) {
                            let typeJson: any = {};
                            typeJson["name"] = lo.exps[0].value;
                            typeJson["type"] = les.property;
                            typeJson["xPos"] = lo.exps[1].value;
                            typeJson["yPos"] = lo.exps[2].value;
                            arrs.push(typeJson);
                        }
                        let typeC: string = type.slice();
                        if (type.toLowerCase() === "enemy") {
                            typeC = "Enemies";
                        } else {
                            typeC = typeC + "s";
                        }
                        levelJson[typeC] = arrs;
                    }
                }
            }
            levelsJson.push(levelJson);
        }
        return levelsJson;
    }
}