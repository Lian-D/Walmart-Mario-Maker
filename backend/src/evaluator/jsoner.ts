import { Program } from "../ast/Program";
import { Entity } from "../ast/Entity";
import { Entitybody } from "../ast/Entitybody";
import { Statement } from "../ast/Statement";

export class jsoner {
    private program: Program;

    constructor(program: Program) {
        this.program = program;
    }

    public jsoner(): any {
        // Stub
    }

    private entitiesJsoner(entities: Array<Entity>): Object {
        let entitiesJson: any = {};
        for (let entity of entities) {
            // Cast component and name to string
            let type:string  = entity.component as string;
            let entityName: string = entity.name as string;
            let typeBody: any = {};
            let entityBody: Entitybody = entity.body;
            let statements: Array<Statement> = entityBody.statements;
            for (let s of statements) {
                typeBody[s.property] = s.value.value;
            }
            // If type does not already exist in the JSON, create a key for it, else put the entity body in the existing key
            if (entitiesJson[type] === undefined) {
                entitiesJson[type] = {};
                entitiesJson[type][entityName] = typeBody;
            } else {
                entitiesJson[type][entityName] = typeBody;
            }
        }
        return {"types": entitiesJson};
    }
}