class Levelbody{
    // fields
    statements:Array<Statement>;
    entities:Array<Entity>;
    conditions:String;

    // constructor

    constructor(statements:Array<Statement>, entities:Array<Entity>, conditions:String){
        this.statements = statements;
        this.entities = entities;
        this.conditions = conditions;
    }

    // functions
}