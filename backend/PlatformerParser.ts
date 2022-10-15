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
	public static readonly PLAYER = 3;
	public static readonly ENEMY = 4;
	public static readonly DOOR = 5;
	public static readonly TERRAIN = 6;
	public static readonly PLATFORM = 7;
	public static readonly BUTTON = 8;
	public static readonly COIN = 9;
	public static readonly LEVEL = 10;
	public static readonly CHECKS = 11;
	public static readonly IF = 12;
	public static readonly ADD = 13;
	public static readonly REMOVE = 14;
	public static readonly LOGIC = 15;
	public static readonly STMT_NEWLINE = 16;
	public static readonly NAME = 17;
	public static readonly CONST = 18;
	public static readonly COMMA = 19;
	public static readonly OPEN_BRACE = 20;
	public static readonly CLOSE_BRACE = 21;
	public static readonly OPEN_PAREN = 22;
	public static readonly CLOSE_PAREN = 23;
	public static readonly OPEN_SQUARE = 24;
	public static readonly CLOSED_SQUARE = 25;
	public static readonly LARGER = 26;
	public static readonly SMALLER = 27;
	public static readonly EQUAL = 28;
	public static readonly SEMICOLON = 29;
	public static readonly COLON = 30;
	public static readonly LITERAL = 31;
	public static readonly LINK = 32;
	public static readonly SPACE = 33;
	public static readonly NEWLINE = 34;
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
	public static readonly RULE_op = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "level", "level_body", "level_cond", "condition", "level_entity", 
		"entity_bod", "player", "entity", "cond_statement", "statement", "list", 
		"value", "list_object", "exp", "op",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'Player'", "'Enemy'", "'Door'", "'Terrain'", 
		"'Platform'", "'Button'", "'Coin'", "'Level'", "'Checks'", "'IF'", undefined, 
		undefined, undefined, undefined, undefined, undefined, "','", "'{'", "'}'", 
		"'('", "')'", "'['", "']'", "'>'", "'<'", "'='", "';'", "':'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LEADING_SPACE", "COMPONENT", "PLAYER", "ENEMY", "DOOR", "TERRAIN", 
		"PLATFORM", "BUTTON", "COIN", "LEVEL", "CHECKS", "IF", "ADD", "REMOVE", 
		"LOGIC", "STMT_NEWLINE", "NAME", "CONST", "COMMA", "OPEN_BRACE", "CLOSE_BRACE", 
		"OPEN_PAREN", "CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", "LARGER", 
		"SMALLER", "EQUAL", "SEMICOLON", "COLON", "LITERAL", "LINK", "SPACE", 
		"NEWLINE",
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
			this.player();
			this.state = 34;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 33;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.COMPONENT) {
				{
				{
				this.state = 36;
				this.entity();
				this.state = 37;
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
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.LEVEL) {
				{
				{
				this.state = 44;
				this.level();
				this.state = 45;
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
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 52;
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
			this.state = 54;
			this.match(PlatformerParser.LEVEL);
			this.state = 55;
			this.match(PlatformerParser.NAME);
			this.state = 56;
			this.match(PlatformerParser.OPEN_BRACE);
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
			this.level_body();
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 61;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 64;
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
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.NAME) {
				{
				{
				this.state = 66;
				this.statement();
				this.state = 67;
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
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.COMPONENT) {
				{
				{
				this.state = 74;
				this.level_entity();
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === PlatformerParser.STMT_NEWLINE || _la === PlatformerParser.NEWLINE) {
					{
					this.state = 75;
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
				this.state = 82;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 83;
			this.match(PlatformerParser.CHECKS);
			this.state = 84;
			this.match(PlatformerParser.COLON);
			this.state = 85;
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
			this.state = 94;
			this.match(PlatformerParser.IF);
			this.state = 95;
			this.match(PlatformerParser.COLON);
			this.state = 96;
			this.match(PlatformerParser.OPEN_PAREN);
			this.state = 97;
			this.condition();
			this.state = 100;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.LOGIC) {
				{
				this.state = 98;
				this.match(PlatformerParser.LOGIC);
				this.state = 99;
				this.condition();
				}
			}

			this.state = 102;
			this.match(PlatformerParser.CLOSE_PAREN);
			this.state = 103;
			this.match(PlatformerParser.OPEN_BRACE);
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE) {
				{
				this.state = 104;
				this.match(PlatformerParser.STMT_NEWLINE);
				}
			}

			this.state = 112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.NAME) {
				{
				{
				this.state = 107;
				this.cond_statement();
				this.state = 108;
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
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 115;
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
			this.state = 122;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 117;
				this.match(PlatformerParser.NAME);
				this.state = 118;
				this.op();
				this.state = 119;
				this.exp();
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 121;
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
			this.state = 124;
			this.match(PlatformerParser.COMPONENT);
			this.state = 125;
			this.match(PlatformerParser.COLON);
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
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.NAME) {
				{
				{
				this.state = 127;
				this.statement();
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
				}
				}
				this.state = 134;
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
			this.state = 135;
			this.match(PlatformerParser.OPEN_BRACE);
			this.state = 136;
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
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.NAME) {
				{
				{
				this.state = 137;
				this.statement();
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
				}
				}
				this.state = 144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 145;
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
			this.state = 147;
			this.match(PlatformerParser.PLAYER);
			this.state = 148;
			this.match(PlatformerParser.NAME);
			this.state = 149;
			this.match(PlatformerParser.COLON);
			this.state = 150;
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
			this.state = 152;
			this.match(PlatformerParser.COMPONENT);
			this.state = 153;
			this.match(PlatformerParser.NAME);
			this.state = 154;
			this.match(PlatformerParser.COLON);
			this.state = 155;
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
			this.state = 157;
			this.match(PlatformerParser.NAME);
			this.state = 158;
			this.match(PlatformerParser.COLON);
			this.state = 159;
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
			this.state = 160;
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
			this.state = 162;
			this.match(PlatformerParser.NAME);
			this.state = 163;
			this.match(PlatformerParser.COLON);
			this.state = 164;
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
			this.state = 166;
			this.match(PlatformerParser.OPEN_SQUARE);
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE || _la === PlatformerParser.NEWLINE) {
				{
				this.state = 167;
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

			this.state = 170;
			this.list_object();
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.COMMA) {
				{
				{
				this.state = 171;
				this.match(PlatformerParser.COMMA);
				this.state = 172;
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
				this.state = 173;
				this.list_object();
				}
				}
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === PlatformerParser.STMT_NEWLINE || _la === PlatformerParser.NEWLINE) {
				{
				this.state = 179;
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

			this.state = 182;
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
			this.state = 190;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case PlatformerParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 184;
				this.match(PlatformerParser.NAME);
				}
				break;
			case PlatformerParser.CONST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 185;
				this.match(PlatformerParser.CONST);
				}
				break;
			case PlatformerParser.OPEN_PAREN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 186;
				this.list_object();
				}
				break;
			case PlatformerParser.LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 187;
				this.match(PlatformerParser.LITERAL);
				}
				break;
			case PlatformerParser.LINK:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 188;
				this.match(PlatformerParser.LINK);
				}
				break;
			case PlatformerParser.OPEN_SQUARE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 189;
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
			this.state = 192;
			this.match(PlatformerParser.OPEN_PAREN);
			this.state = 193;
			this.exp();
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === PlatformerParser.COMMA) {
				{
				{
				this.state = 194;
				this.match(PlatformerParser.COMMA);
				this.state = 195;
				this.exp();
				}
				}
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 201;
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
			this.state = 203;
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
	// @RuleVersion(0)
	public op(): OpContext {
		let _localctx: OpContext = new OpContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, PlatformerParser.RULE_op);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 205;
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03$\xD2\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x03\x02\x05" +
		"\x02%\n\x02\x03\x02\x03\x02\x03\x02\x07\x02*\n\x02\f\x02\x0E\x02-\v\x02" +
		"\x03\x02\x03\x02\x03\x02\x07\x022\n\x02\f\x02\x0E\x025\v\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03=\n\x03\x03\x03\x03\x03\x05" +
		"\x03A\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04H\n\x04\f\x04" +
		"\x0E\x04K\v\x04\x03\x04\x03\x04\x05\x04O\n\x04\x07\x04Q\n\x04\f\x04\x0E" +
		"\x04T\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\\" +
		"\n\x04\f\x04\x0E\x04_\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05g\n\x05\x03\x05\x03\x05\x03\x05\x05\x05l\n\x05\x03\x05\x03" +
		"\x05\x03\x05\x07\x05q\n\x05\f\x05\x0E\x05t\v\x05\x03\x05\x03\x05\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06}\n\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x07\x07\x85\n\x07\f\x07\x0E\x07\x88\v\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x07\b\x8F\n\b\f\b\x0E\b\x92\v\b\x03\b\x03\b" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x05\r\xAB\n\r" +
		"\x03\r\x03\r\x03\r\x03\r\x07\r\xB1\n\r\f\r\x0E\r\xB4\v\r\x03\r\x05\r\xB7" +
		"\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E" +
		"\xC1\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xC7\n\x0F\f\x0F\x0E" +
		"\x0F\xCA\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11" +
		"\x02\x02\x02\x12\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10" +
		"\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\x02" +
		"\x06\x04\x02\x12\x12$$\x03\x02\x0F\x10\x03\x02\x13\x14\x03\x02\x1C\x1E" +
		"\x02\xD9\x02\"\x03\x02\x02\x02\x048\x03\x02\x02\x02\x06I\x03\x02\x02\x02" +
		"\b`\x03\x02\x02\x02\n|\x03\x02\x02\x02\f~\x03\x02\x02\x02\x0E\x89\x03" +
		"\x02\x02\x02\x10\x95\x03\x02\x02\x02\x12\x9A\x03\x02\x02\x02\x14\x9F\x03" +
		"\x02\x02\x02\x16\xA4\x03\x02\x02\x02\x18\xA8\x03\x02\x02\x02\x1A\xC0\x03" +
		"\x02\x02\x02\x1C\xC2\x03\x02\x02\x02\x1E\xCD\x03\x02\x02\x02 \xCF\x03" +
		"\x02\x02\x02\"$\x05\x10\t\x02#%\x07\x12\x02\x02$#\x03\x02\x02\x02$%\x03" +
		"\x02\x02\x02%+\x03\x02\x02\x02&\'\x05\x12\n\x02\'(\t\x02\x02\x02(*\x03" +
		"\x02\x02\x02)&\x03\x02\x02\x02*-\x03\x02\x02\x02+)\x03\x02\x02\x02+,\x03" +
		"\x02\x02\x02,3\x03\x02\x02\x02-+\x03\x02\x02\x02./\x05\x04\x03\x02/0\t" +
		"\x02\x02\x0202\x03\x02\x02\x021.\x03\x02\x02\x0225\x03\x02\x02\x0231\x03" +
		"\x02\x02\x0234\x03\x02\x02\x0246\x03\x02\x02\x0253\x03\x02\x02\x0267\x07" +
		"\x02\x02\x037\x03\x03\x02\x02\x0289\x07\f\x02\x029:\x07\x13\x02\x02:<" +
		"\x07\x16\x02\x02;=\x07\x12\x02\x02<;\x03\x02\x02\x02<=\x03\x02\x02\x02" +
		"=>\x03\x02\x02\x02>@\x05\x06\x04\x02?A\x07\x12\x02\x02@?\x03\x02\x02\x02" +
		"@A\x03\x02\x02\x02AB\x03\x02\x02\x02BC\x07\x17\x02\x02C\x05\x03\x02\x02" +
		"\x02DE\x05\x16\f\x02EF\t\x02\x02\x02FH\x03\x02\x02\x02GD\x03\x02\x02\x02" +
		"HK\x03\x02\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02JR\x03\x02\x02\x02" +
		"KI\x03\x02\x02\x02LN\x05\f\x07\x02MO\t\x02\x02\x02NM\x03\x02\x02\x02N" +
		"O\x03\x02\x02\x02OQ\x03\x02\x02\x02PL\x03\x02\x02\x02QT\x03\x02\x02\x02" +
		"RP\x03\x02\x02\x02RS\x03\x02\x02\x02SU\x03\x02\x02\x02TR\x03\x02\x02\x02" +
		"UV\x07\r\x02\x02VW\x07 \x02\x02W]\t\x02\x02\x02XY\x05\b\x05\x02YZ\t\x02" +
		"\x02\x02Z\\\x03\x02\x02\x02[X\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03" +
		"\x02\x02\x02]^\x03\x02\x02\x02^\x07\x03\x02\x02\x02_]\x03\x02\x02\x02" +
		"`a\x07\x0E\x02\x02ab\x07 \x02\x02bc\x07\x18\x02\x02cf\x05\n\x06\x02de" +
		"\x07\x11\x02\x02eg\x05\n\x06\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02g" +
		"h\x03\x02\x02\x02hi\x07\x19\x02\x02ik\x07\x16\x02\x02jl\x07\x12\x02\x02" +
		"kj\x03\x02\x02\x02kl\x03\x02\x02\x02lr\x03\x02\x02\x02mn\x05\x14\v\x02" +
		"no\t\x02\x02\x02oq\x03\x02\x02\x02pm\x03\x02\x02\x02qt\x03\x02\x02\x02" +
		"rp\x03\x02\x02\x02rs\x03\x02\x02\x02su\x03\x02\x02\x02tr\x03\x02\x02\x02" +
		"uv\x07\x17\x02\x02v\t\x03\x02\x02\x02wx\x07\x13\x02\x02xy\x05 \x11\x02" +
		"yz\x05\x1E\x10\x02z}\x03\x02\x02\x02{}\x07\x13\x02\x02|w\x03\x02\x02\x02" +
		"|{\x03\x02\x02\x02}\v\x03\x02\x02\x02~\x7F\x07\x04\x02\x02\x7F\x80\x07" +
		" \x02\x02\x80\x86\t\x02\x02\x02\x81\x82\x05\x16\f\x02\x82\x83\t\x02\x02" +
		"\x02\x83\x85\x03\x02\x02\x02\x84\x81\x03\x02\x02\x02\x85\x88\x03\x02\x02" +
		"\x02\x86\x84\x03\x02\x02\x02\x86\x87\x03\x02\x02\x02\x87\r\x03\x02\x02" +
		"\x02\x88\x86\x03\x02\x02\x02\x89\x8A\x07\x16\x02\x02\x8A\x90\t\x02\x02" +
		"\x02\x8B\x8C\x05\x16\f\x02\x8C\x8D\t\x02\x02\x02\x8D\x8F\x03\x02\x02\x02" +
		"\x8E\x8B\x03\x02\x02\x02\x8F\x92\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02" +
		"\x90\x91\x03\x02\x02\x02\x91\x93\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02" +
		"\x93\x94\x07\x17\x02\x02\x94\x0F\x03\x02\x02\x02\x95\x96\x07\x05\x02\x02" +
		"\x96\x97\x07\x13\x02\x02\x97\x98\x07 \x02\x02\x98\x99\x05\x0E\b\x02\x99" +
		"\x11\x03\x02\x02\x02\x9A\x9B\x07\x04\x02\x02\x9B\x9C\x07\x13\x02\x02\x9C" +
		"\x9D\x07 \x02\x02\x9D\x9E\x05\x0E\b\x02\x9E\x13\x03\x02\x02\x02\x9F\xA0" +
		"\x07\x13\x02\x02\xA0\xA1\x07 \x02\x02\xA1\xA2\t\x03\x02\x02\xA2\xA3\x05" +
		"\x1A\x0E\x02\xA3\x15\x03\x02\x02\x02\xA4\xA5\x07\x13\x02\x02\xA5\xA6\x07" +
		" \x02\x02\xA6\xA7\x05\x1A\x0E\x02\xA7\x17\x03\x02\x02\x02\xA8\xAA\x07" +
		"\x1A\x02\x02\xA9\xAB\t\x02\x02\x02\xAA\xA9\x03\x02\x02\x02\xAA\xAB\x03" +
		"\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xB2\x05\x1C\x0F\x02\xAD\xAE\x07" +
		"\x15\x02\x02\xAE\xAF\t\x02\x02\x02\xAF\xB1\x05\x1C\x0F\x02\xB0\xAD\x03" +
		"\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03" +
		"\x02\x02\x02\xB3\xB6\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02\xB5\xB7\t" +
		"\x02\x02\x02\xB6\xB5\x03\x02\x02\x02\xB6\xB7\x03\x02\x02\x02\xB7\xB8\x03" +
		"\x02\x02\x02\xB8\xB9\x07\x1B\x02\x02\xB9\x19\x03\x02\x02\x02\xBA\xC1\x07" +
		"\x13\x02\x02\xBB\xC1\x07\x14\x02\x02\xBC\xC1\x05\x1C\x0F\x02\xBD\xC1\x07" +
		"!\x02\x02\xBE\xC1\x07\"\x02\x02\xBF\xC1\x05\x18\r\x02\xC0\xBA\x03\x02" +
		"\x02\x02\xC0\xBB\x03\x02\x02\x02\xC0\xBC\x03\x02\x02\x02\xC0\xBD\x03\x02" +
		"\x02\x02\xC0\xBE\x03\x02\x02\x02\xC0\xBF\x03\x02\x02\x02\xC1\x1B\x03\x02" +
		"\x02\x02\xC2\xC3\x07\x18\x02\x02\xC3\xC8\x05\x1E\x10\x02\xC4\xC5\x07\x15" +
		"\x02\x02\xC5\xC7\x05\x1E\x10\x02\xC6\xC4\x03\x02\x02\x02\xC7\xCA\x03\x02" +
		"\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCB\x03\x02" +
		"\x02\x02\xCA\xC8\x03\x02\x02\x02\xCB\xCC\x07\x19\x02\x02\xCC\x1D\x03\x02" +
		"\x02\x02\xCD\xCE\t\x04\x02\x02\xCE\x1F\x03\x02\x02\x02\xCF\xD0\t\x05\x02" +
		"\x02\xD0!\x03\x02\x02\x02\x16$+3<@INR]fkr|\x86\x90\xAA\xB2\xB6\xC0\xC8";
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
	public op(): OpContext | undefined {
		return this.tryGetRuleContext(0, OpContext);
	}
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
	public NAME(): TerminalNode { return this.getToken(PlatformerParser.NAME, 0); }
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


