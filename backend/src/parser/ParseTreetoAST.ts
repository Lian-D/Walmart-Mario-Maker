import { PlatformerParserVisitor } from "../../PlatformerParserVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { ArrayContext, Array_objectContext, ComponentContext, LevelContext, Level_bodyContext, Level_condContext, Level_objectsContext, OpContext, PlatformerParser, ProgramContext, PropertyContext, StatementContext, ValueContext, VarnameContext } from "../../PlatformerParser";

class ParseTreetoAST extends AbstractParseTreeVisitor<Number> implements PlatformerParserVisitor<Number> {
    protected defaultResult(): Number {
        throw new Error("Method not implemented.");
    }

    visitProgram(context: ProgramContext): any{
        var entities:Object[] = new Array();
        var levels:Level[] = new Array();
        for(var i of context.level()){
            var n = i.NAME.toString();
            var q = this.visitLevelBody(i.level_body());
            var x = new Level(n, q)
            levels.push(x)
        }
        return new Program(entities, levels);
    }


    visitLevel(ctx: LevelContext): any{
        return new Level(ctx.NAME.toString(), this.visitLevelBody(ctx.level_body()))
    }

    visitLevelBody(context: Level_bodyContext): Levelbody{
        var statements:Statement[] = new Array();
        for(var i of context.statement()){
            var x = new Statement(i.property.toString(), i.value);
            statements.push(x);
        }
        return new Levelbody(statements, this.visitLevel_objects(context.level_objects()), this.visitLevelCond(context.level_cond()));
    }


    visitLevelCond(context: Level_condContext): any{
        return null;
    }

    visitLevel_objects(context: Level_objectsContext): any{
        return null;
    }



    vistStatement(context: StatementContext){

        return new Statement(context.property.toString(), context.value);
    }

    visitComponent(context : ComponentContext){
        return this.visitChildren(context);
    }

    visitProperty?: ((ctx: PropertyContext) => Number) | undefined;

    visitArray?: ((ctx: ArrayContext) => Number) | undefined;
    visitArray_object?: ((ctx: Array_objectContext) => Number) | undefined;
    visitOp?: ((ctx: OpContext) => Number) | undefined;
    visitVarname?: ((ctx: VarnameContext) => Number) | undefined;
    visitValue?: ((ctx: ValueContext) => Number) | undefined;




    
    
}