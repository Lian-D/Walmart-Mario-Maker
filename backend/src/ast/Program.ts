class Program{
    // fields
    player:Player;
    entities:Array<Entity>;
    levels:Array<Level>;

    // constructor

    constructor(player:Player, entities:Array<Entity>, levels:Array<Level>){
        this.player = player;
        this.entities = entities;
        this.levels = levels;
    }
    // functions
}