"use strict";
// Generated from src/parser/PlatformerParser.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VarnameContext = exports.OpContext = exports.ExpContext = exports.List_objectContext = exports.ValueContext = exports.ListContext = exports.StatementContext = exports.Cond_statementContext = exports.EntityContext = exports.PlayerContext = exports.Entity_bodContext = exports.Level_entityContext = exports.ConditionContext = exports.Level_condContext = exports.Level_bodyContext = exports.LevelContext = exports.ProgramContext = exports.PlatformerParser = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class PlatformerParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(PlatformerParser._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return PlatformerParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "PlatformerParser.g4"; }
    // @Override
    get ruleNames() { return PlatformerParser.ruleNames; }
    // @Override
    get serializedATN() { return PlatformerParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    // @RuleVersion(0)
    program() {
        let _localctx = new ProgramContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, PlatformerParser.RULE_program);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 34;
                this.player();
                this.state = 36;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PlatformerParser.STMT_NEWLINE) {
                    {
                        this.state = 35;
                        this.match(PlatformerParser.STMT_NEWLINE);
                    }
                }
                this.state = 43;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PlatformerParser.COMPONENT) {
                    {
                        {
                            this.state = 38;
                            this.entity();
                            this.state = 39;
                            _la = this._input.LA(1);
                            if (!(_la === PlatformerParser.STMT_NEWLINE || _la === PlatformerParser.NEWLINE)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 45;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 51;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PlatformerParser.LEVEL) {
                    {
                        {
                            this.state = 46;
                            this.level();
                            this.state = 47;
                            _la = this._input.LA(1);
                            if (!(_la === PlatformerParser.STMT_NEWLINE || _la === PlatformerParser.NEWLINE)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 53;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 54;
                this.match(PlatformerParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    level() {
        let _localctx = new LevelContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, PlatformerParser.RULE_level);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 56;
                this.match(PlatformerParser.LEVEL);
                this.state = 57;
                this.match(PlatformerParser.NAME);
                this.state = 58;
                this.match(PlatformerParser.OPEN_BRACE);
                this.state = 60;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PlatformerParser.STMT_NEWLINE) {
                    {
                        this.state = 59;
                        this.match(PlatformerParser.STMT_NEWLINE);
                    }
                }
                this.state = 62;
                this.level_body();
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
                this.match(PlatformerParser.CLOSE_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    level_body() {
        let _localctx = new Level_bodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, PlatformerParser.RULE_level_body);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 73;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PlatformerParser.NAME) {
                    {
                        {
                            this.state = 68;
                            this.statement();
                            this.state = 69;
                            _la = this._input.LA(1);
                            if (!(_la === PlatformerParser.STMT_NEWLINE || _la === PlatformerParser.NEWLINE)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 75;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 81;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PlatformerParser.COMPONENT) {
                    {
                        {
                            this.state = 76;
                            this.level_entity();
                            this.state = 77;
                            _la = this._input.LA(1);
                            if (!(_la === PlatformerParser.STMT_NEWLINE || _la === PlatformerParser.NEWLINE)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 83;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 84;
                this.match(PlatformerParser.CHECKS);
                this.state = 85;
                this.match(PlatformerParser.COLON);
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
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    level_cond() {
        let _localctx = new Level_condContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, PlatformerParser.RULE_level_cond);
        let _la;
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
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    condition() {
        let _localctx = new ConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, PlatformerParser.RULE_condition);
        try {
            this.state = 122;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 11, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 117;
                            this.varname();
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    level_entity() {
        let _localctx = new Level_entityContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, PlatformerParser.RULE_level_entity);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 124;
                this.match(PlatformerParser.COMPONENT);
                this.state = 125;
                this.match(PlatformerParser.COLON);
                this.state = 127;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
                    case 1:
                        {
                            this.state = 126;
                            this.match(PlatformerParser.STMT_NEWLINE);
                        }
                        break;
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
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    entity_bod() {
        let _localctx = new Entity_bodContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, PlatformerParser.RULE_entity_bod);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 137;
                this.match(PlatformerParser.OPEN_BRACE);
                this.state = 139;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PlatformerParser.NEWLINE) {
                    {
                        this.state = 138;
                        this.match(PlatformerParser.NEWLINE);
                    }
                }
                this.state = 146;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PlatformerParser.NAME) {
                    {
                        {
                            this.state = 141;
                            this.statement();
                            this.state = 142;
                            _la = this._input.LA(1);
                            if (!(_la === PlatformerParser.STMT_NEWLINE || _la === PlatformerParser.NEWLINE)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                        }
                    }
                    this.state = 148;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 149;
                this.match(PlatformerParser.CLOSE_BRACE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    player() {
        let _localctx = new PlayerContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, PlatformerParser.RULE_player);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 151;
                this.match(PlatformerParser.PLAYER);
                this.state = 152;
                this.match(PlatformerParser.NAME);
                this.state = 153;
                this.match(PlatformerParser.COLON);
                this.state = 154;
                this.entity_bod();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    entity() {
        let _localctx = new EntityContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, PlatformerParser.RULE_entity);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 156;
                this.match(PlatformerParser.COMPONENT);
                this.state = 157;
                this.match(PlatformerParser.NAME);
                this.state = 158;
                this.match(PlatformerParser.COLON);
                this.state = 159;
                this.entity_bod();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    cond_statement() {
        let _localctx = new Cond_statementContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, PlatformerParser.RULE_cond_statement);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 161;
                this.match(PlatformerParser.NAME);
                this.state = 162;
                this.match(PlatformerParser.COLON);
                this.state = 163;
                _la = this._input.LA(1);
                if (!(_la === PlatformerParser.ADD || _la === PlatformerParser.REMOVE)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 164;
                this.value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, PlatformerParser.RULE_statement);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 166;
                this.match(PlatformerParser.NAME);
                this.state = 167;
                this.match(PlatformerParser.COLON);
                this.state = 168;
                this.value();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    list() {
        let _localctx = new ListContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, PlatformerParser.RULE_list);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 170;
                this.match(PlatformerParser.OPEN_SQUARE);
                this.state = 171;
                this.list_object();
                this.state = 176;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PlatformerParser.COMMA) {
                    {
                        {
                            this.state = 172;
                            this.match(PlatformerParser.COMMA);
                            this.state = 173;
                            this.list_object();
                        }
                    }
                    this.state = 178;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 179;
                this.match(PlatformerParser.CLOSED_SQUARE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    value() {
        let _localctx = new ValueContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, PlatformerParser.RULE_value);
        try {
            this.state = 187;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PlatformerParser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 181;
                        this.varname();
                    }
                    break;
                case PlatformerParser.CONST:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 182;
                        this.match(PlatformerParser.CONST);
                    }
                    break;
                case PlatformerParser.OPEN_PAREN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 183;
                        this.list_object();
                    }
                    break;
                case PlatformerParser.LITERAL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 184;
                        this.match(PlatformerParser.LITERAL);
                    }
                    break;
                case PlatformerParser.LINK:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 185;
                        this.match(PlatformerParser.LINK);
                    }
                    break;
                case PlatformerParser.OPEN_SQUARE:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 186;
                        this.list();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    list_object() {
        let _localctx = new List_objectContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, PlatformerParser.RULE_list_object);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 189;
                this.match(PlatformerParser.OPEN_PAREN);
                this.state = 190;
                this.exp();
                this.state = 195;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PlatformerParser.COMMA) {
                    {
                        {
                            this.state = 191;
                            this.match(PlatformerParser.COMMA);
                            this.state = 192;
                            this.exp();
                        }
                    }
                    this.state = 197;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 198;
                this.match(PlatformerParser.CLOSE_PAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    exp() {
        let _localctx = new ExpContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, PlatformerParser.RULE_exp);
        try {
            this.state = 202;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PlatformerParser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 200;
                        this.varname();
                    }
                    break;
                case PlatformerParser.CONST:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 201;
                        this.match(PlatformerParser.CONST);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    op() {
        let _localctx = new OpContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, PlatformerParser.RULE_op);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 204;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PlatformerParser.LARGER) | (1 << PlatformerParser.SMALLER) | (1 << PlatformerParser.EQUAL))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    varname() {
        let _localctx = new VarnameContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, PlatformerParser.RULE_varname);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                this.match(PlatformerParser.NAME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!PlatformerParser.__ATN) {
            PlatformerParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(PlatformerParser._serializedATN));
        }
        return PlatformerParser.__ATN;
    }
}
exports.PlatformerParser = PlatformerParser;
PlatformerParser.LEADING_SPACE = 1;
PlatformerParser.COMPONENT = 2;
PlatformerParser.PLAYER = 3;
PlatformerParser.ENEMY = 4;
PlatformerParser.DOOR = 5;
PlatformerParser.TERRAIN = 6;
PlatformerParser.PLATFORM = 7;
PlatformerParser.BUTTON = 8;
PlatformerParser.COIN = 9;
PlatformerParser.LEVEL = 10;
PlatformerParser.CHECKS = 11;
PlatformerParser.IF = 12;
PlatformerParser.ADD = 13;
PlatformerParser.REMOVE = 14;
PlatformerParser.MONEY = 15;
PlatformerParser.STMT_NEWLINE = 16;
PlatformerParser.NAME = 17;
PlatformerParser.CONST = 18;
PlatformerParser.COMMA = 19;
PlatformerParser.OPEN_BRACE = 20;
PlatformerParser.CLOSE_BRACE = 21;
PlatformerParser.OPEN_PAREN = 22;
PlatformerParser.CLOSE_PAREN = 23;
PlatformerParser.OPEN_SQUARE = 24;
PlatformerParser.CLOSED_SQUARE = 25;
PlatformerParser.LARGER = 26;
PlatformerParser.SMALLER = 27;
PlatformerParser.EQUAL = 28;
PlatformerParser.SEMICOLON = 29;
PlatformerParser.COLON = 30;
PlatformerParser.LITERAL = 31;
PlatformerParser.LOGIC = 32;
PlatformerParser.LINK = 33;
PlatformerParser.SPACE = 34;
PlatformerParser.NEWLINE = 35;
PlatformerParser.RULE_program = 0;
PlatformerParser.RULE_level = 1;
PlatformerParser.RULE_level_body = 2;
PlatformerParser.RULE_level_cond = 3;
PlatformerParser.RULE_condition = 4;
PlatformerParser.RULE_level_entity = 5;
PlatformerParser.RULE_entity_bod = 6;
PlatformerParser.RULE_player = 7;
PlatformerParser.RULE_entity = 8;
PlatformerParser.RULE_cond_statement = 9;
PlatformerParser.RULE_statement = 10;
PlatformerParser.RULE_list = 11;
PlatformerParser.RULE_value = 12;
PlatformerParser.RULE_list_object = 13;
PlatformerParser.RULE_exp = 14;
PlatformerParser.RULE_op = 15;
PlatformerParser.RULE_varname = 16;
// tslint:disable:no-trailing-whitespace
PlatformerParser.ruleNames = [
    "program", "level", "level_body", "level_cond", "condition", "level_entity",
    "entity_bod", "player", "entity", "cond_statement", "statement", "list",
    "value", "list_object", "exp", "op", "varname",
];
PlatformerParser._LITERAL_NAMES = [
    undefined, undefined, undefined, "'Player '", "'Enemy '", "'Door '", "'Terrain '",
    "'Platform '", "'Button '", "'Coin'", "'Level '", "'Checks'", "'IF'",
    "'Add'", "'Remove'", "'MONEY'", undefined, undefined, undefined, "','",
    "'{'", "'}'", "'('", "')'", "'['", "']'", "'>'", "'<'", "'='", "';'",
    "':'",
];
PlatformerParser._SYMBOLIC_NAMES = [
    undefined, "LEADING_SPACE", "COMPONENT", "PLAYER", "ENEMY", "DOOR", "TERRAIN",
    "PLATFORM", "BUTTON", "COIN", "LEVEL", "CHECKS", "IF", "ADD", "REMOVE",
    "MONEY", "STMT_NEWLINE", "NAME", "CONST", "COMMA", "OPEN_BRACE", "CLOSE_BRACE",
    "OPEN_PAREN", "CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", "LARGER",
    "SMALLER", "EQUAL", "SEMICOLON", "COLON", "LITERAL", "LOGIC", "LINK",
    "SPACE", "NEWLINE",
];
PlatformerParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(PlatformerParser._LITERAL_NAMES, PlatformerParser._SYMBOLIC_NAMES, []);
PlatformerParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03%\xD3\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x03" +
    "\x02\x03\x02\x05\x02\'\n\x02\x03\x02\x03\x02\x03\x02\x07\x02,\n\x02\f" +
    "\x02\x0E\x02/\v\x02\x03\x02\x03\x02\x03\x02\x07\x024\n\x02\f\x02\x0E\x02" +
    "7\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03?\n\x03" +
    "\x03\x03\x03\x03\x05\x03C\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
    "\x07\x04J\n\x04\f\x04\x0E\x04M\v\x04\x03\x04\x03\x04\x03\x04\x07\x04R" +
    "\n\x04\f\x04\x0E\x04U\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07" +
    "\x04\\\n\x04\f\x04\x0E\x04_\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
    "\x05\x03\x05\x05\x05g\n\x05\x03\x05\x03\x05\x03\x05\x05\x05l\n\x05\x03" +
    "\x05\x03\x05\x03\x05\x07\x05q\n\x05\f\x05\x0E\x05t\v\x05\x03\x05\x03\x05" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06}\n\x06\x03\x07\x03\x07" +
    "\x03\x07\x05\x07\x82\n\x07\x03\x07\x03\x07\x03\x07\x07\x07\x87\n\x07\f" +
    "\x07\x0E\x07\x8A\v\x07\x03\b\x03\b\x05\b\x8E\n\b\x03\b\x03\b\x03\b\x07" +
    "\b\x93\n\b\f\b\x0E\b\x96\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t" +
    "\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03" +
    "\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x07\r\xB1\n\r\f\r\x0E\r\xB4\v\r" +
    "\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xBE" +
    "\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xC4\n\x0F\f\x0F\x0E\x0F" +
    "\xC7\v\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x05\x10\xCD\n\x10\x03\x11\x03" +
    "\x11\x03\x12\x03\x12\x03\x12\x02\x02\x02\x13\x02\x02\x04\x02\x06\x02\b" +
    "\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
    "\x1C\x02\x1E\x02 \x02\"\x02\x02\x05\x04\x02\x12\x12%%\x03\x02\x0F\x10" +
    "\x03\x02\x1C\x1E\x02\xD9\x02$\x03\x02\x02\x02\x04:\x03\x02\x02\x02\x06" +
    "K\x03\x02\x02\x02\b`\x03\x02\x02\x02\n|\x03\x02\x02\x02\f~\x03\x02\x02" +
    "\x02\x0E\x8B\x03\x02\x02\x02\x10\x99\x03\x02\x02\x02\x12\x9E\x03\x02\x02" +
    "\x02\x14\xA3\x03\x02\x02\x02\x16\xA8\x03\x02\x02\x02\x18\xAC\x03\x02\x02" +
    "\x02\x1A\xBD\x03\x02\x02\x02\x1C\xBF\x03\x02\x02\x02\x1E\xCC\x03\x02\x02" +
    "\x02 \xCE\x03\x02\x02\x02\"\xD0\x03\x02\x02\x02$&\x05\x10\t\x02%\'\x07" +
    "\x12\x02\x02&%\x03\x02\x02\x02&\'\x03\x02\x02\x02\'-\x03\x02\x02\x02(" +
    ")\x05\x12\n\x02)*\t\x02\x02\x02*,\x03\x02\x02\x02+(\x03\x02\x02\x02,/" +
    "\x03\x02\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02.5\x03\x02\x02\x02" +
    "/-\x03\x02\x02\x0201\x05\x04\x03\x0212\t\x02\x02\x0224\x03\x02\x02\x02" +
    "30\x03\x02\x02\x0247\x03\x02\x02\x0253\x03\x02\x02\x0256\x03\x02\x02\x02" +
    "68\x03\x02\x02\x0275\x03\x02\x02\x0289\x07\x02\x02\x039\x03\x03\x02\x02" +
    "\x02:;\x07\f\x02\x02;<\x07\x13\x02\x02<>\x07\x16\x02\x02=?\x07\x12\x02" +
    "\x02>=\x03\x02\x02\x02>?\x03\x02\x02\x02?@\x03\x02\x02\x02@B\x05\x06\x04" +
    "\x02AC\x07\x12\x02\x02BA\x03\x02\x02\x02BC\x03\x02\x02\x02CD\x03\x02\x02" +
    "\x02DE\x07\x17\x02\x02E\x05\x03\x02\x02\x02FG\x05\x16\f\x02GH\t\x02\x02" +
    "\x02HJ\x03\x02\x02\x02IF\x03\x02\x02\x02JM\x03\x02\x02\x02KI\x03\x02\x02" +
    "\x02KL\x03\x02\x02\x02LS\x03\x02\x02\x02MK\x03\x02\x02\x02NO\x05\f\x07" +
    "\x02OP\t\x02\x02\x02PR\x03\x02\x02\x02QN\x03\x02\x02\x02RU\x03\x02\x02" +
    "\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02TV\x03\x02\x02\x02US\x03\x02\x02" +
    "\x02VW\x07\r\x02\x02W]\x07 \x02\x02XY\x05\b\x05\x02YZ\t\x02\x02\x02Z\\" +
    "\x03\x02\x02\x02[X\x03\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02" +
    "]^\x03\x02\x02\x02^\x07\x03\x02\x02\x02_]\x03\x02\x02\x02`a\x07\x0E\x02" +
    "\x02ab\x07 \x02\x02bc\x07\x18\x02\x02cf\x05\n\x06\x02de\x07\"\x02\x02" +
    "eg\x05\n\x06\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02gh\x03\x02\x02\x02" +
    "hi\x07\x19\x02\x02ik\x07\x16\x02\x02jl\x07\x12\x02\x02kj\x03\x02\x02\x02" +
    "kl\x03\x02\x02\x02lr\x03\x02\x02\x02mn\x05\x14\v\x02no\t\x02\x02\x02o" +
    "q\x03\x02\x02\x02pm\x03\x02\x02\x02qt\x03\x02\x02\x02rp\x03\x02\x02\x02" +
    "rs\x03\x02\x02\x02su\x03\x02\x02\x02tr\x03\x02\x02\x02uv\x07\x17\x02\x02" +
    "v\t\x03\x02\x02\x02wx\x05\"\x12\x02xy\x05 \x11\x02yz\x05\x1E\x10\x02z" +
    "}\x03\x02\x02\x02{}\x07\x13\x02\x02|w\x03\x02\x02\x02|{\x03\x02\x02\x02" +
    "}\v\x03\x02\x02\x02~\x7F\x07\x04\x02\x02\x7F\x81\x07 \x02\x02\x80\x82" +
    "\x07\x12\x02\x02\x81\x80\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82\x88" +
    "\x03\x02\x02\x02\x83\x84\x05\x16\f\x02\x84\x85\t\x02\x02\x02\x85\x87\x03" +
    "\x02\x02\x02\x86\x83\x03\x02\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x86\x03" +
    "\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\r\x03\x02\x02\x02\x8A\x88\x03" +
    "\x02\x02\x02\x8B\x8D\x07\x16\x02\x02\x8C\x8E\x07%\x02\x02\x8D\x8C\x03" +
    "\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x94\x03\x02\x02\x02\x8F\x90\x05" +
    "\x16\f\x02\x90\x91\t\x02\x02\x02\x91\x93\x03\x02\x02\x02\x92\x8F\x03\x02" +
    "\x02\x02\x93\x96\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x94\x95\x03\x02" +
    "\x02\x02\x95\x97\x03\x02\x02\x02\x96\x94\x03\x02\x02\x02\x97\x98\x07\x17" +
    "\x02\x02\x98\x0F\x03\x02\x02\x02\x99\x9A\x07\x05\x02\x02\x9A\x9B\x07\x13" +
    "\x02\x02\x9B\x9C\x07 \x02\x02\x9C\x9D\x05\x0E\b\x02\x9D\x11\x03\x02\x02" +
    "\x02\x9E\x9F\x07\x04\x02\x02\x9F\xA0\x07\x13\x02\x02\xA0\xA1\x07 \x02" +
    "\x02\xA1\xA2\x05\x0E\b\x02\xA2\x13\x03\x02\x02\x02\xA3\xA4\x07\x13\x02" +
    "\x02\xA4\xA5\x07 \x02\x02\xA5\xA6\t\x03\x02\x02\xA6\xA7\x05\x1A\x0E\x02" +
    "\xA7\x15\x03\x02\x02\x02\xA8\xA9\x07\x13\x02\x02\xA9\xAA\x07 \x02\x02" +
    "\xAA\xAB\x05\x1A\x0E\x02\xAB\x17\x03\x02\x02\x02\xAC\xAD\x07\x1A\x02\x02" +
    "\xAD\xB2\x05\x1C\x0F\x02\xAE\xAF\x07\x15\x02\x02\xAF\xB1\x05\x1C\x0F\x02" +
    "\xB0\xAE\x03\x02\x02\x02\xB1\xB4\x03\x02\x02\x02\xB2\xB0\x03\x02\x02\x02" +
    "\xB2\xB3\x03\x02\x02\x02\xB3\xB5\x03\x02\x02\x02\xB4\xB2\x03\x02\x02\x02" +
    "\xB5\xB6\x07\x1B\x02\x02\xB6\x19\x03\x02\x02\x02\xB7\xBE\x05\"\x12\x02" +
    "\xB8\xBE\x07\x14\x02\x02\xB9\xBE\x05\x1C\x0F\x02\xBA\xBE\x07!\x02\x02" +
    "\xBB\xBE\x07#\x02\x02\xBC\xBE\x05\x18\r\x02\xBD\xB7\x03\x02\x02\x02\xBD" +
    "\xB8\x03\x02\x02\x02\xBD\xB9\x03\x02\x02\x02\xBD\xBA\x03\x02\x02\x02\xBD" +
    "\xBB\x03\x02\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE\x1B\x03\x02\x02\x02\xBF" +
    "\xC0\x07\x18\x02\x02\xC0\xC5\x05\x1E\x10\x02\xC1\xC2\x07\x15\x02\x02\xC2" +
    "\xC4\x05\x1E\x10\x02\xC3\xC1\x03\x02\x02\x02\xC4\xC7\x03\x02\x02\x02\xC5" +
    "\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC8\x03\x02\x02\x02\xC7" +
    "\xC5\x03\x02\x02\x02\xC8\xC9\x07\x19\x02\x02\xC9\x1D\x03\x02\x02\x02\xCA" +
    "\xCD\x05\"\x12\x02\xCB\xCD\x07\x14\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC" +
    "\xCB\x03\x02\x02\x02\xCD\x1F\x03\x02\x02\x02\xCE\xCF\t\x04\x02\x02\xCF" +
    "!\x03\x02\x02\x02\xD0\xD1\x07\x13\x02\x02\xD1#\x03\x02\x02\x02\x16&-5" +
    ">BKS]fkr|\x81\x88\x8D\x94\xB2\xBD\xC5\xCC";
class ProgramContext extends ParserRuleContext_1.ParserRuleContext {
    player() {
        return this.getRuleContext(0, PlayerContext);
    }
    EOF() { return this.getToken(PlatformerParser.EOF, 0); }
    STMT_NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(PlatformerParser.STMT_NEWLINE);
        }
        else {
            return this.getToken(PlatformerParser.STMT_NEWLINE, i);
        }
    }
    entity(i) {
        if (i === undefined) {
            return this.getRuleContexts(EntityContext);
        }
        else {
            return this.getRuleContext(i, EntityContext);
        }
    }
    level(i) {
        if (i === undefined) {
            return this.getRuleContexts(LevelContext);
        }
        else {
            return this.getRuleContext(i, LevelContext);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(PlatformerParser.NEWLINE);
        }
        else {
            return this.getToken(PlatformerParser.NEWLINE, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_program; }
    // @Override
    enterRule(listener) {
        if (listener.enterProgram) {
            listener.enterProgram(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProgram) {
            listener.exitProgram(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ProgramContext = ProgramContext;
class LevelContext extends ParserRuleContext_1.ParserRuleContext {
    LEVEL() { return this.getToken(PlatformerParser.LEVEL, 0); }
    NAME() { return this.getToken(PlatformerParser.NAME, 0); }
    OPEN_BRACE() { return this.getToken(PlatformerParser.OPEN_BRACE, 0); }
    level_body() {
        return this.getRuleContext(0, Level_bodyContext);
    }
    CLOSE_BRACE() { return this.getToken(PlatformerParser.CLOSE_BRACE, 0); }
    STMT_NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(PlatformerParser.STMT_NEWLINE);
        }
        else {
            return this.getToken(PlatformerParser.STMT_NEWLINE, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_level; }
    // @Override
    enterRule(listener) {
        if (listener.enterLevel) {
            listener.enterLevel(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLevel) {
            listener.exitLevel(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLevel) {
            return visitor.visitLevel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LevelContext = LevelContext;
class Level_bodyContext extends ParserRuleContext_1.ParserRuleContext {
    CHECKS() { return this.getToken(PlatformerParser.CHECKS, 0); }
    COLON() { return this.getToken(PlatformerParser.COLON, 0); }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    level_entity(i) {
        if (i === undefined) {
            return this.getRuleContexts(Level_entityContext);
        }
        else {
            return this.getRuleContext(i, Level_entityContext);
        }
    }
    level_cond(i) {
        if (i === undefined) {
            return this.getRuleContexts(Level_condContext);
        }
        else {
            return this.getRuleContext(i, Level_condContext);
        }
    }
    STMT_NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(PlatformerParser.STMT_NEWLINE);
        }
        else {
            return this.getToken(PlatformerParser.STMT_NEWLINE, i);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(PlatformerParser.NEWLINE);
        }
        else {
            return this.getToken(PlatformerParser.NEWLINE, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_level_body; }
    // @Override
    enterRule(listener) {
        if (listener.enterLevel_body) {
            listener.enterLevel_body(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLevel_body) {
            listener.exitLevel_body(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLevel_body) {
            return visitor.visitLevel_body(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Level_bodyContext = Level_bodyContext;
class Level_condContext extends ParserRuleContext_1.ParserRuleContext {
    IF() { return this.getToken(PlatformerParser.IF, 0); }
    COLON() { return this.getToken(PlatformerParser.COLON, 0); }
    OPEN_PAREN() { return this.getToken(PlatformerParser.OPEN_PAREN, 0); }
    condition(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConditionContext);
        }
        else {
            return this.getRuleContext(i, ConditionContext);
        }
    }
    CLOSE_PAREN() { return this.getToken(PlatformerParser.CLOSE_PAREN, 0); }
    OPEN_BRACE() { return this.getToken(PlatformerParser.OPEN_BRACE, 0); }
    CLOSE_BRACE() { return this.getToken(PlatformerParser.CLOSE_BRACE, 0); }
    LOGIC() { return this.tryGetToken(PlatformerParser.LOGIC, 0); }
    STMT_NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(PlatformerParser.STMT_NEWLINE);
        }
        else {
            return this.getToken(PlatformerParser.STMT_NEWLINE, i);
        }
    }
    cond_statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(Cond_statementContext);
        }
        else {
            return this.getRuleContext(i, Cond_statementContext);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(PlatformerParser.NEWLINE);
        }
        else {
            return this.getToken(PlatformerParser.NEWLINE, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_level_cond; }
    // @Override
    enterRule(listener) {
        if (listener.enterLevel_cond) {
            listener.enterLevel_cond(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLevel_cond) {
            listener.exitLevel_cond(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLevel_cond) {
            return visitor.visitLevel_cond(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Level_condContext = Level_condContext;
class ConditionContext extends ParserRuleContext_1.ParserRuleContext {
    varname() {
        return this.tryGetRuleContext(0, VarnameContext);
    }
    op() {
        return this.tryGetRuleContext(0, OpContext);
    }
    exp() {
        return this.tryGetRuleContext(0, ExpContext);
    }
    NAME() { return this.tryGetToken(PlatformerParser.NAME, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_condition; }
    // @Override
    enterRule(listener) {
        if (listener.enterCondition) {
            listener.enterCondition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCondition) {
            listener.exitCondition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCondition) {
            return visitor.visitCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConditionContext = ConditionContext;
class Level_entityContext extends ParserRuleContext_1.ParserRuleContext {
    COMPONENT() { return this.getToken(PlatformerParser.COMPONENT, 0); }
    COLON() { return this.getToken(PlatformerParser.COLON, 0); }
    STMT_NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(PlatformerParser.STMT_NEWLINE);
        }
        else {
            return this.getToken(PlatformerParser.STMT_NEWLINE, i);
        }
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(PlatformerParser.NEWLINE);
        }
        else {
            return this.getToken(PlatformerParser.NEWLINE, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_level_entity; }
    // @Override
    enterRule(listener) {
        if (listener.enterLevel_entity) {
            listener.enterLevel_entity(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLevel_entity) {
            listener.exitLevel_entity(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLevel_entity) {
            return visitor.visitLevel_entity(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Level_entityContext = Level_entityContext;
class Entity_bodContext extends ParserRuleContext_1.ParserRuleContext {
    OPEN_BRACE() { return this.getToken(PlatformerParser.OPEN_BRACE, 0); }
    CLOSE_BRACE() { return this.getToken(PlatformerParser.CLOSE_BRACE, 0); }
    NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(PlatformerParser.NEWLINE);
        }
        else {
            return this.getToken(PlatformerParser.NEWLINE, i);
        }
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    STMT_NEWLINE(i) {
        if (i === undefined) {
            return this.getTokens(PlatformerParser.STMT_NEWLINE);
        }
        else {
            return this.getToken(PlatformerParser.STMT_NEWLINE, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_entity_bod; }
    // @Override
    enterRule(listener) {
        if (listener.enterEntity_bod) {
            listener.enterEntity_bod(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEntity_bod) {
            listener.exitEntity_bod(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEntity_bod) {
            return visitor.visitEntity_bod(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Entity_bodContext = Entity_bodContext;
class PlayerContext extends ParserRuleContext_1.ParserRuleContext {
    PLAYER() { return this.getToken(PlatformerParser.PLAYER, 0); }
    NAME() { return this.getToken(PlatformerParser.NAME, 0); }
    COLON() { return this.getToken(PlatformerParser.COLON, 0); }
    entity_bod() {
        return this.getRuleContext(0, Entity_bodContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_player; }
    // @Override
    enterRule(listener) {
        if (listener.enterPlayer) {
            listener.enterPlayer(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPlayer) {
            listener.exitPlayer(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPlayer) {
            return visitor.visitPlayer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PlayerContext = PlayerContext;
class EntityContext extends ParserRuleContext_1.ParserRuleContext {
    COMPONENT() { return this.getToken(PlatformerParser.COMPONENT, 0); }
    NAME() { return this.getToken(PlatformerParser.NAME, 0); }
    COLON() { return this.getToken(PlatformerParser.COLON, 0); }
    entity_bod() {
        return this.getRuleContext(0, Entity_bodContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_entity; }
    // @Override
    enterRule(listener) {
        if (listener.enterEntity) {
            listener.enterEntity(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEntity) {
            listener.exitEntity(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEntity) {
            return visitor.visitEntity(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EntityContext = EntityContext;
class Cond_statementContext extends ParserRuleContext_1.ParserRuleContext {
    NAME() { return this.getToken(PlatformerParser.NAME, 0); }
    COLON() { return this.getToken(PlatformerParser.COLON, 0); }
    value() {
        return this.getRuleContext(0, ValueContext);
    }
    ADD() { return this.tryGetToken(PlatformerParser.ADD, 0); }
    REMOVE() { return this.tryGetToken(PlatformerParser.REMOVE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_cond_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterCond_statement) {
            listener.enterCond_statement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCond_statement) {
            listener.exitCond_statement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCond_statement) {
            return visitor.visitCond_statement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Cond_statementContext = Cond_statementContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    NAME() { return this.getToken(PlatformerParser.NAME, 0); }
    COLON() { return this.getToken(PlatformerParser.COLON, 0); }
    value() {
        return this.getRuleContext(0, ValueContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementContext = StatementContext;
class ListContext extends ParserRuleContext_1.ParserRuleContext {
    OPEN_SQUARE() { return this.getToken(PlatformerParser.OPEN_SQUARE, 0); }
    list_object(i) {
        if (i === undefined) {
            return this.getRuleContexts(List_objectContext);
        }
        else {
            return this.getRuleContext(i, List_objectContext);
        }
    }
    CLOSED_SQUARE() { return this.getToken(PlatformerParser.CLOSED_SQUARE, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(PlatformerParser.COMMA);
        }
        else {
            return this.getToken(PlatformerParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_list; }
    // @Override
    enterRule(listener) {
        if (listener.enterList) {
            listener.enterList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList) {
            listener.exitList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitList) {
            return visitor.visitList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ListContext = ListContext;
class ValueContext extends ParserRuleContext_1.ParserRuleContext {
    varname() {
        return this.tryGetRuleContext(0, VarnameContext);
    }
    CONST() { return this.tryGetToken(PlatformerParser.CONST, 0); }
    list_object() {
        return this.tryGetRuleContext(0, List_objectContext);
    }
    LITERAL() { return this.tryGetToken(PlatformerParser.LITERAL, 0); }
    LINK() { return this.tryGetToken(PlatformerParser.LINK, 0); }
    list() {
        return this.tryGetRuleContext(0, ListContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_value; }
    // @Override
    enterRule(listener) {
        if (listener.enterValue) {
            listener.enterValue(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValue) {
            listener.exitValue(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValueContext = ValueContext;
class List_objectContext extends ParserRuleContext_1.ParserRuleContext {
    OPEN_PAREN() { return this.getToken(PlatformerParser.OPEN_PAREN, 0); }
    exp(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpContext);
        }
        else {
            return this.getRuleContext(i, ExpContext);
        }
    }
    CLOSE_PAREN() { return this.getToken(PlatformerParser.CLOSE_PAREN, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(PlatformerParser.COMMA);
        }
        else {
            return this.getToken(PlatformerParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_list_object; }
    // @Override
    enterRule(listener) {
        if (listener.enterList_object) {
            listener.enterList_object(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitList_object) {
            listener.exitList_object(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitList_object) {
            return visitor.visitList_object(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.List_objectContext = List_objectContext;
class ExpContext extends ParserRuleContext_1.ParserRuleContext {
    varname() {
        return this.tryGetRuleContext(0, VarnameContext);
    }
    CONST() { return this.tryGetToken(PlatformerParser.CONST, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_exp; }
    // @Override
    enterRule(listener) {
        if (listener.enterExp) {
            listener.enterExp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExp) {
            listener.exitExp(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExp) {
            return visitor.visitExp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpContext = ExpContext;
class OpContext extends ParserRuleContext_1.ParserRuleContext {
    LARGER() { return this.tryGetToken(PlatformerParser.LARGER, 0); }
    SMALLER() { return this.tryGetToken(PlatformerParser.SMALLER, 0); }
    EQUAL() { return this.tryGetToken(PlatformerParser.EQUAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_op; }
    // @Override
    enterRule(listener) {
        if (listener.enterOp) {
            listener.enterOp(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitOp) {
            listener.exitOp(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitOp) {
            return visitor.visitOp(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.OpContext = OpContext;
class VarnameContext extends ParserRuleContext_1.ParserRuleContext {
    NAME() { return this.getToken(PlatformerParser.NAME, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_varname; }
    // @Override
    enterRule(listener) {
        if (listener.enterVarname) {
            listener.enterVarname(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVarname) {
            listener.exitVarname(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVarname) {
            return visitor.visitVarname(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VarnameContext = VarnameContext;
