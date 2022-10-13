class Level{
    // fields
    body:Array<Statement>;
    objects:Array<Statement>;
    conditions:Array<Statement>;


    // constructor
    constructor(body:Array<Statement>, objects:Array<Statement>, conditions:Array<Statement>){
        this.body = body;
        this.objects = objects;
        this.conditions = conditions;
    }



    // functions
}