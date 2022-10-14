"use strict";
// Generated from src/parser/PlatformerLexer.g4 by ANTLR 4.9.0-SNAPSHOT
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
exports.PlatformerLexer = void 0;
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class PlatformerLexer extends Lexer_1.Lexer {
    // tslint:enable:no-trailing-whitespace
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(PlatformerLexer._ATN, this);
    }
    // @Override
    // @NotNull
    get vocabulary() {
        return PlatformerLexer.VOCABULARY;
    }
    // @Override
    get grammarFileName() { return "PlatformerLexer.g4"; }
    // @Override
    get ruleNames() { return PlatformerLexer.ruleNames; }
    // @Override
    get serializedATN() { return PlatformerLexer._serializedATN; }
    // @Override
    get channelNames() { return PlatformerLexer.channelNames; }
    // @Override
    get modeNames() { return PlatformerLexer.modeNames; }
    static get _ATN() {
        if (!PlatformerLexer.__ATN) {
            PlatformerLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(PlatformerLexer._serializedATN));
        }
        return PlatformerLexer.__ATN;
    }
}
exports.PlatformerLexer = PlatformerLexer;
PlatformerLexer.LEADING_SPACE = 1;
PlatformerLexer.PLAYER = 2;
PlatformerLexer.ENEMY = 3;
PlatformerLexer.DOOR = 4;
PlatformerLexer.TERRAIN = 5;
PlatformerLexer.PLATFORM = 6;
PlatformerLexer.BUTTON = 7;
PlatformerLexer.COIN = 8;
PlatformerLexer.LEVEL = 9;
PlatformerLexer.CHECKS = 10;
PlatformerLexer.IF = 11;
PlatformerLexer.ADD = 12;
PlatformerLexer.REMOVE = 13;
PlatformerLexer.MONEY = 14;
PlatformerLexer.OPEN_BRACE = 15;
PlatformerLexer.CLOSE_BRACE = 16;
PlatformerLexer.STMT_NEWLINE = 17;
PlatformerLexer.NAME = 18;
PlatformerLexer.CONST = 19;
PlatformerLexer.COMMA = 20;
PlatformerLexer.OPEN_PAREN = 21;
PlatformerLexer.CLOSE_PAREN = 22;
PlatformerLexer.OPEN_SQUARE = 23;
PlatformerLexer.CLOSED_SQUARE = 24;
PlatformerLexer.LARGER = 25;
PlatformerLexer.SMALLER = 26;
PlatformerLexer.EQUAL = 27;
PlatformerLexer.SEMICOLON = 28;
PlatformerLexer.COLON = 29;
PlatformerLexer.SPACE = 30;
PlatformerLexer.NEWLINE = 31;
PlatformerLexer.EXP_MODE = 1;
// tslint:disable:no-trailing-whitespace
PlatformerLexer.channelNames = [
    "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
];
// tslint:disable:no-trailing-whitespace
PlatformerLexer.modeNames = [
    "DEFAULT_MODE", "EXP_MODE",
];
PlatformerLexer.ruleNames = [
    "LEADING_SPACE", "PLAYER", "ENEMY", "DOOR", "TERRAIN", "PLATFORM", "BUTTON",
    "COIN", "LEVEL", "CHECKS", "IF", "ADD", "REMOVE", "MONEY", "OPEN_BRACE",
    "CLOSE_BRACE", "STMT_NEWLINE", "NAME", "CONST", "COMMA", "OPEN_PAREN",
    "CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", "LARGER", "SMALLER", "EQUAL",
    "SEMICOLON", "COLON", "SPACE", "NEWLINE",
];
PlatformerLexer._LITERAL_NAMES = [
    undefined, undefined, "'Player '", "'Enemy '", "'Door '", "'Terrain '",
    "'Platform '", "'Button '", "'Coin'", "'Level '", "'Checks '", "'if '",
    "'Add'", "'Remove'", "'MONEY'", "'{'", "'}'", undefined, undefined, undefined,
    "','", "'('", "')'", "'['", "']'", "'>'", "'<'", "'='", "';'", "':'",
];
PlatformerLexer._SYMBOLIC_NAMES = [
    undefined, "LEADING_SPACE", "PLAYER", "ENEMY", "DOOR", "TERRAIN", "PLATFORM",
    "BUTTON", "COIN", "LEVEL", "CHECKS", "IF", "ADD", "REMOVE", "MONEY", "OPEN_BRACE",
    "CLOSE_BRACE", "STMT_NEWLINE", "NAME", "CONST", "COMMA", "OPEN_PAREN",
    "CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", "LARGER", "SMALLER", "EQUAL",
    "SEMICOLON", "COLON", "SPACE", "NEWLINE",
];
PlatformerLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(PlatformerLexer._LITERAL_NAMES, PlatformerLexer._SYMBOLIC_NAMES, []);
PlatformerLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02!\xF6\b\x01\b" +
    "\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t" +
    "\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04" +
    "\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12" +
    "\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17" +
    "\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C" +
    "\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x03\x02\x06\x02" +
    "D\n\x02\r\x02\x0E\x02E\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04" +
    "\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05" +
    "\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
    "\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07" +
    "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
    "\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
    "\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
    "\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03" +
    "\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
    "\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
    "\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x06\x12\xC2\n\x12\r\x12\x0E\x12" +
    "\xC3\x03\x13\x03\x13\x07\x13\xC8\n\x13\f\x13\x0E\x13\xCB\v\x13\x03\x14" +
    "\x05\x14\xCE\n\x14\x03\x14\x06\x14\xD1\n\x14\r\x14\x0E\x14\xD2\x03\x15" +
    "\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19" +
    "\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E" +
    "\x03\x1E\x03\x1F\x06\x1F\xEA\n\x1F\r\x1F\x0E\x1F\xEB\x03\x1F\x03\x1F\x03" +
    " \x06 \xF1\n \r \x0E \xF2\x03 \x03 \x02\x02\x02!\x04\x02\x03\x06\x02\x04" +
    "\b\x02\x05\n\x02\x06\f\x02\x07\x0E\x02\b\x10\x02\t\x12\x02\n\x14\x02\v" +
    "\x16\x02\f\x18\x02\r\x1A\x02\x0E\x1C\x02\x0F\x1E\x02\x10 \x02\x11\"\x02" +
    "\x12$\x02\x13&\x02\x14(\x02\x15*\x02\x16,\x02\x17.\x02\x180\x02\x192\x02" +
    "\x1A4\x02\x1B6\x02\x1C8\x02\x1D:\x02\x1E<\x02\x1F>\x02 @\x02!\x04\x02" +
    "\x03\x07\x04\x02\v\v\"\"\x04\x02\f\f\x0F\x0F\x04\x02C\\c|\x05\x022;C\\" +
    "c|\x03\x022;\x02\xFB\x02\x04\x03\x02\x02\x02\x02\x06\x03\x02\x02\x02\x02" +
    "\b\x03\x02\x02\x02\x02\n\x03\x02\x02\x02\x02\f\x03\x02\x02\x02\x02\x0E" +
    "\x03\x02\x02\x02\x02\x10\x03\x02\x02\x02\x02\x12\x03\x02\x02\x02\x02\x14" +
    "\x03\x02\x02\x02\x02\x16\x03\x02\x02\x02\x02\x18\x03\x02\x02\x02\x02\x1A" +
    "\x03\x02\x02\x02\x02\x1C\x03\x02\x02\x02\x02\x1E\x03\x02\x02\x02\x02 " +
    "\x03\x02\x02\x02\x02\"\x03\x02\x02\x02\x02$\x03\x02\x02\x02\x03&\x03\x02" +
    "\x02\x02\x03(\x03\x02\x02\x02\x03*\x03\x02\x02\x02\x03,\x03\x02\x02\x02" +
    "\x03.\x03\x02\x02\x02\x030\x03\x02\x02\x02\x032\x03\x02\x02\x02\x034\x03" +
    "\x02\x02\x02\x036\x03\x02\x02\x02\x038\x03\x02\x02\x02\x03:\x03\x02\x02" +
    "\x02\x03<\x03\x02\x02\x02\x03>\x03\x02\x02\x02\x03@\x03\x02\x02\x02\x04" +
    "C\x03\x02\x02\x02\x06I\x03\x02\x02\x02\bS\x03\x02\x02\x02\n\\\x03\x02" +
    "\x02\x02\fd\x03\x02\x02\x02\x0Eo\x03\x02\x02\x02\x10{\x03\x02\x02\x02" +
    "\x12\x85\x03\x02\x02\x02\x14\x8C\x03\x02\x02\x02\x16\x95\x03\x02\x02\x02" +
    "\x18\x9F\x03\x02\x02\x02\x1A\xA5\x03\x02\x02\x02\x1C\xAB\x03\x02\x02\x02" +
    "\x1E\xB4\x03\x02\x02\x02 \xBC\x03\x02\x02\x02\"\xBE\x03\x02\x02\x02$\xC1" +
    "\x03\x02\x02\x02&\xC5\x03\x02\x02\x02(\xCD\x03\x02\x02\x02*\xD4\x03\x02" +
    "\x02\x02,\xD6\x03\x02\x02\x02.\xD8\x03\x02\x02\x020\xDA\x03\x02\x02\x02" +
    "2\xDC\x03\x02\x02\x024\xDE\x03\x02\x02\x026\xE0\x03\x02\x02\x028\xE2\x03" +
    "\x02\x02\x02:\xE4\x03\x02\x02\x02<\xE6\x03\x02\x02\x02>\xE9\x03\x02\x02" +
    "\x02@\xF0\x03\x02\x02\x02BD\t\x02\x02\x02CB\x03\x02\x02\x02DE\x03\x02" +
    "\x02\x02EC\x03\x02\x02\x02EF\x03\x02\x02\x02FG\x03\x02\x02\x02GH\b\x02" +
    "\x02\x02H\x05\x03\x02\x02\x02IJ\x07R\x02\x02JK\x07n\x02\x02KL\x07c\x02" +
    "\x02LM\x07{\x02\x02MN\x07g\x02\x02NO\x07t\x02\x02OP\x07\"\x02\x02PQ\x03" +
    "\x02\x02\x02QR\b\x03\x03\x02R\x07\x03\x02\x02\x02ST\x07G\x02\x02TU\x07" +
    "p\x02\x02UV\x07g\x02\x02VW\x07o\x02\x02WX\x07{\x02\x02XY\x07\"\x02\x02" +
    "YZ\x03\x02\x02\x02Z[\b\x04\x03\x02[\t\x03\x02\x02\x02\\]\x07F\x02\x02" +
    "]^\x07q\x02\x02^_\x07q\x02\x02_`\x07t\x02\x02`a\x07\"\x02\x02ab\x03\x02" +
    "\x02\x02bc\b\x05\x03\x02c\v\x03\x02\x02\x02de\x07V\x02\x02ef\x07g\x02" +
    "\x02fg\x07t\x02\x02gh\x07t\x02\x02hi\x07c\x02\x02ij\x07k\x02\x02jk\x07" +
    "p\x02\x02kl\x07\"\x02\x02lm\x03\x02\x02\x02mn\b\x06\x03\x02n\r\x03\x02" +
    "\x02\x02op\x07R\x02\x02pq\x07n\x02\x02qr\x07c\x02\x02rs\x07v\x02\x02s" +
    "t\x07h\x02\x02tu\x07q\x02\x02uv\x07t\x02\x02vw\x07o\x02\x02wx\x07\"\x02" +
    "\x02xy\x03\x02\x02\x02yz\b\x07\x03\x02z\x0F\x03\x02\x02\x02{|\x07D\x02" +
    "\x02|}\x07w\x02\x02}~\x07v\x02\x02~\x7F\x07v\x02\x02\x7F\x80\x07q\x02" +
    "\x02\x80\x81\x07p\x02\x02\x81\x82\x07\"\x02\x02\x82\x83\x03\x02\x02\x02" +
    "\x83\x84\b\b\x03\x02\x84\x11\x03\x02\x02\x02\x85\x86\x07E\x02\x02\x86" +
    "\x87\x07q\x02\x02\x87\x88\x07k\x02\x02\x88\x89\x07p\x02\x02\x89\x8A\x03" +
    "\x02\x02\x02\x8A\x8B\b\t\x03\x02\x8B\x13\x03\x02\x02\x02\x8C\x8D\x07N" +
    "\x02\x02\x8D\x8E\x07g\x02\x02\x8E\x8F\x07x\x02\x02\x8F\x90\x07g\x02\x02" +
    "\x90\x91\x07n\x02\x02\x91\x92\x07\"\x02\x02\x92\x93\x03\x02\x02\x02\x93" +
    "\x94\b\n\x03\x02\x94\x15\x03\x02\x02\x02\x95\x96\x07E\x02\x02\x96\x97" +
    "\x07j\x02\x02\x97\x98\x07g\x02\x02\x98\x99\x07e\x02\x02\x99\x9A\x07m\x02" +
    "\x02\x9A\x9B\x07u\x02\x02\x9B\x9C\x07\"\x02\x02\x9C\x9D\x03\x02\x02\x02" +
    "\x9D\x9E\b\v\x03\x02\x9E\x17\x03\x02\x02\x02\x9F\xA0\x07k\x02\x02\xA0" +
    "\xA1\x07h\x02\x02\xA1\xA2\x07\"\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4" +
    "\b\f\x03\x02\xA4\x19\x03\x02\x02\x02\xA5\xA6\x07C\x02\x02\xA6\xA7\x07" +
    "f\x02\x02\xA7\xA8\x07f\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9\xAA\b\r\x03" +
    "\x02\xAA\x1B\x03\x02\x02\x02\xAB\xAC\x07T\x02\x02\xAC\xAD\x07g\x02\x02" +
    "\xAD\xAE\x07o\x02\x02\xAE\xAF\x07q\x02\x02\xAF\xB0\x07x\x02\x02\xB0\xB1" +
    "\x07g\x02\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB3\b\x0E\x03\x02\xB3\x1D\x03" +
    "\x02\x02\x02\xB4\xB5\x07O\x02\x02\xB5\xB6\x07Q\x02\x02\xB6\xB7\x07P\x02" +
    "\x02\xB7\xB8\x07G\x02\x02\xB8\xB9\x07[\x02\x02\xB9\xBA\x03\x02\x02\x02" +
    "\xBA\xBB\b\x0F\x03\x02\xBB\x1F\x03\x02\x02\x02\xBC\xBD\x07}\x02\x02\xBD" +
    "!\x03\x02\x02\x02\xBE\xBF\x07\x7F\x02\x02\xBF#\x03\x02\x02\x02\xC0\xC2" +
    "\t\x03\x02\x02\xC1\xC0\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC1" +
    "\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4%\x03\x02\x02\x02\xC5\xC9" +
    "\t\x04\x02\x02\xC6\xC8\t\x05\x02\x02\xC7\xC6\x03\x02\x02\x02\xC8\xCB\x03" +
    "\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\'\x03" +
    "\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCC\xCE\x07/\x02\x02\xCD\xCC\x03" +
    "\x02\x02\x02\xCD\xCE\x03\x02\x02\x02\xCE\xD0\x03\x02\x02\x02\xCF\xD1\t" +
    "\x06\x02\x02\xD0\xCF\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD0\x03" +
    "\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3)\x03\x02\x02\x02\xD4\xD5\x07" +
    ".\x02\x02\xD5+\x03\x02\x02\x02\xD6\xD7\x07*\x02\x02\xD7-\x03\x02\x02\x02" +
    "\xD8\xD9\x07+\x02\x02\xD9/\x03\x02\x02\x02\xDA\xDB\x07]\x02\x02\xDB1\x03" +
    "\x02\x02\x02\xDC\xDD\x07_\x02\x02\xDD3\x03\x02\x02\x02\xDE\xDF\x07@\x02" +
    "\x02\xDF5\x03\x02\x02\x02\xE0\xE1\x07>\x02\x02\xE17\x03\x02\x02\x02\xE2" +
    "\xE3\x07?\x02\x02\xE39\x03\x02\x02\x02\xE4\xE5\x07=\x02\x02\xE5;\x03\x02" +
    "\x02\x02\xE6\xE7\x07<\x02\x02\xE7=\x03\x02\x02\x02\xE8\xEA\t\x02\x02\x02" +
    "\xE9\xE8\x03\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xE9\x03\x02\x02\x02" +
    "\xEB\xEC\x03\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEE\b\x1F\x02\x02" +
    "\xEE?\x03\x02\x02\x02\xEF\xF1\t\x03\x02\x02\xF0\xEF\x03\x02\x02\x02\xF1" +
    "\xF2\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3" +
    "\xF4\x03\x02\x02\x02\xF4\xF5\b \x04\x02\xF5A\x03\x02\x02\x02\v\x02\x03" +
    "E\xC3\xC9\xCD\xD2\xEB\xF2\x05\x02\x03\x02\x04\x03\x02\x04\x02\x02";
