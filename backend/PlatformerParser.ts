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
	public static readonly RULE_entity_bod = 5;
	public static readonly RULE_player = 6;
	public static readonly RULE_entity = 7;
	public static readonly RULE_statement = 8;
	public static readonly RULE_property = 9;
	public static readonly RULE_list = 10;
	public static readonly RULE_component = 11;
	public static readonly RULE_value = 12;
	public static readonly RULE_list_object = 13;
	public static readonly RULE_exp = 14;
	public static readonly RULE_op = 15;
	public static readonly RULE_varname = 16;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "level", "level_body", "level_cond", "level_entities", "entity_bod", 
		"player", "entity", "statement", "property", "list", "component", "value", 
		"list_object", "exp", "op", "varname",
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
			this.player();
			this.state = 36;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 35;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
				break;
			}
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PlatformerParser.ENEMY) | (1 << PlatformerParser.DOOR) | (1 << PlatformerParser.TERRAIN) | (1 << PlatformerParser.BUTTON))) !== 0)) {
				{
				{
				this.state = 38;
				this.entity();
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 44;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 47;
			this.level();
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.LEVEL || _la === PlatformerParser.STMT_NEWLINE) {
				{
				{
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PlatformerParser.STMT_NEWLINE) {
					{
					this.state = 48;
					this.match(PlatformerParser.STMT_NEWLINE);
					}
				}

				this.state = 51;
				this.level();
				}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 57;
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
			this.state = 59;
			this.match(PlatformerParser.LEVEL);
			this.state = 60;
			this.match(PlatformerParser.NAME);
			this.state = 61;
			this.match(PlatformerParser.OPEN_BRACE);
			this.state = 63;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 62;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
				break;
			}
			this.state = 65;
			this.level_body();
			this.state = 67;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 66;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 69;
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
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.NAME) {
				{
				{
				this.state = 71;
				this.statement();
				this.state = 72;
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
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
			this.level_entities();
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 83;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 86;
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
			this.state = 88;
			this.match(PlatformerParser.IF);
			this.state = 89;
			this.match(PlatformerParser.OPEN_PAREN);
			this.state = 90;
			this.varname();
			this.state = 91;
			this.op();
			this.state = 92;
			this.exp();
			this.state = 93;
			this.match(PlatformerParser.CLOSE_PAREN);
			this.state = 94;
			this.match(PlatformerParser.OPEN_BRACE);
			this.state = 96;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 95;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.NAME) {
				{
				{
				this.state = 98;
				this.statement();
				this.state = 99;
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
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 106;
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
			this.state = 108;
			this.component();
			this.state = 109;
			this.match(PlatformerParser.COLON);
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 110;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 113;
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
	public entity_bod(): Entity_bodContext {
		let _localctx: Entity_bodContext = new Entity_bodContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PlatformerParser.RULE_entity_bod);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(PlatformerParser.OPEN_BRACE);
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 116;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.NAME) {
				{
				{
				this.state = 119;
				this.statement();
				this.state = 120;
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
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 127;
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
	public player(): PlayerContext {
		let _localctx: PlayerContext = new PlayerContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, PlatformerParser.RULE_player);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.match(PlatformerParser.PLAYER);
			this.state = 130;
			this.match(PlatformerParser.NAME);
			this.state = 131;
			this.entity_bod();
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
	public entity(): EntityContext {
		let _localctx: EntityContext = new EntityContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, PlatformerParser.RULE_entity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.component();
			this.state = 134;
			this.match(PlatformerParser.NAME);
			this.state = 135;
			this.entity_bod();
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
		this.enterRule(_localctx, 16, PlatformerParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.property();
			this.state = 138;
			this.match(PlatformerParser.COLON);
			this.state = 139;
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
		this.enterRule(_localctx, 18, PlatformerParser.RULE_property);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
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
		this.enterRule(_localctx, 20, PlatformerParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 143;
			this.match(PlatformerParser.OPEN_SQUARE);
			this.state = 144;
			this.list_object();
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.COMMA) {
				{
				{
				this.state = 145;
				this.match(PlatformerParser.COMMA);
				this.state = 146;
				this.list_object();
				}
				}
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 152;
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
			this.state = 154;
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
			this.state = 159;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PlatformerParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 156;
				this.varname();
				}
				break;
			case PlatformerParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 157;
				this.match(PlatformerParser.CONST);
				}
				break;
			case PlatformerParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 158;
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
		this.enterRule(_localctx, 26, PlatformerParser.RULE_list_object);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.match(PlatformerParser.OPEN_PAREN);
			this.state = 162;
			this.exp();
			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.COMMA) {
				{
				{
				this.state = 163;
				this.match(PlatformerParser.COMMA);
				this.state = 164;
				this.exp();
				}
				}
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 170;
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
			this.state = 174;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PlatformerParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 172;
				this.varname();
				}
				break;
			case PlatformerParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 173;
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
			this.state = 176;
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
			this.state = 178;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03!\xB7\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
		"\x02\x03\x02\x05\x02\'\n\x02\x03\x02\x07\x02*\n\x02\f\x02\x0E\x02-\v\x02" +
		"\x03\x02\x05\x020\n\x02\x03\x02\x03\x02\x05\x024\n\x02\x03\x02\x07\x02" +
		"7\n\x02\f\x02\x0E\x02:\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03B\n\x03\x03\x03\x03\x03\x05\x03F\n\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x07\x04M\n\x04\f\x04\x0E\x04P\v\x04\x03\x04\x05\x04" +
		"S\n\x04\x03\x04\x03\x04\x05\x04W\n\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05c\n\x05\x03\x05" +
		"\x03\x05\x03\x05\x07\x05h\n\x05\f\x05\x0E\x05k\v\x05\x03\x05\x03\x05\x03" +
		"\x06\x03\x06\x03\x06\x05\x06r\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x05" +
		"\x07x\n\x07\x03\x07\x03\x07\x03\x07\x07\x07}\n\x07\f\x07\x0E\x07\x80\v" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x07\f\x96\n\f" +
		"\f\f\x0E\f\x99\v\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\xA2\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xA8\n\x0F\f\x0F" +
		"\x0E\x0F\xAB\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\xB1\n\x10\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x12\x02\x02\x02\x13\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02\x02\x05\x04\x02\x13\x13!!\x04\x02" +
		"\x05\x07\t\t\x03\x02\x1B\x1D\x02\xB9\x02$\x03\x02\x02\x02\x04=\x03\x02" +
		"\x02\x02\x06N\x03\x02\x02\x02\bZ\x03\x02\x02\x02\nn\x03\x02\x02\x02\f" +
		"u\x03\x02\x02\x02\x0E\x83\x03\x02\x02\x02\x10\x87\x03\x02\x02\x02\x12" +
		"\x8B\x03\x02\x02\x02\x14\x8F\x03\x02\x02\x02\x16\x91\x03\x02\x02\x02\x18" +
		"\x9C\x03\x02\x02\x02\x1A\xA1\x03\x02\x02\x02\x1C\xA3\x03\x02\x02\x02\x1E" +
		"\xB0\x03\x02\x02\x02 \xB2\x03\x02\x02\x02\"\xB4\x03\x02\x02\x02$&\x05" +
		"\x0E\b\x02%\'\x07\x13\x02\x02&%\x03\x02\x02\x02&\'\x03\x02\x02\x02\'+" +
		"\x03\x02\x02\x02(*\x05\x10\t\x02)(\x03\x02\x02\x02*-\x03\x02\x02\x02+" +
		")\x03\x02\x02\x02+,\x03\x02\x02\x02,/\x03\x02\x02\x02-+\x03\x02\x02\x02" +
		".0\x07\x13\x02\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03\x02\x02\x02" +
		"18\x05\x04\x03\x0224\x07\x13\x02\x0232\x03\x02\x02\x0234\x03\x02\x02\x02" +
		"45\x03\x02\x02\x0257\x05\x04\x03\x0263\x03\x02\x02\x027:\x03\x02\x02\x02" +
		"86\x03\x02\x02\x0289\x03\x02\x02\x029;\x03\x02\x02\x02:8\x03\x02\x02\x02" +
		";<\x07\x02\x02\x03<\x03\x03\x02\x02\x02=>\x07\v\x02\x02>?\x07\x14\x02" +
		"\x02?A\x07\x11\x02\x02@B\x07\x13\x02\x02A@\x03\x02\x02\x02AB\x03\x02\x02" +
		"\x02BC\x03\x02\x02\x02CE\x05\x06\x04\x02DF\x07\x13\x02\x02ED\x03\x02\x02" +
		"\x02EF\x03\x02\x02\x02FG\x03\x02\x02\x02GH\x07\x12\x02\x02H\x05\x03\x02" +
		"\x02\x02IJ\x05\x12\n\x02JK\t\x02\x02\x02KM\x03\x02\x02\x02LI\x03\x02\x02" +
		"\x02MP\x03\x02\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02OR\x03\x02\x02" +
		"\x02PN\x03\x02\x02\x02QS\x07\x13\x02\x02RQ\x03\x02\x02\x02RS\x03\x02\x02" +
		"\x02ST\x03\x02\x02\x02TV\x05\n\x06\x02UW\x07\x13\x02\x02VU\x03\x02\x02" +
		"\x02VW\x03\x02\x02\x02WX\x03\x02\x02\x02XY\x05\b\x05\x02Y\x07\x03\x02" +
		"\x02\x02Z[\x07\r\x02\x02[\\\x07\x17\x02\x02\\]\x05\"\x12\x02]^\x05 \x11" +
		"\x02^_\x05\x1E\x10\x02_`\x07\x18\x02\x02`b\x07\x11\x02\x02ac\x07\x13\x02" +
		"\x02ba\x03\x02\x02\x02bc\x03\x02\x02\x02ci\x03\x02\x02\x02de\x05\x12\n" +
		"\x02ef\t\x02\x02\x02fh\x03\x02\x02\x02gd\x03\x02\x02\x02hk\x03\x02\x02" +
		"\x02ig\x03\x02\x02\x02ij\x03\x02\x02\x02jl\x03\x02\x02\x02ki\x03\x02\x02" +
		"\x02lm\x07\x12\x02\x02m\t\x03\x02\x02\x02no\x05\x18\r\x02oq\x07\x1F\x02" +
		"\x02pr\x07\x13\x02\x02qp\x03\x02\x02\x02qr\x03\x02\x02\x02rs\x03\x02\x02" +
		"\x02st\x05\x16\f\x02t\v\x03\x02\x02\x02uw\x07\x11\x02\x02vx\x07\x13\x02" +
		"\x02wv\x03\x02\x02\x02wx\x03\x02\x02\x02x~\x03\x02\x02\x02yz\x05\x12\n" +
		"\x02z{\t\x02\x02\x02{}\x03\x02\x02\x02|y\x03\x02\x02\x02}\x80\x03\x02" +
		"\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x81\x03\x02\x02\x02" +
		"\x80~\x03\x02\x02\x02\x81\x82\x07\x12\x02\x02\x82\r\x03\x02\x02\x02\x83" +
		"\x84\x07\x04\x02\x02\x84\x85\x07\x14\x02\x02\x85\x86\x05\f\x07\x02\x86" +
		"\x0F\x03\x02\x02\x02\x87\x88\x05\x18\r\x02\x88\x89\x07\x14\x02\x02\x89" +
		"\x8A\x05\f\x07\x02\x8A\x11\x03\x02\x02\x02\x8B\x8C\x05\x14\v\x02\x8C\x8D" +
		"\x07\x1F\x02\x02\x8D\x8E\x05\x1A\x0E\x02\x8E\x13\x03\x02\x02\x02\x8F\x90" +
		"\x07\x14\x02\x02\x90\x15\x03\x02\x02\x02\x91\x92\x07\x19\x02\x02\x92\x97" +
		"\x05\x1C\x0F\x02\x93\x94\x07\x16\x02\x02\x94\x96\x05\x1C\x0F\x02\x95\x93" +
		"\x03\x02\x02\x02\x96\x99\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98" +
		"\x03\x02\x02\x02\x98\x9A\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x9B" +
		"\x07\x1A\x02\x02\x9B\x17\x03\x02\x02\x02\x9C\x9D\t\x03\x02\x02\x9D\x19" +
		"\x03\x02\x02\x02\x9E\xA2\x05\"\x12\x02\x9F\xA2\x07\x15\x02\x02\xA0\xA2" +
		"\x05\x1C\x0F\x02\xA1\x9E\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA1\xA0" +
		"\x03\x02\x02\x02\xA2\x1B\x03\x02\x02\x02\xA3\xA4\x07\x17\x02\x02\xA4\xA9" +
		"\x05\x1E\x10\x02\xA5\xA6\x07\x16\x02\x02\xA6\xA8\x05\x1E\x10\x02\xA7\xA5" +
		"\x03\x02\x02\x02\xA8\xAB\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xAA" +
		"\x03\x02\x02\x02\xAA\xAC\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAD" +
		"\x07\x18\x02\x02\xAD\x1D\x03\x02\x02\x02\xAE\xB1\x05\"\x12\x02\xAF\xB1" +
		"\x07\x15\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xAF\x03\x02\x02\x02\xB1\x1F" +
		"\x03\x02\x02\x02\xB2\xB3\t\x04\x02\x02\xB3!\x03\x02\x02\x02\xB4\xB5\x07" +
		"\x14\x02\x02\xB5#\x03\x02\x02\x02\x15&+/38AENRVbiqw~\x97\xA1\xA9\xB0";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PlatformerParser.__ATN) {
			PlatformerParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PlatformerParser._serializedATN));
		}

		return PlatformerParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public player(): PlayerContext {
		return this.getRuleContext(0, PlayerContext);
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
	public entity(): EntityContext[];
	public entity(i: number): EntityContext;
	public entity(i?: number): EntityContext | EntityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EntityContext);
		} else {
			return this.getRuleContext(i, EntityContext);
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


export class PlayerContext extends ParserRuleContext {
	public PLAYER(): TerminalNode { return this.getToken(PlatformerParser.PLAYER, 0); }
	public NAME(): TerminalNode { return this.getToken(PlatformerParser.NAME, 0); }
	public entity_bod(): Entity_bodContext {
		return this.getRuleContext(0, Entity_bodContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_player; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterPlayer) {
			listener.enterPlayer(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitPlayer) {
			listener.exitPlayer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitPlayer) {
			return visitor.visitPlayer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EntityContext extends ParserRuleContext {
	public component(): ComponentContext {
		return this.getRuleContext(0, ComponentContext);
	}
	public NAME(): TerminalNode { return this.getToken(PlatformerParser.NAME, 0); }
	public entity_bod(): Entity_bodContext {
		return this.getRuleContext(0, Entity_bodContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_entity; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterEntity) {
			listener.enterEntity(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitEntity) {
			listener.exitEntity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitEntity) {
			return visitor.visitEntity(this);
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


