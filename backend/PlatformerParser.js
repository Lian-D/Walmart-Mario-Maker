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
exports.ExpContext = exports.List_objectContext = exports.ValueContext = exports.ListContext = exports.StatementContext = exports.Cond_statementContext = exports.EntityContext = exports.PlayerContext = exports.Entity_bodContext = exports.Level_entityContext = exports.ConditionContext = exports.Level_condContext = exports.Level_bodyContext = exports.LevelContext = exports.ProgramContext = exports.PlatformerParser = void 0;
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
                    this.state = 41;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 47;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PlatformerParser.LEVEL) {
                    {
                        {
                            this.state = 42;
                            this.level();
                            this.state = 43;
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
                    this.state = 49;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 50;
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
                this.state = 52;
                this.match(PlatformerParser.LEVEL);
                this.state = 53;
                this.match(PlatformerParser.NAME);
                this.state = 54;
                this.match(PlatformerParser.OPEN_BRACE);
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
                this.level_body();
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
                this.state = 69;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PlatformerParser.NAME) {
                    {
                        {
                            this.state = 64;
                            this.statement();
                            this.state = 65;
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
                    this.state = 71;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 78;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PlatformerParser.COMPONENT) {
                    {
                        {
                            this.state = 72;
                            this.level_entity();
                            this.state = 74;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            if (_la === PlatformerParser.STMT_NEWLINE || _la === PlatformerParser.NEWLINE) {
                                {
                                    this.state = 73;
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
                        }
                    }
                    this.state = 80;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 81;
                this.match(PlatformerParser.CHECKS);
                this.state = 82;
                this.match(PlatformerParser.COLON);
                this.state = 83;
                this.match(PlatformerParser.OPEN_SQUARE);
                this.state = 85;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PlatformerParser.STMT_NEWLINE || _la === PlatformerParser.NEWLINE) {
                    {
                        this.state = 84;
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
                this.state = 92;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PlatformerParser.IF) {
                    {
                        {
                            this.state = 87;
                            this.level_cond();
                            this.state = 88;
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
                    this.state = 94;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 95;
                this.match(PlatformerParser.CLOSED_SQUARE);
                this.state = 96;
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
                this.state = 98;
                this.match(PlatformerParser.IF);
                this.state = 99;
                this.match(PlatformerParser.COLON);
                this.state = 100;
                this.match(PlatformerParser.OPEN_PAREN);
                this.state = 101;
                this.condition();
                this.state = 104;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PlatformerParser.LOGIC) {
                    {
                        this.state = 102;
                        this.match(PlatformerParser.LOGIC);
                        this.state = 103;
                        this.condition();
                    }
                }
                this.state = 106;
                this.match(PlatformerParser.CLOSE_PAREN);
                this.state = 107;
                this.match(PlatformerParser.OPEN_BRACE);
                this.state = 109;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PlatformerParser.STMT_NEWLINE) {
                    {
                        this.state = 108;
                        this.match(PlatformerParser.STMT_NEWLINE);
                    }
                }
                this.state = 116;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PlatformerParser.COMPONENT) {
                    {
                        {
                            this.state = 111;
                            this.cond_statement();
                            this.state = 112;
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
                    this.state = 118;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 119;
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
            this.state = 125;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        {
                            this.state = 121;
                            this.match(PlatformerParser.NAME);
                            this.state = 122;
                            this.match(PlatformerParser.OP);
                            this.state = 123;
                            this.exp();
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 124;
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
                this.state = 127;
                this.match(PlatformerParser.COMPONENT);
                this.state = 128;
                this.match(PlatformerParser.COLON);
                this.state = 129;
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
                this.state = 135;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PlatformerParser.NAME) {
                    {
                        {
                            this.state = 130;
                            this.statement();
                            this.state = 131;
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
                    this.state = 137;
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
                this.state = 138;
                this.match(PlatformerParser.OPEN_BRACE);
                this.state = 139;
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
                this.state = 145;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PlatformerParser.NAME) {
                    {
                        {
                            this.state = 140;
                            this.statement();
                            this.state = 141;
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
                    this.state = 147;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 148;
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
                this.state = 150;
                this.match(PlatformerParser.PLAYER);
                this.state = 151;
                this.match(PlatformerParser.NAME);
                this.state = 152;
                this.match(PlatformerParser.COLON);
                this.state = 153;
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
                this.state = 155;
                this.match(PlatformerParser.COMPONENT);
                this.state = 156;
                this.match(PlatformerParser.NAME);
                this.state = 157;
                this.match(PlatformerParser.COLON);
                this.state = 158;
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
                this.state = 160;
                this.match(PlatformerParser.COMPONENT);
                this.state = 161;
                this.match(PlatformerParser.COLON);
                this.state = 162;
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
                this.state = 163;
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
                this.state = 165;
                this.match(PlatformerParser.NAME);
                this.state = 166;
                this.match(PlatformerParser.COLON);
                this.state = 167;
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
                this.state = 169;
                this.match(PlatformerParser.OPEN_SQUARE);
                this.state = 171;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PlatformerParser.STMT_NEWLINE || _la === PlatformerParser.NEWLINE) {
                    {
                        this.state = 170;
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
                this.state = 173;
                this.list_object();
                this.state = 179;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PlatformerParser.COMMA) {
                    {
                        {
                            this.state = 174;
                            this.match(PlatformerParser.COMMA);
                            this.state = 175;
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
                            this.state = 176;
                            this.list_object();
                        }
                    }
                    this.state = 181;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 183;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === PlatformerParser.STMT_NEWLINE || _la === PlatformerParser.NEWLINE) {
                    {
                        this.state = 182;
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
                this.state = 185;
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
            this.state = 193;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case PlatformerParser.NAME:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 187;
                        this.match(PlatformerParser.NAME);
                    }
                    break;
                case PlatformerParser.CONST:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 188;
                        this.match(PlatformerParser.CONST);
                    }
                    break;
                case PlatformerParser.OPEN_PAREN:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 189;
                        this.list_object();
                    }
                    break;
                case PlatformerParser.LITERAL:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 190;
                        this.match(PlatformerParser.LITERAL);
                    }
                    break;
                case PlatformerParser.LINK:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 191;
                        this.match(PlatformerParser.LINK);
                    }
                    break;
                case PlatformerParser.OPEN_SQUARE:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 192;
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
                this.state = 195;
                this.match(PlatformerParser.OPEN_PAREN);
                this.state = 196;
                this.exp();
                this.state = 201;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === PlatformerParser.COMMA) {
                    {
                        {
                            this.state = 197;
                            this.match(PlatformerParser.COMMA);
                            this.state = 198;
                            this.exp();
                        }
                    }
                    this.state = 203;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 204;
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
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 206;
                _la = this._input.LA(1);
                if (!(_la === PlatformerParser.NAME || _la === PlatformerParser.CONST)) {
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
PlatformerParser.OP = 3;
PlatformerParser.PLAYER = 4;
PlatformerParser.ENEMY = 5;
PlatformerParser.DOOR = 6;
PlatformerParser.TERRAIN = 7;
PlatformerParser.PLATFORM = 8;
PlatformerParser.BUTTON = 9;
PlatformerParser.COIN = 10;
PlatformerParser.LEVEL = 11;
PlatformerParser.CHECKS = 12;
PlatformerParser.IF = 13;
PlatformerParser.ADD = 14;
PlatformerParser.REMOVE = 15;
PlatformerParser.LOGIC = 16;
PlatformerParser.STMT_NEWLINE = 17;
PlatformerParser.NAME = 18;
PlatformerParser.CONST = 19;
PlatformerParser.COMMA = 20;
PlatformerParser.OPEN_BRACE = 21;
PlatformerParser.CLOSE_BRACE = 22;
PlatformerParser.OPEN_PAREN = 23;
PlatformerParser.CLOSE_PAREN = 24;
PlatformerParser.OPEN_SQUARE = 25;
PlatformerParser.CLOSED_SQUARE = 26;
PlatformerParser.SEMICOLON = 27;
PlatformerParser.COLON = 28;
PlatformerParser.LITERAL = 29;
PlatformerParser.LINK = 30;
PlatformerParser.SPACE = 31;
PlatformerParser.NEWLINE = 32;
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
// tslint:disable:no-trailing-whitespace
PlatformerParser.ruleNames = [
    "program", "level", "level_body", "level_cond", "condition", "level_entity",
    "entity_bod", "player", "entity", "cond_statement", "statement", "list",
    "value", "list_object", "exp",
];
PlatformerParser._LITERAL_NAMES = [
    undefined, undefined, undefined, undefined, "'Player'", "'Enemy'", "'Door'",
    "'Terrain'", "'Platform'", "'Button'", "'Coin'", "'Level'", "'Checks'",
    "'IF'", undefined, undefined, undefined, undefined, undefined, undefined,
    "','", "'{'", "'}'", "'('", "')'", "'['", "']'", "';'", "':'",
];
PlatformerParser._SYMBOLIC_NAMES = [
    undefined, "LEADING_SPACE", "COMPONENT", "OP", "PLAYER", "ENEMY", "DOOR",
    "TERRAIN", "PLATFORM", "BUTTON", "COIN", "LEVEL", "CHECKS", "IF", "ADD",
    "REMOVE", "LOGIC", "STMT_NEWLINE", "NAME", "CONST", "COMMA", "OPEN_BRACE",
    "CLOSE_BRACE", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE",
    "SEMICOLON", "COLON", "LITERAL", "LINK", "SPACE", "NEWLINE",
];
PlatformerParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(PlatformerParser._LITERAL_NAMES, PlatformerParser._SYMBOLIC_NAMES, []);
PlatformerParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\"\xD3\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
    "\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x03\x02\x03\x02\x05\x02#\n\x02" +
    "\x03\x02\x03\x02\x03\x02\x07\x02(\n\x02\f\x02\x0E\x02+\v\x02\x03\x02\x03" +
    "\x02\x03\x02\x07\x020\n\x02\f\x02\x0E\x023\v\x02\x03\x02\x03\x02\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x05\x03;\n\x03\x03\x03\x03\x03\x05\x03?\n\x03" +
    "\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x07\x04F\n\x04\f\x04\x0E\x04" +
    "I\v\x04\x03\x04\x03\x04\x05\x04M\n\x04\x07\x04O\n\x04\f\x04\x0E\x04R\v" +
    "\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04X\n\x04\x03\x04\x03\x04\x03" +
    "\x04\x07\x04]\n\x04\f\x04\x0E\x04`\v\x04\x03\x04\x03\x04\x03\x04\x03\x05" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05k\n\x05\x03\x05\x03\x05" +
    "\x03\x05\x05\x05p\n\x05\x03\x05\x03\x05\x03\x05\x07\x05u\n\x05\f\x05\x0E" +
    "\x05x\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x80" +
    "\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x88\n\x07" +
    "\f\x07\x0E\x07\x8B\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x07\b\x92\n\b\f" +
    "\b\x0E\b\x95\v\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n" +
    "\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
    "\f\x03\r\x03\r\x05\r\xAE\n\r\x03\r\x03\r\x03\r\x03\r\x07\r\xB4\n\r\f\r" +
    "\x0E\r\xB7\v\r\x03\r\x05\r\xBA\n\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E" +
    "\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xC4\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03" +
    "\x0F\x07\x0F\xCA\n\x0F\f\x0F\x0E\x0F\xCD\v\x0F\x03\x0F\x03\x0F\x03\x10" +
    "\x03\x10\x03\x10\x02\x02\x02\x11\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
    "\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
    "\x02\x02\x05\x04\x02\x13\x13\"\"\x03\x02\x10\x11\x03\x02\x14\x15\x02\xDC" +
    "\x02 \x03\x02\x02\x02\x046\x03\x02\x02\x02\x06G\x03\x02\x02\x02\bd\x03" +
    "\x02\x02\x02\n\x7F\x03\x02\x02\x02\f\x81\x03\x02\x02\x02\x0E\x8C\x03\x02" +
    "\x02\x02\x10\x98\x03\x02\x02\x02\x12\x9D\x03\x02\x02\x02\x14\xA2\x03\x02" +
    "\x02\x02\x16\xA7\x03\x02\x02\x02\x18\xAB\x03\x02\x02\x02\x1A\xC3\x03\x02" +
    "\x02\x02\x1C\xC5\x03\x02\x02\x02\x1E\xD0\x03\x02\x02\x02 \"\x05\x10\t" +
    "\x02!#\x07\x13\x02\x02\"!\x03\x02\x02\x02\"#\x03\x02\x02\x02#)\x03\x02" +
    "\x02\x02$%\x05\x12\n\x02%&\t\x02\x02\x02&(\x03\x02\x02\x02\'$\x03\x02" +
    "\x02\x02(+\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03\x02\x02\x02*1\x03" +
    "\x02\x02\x02+)\x03\x02\x02\x02,-\x05\x04\x03\x02-.\t\x02\x02\x02.0\x03" +
    "\x02\x02\x02/,\x03\x02\x02\x0203\x03\x02\x02\x021/\x03\x02\x02\x0212\x03" +
    "\x02\x02\x0224\x03\x02\x02\x0231\x03\x02\x02\x0245\x07\x02\x02\x035\x03" +
    "\x03\x02\x02\x0267\x07\r\x02\x0278\x07\x14\x02\x028:\x07\x17\x02\x029" +
    ";\x07\x13\x02\x02:9\x03\x02\x02\x02:;\x03\x02\x02\x02;<\x03\x02\x02\x02" +
    "<>\x05\x06\x04\x02=?\x07\x13\x02\x02>=\x03\x02\x02\x02>?\x03\x02\x02\x02" +
    "?@\x03\x02\x02\x02@A\x07\x18\x02\x02A\x05\x03\x02\x02\x02BC\x05\x16\f" +
    "\x02CD\t\x02\x02\x02DF\x03\x02\x02\x02EB\x03\x02\x02\x02FI\x03\x02\x02" +
    "\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02HP\x03\x02\x02\x02IG\x03\x02\x02" +
    "\x02JL\x05\f\x07\x02KM\t\x02\x02\x02LK\x03\x02\x02\x02LM\x03\x02\x02\x02" +
    "MO\x03\x02\x02\x02NJ\x03\x02\x02\x02OR\x03\x02\x02\x02PN\x03\x02\x02\x02" +
    "PQ\x03\x02\x02\x02QS\x03\x02\x02\x02RP\x03\x02\x02\x02ST\x07\x0E\x02\x02" +
    "TU\x07\x1E\x02\x02UW\x07\x1B\x02\x02VX\t\x02\x02\x02WV\x03\x02\x02\x02" +
    "WX\x03\x02\x02\x02X^\x03\x02\x02\x02YZ\x05\b\x05\x02Z[\t\x02\x02\x02[" +
    "]\x03\x02\x02\x02\\Y\x03\x02\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02" +
    "\x02^_\x03\x02\x02\x02_a\x03\x02\x02\x02`^\x03\x02\x02\x02ab\x07\x1C\x02" +
    "\x02bc\t\x02\x02\x02c\x07\x03\x02\x02\x02de\x07\x0F\x02\x02ef\x07\x1E" +
    "\x02\x02fg\x07\x19\x02\x02gj\x05\n\x06\x02hi\x07\x12\x02\x02ik\x05\n\x06" +
    "\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x07\x1A\x02" +
    "\x02mo\x07\x17\x02\x02np\x07\x13\x02\x02on\x03\x02\x02\x02op\x03\x02\x02" +
    "\x02pv\x03\x02\x02\x02qr\x05\x14\v\x02rs\t\x02\x02\x02su\x03\x02\x02\x02" +
    "tq\x03\x02\x02\x02ux\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02" +
    "wy\x03\x02\x02\x02xv\x03\x02\x02\x02yz\x07\x18\x02\x02z\t\x03\x02\x02" +
    "\x02{|\x07\x14\x02\x02|}\x07\x05\x02\x02}\x80\x05\x1E\x10\x02~\x80\x07" +
    "\x14\x02\x02\x7F{\x03\x02\x02\x02\x7F~\x03\x02\x02\x02\x80\v\x03\x02\x02" +
    "\x02\x81\x82\x07\x04\x02\x02\x82\x83\x07\x1E\x02\x02\x83\x89\t\x02\x02" +
    "\x02\x84\x85\x05\x16\f\x02\x85\x86\t\x02\x02\x02\x86\x88\x03\x02\x02\x02" +
    "\x87\x84\x03\x02\x02\x02\x88\x8B\x03\x02\x02\x02\x89\x87\x03\x02\x02\x02" +
    "\x89\x8A\x03\x02\x02\x02\x8A\r\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02" +
    "\x8C\x8D\x07\x17\x02\x02\x8D\x93\t\x02\x02\x02\x8E\x8F\x05\x16\f\x02\x8F" +
    "\x90\t\x02\x02\x02\x90\x92\x03\x02\x02\x02\x91\x8E\x03\x02\x02\x02\x92" +
    "\x95\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94" +
    "\x96\x03\x02\x02\x02\x95\x93\x03\x02\x02\x02\x96\x97\x07\x18\x02\x02\x97" +
    "\x0F\x03\x02\x02\x02\x98\x99\x07\x06\x02\x02\x99\x9A\x07\x14\x02\x02\x9A" +
    "\x9B\x07\x1E\x02\x02\x9B\x9C\x05\x0E\b\x02\x9C\x11\x03\x02\x02\x02\x9D" +
    "\x9E\x07\x04\x02\x02\x9E\x9F\x07\x14\x02\x02\x9F\xA0\x07\x1E\x02\x02\xA0" +
    "\xA1\x05\x0E\b\x02\xA1\x13\x03\x02\x02\x02\xA2\xA3\x07\x04\x02\x02\xA3" +
    "\xA4\x07\x1E\x02\x02\xA4\xA5\t\x03\x02\x02\xA5\xA6\x05\x1A\x0E\x02\xA6" +
    "\x15\x03\x02\x02\x02\xA7\xA8\x07\x14\x02\x02\xA8\xA9\x07\x1E\x02\x02\xA9" +
    "\xAA\x05\x1A\x0E\x02\xAA\x17\x03\x02\x02\x02\xAB\xAD\x07\x1B\x02\x02\xAC" +
    "\xAE\t\x02\x02\x02\xAD\xAC\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE" +
    "\xAF\x03\x02\x02\x02\xAF\xB5\x05\x1C\x0F\x02\xB0\xB1\x07\x16\x02\x02\xB1" +
    "\xB2\t\x02\x02\x02\xB2\xB4\x05\x1C\x0F\x02\xB3\xB0\x03\x02\x02\x02\xB4" +
    "\xB7\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6" +
    "\xB9\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB8\xBA\t\x02\x02\x02\xB9" +
    "\xB8\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB" +
    "\xBC\x07\x1C\x02\x02\xBC\x19\x03\x02\x02\x02\xBD\xC4\x07\x14\x02\x02\xBE" +
    "\xC4\x07\x15\x02\x02\xBF\xC4\x05\x1C\x0F\x02\xC0\xC4\x07\x1F\x02\x02\xC1" +
    "\xC4\x07 \x02\x02\xC2\xC4\x05\x18\r\x02\xC3\xBD\x03\x02\x02\x02\xC3\xBE" +
    "\x03\x02\x02\x02\xC3\xBF\x03\x02\x02\x02\xC3\xC0\x03\x02\x02\x02\xC3\xC1" +
    "\x03\x02\x02\x02\xC3\xC2\x03\x02\x02\x02\xC4\x1B\x03\x02\x02\x02\xC5\xC6" +
    "\x07\x19\x02\x02\xC6\xCB\x05\x1E\x10\x02\xC7\xC8\x07\x16\x02\x02\xC8\xCA" +
    "\x05\x1E\x10\x02\xC9\xC7\x03\x02\x02\x02\xCA\xCD\x03\x02\x02\x02\xCB\xC9" +
    "\x03\x02\x02\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCE\x03\x02\x02\x02\xCD\xCB" +
    "\x03\x02\x02\x02\xCE\xCF\x07\x1A\x02\x02\xCF\x1D\x03\x02\x02\x02\xD0\xD1" +
    "\t\x04\x02\x02\xD1\x1F\x03\x02\x02\x02\x17\")1:>GLPW^jov\x7F\x89\x93\xAD" +
    "\xB5\xB9\xC3\xCB";
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
    OPEN_SQUARE() { return this.getToken(PlatformerParser.OPEN_SQUARE, 0); }
    CLOSED_SQUARE() { return this.getToken(PlatformerParser.CLOSED_SQUARE, 0); }
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
    NAME() { return this.tryGetToken(PlatformerParser.NAME, 0); }
    OP() { return this.tryGetToken(PlatformerParser.OP, 0); }
    exp() {
        return this.tryGetRuleContext(0, ExpContext);
    }
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
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
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
    COMPONENT() { return this.getToken(PlatformerParser.COMPONENT, 0); }
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
    NAME() { return this.tryGetToken(PlatformerParser.NAME, 0); }
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
    NAME() { return this.tryGetToken(PlatformerParser.NAME, 0); }
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
