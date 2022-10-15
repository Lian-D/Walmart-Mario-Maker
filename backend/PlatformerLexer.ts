// Generated from src/parser/PlatformerLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class PlatformerLexer extends Lexer {
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
	public static readonly MONEY = 15;
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
	public static readonly LOGIC = 32;
	public static readonly LINK = 33;
	public static readonly SPACE = 34;
	public static readonly NEWLINE = 35;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"LEADING_SPACE", "COMPONENT", "PLAYER", "ENEMY", "DOOR", "TERRAIN", "PLATFORM", 
		"BUTTON", "COIN", "LEVEL", "CHECKS", "IF", "ADD", "REMOVE", "MONEY", "STMT_NEWLINE", 
		"NAME", "CONST", "COMMA", "OPEN_BRACE", "CLOSE_BRACE", "OPEN_PAREN", "CLOSE_PAREN", 
		"OPEN_SQUARE", "CLOSED_SQUARE", "LARGER", "SMALLER", "EQUAL", "SEMICOLON", 
		"COLON", "LITERAL", "LOGIC", "LINK", "SPACE", "NEWLINE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'Player '", "'Enemy '", "'Door '", "'Terrain '", 
		"'Platform '", "'Button '", "'Coin'", "'Level '", "'Checks'", "'IF'", 
		"'Add'", "'Remove'", "'MONEY'", undefined, undefined, undefined, "','", 
		"'{'", "'}'", "'('", "')'", "'['", "']'", "'>'", "'<'", "'='", "';'", 
		"':'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LEADING_SPACE", "COMPONENT", "PLAYER", "ENEMY", "DOOR", "TERRAIN", 
		"PLATFORM", "BUTTON", "COIN", "LEVEL", "CHECKS", "IF", "ADD", "REMOVE", 
		"MONEY", "STMT_NEWLINE", "NAME", "CONST", "COMMA", "OPEN_BRACE", "CLOSE_BRACE", 
		"OPEN_PAREN", "CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", "LARGER", 
		"SMALLER", "EQUAL", "SEMICOLON", "COLON", "LITERAL", "LOGIC", "LINK", 
		"SPACE", "NEWLINE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PlatformerLexer._LITERAL_NAMES, PlatformerLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PlatformerLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(PlatformerLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "PlatformerLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return PlatformerLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return PlatformerLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return PlatformerLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return PlatformerLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02%\u0100\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x03\x02\x06\x02K\n\x02\r\x02\x0E\x02L\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03W\n\x03\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x06\x11\xB1\n\x11\r\x11\x0E" +
		"\x11\xB2\x03\x12\x03\x12\x07\x12\xB7\n\x12\f\x12\x0E\x12\xBA\v\x12\x03" +
		"\x13\x05\x13\xBD\n\x13\x03\x13\x06\x13\xC0\n\x13\r\x13\x0E\x13\xC1\x03" +
		"\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03" +
		"\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03" +
		"\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x06 \xDD\n \r \x0E " +
		"\xDE\x03!\x03!\x03!\x03!\x03!\x05!\xE6\n!\x03\"\x06\"\xE9\n\"\r\"\x0E" +
		"\"\xEA\x03\"\x03\"\x06\"\xEF\n\"\r\"\x0E\"\xF0\x03#\x06#\xF4\n#\r#\x0E" +
		"#\xF5\x03#\x03#\x03$\x06$\xFB\n$\r$\x0E$\xFC\x03$\x03$\x02\x02\x02%\x03" +
		"\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t" +
		"\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02" +
		"\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17" +
		"-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F" +
		"=\x02 ?\x02!A\x02\"C\x02#E\x02$G\x02%\x03\x02\b\x04\x02\v\v\"\"\x04\x02" +
		"\f\f\x0F\x0F\x04\x02C\\c|\x05\x022;C\\c|\x03\x022;\x06\x02%%/;C\\c|\x02" +
		"\u010F\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02" +
		"\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02" +
		"\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02" +
		"\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02" +
		"\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02" +
		"\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02" +
		"\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03" +
		"\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02" +
		"\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02" +
		";\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02" +
		"\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02" +
		"\x03J\x03\x02\x02\x02\x05V\x03\x02\x02\x02\x07X\x03\x02\x02\x02\t`\x03" +
		"\x02\x02\x02\vg\x03\x02\x02\x02\rm\x03\x02\x02\x02\x0Fv\x03\x02\x02\x02" +
		"\x11\x80\x03\x02\x02\x02\x13\x88\x03\x02\x02\x02\x15\x8D\x03\x02\x02\x02" +
		"\x17\x94\x03\x02\x02\x02\x19\x9B\x03\x02\x02\x02\x1B\x9E\x03\x02\x02\x02" +
		"\x1D\xA2\x03\x02\x02\x02\x1F\xA9\x03\x02\x02\x02!\xB0\x03\x02\x02\x02" +
		"#\xB4\x03\x02\x02\x02%\xBC\x03\x02\x02\x02\'\xC3\x03\x02\x02\x02)\xC5" +
		"\x03\x02\x02\x02+\xC7\x03\x02\x02\x02-\xC9\x03\x02\x02\x02/\xCB\x03\x02" +
		"\x02\x021\xCD\x03\x02\x02\x023\xCF\x03\x02\x02\x025\xD1\x03\x02\x02\x02" +
		"7\xD3\x03\x02\x02\x029\xD5\x03\x02\x02\x02;\xD7\x03\x02\x02\x02=\xD9\x03" +
		"\x02\x02\x02?\xDC\x03\x02\x02\x02A\xE5\x03\x02\x02\x02C\xE8\x03\x02\x02" +
		"\x02E\xF3\x03\x02\x02\x02G\xFA\x03\x02\x02\x02IK\t\x02\x02\x02JI\x03\x02" +
		"\x02\x02KL\x03\x02\x02\x02LJ\x03\x02\x02\x02LM\x03\x02\x02\x02MN\x03\x02" +
		"\x02\x02NO\b\x02\x02\x02O\x04\x03\x02\x02\x02PW\x05\t\x05\x02QW\x05\v" +
		"\x06\x02RW\x05\x11\t\x02SW\x05\r\x07\x02TW\x05\x0F\b\x02UW\x05\x13\n\x02" +
		"VP\x03\x02\x02\x02VQ\x03\x02\x02\x02VR\x03\x02\x02\x02VS\x03\x02\x02\x02" +
		"VT\x03\x02\x02\x02VU\x03\x02\x02\x02W\x06\x03\x02\x02\x02XY\x07R\x02\x02" +
		"YZ\x07n\x02\x02Z[\x07c\x02\x02[\\\x07{\x02\x02\\]\x07g\x02\x02]^\x07t" +
		"\x02\x02^_\x07\"\x02\x02_\b\x03\x02\x02\x02`a\x07G\x02\x02ab\x07p\x02" +
		"\x02bc\x07g\x02\x02cd\x07o\x02\x02de\x07{\x02\x02ef\x07\"\x02\x02f\n\x03" +
		"\x02\x02\x02gh\x07F\x02\x02hi\x07q\x02\x02ij\x07q\x02\x02jk\x07t\x02\x02" +
		"kl\x07\"\x02\x02l\f\x03\x02\x02\x02mn\x07V\x02\x02no\x07g\x02\x02op\x07" +
		"t\x02\x02pq\x07t\x02\x02qr\x07c\x02\x02rs\x07k\x02\x02st\x07p\x02\x02" +
		"tu\x07\"\x02\x02u\x0E\x03\x02\x02\x02vw\x07R\x02\x02wx\x07n\x02\x02xy" +
		"\x07c\x02\x02yz\x07v\x02\x02z{\x07h\x02\x02{|\x07q\x02\x02|}\x07t\x02" +
		"\x02}~\x07o\x02\x02~\x7F\x07\"\x02\x02\x7F\x10\x03\x02\x02\x02\x80\x81" +
		"\x07D\x02\x02\x81\x82\x07w\x02\x02\x82\x83\x07v\x02\x02\x83\x84\x07v\x02" +
		"\x02\x84\x85\x07q\x02\x02\x85\x86\x07p\x02\x02\x86\x87\x07\"\x02\x02\x87" +
		"\x12\x03\x02\x02\x02\x88\x89\x07E\x02\x02\x89\x8A\x07q\x02\x02\x8A\x8B" +
		"\x07k\x02\x02\x8B\x8C\x07p\x02\x02\x8C\x14\x03\x02\x02\x02\x8D\x8E\x07" +
		"N\x02\x02\x8E\x8F\x07g\x02\x02\x8F\x90\x07x\x02\x02\x90\x91\x07g\x02\x02" +
		"\x91\x92\x07n\x02\x02\x92\x93\x07\"\x02\x02\x93\x16\x03\x02\x02\x02\x94" +
		"\x95\x07E\x02\x02\x95\x96\x07j\x02\x02\x96\x97\x07g\x02\x02\x97\x98\x07" +
		"e\x02\x02\x98\x99\x07m\x02\x02\x99\x9A\x07u\x02\x02\x9A\x18\x03\x02\x02" +
		"\x02\x9B\x9C\x07K\x02\x02\x9C\x9D\x07H\x02\x02\x9D\x1A\x03\x02\x02\x02" +
		"\x9E\x9F\x07C\x02\x02\x9F\xA0\x07f\x02\x02\xA0\xA1\x07f\x02\x02\xA1\x1C" +
		"\x03\x02\x02\x02\xA2\xA3\x07T\x02\x02\xA3\xA4\x07g\x02\x02\xA4\xA5\x07" +
		"o\x02\x02\xA5\xA6\x07q\x02\x02\xA6\xA7\x07x\x02\x02\xA7\xA8\x07g\x02\x02" +
		"\xA8\x1E\x03\x02\x02\x02\xA9\xAA\x07O\x02\x02\xAA\xAB\x07Q\x02\x02\xAB" +
		"\xAC\x07P\x02\x02\xAC\xAD\x07G\x02\x02\xAD\xAE\x07[\x02\x02\xAE \x03\x02" +
		"\x02\x02\xAF\xB1\t\x03\x02\x02\xB0\xAF\x03\x02\x02\x02\xB1\xB2\x03\x02" +
		"\x02\x02\xB2\xB0\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\"\x03\x02" +
		"\x02\x02\xB4\xB8\t\x04\x02\x02\xB5\xB7\t\x05\x02\x02\xB6\xB5\x03\x02\x02" +
		"\x02\xB7\xBA\x03\x02\x02\x02\xB8\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02" +
		"\x02\xB9$\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBB\xBD\x07/\x02\x02" +
		"\xBC\xBB\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBF\x03\x02\x02\x02" +
		"\xBE\xC0\t\x06\x02\x02\xBF\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02" +
		"\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2&\x03\x02\x02\x02" +
		"\xC3\xC4\x07.\x02\x02\xC4(\x03\x02\x02\x02\xC5\xC6\x07}\x02\x02\xC6*\x03" +
		"\x02\x02\x02\xC7\xC8\x07\x7F\x02\x02\xC8,\x03\x02\x02\x02\xC9\xCA\x07" +
		"*\x02\x02\xCA.\x03\x02\x02\x02\xCB\xCC\x07+\x02\x02\xCC0\x03\x02\x02\x02" +
		"\xCD\xCE\x07]\x02\x02\xCE2\x03\x02\x02\x02\xCF\xD0\x07_\x02\x02\xD04\x03" +
		"\x02\x02\x02\xD1\xD2\x07@\x02\x02\xD26\x03\x02\x02\x02\xD3\xD4\x07>\x02" +
		"\x02\xD48\x03\x02\x02\x02\xD5\xD6\x07?\x02\x02\xD6:\x03\x02\x02\x02\xD7" +
		"\xD8\x07=\x02\x02\xD8<\x03\x02\x02\x02\xD9\xDA\x07<\x02\x02\xDA>\x03\x02" +
		"\x02\x02\xDB\xDD\t\x07\x02\x02\xDC\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02" +
		"\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF@\x03\x02" +
		"\x02\x02\xE0\xE1\x07C\x02\x02\xE1\xE2\x07P\x02\x02\xE2\xE6\x07F\x02\x02" +
		"\xE3\xE4\x07Q\x02\x02\xE4\xE6\x07T\x02\x02\xE5\xE0\x03\x02\x02\x02\xE5" +
		"\xE3\x03\x02\x02\x02\xE6B\x03\x02\x02\x02\xE7\xE9\x05? \x02\xE8\xE7\x03" +
		"\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xEB\x03" +
		"\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEE\x05=\x1F\x02\xED\xEF\x05" +
		"? \x02\xEE\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xEE\x03\x02" +
		"\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1D\x03\x02\x02\x02\xF2\xF4\t\x02\x02" +
		"\x02\xF3\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF3\x03\x02\x02" +
		"\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF8\b#\x02\x02" +
		"\xF8F\x03\x02\x02\x02\xF9\xFB\t\x03\x02\x02\xFA\xF9\x03\x02\x02\x02\xFB" +
		"\xFC\x03\x02\x02\x02\xFC\xFA\x03\x02\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD" +
		"\xFE\x03\x02\x02\x02\xFE\xFF\b$\x03\x02\xFFH\x03\x02\x02\x02\x10\x02L" +
		"V\xB2\xB8\xBC\xC1\xDC\xDE\xE5\xEA\xF0\xF5\xFC\x04\x02\x03\x02\x04\x02" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PlatformerLexer.__ATN) {
			PlatformerLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PlatformerLexer._serializedATN));
		}

		return PlatformerLexer.__ATN;
	}

}

