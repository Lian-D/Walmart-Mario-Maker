import { PlatformerParserVisitor } from "../../PlatformerParserVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ListContext, List_objectContext, ComponentContext, LevelContext, Level_bodyContext, Level_condContext, Level_entitiesContext, OpContext, PlatformerParser, ProgramContext, PropertyContext, StatementContext, ValueContext, VarnameContext, EntityContext, PlayerContext, Entity_bodContext, ExpContext } from "../../PlatformerParser";

/**
* @param ctx the parse tree
* @return the visitor result
*/

class ParseTreetoAST extends AbstractParseTreeVisitor<any> implements PlatformerParserVisitor<any> {
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
        var entities = this.visitLevelEntities(context.level_entities());
        var conds = this.visitLevelCond(context.level_cond());
        for(var i of context.statement()){
            statements.push(this.visitStatement(i));
        }
        return new Levelbody(statements, entities, conds);
    }


    // TODO
    visitLevelCond(context: Level_condContext): any{
        return null;
    }

    // TODO
    visitLevelEntities(context: Level_entitiesContext): any{
        return null;
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
        var p = context.property().toString();
        var val = this.visitValue(context.value());
        return new Statement(p, val);   
    }


    visitVarname(ctx: VarnameContext): any {
        return ctx.NAME.toString();
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
    
    }




    
    
}