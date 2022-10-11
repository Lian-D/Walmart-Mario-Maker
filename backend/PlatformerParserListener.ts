// Generated from src/parser/PlatformerParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `PlatformerParser`.
 */
export interface PlatformerParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PlatformerParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.level`.
	 * @param ctx the parse tree
	 */
	enterLevel?: (ctx: LevelContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.level`.
	 * @param ctx the parse tree
	 */
	exitLevel?: (ctx: LevelContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.level_body`.
	 * @param ctx the parse tree
	 */
	enterLevel_body?: (ctx: Level_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.level_body`.
	 * @param ctx the parse tree
	 */
	exitLevel_body?: (ctx: Level_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.level_cond`.
	 * @param ctx the parse tree
	 */
	enterLevel_cond?: (ctx: Level_condContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.level_cond`.
	 * @param ctx the parse tree
	 */
	exitLevel_cond?: (ctx: Level_condContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.level_objects`.
	 * @param ctx the parse tree
	 */
	enterLevel_objects?: (ctx: Level_objectsContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.level_objects`.
	 * @param ctx the parse tree
	 */
	exitLevel_objects?: (ctx: Level_objectsContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.objects`.
	 * @param ctx the parse tree
	 */
	enterObjects?: (ctx: ObjectsContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.objects`.
	 * @param ctx the parse tree
	 */
	exitObjects?: (ctx: ObjectsContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.object_bod`.
	 * @param ctx the parse tree
	 */
	enterObject_bod?: (ctx: Object_bodContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.object_bod`.
	 * @param ctx the parse tree
	 */
	exitObject_bod?: (ctx: Object_bodContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.array`.
	 * @param ctx the parse tree
	 */
	enterArray?: (ctx: ArrayContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.array`.
	 * @param ctx the parse tree
	 */
	exitArray?: (ctx: ArrayContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.component`.
	 * @param ctx the parse tree
	 */
	enterComponent?: (ctx: ComponentContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.component`.
	 * @param ctx the parse tree
	 */
	exitComponent?: (ctx: ComponentContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.array_object`.
	 * @param ctx the parse tree
	 */
	enterArray_object?: (ctx: Array_objectContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.array_object`.
	 * @param ctx the parse tree
	 */
	exitArray_object?: (ctx: Array_objectContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.op`.
	 * @param ctx the parse tree
	 */
	enterOp?: (ctx: OpContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.op`.
	 * @param ctx the parse tree
	 */
	exitOp?: (ctx: OpContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.varname`.
	 * @param ctx the parse tree
	 */
	enterVarname?: (ctx: VarnameContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.varname`.
	 * @param ctx the parse tree
	 */
	exitVarname?: (ctx: VarnameContext) => void;
}

