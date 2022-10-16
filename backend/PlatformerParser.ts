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
	public static readonly COMPONENT = 2;
	public static readonly OP = 3;
	public static readonly PLAYER = 4;
	public static readonly ENEMY = 5;
	public static readonly DOOR = 6;
	public static readonly TERRAIN = 7;
	public static readonly PLATFORM = 8;
	public static readonly BUTTON = 9;
	public static readonly COIN = 10;
	public static readonly LEVEL = 11;
	public static readonly CHECKS = 12;
	public static readonly IF = 13;
	public static readonly ADD = 14;
	public static readonly REMOVE = 15;
	public static readonly LOGIC = 16;
	public static readonly STMT_NEWLINE = 17;
	public static readonly NAME = 18;
	public static readonly CONST = 19;
	public static readonly COMMA = 20;
	public static readonly OPEN_BRACE = 21;
	public static readonly CLOSE_BRACE = 22;
	public static readonly OPEN_PAREN = 23;
	public static readonly CLOSE_PAREN = 24;
	public static readonly OPEN_SQUARE = 25;
	public static readonly CLOSED_SQUARE = 26;
	public static readonly SEMICOLON = 27;
	public static readonly COLON = 28;
	public static readonly LITERAL = 29;
	public static readonly LINK = 30;
	public static readonly SPACE = 31;
	public static readonly NEWLINE = 32;
	public static readonly RULE_program = 0;
	public static readonly RULE_level = 1;
	public static readonly RULE_level_body = 2;
	public static readonly RULE_level_cond = 3;
	public static readonly RULE_condition = 4;
	public static readonly RULE_level_entity = 5;
	public static readonly RULE_entity_bod = 6;
	public static readonly RULE_player = 7;
	public static readonly RULE_entity = 8;
	public static readonly RULE_cond_statement = 9;
	public static readonly RULE_statement = 10;
	public static readonly RULE_list = 11;
	public static readonly RULE_value = 12;
	public static readonly RULE_list_object = 13;
	public static readonly RULE_exp = 14;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "level", "level_body", "level_cond", "condition", "level_entity", 
		"entity_bod", "player", "entity", "cond_statement", "statement", "list", 
		"value", "list_object", "exp",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'Player'", "'Enemy'", "'Door'", 
		"'Terrain'", "'Platform'", "'Button'", "'Coin'", "'Level'", "'Checks'", 
		"'IF'", undefined, undefined, undefined, undefined, undefined, undefined, 
		"','", "'{'", "'}'", "'('", "')'", "'['", "']'", "';'", "':'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LEADING_SPACE", "COMPONENT", "OP", "PLAYER", "ENEMY", "DOOR", 
		"TERRAIN", "PLATFORM", "BUTTON", "COIN", "LEVEL", "CHECKS", "IF", "ADD", 
		"REMOVE", "LOGIC", "STMT_NEWLINE", "NAME", "CONST", "COMMA", "OPEN_BRACE", 
		"CLOSE_BRACE", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", 
		"SEMICOLON", "COLON", "LITERAL", "LINK", "SPACE", "NEWLINE",
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
			this.state = 30;
			this.player();
			this.state = 32;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 31;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.COMPONENT) {
				{
				{
				this.state = 34;
				this.entity();
				this.state = 35;
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
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 42;
				this.level();
				this.state = 43;
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
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === PlatformerParser.LEVEL);
			this.state = 49;
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
			this.state = 51;
			this.match(PlatformerParser.LEVEL);
			this.state = 52;
			this.match(PlatformerParser.NAME);
			this.state = 53;
			this.match(PlatformerParser.OPEN_BRACE);
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 54;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 57;
			this.level_body();
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 58;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 61;
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
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.NAME) {
				{
				{
				this.state = 63;
				this.statement();
				this.state = 64;
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
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.COMPONENT) {
				{
				{
				this.state = 71;
				this.level_entity();
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PlatformerParser.STMT_NEWLINE || _la === PlatformerParser.NEWLINE) {
					{
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

				}
				}
				this.state = 79;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 80;
			this.match(PlatformerParser.CHECKS);
			this.state = 81;
			this.match(PlatformerParser.COLON);
			this.state = 82;
			this.match(PlatformerParser.OPEN_SQUARE);
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE || _la === PlatformerParser.NEWLINE) {
				{
				this.state = 83;
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

			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.IF) {
				{
				{
				this.state = 86;
				this.level_cond();
				this.state = 87;
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
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 94;
			this.match(PlatformerParser.CLOSED_SQUARE);
			this.state = 95;
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
			this.state = 97;
			this.match(PlatformerParser.IF);
			this.state = 98;
			this.match(PlatformerParser.COLON);
			this.state = 99;
			this.match(PlatformerParser.OPEN_PAREN);
			this.state = 100;
			this.condition();
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.LOGIC) {
				{
				this.state = 101;
				this.match(PlatformerParser.LOGIC);
				this.state = 102;
				this.condition();
				}
			}

			this.state = 105;
			this.match(PlatformerParser.CLOSE_PAREN);
			this.state = 106;
			this.match(PlatformerParser.OPEN_BRACE);
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 107;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.COMPONENT) {
				{
				{
				this.state = 110;
				this.cond_statement();
				this.state = 111;
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
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 118;
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
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, PlatformerParser.RULE_condition);
		try {
			this.state = 124;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 120;
				this.match(PlatformerParser.NAME);
				this.state = 121;
				this.match(PlatformerParser.OP);
				this.state = 122;
				this.exp();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 123;
				this.match(PlatformerParser.NAME);
				}
				break;
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
	public level_entity(): Level_entityContext {
		let _localctx: Level_entityContext = new Level_entityContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, PlatformerParser.RULE_level_entity);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.match(PlatformerParser.COMPONENT);
			this.state = 127;
			this.match(PlatformerParser.COLON);
			this.state = 128;
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
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.NAME) {
				{
				{
				this.state = 129;
				this.statement();
				this.state = 130;
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
				this.state = 136;
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
			this.state = 137;
			this.match(PlatformerParser.OPEN_BRACE);
			this.state = 138;
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
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.NAME) {
				{
				{
				this.state = 139;
				this.statement();
				this.state = 140;
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
				this.state = 146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 147;
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
		this.enterRule(_localctx, 14, PlatformerParser.RULE_player);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.match(PlatformerParser.PLAYER);
			this.state = 150;
			this.match(PlatformerParser.NAME);
			this.state = 151;
			this.match(PlatformerParser.COLON);
			this.state = 152;
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
		this.enterRule(_localctx, 16, PlatformerParser.RULE_entity);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 154;
			this.match(PlatformerParser.COMPONENT);
			this.state = 155;
			this.match(PlatformerParser.NAME);
			this.state = 156;
			this.match(PlatformerParser.COLON);
			this.state = 157;
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
	public cond_statement(): Cond_statementContext {
		let _localctx: Cond_statementContext = new Cond_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, PlatformerParser.RULE_cond_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 159;
			this.match(PlatformerParser.COMPONENT);
			this.state = 160;
			this.match(PlatformerParser.COLON);
			this.state = 161;
			_la = this._input.LA(1);
			if (!(_la === PlatformerParser.ADD || _la === PlatformerParser.REMOVE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 162;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, PlatformerParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(PlatformerParser.NAME);
			this.state = 165;
			this.match(PlatformerParser.COLON);
			this.state = 166;
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
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, PlatformerParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 168;
			this.match(PlatformerParser.OPEN_SQUARE);
			this.state = 170;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE || _la === PlatformerParser.NEWLINE) {
				{
				this.state = 169;
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

			this.state = 172;
			this.list_object();
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.COMMA) {
				{
				{
				this.state = 173;
				this.match(PlatformerParser.COMMA);
				this.state = 174;
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
				this.state = 175;
				this.list_object();
				}
				}
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE || _la === PlatformerParser.NEWLINE) {
				{
				this.state = 181;
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

			this.state = 184;
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, PlatformerParser.RULE_value);
		try {
			this.state = 192;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PlatformerParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 186;
				this.match(PlatformerParser.NAME);
				}
				break;
			case PlatformerParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 187;
				this.match(PlatformerParser.CONST);
				}
				break;
			case PlatformerParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 188;
				this.list_object();
				}
				break;
			case PlatformerParser.LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 189;
				this.match(PlatformerParser.LITERAL);
				}
				break;
			case PlatformerParser.LINK:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 190;
				this.match(PlatformerParser.LINK);
				}
				break;
			case PlatformerParser.OPEN_SQUARE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 191;
				this.list();
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
			this.state = 194;
			this.match(PlatformerParser.OPEN_PAREN);
			this.state = 195;
			this.exp();
			this.state = 200;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.COMMA) {
				{
				{
				this.state = 196;
				this.match(PlatformerParser.COMMA);
				this.state = 197;
				this.exp();
				}
				}
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 203;
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
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
			_la = this._input.LA(1);
			if (!(_la === PlatformerParser.NAME || _la === PlatformerParser.CONST)) {
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\"\xD2\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x03\x02\x05\x02#\n\x02" +
		"\x03\x02\x03\x02\x03\x02\x07\x02(\n\x02\f\x02\x0E\x02+\v\x02\x03\x02\x03" +
		"\x02\x03\x02\x06\x020\n\x02\r\x02\x0E\x021\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03:\n\x03\x03\x03\x03\x03\x05\x03>\n\x03\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04E\n\x04\f\x04\x0E\x04H\v\x04" +
		"\x03\x04\x03\x04\x05\x04L\n\x04\x07\x04N\n\x04\f\x04\x0E\x04Q\v\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x05\x04W\n\x04\x03\x04\x03\x04\x03\x04\x07" +
		"\x04\\\n\x04\f\x04\x0E\x04_\v\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05j\n\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05o\n\x05\x03\x05\x03\x05\x03\x05\x07\x05t\n\x05\f\x05\x0E\x05" +
		"w\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x7F\n" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x87\n\x07" +
		"\f\x07\x0E\x07\x8A\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\x91\n\b\f" +
		"\b\x0E\b\x94\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\f\x03\r\x03\r\x05\r\xAD\n\r\x03\r\x03\r\x03\r\x03\r\x07\r\xB3\n\r\f\r" +
		"\x0E\r\xB6\v\r\x03\r\x05\r\xB9\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xC3\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x07\x0F\xC9\n\x0F\f\x0F\x0E\x0F\xCC\v\x0F\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x10\x02\x02\x02\x11\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02\x02\x05\x04\x02\x13\x13\"\"\x03\x02\x10\x11\x03\x02\x14\x15\x02\xDB" +
		"\x02 \x03\x02\x02\x02\x045\x03\x02\x02\x02\x06F\x03\x02\x02\x02\bc\x03" +
		"\x02\x02\x02\n~\x03\x02\x02\x02\f\x80\x03\x02\x02\x02\x0E\x8B\x03\x02" +
		"\x02\x02\x10\x97\x03\x02\x02\x02\x12\x9C\x03\x02\x02\x02\x14\xA1\x03\x02" +
		"\x02\x02\x16\xA6\x03\x02\x02\x02\x18\xAA\x03\x02\x02\x02\x1A\xC2\x03\x02" +
		"\x02\x02\x1C\xC4\x03\x02\x02\x02\x1E\xCF\x03\x02\x02\x02 \"\x05\x10\t" +
		"\x02!#\x07\x13\x02\x02\"!\x03\x02\x02\x02\"#\x03\x02\x02\x02#)\x03\x02" +
		"\x02\x02$%\x05\x12\n\x02%&\t\x02\x02\x02&(\x03\x02\x02\x02\'$\x03\x02" +
		"\x02\x02(+\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02*/\x03" +
		"\x02\x02\x02+)\x03\x02\x02\x02,-\x05\x04\x03\x02-.\t\x02\x02\x02.0\x03" +
		"\x02\x02\x02/,\x03\x02\x02\x0201\x03\x02\x02\x021/\x03\x02\x02\x0212\x03" +
		"\x02\x02\x0223\x03\x02\x02\x0234\x07\x02\x02\x034\x03\x03\x02\x02\x02" +
		"56\x07\r\x02\x0267\x07\x14\x02\x0279\x07\x17\x02\x028:\x07\x13\x02\x02" +
		"98\x03\x02\x02\x029:\x03\x02\x02\x02:;\x03\x02\x02\x02;=\x05\x06\x04\x02" +
		"<>\x07\x13\x02\x02=<\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x03\x02\x02\x02" +
		"?@\x07\x18\x02\x02@\x05\x03\x02\x02\x02AB\x05\x16\f\x02BC\t\x02\x02\x02" +
		"CE\x03\x02\x02\x02DA\x03\x02\x02\x02EH\x03\x02\x02\x02FD\x03\x02\x02\x02" +
		"FG\x03\x02\x02\x02GO\x03\x02\x02\x02HF\x03\x02\x02\x02IK\x05\f\x07\x02" +
		"JL\t\x02\x02\x02KJ\x03\x02\x02\x02KL\x03\x02\x02\x02LN\x03\x02\x02\x02" +
		"MI\x03\x02\x02\x02NQ\x03\x02\x02\x02OM\x03\x02\x02\x02OP\x03\x02\x02\x02" +
		"PR\x03\x02\x02\x02QO\x03\x02\x02\x02RS\x07\x0E\x02\x02ST\x07\x1E\x02\x02" +
		"TV\x07\x1B\x02\x02UW\t\x02\x02\x02VU\x03\x02\x02\x02VW\x03\x02\x02\x02" +
		"W]\x03\x02\x02\x02XY\x05\b\x05\x02YZ\t\x02\x02\x02Z\\\x03\x02\x02\x02" +
		"[X\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02" +
		"\x02^`\x03\x02\x02\x02_]\x03\x02\x02\x02`a\x07\x1C\x02\x02ab\t\x02\x02" +
		"\x02b\x07\x03\x02\x02\x02cd\x07\x0F\x02\x02de\x07\x1E\x02\x02ef\x07\x19" +
		"\x02\x02fi\x05\n\x06\x02gh\x07\x12\x02\x02hj\x05\n\x06\x02ig\x03\x02\x02" +
		"\x02ij\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x07\x1A\x02\x02ln\x07\x17\x02" +
		"\x02mo\x07\x13\x02\x02nm\x03\x02\x02\x02no\x03\x02\x02\x02ou\x03\x02\x02" +
		"\x02pq\x05\x14\v\x02qr\t\x02\x02\x02rt\x03\x02\x02\x02sp\x03\x02\x02\x02" +
		"tw\x03\x02\x02\x02us\x03\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02\x02\x02" +
		"wu\x03\x02\x02\x02xy\x07\x18\x02\x02y\t\x03\x02\x02\x02z{\x07\x14\x02" +
		"\x02{|\x07\x05\x02\x02|\x7F\x05\x1E\x10\x02}\x7F\x07\x14\x02\x02~z\x03" +
		"\x02\x02\x02~}\x03\x02\x02\x02\x7F\v\x03\x02\x02\x02\x80\x81\x07\x04\x02" +
		"\x02\x81\x82\x07\x1E\x02\x02\x82\x88\t\x02\x02\x02\x83\x84\x05\x16\f\x02" +
		"\x84\x85\t\x02\x02\x02\x85\x87\x03\x02\x02\x02\x86\x83\x03\x02\x02\x02" +
		"\x87\x8A\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02" +
		"\x89\r\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8B\x8C\x07\x17\x02\x02" +
		"\x8C\x92\t\x02\x02\x02\x8D\x8E\x05\x16\f\x02\x8E\x8F\t\x02\x02\x02\x8F" +
		"\x91\x03\x02\x02\x02\x90\x8D\x03\x02\x02\x02\x91\x94\x03\x02\x02\x02\x92" +
		"\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x95\x03\x02\x02\x02\x94" +
		"\x92\x03\x02\x02\x02\x95\x96\x07\x18\x02\x02\x96\x0F\x03\x02\x02\x02\x97" +
		"\x98\x07\x06\x02\x02\x98\x99\x07\x14\x02\x02\x99\x9A\x07\x1E\x02\x02\x9A" +
		"\x9B\x05\x0E\b\x02\x9B\x11\x03\x02\x02\x02\x9C\x9D\x07\x04\x02\x02\x9D" +
		"\x9E\x07\x14\x02\x02\x9E\x9F\x07\x1E\x02\x02\x9F\xA0\x05\x0E\b\x02\xA0" +
		"\x13\x03\x02\x02\x02\xA1\xA2\x07\x04\x02\x02\xA2\xA3\x07\x1E\x02\x02\xA3" +
		"\xA4\t\x03\x02\x02\xA4\xA5\x05\x1A\x0E\x02\xA5\x15\x03\x02\x02\x02\xA6" +
		"\xA7\x07\x14\x02\x02\xA7\xA8\x07\x1E\x02\x02\xA8\xA9\x05\x1A\x0E\x02\xA9" +
		"\x17\x03\x02\x02\x02\xAA\xAC\x07\x1B\x02\x02\xAB\xAD\t\x02\x02\x02\xAC" +
		"\xAB\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE" +
		"\xB4\x05\x1C\x0F\x02\xAF\xB0\x07\x16\x02\x02\xB0\xB1\t\x02\x02\x02\xB1" +
		"\xB3\x05\x1C\x0F\x02\xB2\xAF\x03\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4" +
		"\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB8\x03\x02\x02\x02\xB6" +
		"\xB4\x03\x02\x02\x02\xB7\xB9\t\x02\x02\x02\xB8\xB7\x03\x02\x02\x02\xB8" +
		"\xB9\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x07\x1C\x02\x02\xBB" +
		"\x19\x03\x02\x02\x02\xBC\xC3\x07\x14\x02\x02\xBD\xC3\x07\x15\x02\x02\xBE" +
		"\xC3\x05\x1C\x0F\x02\xBF\xC3\x07\x1F\x02\x02\xC0\xC3\x07 \x02\x02\xC1" +
		"\xC3\x05\x18\r\x02\xC2\xBC\x03\x02\x02\x02\xC2\xBD\x03\x02\x02\x02\xC2" +
		"\xBE\x03\x02\x02\x02\xC2\xBF\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02\xC2" +
		"\xC1\x03\x02\x02\x02\xC3\x1B\x03\x02\x02\x02\xC4\xC5\x07\x19\x02\x02\xC5" +
		"\xCA\x05\x1E\x10\x02\xC6\xC7\x07\x16\x02\x02\xC7\xC9\x05\x1E\x10\x02\xC8" +
		"\xC6\x03\x02\x02\x02\xC9\xCC\x03\x02\x02\x02\xCA\xC8\x03\x02\x02\x02\xCA" +
		"\xCB\x03\x02\x02\x02\xCB\xCD\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCD" +
		"\xCE\x07\x1A\x02\x02\xCE\x1D\x03\x02\x02\x02\xCF\xD0\t\x04\x02\x02\xD0" +
		"\x1F\x03\x02\x02\x02\x17\")19=FKOV]inu~\x88\x92\xAC\xB4\xB8\xC2\xCA";
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
	public level(): LevelContext[];
	public level(i: number): LevelContext;
	public level(i?: number): LevelContext | LevelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LevelContext);
		} else {
			return this.getRuleContext(i, LevelContext);
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
	public CHECKS(): TerminalNode { return this.getToken(PlatformerParser.CHECKS, 0); }
	public COLON(): TerminalNode { return this.getToken(PlatformerParser.COLON, 0); }
	public OPEN_SQUARE(): TerminalNode { return this.getToken(PlatformerParser.OPEN_SQUARE, 0); }
	public CLOSED_SQUARE(): TerminalNode { return this.getToken(PlatformerParser.CLOSED_SQUARE, 0); }
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
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public level_entity(): Level_entityContext[];
	public level_entity(i: number): Level_entityContext;
	public level_entity(i?: number): Level_entityContext | Level_entityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Level_entityContext);
		} else {
			return this.getRuleContext(i, Level_entityContext);
		}
	}
	public level_cond(): Level_condContext[];
	public level_cond(i: number): Level_condContext;
	public level_cond(i?: number): Level_condContext | Level_condContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Level_condContext);
		} else {
			return this.getRuleContext(i, Level_condContext);
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
	public COLON(): TerminalNode { return this.getToken(PlatformerParser.COLON, 0); }
	public OPEN_PAREN(): TerminalNode { return this.getToken(PlatformerParser.OPEN_PAREN, 0); }
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(PlatformerParser.CLOSE_PAREN, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(PlatformerParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(PlatformerParser.CLOSE_BRACE, 0); }
	public LOGIC(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.LOGIC, 0); }
	public STMT_NEWLINE(): TerminalNode[];
	public STMT_NEWLINE(i: number): TerminalNode;
	public STMT_NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PlatformerParser.STMT_NEWLINE);
		} else {
			return this.getToken(PlatformerParser.STMT_NEWLINE, i);
		}
	}
	public cond_statement(): Cond_statementContext[];
	public cond_statement(i: number): Cond_statementContext;
	public cond_statement(i?: number): Cond_statementContext | Cond_statementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cond_statementContext);
		} else {
			return this.getRuleContext(i, Cond_statementContext);
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


export class ConditionContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.NAME, 0); }
	public OP(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.OP, 0); }
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_condition; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitCondition) {
			return visitor.visitCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Level_entityContext extends ParserRuleContext {
	public COMPONENT(): TerminalNode { return this.getToken(PlatformerParser.COMPONENT, 0); }
	public COLON(): TerminalNode { return this.getToken(PlatformerParser.COLON, 0); }
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
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_level_entity; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterLevel_entity) {
			listener.enterLevel_entity(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitLevel_entity) {
			listener.exitLevel_entity(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitLevel_entity) {
			return visitor.visitLevel_entity(this);
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
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(PlatformerParser.NEWLINE);
		} else {
			return this.getToken(PlatformerParser.NEWLINE, i);
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
	public COLON(): TerminalNode { return this.getToken(PlatformerParser.COLON, 0); }
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
	public COMPONENT(): TerminalNode { return this.getToken(PlatformerParser.COMPONENT, 0); }
	public NAME(): TerminalNode { return this.getToken(PlatformerParser.NAME, 0); }
	public COLON(): TerminalNode { return this.getToken(PlatformerParser.COLON, 0); }
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


export class Cond_statementContext extends ParserRuleContext {
	public COMPONENT(): TerminalNode { return this.getToken(PlatformerParser.COMPONENT, 0); }
	public COLON(): TerminalNode { return this.getToken(PlatformerParser.COLON, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.ADD, 0); }
	public REMOVE(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.REMOVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return PlatformerParser.RULE_cond_statement; }
	// @Override
	public enterRule(listener: PlatformerParserListener): void {
		if (listener.enterCond_statement) {
			listener.enterCond_statement(this);
		}
	}
	// @Override
	public exitRule(listener: PlatformerParserListener): void {
		if (listener.exitCond_statement) {
			listener.exitCond_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: PlatformerParserVisitor<Result>): Result {
		if (visitor.visitCond_statement) {
			return visitor.visitCond_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(PlatformerParser.NAME, 0); }
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


export class ValueContext extends ParserRuleContext {
	public NAME(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.NAME, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.CONST, 0); }
	public list_object(): List_objectContext | undefined {
		return this.tryGetRuleContext(0, List_objectContext);
	}
	public LITERAL(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.LITERAL, 0); }
	public LINK(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.LINK, 0); }
	public list(): ListContext | undefined {
		return this.tryGetRuleContext(0, ListContext);
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
	public NAME(): TerminalNode | undefined { return this.tryGetToken(PlatformerParser.NAME, 0); }
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


