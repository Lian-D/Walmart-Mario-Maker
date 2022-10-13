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
	public static readonly RULE_level_entities = 4;
	public static readonly RULE_entities = 5;
	public static readonly RULE_entity_bod = 6;
	public static readonly RULE_statement = 7;
	public static readonly RULE_property = 8;
	public static readonly RULE_list = 9;
	public static readonly RULE_component = 10;
	public static readonly RULE_value = 11;
	public static readonly RULE_list_object = 12;
	public static readonly RULE_exp = 13;
	public static readonly RULE_op = 14;
	public static readonly RULE_varname = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "level", "level_body", "level_cond", "level_entities", "entities", 
		"entity_bod", "statement", "property", "list", "component", "value", "list_object", 
		"exp", "op", "varname",
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
			this.state = 32;
			this.entities();
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 33;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 36;
			this.level();
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.LEVEL || _la === PlatformerParser.STMT_NEWLINE) {
				{
				{
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PlatformerParser.STMT_NEWLINE) {
					{
					this.state = 37;
					this.match(PlatformerParser.STMT_NEWLINE);
					}
				}

				this.state = 40;
				this.level();
				}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 46;
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
			this.state = 48;
			this.match(PlatformerParser.LEVEL);
			this.state = 49;
			this.match(PlatformerParser.NAME);
			this.state = 50;
			this.match(PlatformerParser.OPEN_BRACE);
			this.state = 52;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 51;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
				break;
			}
			this.state = 54;
			this.level_body();
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 55;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 58;
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
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.NAME) {
				{
				{
				this.state = 60;
				this.statement();
				this.state = 61;
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
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 68;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 71;
			this.level_entities();
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 72;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 75;
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
			this.state = 77;
			this.match(PlatformerParser.IF);
			this.state = 78;
			this.match(PlatformerParser.OPEN_PAREN);
			this.state = 79;
			this.varname();
			this.state = 80;
			this.op();
			this.state = 81;
			this.exp();
			this.state = 82;
			this.match(PlatformerParser.CLOSE_PAREN);
			this.state = 83;
			this.match(PlatformerParser.OPEN_BRACE);
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 84;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.NAME) {
				{
				{
				this.state = 87;
				this.statement();
				this.state = 88;
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
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 95;
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
	public level_entities(): Level_entitiesContext {
		let _localctx: Level_entitiesContext = new Level_entitiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PlatformerParser.RULE_level_entities);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.component();
			this.state = 98;
			this.match(PlatformerParser.COLON);
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 99;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 102;
			this.list();
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
	public entities(): EntitiesContext {
		let _localctx: EntitiesContext = new EntitiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PlatformerParser.RULE_entities);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.PLAYER) {
				{
				this.state = 104;
				this.match(PlatformerParser.PLAYER);
				this.state = 105;
				this.match(PlatformerParser.NAME);
				this.state = 106;
				this.entity_bod();
				}
			}

			this.state = 110;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 109;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
				break;
			}
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PlatformerParser.ENEMY) | (1 << PlatformerParser.DOOR) | (1 << PlatformerParser.TERRAIN) | (1 << PlatformerParser.BUTTON))) !== 0)) {
				{
				{
				this.state = 112;
				this.component();
				this.state = 113;
				this.match(PlatformerParser.NAME);
				this.state = 114;
				this.entity_bod();
				}
				}
				this.state = 120;
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
	public entity_bod(): Entity_bodContext {
		let _localctx: Entity_bodContext = new Entity_bodContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PlatformerParser.RULE_entity_bod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.match(PlatformerParser.OPEN_BRACE);
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 122;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.NAME) {
				{
				{
				this.state = 125;
				this.statement();
				this.state = 126;
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
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 133;
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
			this.state = 135;
			this.property();
			this.state = 136;
			this.match(PlatformerParser.COLON);
			this.state = 137;
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
			this.state = 139;
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
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PlatformerParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(PlatformerParser.OPEN_SQUARE);
			this.state = 142;
			this.list_object();
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.COMMA) {
				{
				{
				this.state = 143;
				this.match(PlatformerParser.COMMA);
				this.state = 144;
				this.list_object();
				}
				}
				this.state = 149;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 150;
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
		this.enterRule(_localctx, 20, PlatformerParser.RULE_component);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
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
		this.enterRule(_localctx, 22, PlatformerParser.RULE_value);
		try {
			this.state = 157;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PlatformerParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 154;
				this.varname();
				}
				break;
			case PlatformerParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 155;
				this.match(PlatformerParser.CONST);
				}
				break;
			case PlatformerParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 156;
				this.list_object();
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
	public list_object(): List_objectContext {
		let _localctx: List_objectContext = new List_objectContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PlatformerParser.RULE_list_object);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(PlatformerParser.OPEN_PAREN);
			this.state = 160;
			this.exp();
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.COMMA) {
				{
				{
				this.state = 161;
				this.match(PlatformerParser.COMMA);
				this.state = 162;
				this.exp();
				}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 168;
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
		this.enterRule(_localctx, 26, PlatformerParser.RULE_exp);
		try {
			this.state = 172;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PlatformerParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 170;
				this.varname();
				}
				break;
			case PlatformerParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 171;
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
		this.enterRule(_localctx, 28, PlatformerParser.RULE_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
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
		this.enterRule(_localctx, 30, PlatformerParser.RULE_varname);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03!\xB5\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02\x05" +
		"\x02%\n\x02\x03\x02\x03\x02\x05\x02)\n\x02\x03\x02\x07\x02,\n\x02\f\x02" +
		"\x0E\x02/\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"7\n\x03\x03\x03\x03\x03\x05\x03;\n\x03\x03\x03\x03\x03\x03\x04\x03\x04" +
		"\x03\x04\x07\x04B\n\x04\f\x04\x0E\x04E\v\x04\x03\x04\x05\x04H\n\x04\x03" +
		"\x04\x03\x04\x05\x04L\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05X\n\x05\x03\x05\x03\x05\x03" +
		"\x05\x07\x05]\n\x05\f\x05\x0E\x05`\v\x05\x03\x05\x03\x05\x03\x06\x03\x06" +
		"\x03\x06\x05\x06g\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x05\x07" +
		"n\n\x07\x03\x07\x05\x07q\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07" +
		"w\n\x07\f\x07\x0E\x07z\v\x07\x03\b\x03\b\x05\b~\n\b\x03\b\x03\b\x03\b" +
		"\x07\b\x83\n\b\f\b\x0E\b\x86\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\v\x07\v\x94\n\v\f\v\x0E\v\x97\v\v\x03\v" +
		"\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x05\r\xA0\n\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x07\x0E\xA6\n\x0E\f\x0E\x0E\x0E\xA9\v\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x05\x0F\xAF\n\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x11\x02\x02\x02\x12\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\x02\x05\x04\x02\x13\x13!!\x04\x02\x05\x07\t\t\x03\x02\x1B\x1D\x02\xB9" +
		"\x02\"\x03\x02\x02\x02\x042\x03\x02\x02\x02\x06C\x03\x02\x02\x02\bO\x03" +
		"\x02\x02\x02\nc\x03\x02\x02\x02\fm\x03\x02\x02\x02\x0E{\x03\x02\x02\x02" +
		"\x10\x89\x03\x02\x02\x02\x12\x8D\x03\x02\x02\x02\x14\x8F\x03\x02\x02\x02" +
		"\x16\x9A\x03\x02\x02\x02\x18\x9F\x03\x02\x02\x02\x1A\xA1\x03\x02\x02\x02" +
		"\x1C\xAE\x03\x02\x02\x02\x1E\xB0\x03\x02\x02\x02 \xB2\x03\x02\x02\x02" +
		"\"$\x05\f\x07\x02#%\x07\x13\x02\x02$#\x03\x02\x02\x02$%\x03\x02\x02\x02" +
		"%&\x03\x02\x02\x02&-\x05\x04\x03\x02\')\x07\x13\x02\x02(\'\x03\x02\x02" +
		"\x02()\x03\x02\x02\x02)*\x03\x02\x02\x02*,\x05\x04\x03\x02+(\x03\x02\x02" +
		"\x02,/\x03\x02\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02.0\x03\x02\x02" +
		"\x02/-\x03\x02\x02\x0201\x07\x02\x02\x031\x03\x03\x02\x02\x0223\x07\v" +
		"\x02\x0234\x07\x14\x02\x0246\x07\x11\x02\x0257\x07\x13\x02\x0265\x03\x02" +
		"\x02\x0267\x03\x02\x02\x0278\x03\x02\x02\x028:\x05\x06\x04\x029;\x07\x13" +
		"\x02\x02:9\x03\x02\x02\x02:;\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x07\x12" +
		"\x02\x02=\x05\x03\x02\x02\x02>?\x05\x10\t\x02?@\t\x02\x02\x02@B\x03\x02" +
		"\x02\x02A>\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02" +
		"\x02\x02DG\x03\x02\x02\x02EC\x03\x02\x02\x02FH\x07\x13\x02\x02GF\x03\x02" +
		"\x02\x02GH\x03\x02\x02\x02HI\x03\x02\x02\x02IK\x05\n\x06\x02JL\x07\x13" +
		"\x02\x02KJ\x03\x02\x02\x02KL\x03\x02\x02\x02LM\x03\x02\x02\x02MN\x05\b" +
		"\x05\x02N\x07\x03\x02\x02\x02OP\x07\r\x02\x02PQ\x07\x17\x02\x02QR\x05" +
		" \x11\x02RS\x05\x1E\x10\x02ST\x05\x1C\x0F\x02TU\x07\x18\x02\x02UW\x07" +
		"\x11\x02\x02VX\x07\x13\x02\x02WV\x03\x02\x02\x02WX\x03\x02\x02\x02X^\x03" +
		"\x02\x02\x02YZ\x05\x10\t\x02Z[\t\x02\x02\x02[]\x03\x02\x02\x02\\Y\x03" +
		"\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_a" +
		"\x03\x02\x02\x02`^\x03\x02\x02\x02ab\x07\x12\x02\x02b\t\x03\x02\x02\x02" +
		"cd\x05\x16\f\x02df\x07\x1F\x02\x02eg\x07\x13\x02\x02fe\x03\x02\x02\x02" +
		"fg\x03\x02\x02\x02gh\x03\x02\x02\x02hi\x05\x14\v\x02i\v\x03\x02\x02\x02" +
		"jk\x07\x04\x02\x02kl\x07\x14\x02\x02ln\x05\x0E\b\x02mj\x03\x02\x02\x02" +
		"mn\x03\x02\x02\x02np\x03\x02\x02\x02oq\x07\x13\x02\x02po\x03\x02\x02\x02" +
		"pq\x03\x02\x02\x02qx\x03\x02\x02\x02rs\x05\x16\f\x02st\x07\x14\x02\x02" +
		"tu\x05\x0E\b\x02uw\x03\x02\x02\x02vr\x03\x02\x02\x02wz\x03\x02\x02\x02" +
		"xv\x03\x02\x02\x02xy\x03\x02\x02\x02y\r\x03\x02\x02\x02zx\x03\x02\x02" +
		"\x02{}\x07\x11\x02\x02|~\x07\x13\x02\x02}|\x03\x02\x02\x02}~\x03\x02\x02" +
		"\x02~\x84\x03\x02\x02\x02\x7F\x80\x05\x10\t\x02\x80\x81\t\x02\x02\x02" +
		"\x81\x83\x03\x02\x02\x02\x82\x7F\x03\x02\x02\x02\x83\x86\x03\x02\x02\x02" +
		"\x84\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x87\x03\x02\x02\x02" +
		"\x86\x84\x03\x02\x02\x02\x87\x88\x07\x12\x02\x02\x88\x0F\x03\x02\x02\x02" +
		"\x89\x8A\x05\x12\n\x02\x8A\x8B\x07\x1F\x02\x02\x8B\x8C\x05\x18\r\x02\x8C" +
		"\x11\x03\x02\x02\x02\x8D\x8E\x07\x14\x02\x02\x8E\x13\x03\x02\x02\x02\x8F" +
		"\x90\x07\x19\x02\x02\x90\x95\x05\x1A\x0E\x02\x91\x92\x07\x16\x02\x02\x92" +
		"\x94\x05\x1A\x0E\x02\x93\x91\x03\x02\x02\x02\x94\x97\x03\x02\x02\x02\x95" +
		"\x93\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x98\x03\x02\x02\x02\x97" +
		"\x95\x03\x02\x02\x02\x98\x99\x07\x1A\x02\x02\x99\x15\x03\x02\x02\x02\x9A" +
		"\x9B\t\x03\x02\x02\x9B\x17\x03\x02\x02\x02\x9C\xA0\x05 \x11\x02\x9D\xA0" +
		"\x07\x15\x02\x02\x9E\xA0\x05\x1A\x0E\x02\x9F\x9C\x03\x02\x02\x02\x9F\x9D" +
		"\x03\x02\x02\x02\x9F\x9E\x03\x02\x02\x02\xA0\x19\x03\x02\x02\x02\xA1\xA2" +
		"\x07\x17\x02\x02\xA2\xA7\x05\x1C\x0F\x02\xA3\xA4\x07\x16\x02\x02\xA4\xA6" +
		"\x05\x1C\x0F\x02\xA5\xA3\x03\x02\x02\x02\xA6\xA9\x03\x02\x02\x02\xA7\xA5" +
		"\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAA\x03\x02\x02\x02\xA9\xA7" +
		"\x03\x02\x02\x02\xAA\xAB\x07\x18\x02\x02\xAB\x1B\x03\x02\x02\x02\xAC\xAF" +
		"\x05 \x11\x02\xAD\xAF\x07\x15\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAD" +
		"\x03\x02\x02\x02\xAF\x1D\x03\x02\x02\x02\xB0\xB1\t\x04\x02\x02\xB1\x1F" +
		"\x03\x02\x02\x02\xB2\xB3\x07\x14\x02\x02\xB3!\x03\x02\x02\x02\x16$(-6" +
		":CGKW^fmpx}\x84\x95\x9F\xA7\xAE";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PlatformerParser.__ATN) {
			PlatformerParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PlatformerParser._serializedATN));
		}

		return PlatformerParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public entities(): EntitiesContext {
		return this.getRuleContext(0, EntitiesContext);
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
	public level_entities(): Level_entitiesContext {
		return this.getRuleContext(0, Level_entitiesContext);
	}
	public level_cond(): Level_condContext {
		return this.getRuleContext(0, Level_condContext);
	}
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
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
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


export class Level_entitiesContext extends ParserRuleContext {
	public component(): ComponentContext {
		return this.getRuleContext(0, ComponentContext);
	}
	public COLON(): TerminalNode { return this.getToken(PlatformerParser.COLON, 0); }
	public list(): ListContext {
		return this.getRuleContext(0, ListContext);
	}
	public STMT_NEWLINE(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.STMT_NEWLINE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_level_entities; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterLevel_entities) {
			listener.enterLevel_entities(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitLevel_entities) {
			listener.exitLevel_entities(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitLevel_entities) {
			return visitor.visitLevel_entities(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntitiesContext extends ParserRuleContext {
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
	public entity_bod(): Entity_bodContext[];
	public entity_bod(i: number): Entity_bodContext;
	public entity_bod(i?: number): Entity_bodContext | Entity_bodContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Entity_bodContext);
		} else {
			return this.getRuleContext(i, Entity_bodContext);
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
	public get ruleIndex(): number { return PlatformerParser.RULE_entities; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterEntities) {
			listener.enterEntities(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitEntities) {
			listener.exitEntities(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitEntities) {
			return visitor.visitEntities(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Entity_bodContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(PlatformerParser.OPEN_BRACE, 0); }
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
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
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
	public get ruleIndex(): number { return PlatformerParser.RULE_entity_bod; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterEntity_bod) {
			listener.enterEntity_bod(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitEntity_bod) {
			listener.exitEntity_bod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitEntity_bod) {
			return visitor.visitEntity_bod(this);
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


export class ListContext extends ParserRuleContext {
	public OPEN_SQUARE(): TerminalNode { return this.getToken(PlatformerParser.OPEN_SQUARE, 0); }
	public list_object(): List_objectContext[];
	public list_object(i: number): List_objectContext;
	public list_object(i?: number): List_objectContext | List_objectContext[] {
		if (i === undefined) {
			return this.getRuleContexts(List_objectContext);
		} else {
			return this.getRuleContext(i, List_objectContext);
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
	public get ruleIndex(): number { return PlatformerParser.RULE_list; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
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
	public list_object(): List_objectContext | undefined {
		return this.tryGetRuleContext(0, List_objectContext);
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


export class List_objectContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return PlatformerParser.RULE_list_object; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterList_object) {
			listener.enterList_object(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitList_object) {
			listener.exitList_object(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitList_object) {
			return visitor.visitList_object(this);
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


