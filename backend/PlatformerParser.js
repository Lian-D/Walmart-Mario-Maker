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
exports.VarnameContext = exports.OpContext = exports.ExpContext = exports.List_objectContext = exports.ValueContext = exports.ComponentContext = exports.ListContext = exports.PropertyContext = exports.StatementContext = exports.EntityContext = exports.PlayerContext = exports.Entity_bodContext = exports.Level_entitiesContext = exports.Level_condContext = exports.Level_bodyContext = exports.LevelContext = exports.ProgramContext = exports.PlatformerParser = void 0;
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
                switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
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
                this.state = 59;
                this.match(PlatformerParser.LEVEL);
                this.state = 60;
                this.match(PlatformerParser.NAME);
                this.state = 61;
                this.match(PlatformerParser.OPEN_BRACE);
                this.state = 63;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
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
                    this.state = 105;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 106;
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
    level_entities() {
        let _localctx = new Level_entitiesContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, PlatformerParser.RULE_level_entities);
        let _la;
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
        this.enterRule(_localctx, 10, PlatformerParser.RULE_entity_bod);
        let _la;
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
                    this.state = 126;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 127;
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
    property() {
        let _localctx = new PropertyContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, PlatformerParser.RULE_property);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 141;
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
    // @RuleVersion(0)
    list() {
        let _localctx = new ListContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, PlatformerParser.RULE_list);
        let _la;
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
    component() {
        let _localctx = new ComponentContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, PlatformerParser.RULE_component);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 154;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << PlatformerParser.ENEMY) | (1 << PlatformerParser.DOOR) | (1 << PlatformerParser.TERRAIN) | (1 << PlatformerParser.BUTTON))) !== 0))) {
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
    value() {
        let _localctx = new ValueContext(this._ctx, this.state);
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
                this.state = 176;
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
                this.state = 178;
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
PlatformerParser.PLAYER = 2;
PlatformerParser.ENEMY = 3;
PlatformerParser.DOOR = 4;
PlatformerParser.TERRAIN = 5;
PlatformerParser.PLATFORM = 6;
PlatformerParser.BUTTON = 7;
PlatformerParser.COIN = 8;
PlatformerParser.LEVEL = 9;
PlatformerParser.CHECKS = 10;
PlatformerParser.IF = 11;
PlatformerParser.ADD = 12;
PlatformerParser.REMOVE = 13;
PlatformerParser.MONEY = 14;
PlatformerParser.OPEN_BRACE = 15;
PlatformerParser.CLOSE_BRACE = 16;
PlatformerParser.STMT_NEWLINE = 17;
PlatformerParser.NAME = 18;
PlatformerParser.CONST = 19;
PlatformerParser.COMMA = 20;
PlatformerParser.OPEN_PAREN = 21;
PlatformerParser.CLOSE_PAREN = 22;
PlatformerParser.OPEN_SQUARE = 23;
PlatformerParser.CLOSED_SQUARE = 24;
PlatformerParser.LARGER = 25;
PlatformerParser.SMALLER = 26;
PlatformerParser.EQUAL = 27;
PlatformerParser.SEMICOLON = 28;
PlatformerParser.COLON = 29;
PlatformerParser.SPACE = 30;
PlatformerParser.NEWLINE = 31;
PlatformerParser.RULE_program = 0;
PlatformerParser.RULE_level = 1;
PlatformerParser.RULE_level_body = 2;
PlatformerParser.RULE_level_cond = 3;
PlatformerParser.RULE_level_entities = 4;
PlatformerParser.RULE_entity_bod = 5;
PlatformerParser.RULE_player = 6;
PlatformerParser.RULE_entity = 7;
PlatformerParser.RULE_statement = 8;
PlatformerParser.RULE_property = 9;
PlatformerParser.RULE_list = 10;
PlatformerParser.RULE_component = 11;
PlatformerParser.RULE_value = 12;
PlatformerParser.RULE_list_object = 13;
PlatformerParser.RULE_exp = 14;
PlatformerParser.RULE_op = 15;
PlatformerParser.RULE_varname = 16;
// tslint:disable:no-trailing-whitespace
PlatformerParser.ruleNames = [
    "program", "level", "level_body", "level_cond", "level_entities", "entity_bod",
    "player", "entity", "statement", "property", "list", "component", "value",
    "list_object", "exp", "op", "varname",
];
PlatformerParser._LITERAL_NAMES = [
    undefined, undefined, "'Player '", "'Enemy '", "'Door '", "'Terrain '",
    "'Platform '", "'Button '", "'Coin'", "'Level '", "'Checks '", "'if '",
    "'Add'", "'Remove'", "'MONEY'", "'{'", "'}'", undefined, undefined, undefined,
    "','", "'('", "')'", "'['", "']'", "'>'", "'<'", "'='", "';'", "':'",
];
PlatformerParser._SYMBOLIC_NAMES = [
    undefined, "LEADING_SPACE", "PLAYER", "ENEMY", "DOOR", "TERRAIN", "PLATFORM",
    "BUTTON", "COIN", "LEVEL", "CHECKS", "IF", "ADD", "REMOVE", "MONEY", "OPEN_BRACE",
    "CLOSE_BRACE", "STMT_NEWLINE", "NAME", "CONST", "COMMA", "OPEN_PAREN",
    "CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", "LARGER", "SMALLER", "EQUAL",
    "SEMICOLON", "COLON", "SPACE", "NEWLINE",
];
PlatformerParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(PlatformerParser._LITERAL_NAMES, PlatformerParser._SYMBOLIC_NAMES, []);
PlatformerParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03!\xB7\x04\x02" +
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
class ProgramContext extends ParserRuleContext_1.ParserRuleContext {
    player() {
        return this.getRuleContext(0, PlayerContext);
    }
    level(i) {
        if (i === undefined) {
            return this.getRuleContexts(LevelContext);
        }
        else {
            return this.getRuleContext(i, LevelContext);
        }
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
    level_entities() {
        return this.getRuleContext(0, Level_entitiesContext);
    }
    level_cond() {
        return this.getRuleContext(0, Level_condContext);
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
    OPEN_PAREN() { return this.getToken(PlatformerParser.OPEN_PAREN, 0); }
    varname() {
        return this.getRuleContext(0, VarnameContext);
    }
    op() {
        return this.getRuleContext(0, OpContext);
    }
    exp() {
        return this.getRuleContext(0, ExpContext);
    }
    CLOSE_PAREN() { return this.getToken(PlatformerParser.CLOSE_PAREN, 0); }
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
class Level_entitiesContext extends ParserRuleContext_1.ParserRuleContext {
    component() {
        return this.getRuleContext(0, ComponentContext);
    }
    COLON() { return this.getToken(PlatformerParser.COLON, 0); }
    list() {
        return this.getRuleContext(0, ListContext);
    }
    STMT_NEWLINE() { return this.tryGetToken(PlatformerParser.STMT_NEWLINE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_level_entities; }
    // @Override
    enterRule(listener) {
        if (listener.enterLevel_entities) {
            listener.enterLevel_entities(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLevel_entities) {
            listener.exitLevel_entities(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLevel_entities) {
            return visitor.visitLevel_entities(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Level_entitiesContext = Level_entitiesContext;
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
    component() {
        return this.getRuleContext(0, ComponentContext);
    }
    NAME() { return this.getToken(PlatformerParser.NAME, 0); }
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
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    property() {
        return this.getRuleContext(0, PropertyContext);
    }
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
class PropertyContext extends ParserRuleContext_1.ParserRuleContext {
    NAME() { return this.getToken(PlatformerParser.NAME, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_property; }
    // @Override
    enterRule(listener) {
        if (listener.enterProperty) {
            listener.enterProperty(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitProperty) {
            listener.exitProperty(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitProperty) {
            return visitor.visitProperty(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PropertyContext = PropertyContext;
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
class ComponentContext extends ParserRuleContext_1.ParserRuleContext {
    ENEMY() { return this.tryGetToken(PlatformerParser.ENEMY, 0); }
    DOOR() { return this.tryGetToken(PlatformerParser.DOOR, 0); }
    BUTTON() { return this.tryGetToken(PlatformerParser.BUTTON, 0); }
    TERRAIN() { return this.tryGetToken(PlatformerParser.TERRAIN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return PlatformerParser.RULE_component; }
    // @Override
    enterRule(listener) {
        if (listener.enterComponent) {
            listener.enterComponent(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitComponent) {
            listener.exitComponent(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitComponent) {
            return visitor.visitComponent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ComponentContext = ComponentContext;
class ValueContext extends ParserRuleContext_1.ParserRuleContext {
    varname() {
        return this.tryGetRuleContext(0, VarnameContext);
    }
    CONST() { return this.tryGetToken(PlatformerParser.CONST, 0); }
    list_object() {
        return this.tryGetRuleContext(0, List_objectContext);
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
