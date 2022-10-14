import { PlatformerParserVisitor } from "../../PlatformerParserVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ListContext, List_objectContext, ComponentContext, LevelContext, Level_bodyContext, Level_condContext, OpContext, PlatformerParser, ProgramContext, StatementContext, ValueContext, VarnameContext, EntityContext, PlayerContext, Entity_bodContext, ExpContext, Level_entityContext, Cond_statementContext } from "../../PlatformerParser";

/**
* @param ctx the parse tree
* @return the visitor result
*/

export class ParseTreetoAST extends AbstractParseTreeVisitor<any> implements PlatformerParserVisitor<any> {
    protected defaultResult(): Number {
        throw new Error("Method not implemented.");
    }

    visitProgram(context: ProgramContext): Program{
        var player = this.visitPlayer(context.player())
        var entities:Entity[]= new Array();
        var levels:Level[] = new Array();
        for(var e of context.entity()){
            entities.push(this.visitEntity(e));
        }
        for(var i of context.level()){
            levels.push(this.visitLevel(i));
        }
        return new Program(player, entities, levels);
    }


    visitLevel(ctx: LevelContext): Level{
        return new Level(ctx.NAME.toString(), this.visitLevelBody(ctx.level_body()))
    }

    visitLevelBody(context: Level_bodyContext): Levelbody{
        var statements:Statement[] = new Array();
        for(var i of context.statement()){
            statements.push(this.visitStatement(i));
        }
        var entities:Levelentity[] = new Array();
        for(var e of context.level_entity()){
            entities.push(this.visitLevelEntities(e));
        }
        var conds:Levelcond[] = new Array();
        for(var c of context.level_cond()){
            conds.push(this.visitLevelCond(c));
        }
        return new Levelbody(statements, entities, conds);
    }


    visitLevelCond(context: Level_condContext): any{
        var statements:CondStatement[] = new Array();
        var conditions:String = new String("");
        for(var c of context.cond_statement()){
            statements.push(this.visitCondStatement(c));
        }
        for(var d of context.condition()){
            conditions = conditions.concat(d.toString());
        }
        return new Levelcond(statements, conditions);
    }

    visitCondStatement(ctx: Cond_statementContext): any{
        if(ctx.ADD() != undefined){
            var action = ctx.ADD()?.toString()
            return new CondStatement(ctx.NAME().toString(), action? action : "null", this.visitValue(ctx.value()));
        }
        if(ctx.REMOVE() != undefined){
            var action = ctx.REMOVE()?.toString()
            return new CondStatement(ctx.NAME().toString(), action? action : "null", this.visitValue(ctx.value()));
        }
    }

    visitLevelEntities(context: Level_entityContext): any{
        context.component().toString();
        var entities:Entity[] = new Array();
        for(var i of context.entity()){
            entities.push(this.visitEntity(i));
        }
        return new Levelentity(context.component().toString(), entities);
    }

    visitEntity(context: EntityContext): any{
        var comp = context.component().toString();
        var body = this.visitEntitybody(context.entity_bod());
        return new Entity(comp, body);
    }

    visitPlayer(context: PlayerContext): any{
        var body = this.visitEntitybody(context.entity_bod());
        return new Player("Player", body);
    }

    visitEntitybody(context: Entity_bodContext): any{
        var statements:Statement[] = new Array();
        for(var i of context.statement()){
            statements.push(this.visitStatement(i));
        }
        return new Entitybody(statements);
    }

    visitStatement(context: StatementContext): any{
        var p = context.NAME().toString();
        var val = this.visitValue(context.value());
        return new Statement(p, val);   
    }


    visitVarname(ctx: VarnameContext): any {
        return ctx.NAME.toString();
    }

    visitList(ctx: ListContext): any{
        var listobjects:Listobject[] = new Array();
        for(var i of ctx.list_object()){
            listobjects.push(this.visitListobject(i));
        }
        return new List(listobjects);
    }

    visitListobject(ctx: List_objectContext): any{
        var exps:Exp[] = new Array();
        for(var i of ctx.exp()){
            exps.push(this.visitExp(i));
        }
        return new Listobject(exps);
    }

    visitExp(ctx: ExpContext): any{
        var s = ctx.CONST()?.toString();
        if(ctx.CONST() != undefined){
            var n = ctx.CONST()?.toString();
            return new Exp(n? +n:"null");
        }
        if(ctx.varname() != undefined){
            var m = ctx.varname()?.toString();
            return new Exp(m? m:"null");
        }
    }

    visitValue (ctx: ValueContext): any{
        if(ctx.CONST() != undefined){
            var n = ctx.CONST()?.toString();
            return new Value(n? +n :"null");
        }
        if(ctx.varname() != undefined){
            var m = ctx.varname()?.toString();
            return new Value(m? m:"null");
        }
        if(ctx.list_object() != undefined){
            var lo = ctx.list_object();
            return new Value(lo? this.visitListobject(lo) : null);
        }
        if(ctx.list() != undefined){
            var l1 = ctx.list();
            return new Value(l1? this.visitList(l1) : null);
        }
        if(ctx.LINK() != undefined){
            var li = ctx.LINK()?.toString();
            return new Value(li? li : "null");
        }
        if(ctx.LITERAL != undefined){
            var lit = ctx.LITERAL()?.toString();
            return new Value(lit? lit : "null");
        }
    
    }
}