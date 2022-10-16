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
import { Levelcond } from "../ast/Levelcond";
import { Condition1 } from "../ast/Condition1"
import { Condition3 } from "../ast/Condition3";
import { CondStatement } from "../ast/CondStatement";
import { Value } from "../ast/Value";

export class jsoner {
    private program: Program;

    constructor(program: Program) {
        this.program = program;
    }

    public jsoner(): any {
        try {
            let gameJson: any= {};
            gameJson["game"] = {};
            let playerJson: any = this.playerJsoner();
            let entitiesJson: any = this.entitiesJsoner(this.program.entities);
            let types: any = {
                ...playerJson,
                ...entitiesJson["types"]
            };
            gameJson["game"]["types"] = types;
            gameJson["game"]["levels"] = this.levelsJsoner(this.program.levels);
            return gameJson;
        } catch (err: any) {
            console.log(err);
            throw err;
        }
        
    }
    
    private playerJsoner(): Object {
        try {
            let player: Player = this.program.player;
            let playerJson: any = {};
            for (let s of player.body.statements) {
                playerJson[s.property.toLowerCase()] = s.value.value; 
            }
            return {"player": playerJson};
        } catch (err: any) {
            console.log(err);
            throw {"error": "An error occurred while processing player. Please ensure that you have defined player correctly."}
        }
    }

    private entitiesJsoner(entities: Array<Entity>): any {
        let entitiesJson: any = {};
        const imgcol = ["enemy", "terrain", "platform"]
        // Moving declaration out here for error handling
        let type: string = "";
        let entityName: string = "";
        try {
            for (let entity of entities) {
                // Cast component and name to string. Component what we call the type
                type  = entity.component as string;
                type = type.toLowerCase();
                entityName = entity.name as string;
                let typeBody: any = {};
                let entityBody: Entitybody = entity.body;
                let statements: Array<Statement> = entityBody.statements;
                for (let s of statements) {
                    typeBody[s.property.toLowerCase()] = s.value.value;
                }
                if((imgcol.includes(type)) && (typeBody["image"] !== "none")){
                    typeBody["colour"] = "";
                }
                if(type === "door" && (typeBody["key"] === "none")) {
                    typeBody["key"] = null;
                }
                // If type does not already exist in the JSON, create a key for it, else put the type definition in the existing type object
                if (entitiesJson[type] === undefined) {
                    entitiesJson[type] = {};
                    entitiesJson[type][entityName] = typeBody;
                } else {
                    entitiesJson[type][entityName] = typeBody;
                }
            }
            return {"types": entitiesJson};
        } catch (err: any) {
            console.log(err);
            throw {"error": `An error occurred while processing type '${type}' and object '${entityName}'. Please ensure that you have defined it correctly`};
        }
        
    }


    private levelsJsoner(levels: Array<Level>): any {
        let levelsJson: Array<any> = [];
        let levelName: string = "";
        let levelProp: string = "";
        let levelType: string = "";
        let levelTypeObject: string = "";
        let operandA: string = "";
        try {
            for (let level of levels) {
                let levelJson: any = {};
                levelJson["name"] = level.name;
                levelName = level.name as string;
                let levelBody: Levelbody = level.body;
                let levelStatements: Array<Statement> = levelBody.statements;
                for (let ls of levelStatements) {
                    levelProp = ls.property;
                    if (ls.property === "player") {
                        levelJson["playerStartX"] = ls.value.value.exps[0].value;
                        levelJson["playerStartY"] = ls.value.value.exps[1].value;
                    } else {
                        levelJson[ls.property] = ls.value.value;
                    }
                    
                }
                levelProp = "";
                let levelEntities: Array<Levelentity> = levelBody.entities;
                let instArr: Array<any> = [];
                for (let levelEnt of levelEntities) {
                    let type: string = levelEnt.component as string;
                    levelType = levelEnt.component as string;
                    if (type.toLowerCase() === "terrain" || type.toLowerCase() === "platform") {
                        let arrs: Array<any> = [];
                        let levelEntStatements: Array<Statement> = levelEnt.statements;
                        for (let les of levelEntStatements) {
                            let listO: Array<Listobject> = les.value.value.listobjects; 
                            for (let lo of listO) {
                                let typeJson: any = {};
                                typeJson["name"] = lo.exps[0].value;
                                levelTypeObject = typeJson["name"];
                                typeJson["type"] = les.property;
                                typeJson["xPos"] = lo.exps[1].value;
                                typeJson["yPos"] = lo.exps[2].value;
                                typeJson["length"] = lo.exps[3].value;
                                arrs.push(typeJson);
                            }
                            let typeC: string = type.toLowerCase().slice();
                            if (typeC !== "terrain") {
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
                                levelTypeObject = typeJson["name"];
                                typeJson["type"] = les.property;
                                let gt = lo.exps[1].value.toString().concat(" ", lo.exps[2].value.toString());
                                typeJson["goesTo"] = gt;
                                typeJson["xPos"] = lo.exps[3].value;
                                typeJson["yPos"] = lo.exps[4].value;
                                arrs.push(typeJson);
                            }
                            let typeC: string = type.toLowerCase().slice();
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
                                levelTypeObject = typeJson["name"];
                                typeJson["type"] = les.property;
                                typeJson["xPos"] = lo.exps[1].value;
                                typeJson["yPos"] = lo.exps[2].value;
                                arrs.push(typeJson);
                            }
                            let typeC: string = type.toLowerCase().slice();
                            if (typeC === "enemy") {
                                typeC = "enemies";
                            } else {
                                typeC = typeC + "s";
                            }
                            levelJson[typeC] = arrs;
                        }
                    }
                }
                levelType = "";
                levelTypeObject = "";
                let levelConditions: Array<Levelcond> = levelBody.conditions;
                instArr = [];
                for (let levelCond of levelConditions) {
                    let condJson: any = {};
                    let conditions = this.conditionJsoner(levelCond.conditions);
                    let condBody: any = {};
                    operandA = conditions[0]["opA"];
                    if(levelCond.conditions.length > 1){
                        condBody["opA"] = conditions[0];
                        condBody["op"] = levelCond.op;
                        condBody["opB"] = conditions[1];
                    }
                    else{
                        condBody["opA"] = conditions[0];
                    }
                    condJson["conditions"] = condBody;
                    let levelcondStatements:Array<CondStatement> = levelCond.statements;
                    let arrAction:any[] = new Array(); 
                    for(let lcs of levelcondStatements){
                        let cstatement: any = {};
                        cstatement["effect"] = lcs.action.toLowerCase();
                        cstatement["category"] = lcs.property.toLowerCase();
                        let valArray:any[] = new Array();
                        for (let e of lcs.value.value.exps){
                            valArray.push(e.value);
                        }
                        if(cstatement["category"] === "door"){
                            let q = undefined;
                            for(let i = 0; i<valArray.length; i++){
                                if(valArray[i].toString().startsWith("level")){
                                    let w = valArray[i] + " " + valArray[i+1];
                                    valArray[i] = w;
                                    q = i+1;
                                }
                            }
                            if(q != undefined){
                                valArray.splice(q);
                            }
                        }
                        cstatement["payload"] = valArray;
                        arrAction.push(cstatement);
                    }
                    condJson["actions"] = arrAction;
                    instArr.push(condJson);
                }
                operandA = "";
                levelJson["checks"] = instArr;
                levelsJson.push(levelJson);
            }
            return levelsJson;
        } catch (err: any) {
            console.log(err);
            let errorString: string = `An error occurred while processing at level '${levelName}'.\n`
            if (levelProp !== "") {
                errorString = errorString + ` The property '${levelProp}' is not defined correctly. \n`;
            }
            if (levelType !== "") {
                errorString = errorString + ` The object '${levelTypeObject}' under type '${levelType}' is not defined correctly. \n`
            }
            if (operandA !== "") {
                errorString = errorString + ` The conditional involving '${operandA}' is not defined correctly. \n`
            }
            throw {"error": errorString}
        }
        
    }

    private conditionJsoner(conditions: Array<Condition1|Condition3>){
        let objArray:any[] = new Array();
        let operandA: string = "";
        let operandB: string = "";
        let operandC: string = "";
        try {
            for(var lc of conditions){
                let cb1: any = {};
                operandA = lc.opA as string;
                operandB = lc.op as string;
                operandC = lc.opB?.value as string;
                if(lc.isCondition1()){
                    cb1["opA"] = lc.opA;
                    cb1["op"] = "buttonCheck";
                    cb1["opB"] = null;
                }
                else{
                    cb1["opA"] = lc.opA;
                    cb1["op"] = lc.op;
                    cb1["opB"] = lc.opB?.value;
                }
                objArray.push(cb1);
             }
             return objArray;
        } catch (err: any) {
            console.log(err);
            let errorString: string = `An error has occurred while processing the conditional involving '${operandA}' and '${operandB}'`
            if (operandC) {
                errorString = errorString + ` and '${operandC}.'\n`;
            } else {
                errorString = errorString + ".\n";
            }
            throw {"error": errorString};
        }
        
    }

    private findCategory(property: String): String{
        for(let i of this.program.entities){
            if(property === i.name){
                return i.component.toLowerCase();
            }
        }
        return "null";
        
    }
}