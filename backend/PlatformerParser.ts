// Generated from src/parser/PlatformerParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { PlatformerParserListener } from "./PlatformerParserListener";
import { PlatformerParserVisitor } from "./PlatformerParserVisitor";


export class PlatformerParser extends Parser {
	public static readonly LEADING_SPACE = 1;
	public static readonly PLAYER = 2;
	public static readonly ENEMY = 3;
	public static readonly DOOR = 4;
	public static readonly TERRAIN = 5;
	public static readonly PLATFORM = 6;
	public static readonly BUTTON = 7;
	public static readonly COIN = 8;
	public static readonly LEVEL = 9;
	public static readonly CHECKS = 10;
	public static readonly IF = 11;
	public static readonly ADD = 12;
	public static readonly REMOVE = 13;
	public static readonly MONEY = 14;
	public static readonly OPEN_BRACE = 15;
	public static readonly CLOSE_BRACE = 16;
	public static readonly STMT_NEWLINE = 17;
	public static readonly NAME = 18;
	public static readonly CONST = 19;
	public static readonly COMMA = 20;
	public static readonly OPEN_PAREN = 21;
	public static readonly CLOSE_PAREN = 22;
	public static readonly OPEN_SQUARE = 23;
	public static readonly CLOSED_SQUARE = 24;
	public static readonly LARGER = 25;
	public static readonly SMALLER = 26;
	public static readonly EQUAL = 27;
	public static readonly SEMICOLON = 28;
	public static readonly COLON = 29;
	public static readonly SPACE = 30;
	public static readonly NEWLINE = 31;
	public static readonly RULE_program = 0;
	public static readonly RULE_level = 1;
	public static readonly RULE_level_body = 2;
	public static readonly RULE_level_cond = 3;
	public static readonly RULE_level_objects = 4;
	public static readonly RULE_objects = 5;
	public static readonly RULE_object_bod = 6;
	public static readonly RULE_statement = 7;
	public static readonly RULE_property = 8;
	public static readonly RULE_statements = 9;
	public static readonly RULE_array = 10;
	public static readonly RULE_component = 11;
	public static readonly RULE_value = 12;
	public static readonly RULE_array_object = 13;
	public static readonly RULE_exp = 14;
	public static readonly RULE_op = 15;
	public static readonly RULE_varname = 16;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "level", "level_body", "level_cond", "level_objects", "objects", 
		"object_bod", "statement", "property", "statements", "array", "component", 
		"value", "array_object", "exp", "op", "varname",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, "'Player '", "'Enemy '", "'Door '", "'Terrain '", 
		"'Platform '", "'Button '", "'Coin'", "'Level '", "'Checks '", "'if '", 
		"'Add'", "'Remove'", "'MONEY'", "'{'", "'}'", undefined, undefined, undefined, 
		"','", "'('", "')'", "'['", "']'", "'>'", "'<'", "'='", "';'", "':'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LEADING_SPACE", "PLAYER", "ENEMY", "DOOR", "TERRAIN", "PLATFORM", 
		"BUTTON", "COIN", "LEVEL", "CHECKS", "IF", "ADD", "REMOVE", "MONEY", "OPEN_BRACE", 
		"CLOSE_BRACE", "STMT_NEWLINE", "NAME", "CONST", "COMMA", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", "LARGER", "SMALLER", "EQUAL", 
		"SEMICOLON", "COLON", "SPACE", "NEWLINE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PlatformerParser._LITERAL_NAMES, PlatformerParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PlatformerParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "PlatformerParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return PlatformerParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return PlatformerParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(PlatformerParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, PlatformerParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.objects();
			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 35;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 38;
			this.level();
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.LEVEL || _la === PlatformerParser.STMT_NEWLINE) {
				{
				{
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PlatformerParser.STMT_NEWLINE) {
					{
					this.state = 39;
					this.match(PlatformerParser.STMT_NEWLINE);
					}
				}

				this.state = 42;
				this.level();
				}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 48;
			this.match(PlatformerParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public level(): LevelContext {
		let _localctx: LevelContext = new LevelContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, PlatformerParser.RULE_level);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this.match(PlatformerParser.LEVEL);
			this.state = 51;
			this.match(PlatformerParser.NAME);
			this.state = 52;
			this.match(PlatformerParser.OPEN_BRACE);
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 53;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 56;
			this.level_body();
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 57;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 60;
			this.match(PlatformerParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public level_body(): Level_bodyContext {
		let _localctx: Level_bodyContext = new Level_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, PlatformerParser.RULE_level_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.statements();
			this.state = 64;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 63;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 66;
			this.level_objects();
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 67;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 70;
			this.level_cond();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public level_cond(): Level_condContext {
		let _localctx: Level_condContext = new Level_condContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, PlatformerParser.RULE_level_cond);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(PlatformerParser.IF);
			this.state = 73;
			this.match(PlatformerParser.OPEN_PAREN);
			this.state = 74;
			this.varname();
			this.state = 75;
			this.op();
			this.state = 76;
			this.exp();
			this.state = 77;
			this.match(PlatformerParser.CLOSE_PAREN);
			this.state = 78;
			this.match(PlatformerParser.OPEN_BRACE);
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 79;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 82;
			this.statements();
			this.state = 83;
			this.match(PlatformerParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public level_objects(): Level_objectsContext {
		let _localctx: Level_objectsContext = new Level_objectsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PlatformerParser.RULE_level_objects);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.component();
			this.state = 86;
			this.match(PlatformerParser.COLON);
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 87;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 90;
			this.array();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objects(): ObjectsContext {
		let _localctx: ObjectsContext = new ObjectsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PlatformerParser.RULE_objects);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.PLAYER) {
				{
				this.state = 92;
				this.match(PlatformerParser.PLAYER);
				this.state = 93;
				this.match(PlatformerParser.NAME);
				this.state = 94;
				this.object_bod();
				}
			}

			this.state = 98;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 97;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
				break;
			}
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PlatformerParser.ENEMY) | (1 << PlatformerParser.DOOR) | (1 << PlatformerParser.TERRAIN) | (1 << PlatformerParser.BUTTON))) !== 0)) {
				{
				{
				this.state = 100;
				this.component();
				this.state = 101;
				this.match(PlatformerParser.NAME);
				this.state = 102;
				this.object_bod();
				}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public object_bod(): Object_bodContext {
		let _localctx: Object_bodContext = new Object_bodContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PlatformerParser.RULE_object_bod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.match(PlatformerParser.OPEN_BRACE);
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 110;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.NAME) {
				{
				this.state = 113;
				this.statements();
				}
			}

			this.state = 116;
			this.match(PlatformerParser.CLOSE_BRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PlatformerParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.property();
			this.state = 119;
			this.match(PlatformerParser.COLON);
			this.state = 120;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, PlatformerParser.RULE_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this.match(PlatformerParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statements(): StatementsContext {
		let _localctx: StatementsContext = new StatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PlatformerParser.RULE_statements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 124;
				this.statement();
				this.state = 125;
				_la = this._input.LA(1);
				if (!(_la === PlatformerParser.STMT_NEWLINE || _la === PlatformerParser.NEWLINE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === PlatformerParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, PlatformerParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.match(PlatformerParser.OPEN_SQUARE);
			this.state = 132;
			this.array_object();
			this.state = 137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.COMMA) {
				{
				{
				this.state = 133;
				this.match(PlatformerParser.COMMA);
				this.state = 134;
				this.array_object();
				}
				}
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 140;
			this.match(PlatformerParser.CLOSED_SQUARE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public component(): ComponentContext {
		let _localctx: ComponentContext = new ComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, PlatformerParser.RULE_component);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PlatformerParser.ENEMY) | (1 << PlatformerParser.DOOR) | (1 << PlatformerParser.TERRAIN) | (1 << PlatformerParser.BUTTON))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PlatformerParser.RULE_value);
		try {
			this.state = 147;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PlatformerParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 144;
				this.varname();
				}
				break;
			case PlatformerParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 145;
				this.match(PlatformerParser.CONST);
				}
				break;
			case PlatformerParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 146;
				this.array_object();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array_object(): Array_objectContext {
		let _localctx: Array_objectContext = new Array_objectContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, PlatformerParser.RULE_array_object);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.match(PlatformerParser.OPEN_PAREN);
			this.state = 150;
			this.exp();
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.COMMA) {
				{
				{
				this.state = 151;
				this.match(PlatformerParser.COMMA);
				this.state = 152;
				this.exp();
				}
				}
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 158;
			this.match(PlatformerParser.CLOSE_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exp(): ExpContext {
		let _localctx: ExpContext = new ExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, PlatformerParser.RULE_exp);
		try {
			this.state = 162;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PlatformerParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 160;
				this.varname();
				}
				break;
			case PlatformerParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 161;
				this.match(PlatformerParser.CONST);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public op(): OpContext {
		let _localctx: OpContext = new OpContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, PlatformerParser.RULE_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PlatformerParser.LARGER) | (1 << PlatformerParser.SMALLER) | (1 << PlatformerParser.EQUAL))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varname(): VarnameContext {
		let _localctx: VarnameContext = new VarnameContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, PlatformerParser.RULE_varname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.match(PlatformerParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03!\xAB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
		"\x02\x03\x02\x05\x02\'\n\x02\x03\x02\x03\x02\x05\x02+\n\x02\x03\x02\x07" +
		"\x02.\n\x02\f\x02\x0E\x021\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x039\n\x03\x03\x03\x03\x03\x05\x03=\n\x03\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x05\x04C\n\x04\x03\x04\x03\x04\x05\x04G\n\x04\x03\x04" +
		"\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x05\x05S\n\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x05\x06" +
		"[\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x05\x07b\n\x07\x03\x07" +
		"\x05\x07e\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07k\n\x07\f\x07\x0E" +
		"\x07n\v\x07\x03\b\x03\b\x05\br\n\b\x03\b\x05\bu\n\b\x03\b\x03\b\x03\t" +
		"\x03\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x06\v\x82\n\v\r\v\x0E" +
		"\v\x83\x03\f\x03\f\x03\f\x03\f\x07\f\x8A\n\f\f\f\x0E\f\x8D\v\f\x03\f\x03" +
		"\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x96\n\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x07\x0F\x9C\n\x0F\f\x0F\x0E\x0F\x9F\v\x0F\x03\x0F\x03" +
		"\x0F\x03\x10\x03\x10\x05\x10\xA5\n\x10\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x03\x12\x02\x02\x02\x13\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02\x02\x05\x04\x02\x13\x13!!\x04\x02\x05\x07\t\t\x03\x02\x1B\x1D" +
		"\x02\xAD\x02$\x03\x02\x02\x02\x044\x03\x02\x02\x02\x06@\x03\x02\x02\x02" +
		"\bJ\x03\x02\x02\x02\nW\x03\x02\x02\x02\fa\x03\x02\x02\x02\x0Eo\x03\x02" +
		"\x02\x02\x10x\x03\x02\x02\x02\x12|\x03\x02\x02\x02\x14\x81\x03\x02\x02" +
		"\x02\x16\x85\x03\x02\x02\x02\x18\x90\x03\x02\x02\x02\x1A\x95\x03\x02\x02" +
		"\x02\x1C\x97\x03\x02\x02\x02\x1E\xA4\x03\x02\x02\x02 \xA6\x03\x02\x02" +
		"\x02\"\xA8\x03\x02\x02\x02$&\x05\f\x07\x02%\'\x07\x13\x02\x02&%\x03\x02" +
		"\x02\x02&\'\x03\x02\x02\x02\'(\x03\x02\x02\x02(/\x05\x04\x03\x02)+\x07" +
		"\x13\x02\x02*)\x03\x02\x02\x02*+\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x05" +
		"\x04\x03\x02-*\x03\x02\x02\x02.1\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03" +
		"\x02\x02\x0202\x03\x02\x02\x021/\x03\x02\x02\x0223\x07\x02\x02\x033\x03" +
		"\x03\x02\x02\x0245\x07\v\x02\x0256\x07\x14\x02\x0268\x07\x11\x02\x027" +
		"9\x07\x13\x02\x0287\x03\x02\x02\x0289\x03\x02\x02\x029:\x03\x02\x02\x02" +
		":<\x05\x06\x04\x02;=\x07\x13\x02\x02<;\x03\x02\x02\x02<=\x03\x02\x02\x02" +
		"=>\x03\x02\x02\x02>?\x07\x12\x02\x02?\x05\x03\x02\x02\x02@B\x05\x14\v" +
		"\x02AC\x07\x13\x02\x02BA\x03\x02\x02\x02BC\x03\x02\x02\x02CD\x03\x02\x02" +
		"\x02DF\x05\n\x06\x02EG\x07\x13\x02\x02FE\x03\x02\x02\x02FG\x03\x02\x02" +
		"\x02GH\x03\x02\x02\x02HI\x05\b\x05\x02I\x07\x03\x02\x02\x02JK\x07\r\x02" +
		"\x02KL\x07\x17\x02\x02LM\x05\"\x12\x02MN\x05 \x11\x02NO\x05\x1E\x10\x02" +
		"OP\x07\x18\x02\x02PR\x07\x11\x02\x02QS\x07\x13\x02\x02RQ\x03\x02\x02\x02" +
		"RS\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x05\x14\v\x02UV\x07\x12\x02\x02" +
		"V\t\x03\x02\x02\x02WX\x05\x18\r\x02XZ\x07\x1F\x02\x02Y[\x07\x13\x02\x02" +
		"ZY\x03\x02\x02\x02Z[\x03\x02\x02\x02[\\\x03\x02\x02\x02\\]\x05\x16\f\x02" +
		"]\v\x03\x02\x02\x02^_\x07\x04\x02\x02_`\x07\x14\x02\x02`b\x05\x0E\b\x02" +
		"a^\x03\x02\x02\x02ab\x03\x02\x02\x02bd\x03\x02\x02\x02ce\x07\x13\x02\x02" +
		"dc\x03\x02\x02\x02de\x03\x02\x02\x02el\x03\x02\x02\x02fg\x05\x18\r\x02" +
		"gh\x07\x14\x02\x02hi\x05\x0E\b\x02ik\x03\x02\x02\x02jf\x03\x02\x02\x02" +
		"kn\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02m\r\x03\x02\x02" +
		"\x02nl\x03\x02\x02\x02oq\x07\x11\x02\x02pr\x07\x13\x02\x02qp\x03\x02\x02" +
		"\x02qr\x03\x02\x02\x02rt\x03\x02\x02\x02su\x05\x14\v\x02ts\x03\x02\x02" +
		"\x02tu\x03\x02\x02\x02uv\x03\x02\x02\x02vw\x07\x12\x02\x02w\x0F\x03\x02" +
		"\x02\x02xy\x05\x12\n\x02yz\x07\x1F\x02\x02z{\x05\x1A\x0E\x02{\x11\x03" +
		"\x02\x02\x02|}\x07\x14\x02\x02}\x13\x03\x02\x02\x02~\x7F\x05\x10\t\x02" +
		"\x7F\x80\t\x02\x02\x02\x80\x82\x03\x02\x02\x02\x81~\x03\x02\x02\x02\x82" +
		"\x83\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84" +
		"\x15\x03\x02\x02\x02\x85\x86\x07\x19\x02\x02\x86\x8B\x05\x1C\x0F\x02\x87" +
		"\x88\x07\x16\x02\x02\x88\x8A\x05\x1C\x0F\x02\x89\x87\x03\x02\x02\x02\x8A" +
		"\x8D\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C" +
		"\x8E\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8E\x8F\x07\x1A\x02\x02\x8F" +
		"\x17\x03\x02\x02\x02\x90\x91\t\x03\x02\x02\x91\x19\x03\x02\x02\x02\x92" +
		"\x96\x05\"\x12\x02\x93\x96\x07\x15\x02\x02\x94\x96\x05\x1C\x0F\x02\x95" +
		"\x92\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x95\x94\x03\x02\x02\x02\x96" +
		"\x1B\x03\x02\x02\x02\x97\x98\x07\x17\x02\x02\x98\x9D\x05\x1E\x10\x02\x99" +
		"\x9A\x07\x16\x02\x02\x9A\x9C\x05\x1E\x10\x02\x9B\x99\x03\x02\x02\x02\x9C" +
		"\x9F\x03\x02\x02\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E" +
		"\xA0\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA1\x07\x18\x02\x02\xA1" +
		"\x1D\x03\x02\x02\x02\xA2\xA5\x05\"\x12\x02\xA3\xA5\x07\x15\x02\x02\xA4" +
		"\xA2\x03\x02\x02\x02\xA4\xA3\x03\x02\x02\x02\xA5\x1F\x03\x02\x02\x02\xA6" +
		"\xA7\t\x04\x02\x02\xA7!\x03\x02\x02\x02\xA8\xA9\x07\x14\x02\x02\xA9#\x03" +
		"\x02\x02\x02\x15&*/8<BFRZadlqt\x83\x8B\x95\x9D\xA4";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PlatformerParser.__ATN) {
			PlatformerParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PlatformerParser._serializedATN));
		}

		return PlatformerParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public objects(): ObjectsContext {
		return this.getRuleContext(0, ObjectsContext);
	}
	public level(): LevelContext[];
	public level(i: number): LevelContext;
	public level(i?: number): LevelContext | LevelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LevelContext);
		} else {
			return this.getRuleContext(i, LevelContext);
		}
	}
	public EOF(): TerminalNode { return this.getToken(PlatformerParser.EOF, 0); }
	public STMT_NEWLINE(): TerminalNode[];
	public STMT_NEWLINE(i: number): TerminalNode;
	public STMT_NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PlatformerParser.STMT_NEWLINE);
		} else {
			return this.getToken(PlatformerParser.STMT_NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_program; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LevelContext extends ParserRuleContext {
	public LEVEL(): TerminalNode { return this.getToken(PlatformerParser.LEVEL, 0); }
	public NAME(): TerminalNode { return this.getToken(PlatformerParser.NAME, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(PlatformerParser.OPEN_BRACE, 0); }
	public level_body(): Level_bodyContext {
		return this.getRuleContext(0, Level_bodyContext);
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(PlatformerParser.CLOSE_BRACE, 0); }
	public STMT_NEWLINE(): TerminalNode[];
	public STMT_NEWLINE(i: number): TerminalNode;
	public STMT_NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PlatformerParser.STMT_NEWLINE);
		} else {
			return this.getToken(PlatformerParser.STMT_NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_level; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterLevel) {
			listener.enterLevel(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitLevel) {
			listener.exitLevel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitLevel) {
			return visitor.visitLevel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Level_bodyContext extends ParserRuleContext {
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public level_objects(): Level_objectsContext {
		return this.getRuleContext(0, Level_objectsContext);
	}
	public level_cond(): Level_condContext {
		return this.getRuleContext(0, Level_condContext);
	}
	public STMT_NEWLINE(): TerminalNode[];
	public STMT_NEWLINE(i: number): TerminalNode;
	public STMT_NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PlatformerParser.STMT_NEWLINE);
		} else {
			return this.getToken(PlatformerParser.STMT_NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_level_body; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterLevel_body) {
			listener.enterLevel_body(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitLevel_body) {
			listener.exitLevel_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitLevel_body) {
			return visitor.visitLevel_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Level_condContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(PlatformerParser.IF, 0); }
	public OPEN_PAREN(): TerminalNode { return this.getToken(PlatformerParser.OPEN_PAREN, 0); }
	public varname(): VarnameContext {
		return this.getRuleContext(0, VarnameContext);
	}
	public op(): OpContext {
		return this.getRuleContext(0, OpContext);
	}
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(PlatformerParser.CLOSE_PAREN, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(PlatformerParser.OPEN_BRACE, 0); }
	public statements(): StatementsContext {
		return this.getRuleContext(0, StatementsContext);
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(PlatformerParser.CLOSE_BRACE, 0); }
	public STMT_NEWLINE(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.STMT_NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_level_cond; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterLevel_cond) {
			listener.enterLevel_cond(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitLevel_cond) {
			listener.exitLevel_cond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitLevel_cond) {
			return visitor.visitLevel_cond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Level_objectsContext extends ParserRuleContext {
	public component(): ComponentContext {
		return this.getRuleContext(0, ComponentContext);
	}
	public COLON(): TerminalNode { return this.getToken(PlatformerParser.COLON, 0); }
	public array(): ArrayContext {
		return this.getRuleContext(0, ArrayContext);
	}
	public STMT_NEWLINE(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.STMT_NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_level_objects; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterLevel_objects) {
			listener.enterLevel_objects(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitLevel_objects) {
			listener.exitLevel_objects(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitLevel_objects) {
			return visitor.visitLevel_objects(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ObjectsContext extends ParserRuleContext {
	public PLAYER(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.PLAYER, 0); }
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PlatformerParser.NAME);
		} else {
			return this.getToken(PlatformerParser.NAME, i);
		}
	}
	public object_bod(): Object_bodContext[];
	public object_bod(i: number): Object_bodContext;
	public object_bod(i?: number): Object_bodContext | Object_bodContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Object_bodContext);
		} else {
			return this.getRuleContext(i, Object_bodContext);
		}
	}
	public STMT_NEWLINE(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.STMT_NEWLINE, 0); }
	public component(): ComponentContext[];
	public component(i: number): ComponentContext;
	public component(i?: number): ComponentContext | ComponentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentContext);
		} else {
			return this.getRuleContext(i, ComponentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_objects; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterObjects) {
			listener.enterObjects(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitObjects) {
			listener.exitObjects(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitObjects) {
			return visitor.visitObjects(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Object_bodContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(PlatformerParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(PlatformerParser.CLOSE_BRACE, 0); }
	public STMT_NEWLINE(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.STMT_NEWLINE, 0); }
	public statements(): StatementsContext | undefined {
		return this.tryGetRuleContext(0, StatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_object_bod; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterObject_bod) {
			listener.enterObject_bod(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitObject_bod) {
			listener.exitObject_bod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitObject_bod) {
			return visitor.visitObject_bod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public property(): PropertyContext {
		return this.getRuleContext(0, PropertyContext);
	}
	public COLON(): TerminalNode { return this.getToken(PlatformerParser.COLON, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_statement; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(PlatformerParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_property; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public STMT_NEWLINE(): TerminalNode[];
	public STMT_NEWLINE(i: number): TerminalNode;
	public STMT_NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PlatformerParser.STMT_NEWLINE);
		} else {
			return this.getToken(PlatformerParser.STMT_NEWLINE, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PlatformerParser.NEWLINE);
		} else {
			return this.getToken(PlatformerParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_statements; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterStatements) {
			listener.enterStatements(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitStatements) {
			listener.exitStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitStatements) {
			return visitor.visitStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	public OPEN_SQUARE(): TerminalNode { return this.getToken(PlatformerParser.OPEN_SQUARE, 0); }
	public array_object(): Array_objectContext[];
	public array_object(i: number): Array_objectContext;
	public array_object(i?: number): Array_objectContext | Array_objectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Array_objectContext);
		} else {
			return this.getRuleContext(i, Array_objectContext);
		}
	}
	public CLOSED_SQUARE(): TerminalNode { return this.getToken(PlatformerParser.CLOSED_SQUARE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PlatformerParser.COMMA);
		} else {
			return this.getToken(PlatformerParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_array; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterArray) {
			listener.enterArray(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitArray) {
			listener.exitArray(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitArray) {
			return visitor.visitArray(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComponentContext extends ParserRuleContext {
	public ENEMY(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.ENEMY, 0); }
	public DOOR(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.DOOR, 0); }
	public BUTTON(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.BUTTON, 0); }
	public TERRAIN(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.TERRAIN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_component; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterComponent) {
			listener.enterComponent(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitComponent) {
			listener.exitComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitComponent) {
			return visitor.visitComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public varname(): VarnameContext | undefined {
		return this.tryGetRuleContext(0, VarnameContext);
	}
	public CONST(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.CONST, 0); }
	public array_object(): Array_objectContext | undefined {
		return this.tryGetRuleContext(0, Array_objectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_value; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_objectContext extends ParserRuleContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(PlatformerParser.OPEN_PAREN, 0); }
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(PlatformerParser.CLOSE_PAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PlatformerParser.COMMA);
		} else {
			return this.getToken(PlatformerParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_array_object; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterArray_object) {
			listener.enterArray_object(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitArray_object) {
			listener.exitArray_object(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitArray_object) {
			return visitor.visitArray_object(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpContext extends ParserRuleContext {
	public varname(): VarnameContext | undefined {
		return this.tryGetRuleContext(0, VarnameContext);
	}
	public CONST(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.CONST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_exp; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterExp) {
			listener.enterExp(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitExp) {
			listener.exitExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitExp) {
			return visitor.visitExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpContext extends ParserRuleContext {
	public LARGER(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.LARGER, 0); }
	public SMALLER(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.SMALLER, 0); }
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.EQUAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_op; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterOp) {
			listener.enterOp(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitOp) {
			listener.exitOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitOp) {
			return visitor.visitOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarnameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(PlatformerParser.NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_varname; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterVarname) {
			listener.enterVarname(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitVarname) {
			listener.exitVarname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitVarname) {
			return visitor.visitVarname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


