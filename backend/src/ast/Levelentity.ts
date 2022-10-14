class Levelentity{
    component:String;
    statements:Array<Entity>;

    constructor(component:String, statements:Array<Entity>){
        this.component = component;
        this.statements = statements;
    }
}