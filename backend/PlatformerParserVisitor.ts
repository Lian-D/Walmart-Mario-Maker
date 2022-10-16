// Generated from src/parser/PlatformerParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./PlatformerParser";
import { LevelContext } from "./PlatformerParser";
import { Level_bodyContext } from "./PlatformerParser";
import { Level_condContext } from "./PlatformerParser";
import { Level_objectsContext } from "./PlatformerParser";
import { ObjectsContext } from "./PlatformerParser";
import { Object_bodContext } from "./PlatformerParser";
import { StatementContext } from "./PlatformerParser";
import { PropertyContext } from "./PlatformerParser";
import { StatementsContext } from "./PlatformerParser";
import { ArrayContext } from "./PlatformerParser";
import { ComponentContext } from "./PlatformerParser";
import { ValueContext } from "./PlatformerParser";
import { Array_objectContext } from "./PlatformerParser";
import { ExpContext } from "./PlatformerParser";
import { OpContext } from "./PlatformerParser";
import { VarnameContext } from "./PlatformerParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PlatformerParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PlatformerParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PlatformerParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.level`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevel?: (ctx: LevelContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.level_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevel_body?: (ctx: Level_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.level_cond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevel_cond?: (ctx: Level_condContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.level_objects`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevel_objects?: (ctx: Level_objectsContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.objects`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjects?: (ctx: ObjectsContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.object_bod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject_bod?: (ctx: Object_bodContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.statements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatements?: (ctx: StatementsContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.array`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray?: (ctx: ArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.component`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComponent?: (ctx: ComponentContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.array_object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArray_object?: (ctx: Array_objectContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?: (ctx: ExpContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOp?: (ctx: OpContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.varname`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarname?: (ctx: VarnameContext) => Result;
}
