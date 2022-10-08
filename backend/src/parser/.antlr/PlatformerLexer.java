// Generated from c:\Users\steve\Documents\GitHub\Project1Group8\backend\src\parser\PlatformerLexer.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class PlatformerLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LEADING_SPACE=1, PLAYER=2, ENEMY=3, DOOR=4, TERRAIN=5, PLATFORM=6, BUTTON=7, 
		COIN=8, LEVEL=9, CHECKS=10, IF=11, ADD=12, REMOVE=13, MONEY=14, OPEN_BRACE=15, 
		CLOSE_BRACE=16, STMT_NEWLINE=17, NAME=18, CONST=19, COMMA=20, OPEN_PAREN=21, 
		CLOSE_PAREN=22, OPEN_SQUARE=23, CLOSED_SQUARE=24, LARGER=25, SMALLER=26, 
		SEMICOLON=27, COLON=28, SPACE=29, NEWLINE=30;
	public static final int
		EXP_MODE=1;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "EXP_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LEADING_SPACE", "PLAYER", "ENEMY", "DOOR", "TERRAIN", "PLATFORM", "BUTTON", 
			"COIN", "LEVEL", "CHECKS", "IF", "ADD", "REMOVE", "MONEY", "OPEN_BRACE", 
			"CLOSE_BRACE", "STMT_NEWLINE", "NAME", "CONST", "COMMA", "OPEN_PAREN", 
			"CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", "LARGER", "SMALLER", "SEMICOLON", 
			"COLON", "SPACE", "NEWLINE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'Player '", "'Enemy '", "'Door '", "'Terrain '", "'Platform '", 
			"'Button '", "'Coin'", "'Level '", "'Checks '", "'if '", "'Add'", "'Remove'", 
			"'MONEY'", "'{'", "'}'", null, null, null, "','", "'('", "')'", "'['", 
			"']'", "'>'", "'<'", "';'", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LEADING_SPACE", "PLAYER", "ENEMY", "DOOR", "TERRAIN", "PLATFORM", 
			"BUTTON", "COIN", "LEVEL", "CHECKS", "IF", "ADD", "REMOVE", "MONEY", 
			"OPEN_BRACE", "CLOSE_BRACE", "STMT_NEWLINE", "NAME", "CONST", "COMMA", 
			"OPEN_PAREN", "CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", "LARGER", 
			"SMALLER", "SEMICOLON", "COLON", "SPACE", "NEWLINE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public PlatformerLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "PlatformerLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2 \u00f2\b\1\b\1\4"+
		"\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n"+
		"\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\3\2"+
		"\6\2B\n\2\r\2\16\2C\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3"+
		"\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3"+
		"\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r"+
		"\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3"+
		"\17\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\21\3\21\3\22\6\22\u00c0\n\22"+
		"\r\22\16\22\u00c1\3\23\3\23\7\23\u00c6\n\23\f\23\16\23\u00c9\13\23\3\24"+
		"\5\24\u00cc\n\24\3\24\6\24\u00cf\n\24\r\24\16\24\u00d0\3\25\3\25\3\26"+
		"\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\35"+
		"\3\35\3\36\6\36\u00e6\n\36\r\36\16\36\u00e7\3\36\3\36\3\37\6\37\u00ed"+
		"\n\37\r\37\16\37\u00ee\3\37\3\37\2\2 \4\3\6\4\b\5\n\6\f\7\16\b\20\t\22"+
		"\n\24\13\26\f\30\r\32\16\34\17\36\20 \21\"\22$\23&\24(\25*\26,\27.\30"+
		"\60\31\62\32\64\33\66\348\35:\36<\37> \4\2\3\7\4\2\13\13\"\"\4\2\f\f\17"+
		"\17\4\2C\\c|\5\2\62;C\\c|\3\2\62;\2\u00f7\2\4\3\2\2\2\2\6\3\2\2\2\2\b"+
		"\3\2\2\2\2\n\3\2\2\2\2\f\3\2\2\2\2\16\3\2\2\2\2\20\3\2\2\2\2\22\3\2\2"+
		"\2\2\24\3\2\2\2\2\26\3\2\2\2\2\30\3\2\2\2\2\32\3\2\2\2\2\34\3\2\2\2\2"+
		"\36\3\2\2\2\2 \3\2\2\2\2\"\3\2\2\2\2$\3\2\2\2\3&\3\2\2\2\3(\3\2\2\2\3"+
		"*\3\2\2\2\3,\3\2\2\2\3.\3\2\2\2\3\60\3\2\2\2\3\62\3\2\2\2\3\64\3\2\2\2"+
		"\3\66\3\2\2\2\38\3\2\2\2\3:\3\2\2\2\3<\3\2\2\2\3>\3\2\2\2\4A\3\2\2\2\6"+
		"G\3\2\2\2\bQ\3\2\2\2\nZ\3\2\2\2\fb\3\2\2\2\16m\3\2\2\2\20y\3\2\2\2\22"+
		"\u0083\3\2\2\2\24\u008a\3\2\2\2\26\u0093\3\2\2\2\30\u009d\3\2\2\2\32\u00a3"+
		"\3\2\2\2\34\u00a9\3\2\2\2\36\u00b2\3\2\2\2 \u00ba\3\2\2\2\"\u00bc\3\2"+
		"\2\2$\u00bf\3\2\2\2&\u00c3\3\2\2\2(\u00cb\3\2\2\2*\u00d2\3\2\2\2,\u00d4"+
		"\3\2\2\2.\u00d6\3\2\2\2\60\u00d8\3\2\2\2\62\u00da\3\2\2\2\64\u00dc\3\2"+
		"\2\2\66\u00de\3\2\2\28\u00e0\3\2\2\2:\u00e2\3\2\2\2<\u00e5\3\2\2\2>\u00ec"+
		"\3\2\2\2@B\t\2\2\2A@\3\2\2\2BC\3\2\2\2CA\3\2\2\2CD\3\2\2\2DE\3\2\2\2E"+
		"F\b\2\2\2F\5\3\2\2\2GH\7R\2\2HI\7n\2\2IJ\7c\2\2JK\7{\2\2KL\7g\2\2LM\7"+
		"t\2\2MN\7\"\2\2NO\3\2\2\2OP\b\3\3\2P\7\3\2\2\2QR\7G\2\2RS\7p\2\2ST\7g"+
		"\2\2TU\7o\2\2UV\7{\2\2VW\7\"\2\2WX\3\2\2\2XY\b\4\3\2Y\t\3\2\2\2Z[\7F\2"+
		"\2[\\\7q\2\2\\]\7q\2\2]^\7t\2\2^_\7\"\2\2_`\3\2\2\2`a\b\5\3\2a\13\3\2"+
		"\2\2bc\7V\2\2cd\7g\2\2de\7t\2\2ef\7t\2\2fg\7c\2\2gh\7k\2\2hi\7p\2\2ij"+
		"\7\"\2\2jk\3\2\2\2kl\b\6\3\2l\r\3\2\2\2mn\7R\2\2no\7n\2\2op\7c\2\2pq\7"+
		"v\2\2qr\7h\2\2rs\7q\2\2st\7t\2\2tu\7o\2\2uv\7\"\2\2vw\3\2\2\2wx\b\7\3"+
		"\2x\17\3\2\2\2yz\7D\2\2z{\7w\2\2{|\7v\2\2|}\7v\2\2}~\7q\2\2~\177\7p\2"+
		"\2\177\u0080\7\"\2\2\u0080\u0081\3\2\2\2\u0081\u0082\b\b\3\2\u0082\21"+
		"\3\2\2\2\u0083\u0084\7E\2\2\u0084\u0085\7q\2\2\u0085\u0086\7k\2\2\u0086"+
		"\u0087\7p\2\2\u0087\u0088\3\2\2\2\u0088\u0089\b\t\3\2\u0089\23\3\2\2\2"+
		"\u008a\u008b\7N\2\2\u008b\u008c\7g\2\2\u008c\u008d\7x\2\2\u008d\u008e"+
		"\7g\2\2\u008e\u008f\7n\2\2\u008f\u0090\7\"\2\2\u0090\u0091\3\2\2\2\u0091"+
		"\u0092\b\n\3\2\u0092\25\3\2\2\2\u0093\u0094\7E\2\2\u0094\u0095\7j\2\2"+
		"\u0095\u0096\7g\2\2\u0096\u0097\7e\2\2\u0097\u0098\7m\2\2\u0098\u0099"+
		"\7u\2\2\u0099\u009a\7\"\2\2\u009a\u009b\3\2\2\2\u009b\u009c\b\13\3\2\u009c"+
		"\27\3\2\2\2\u009d\u009e\7k\2\2\u009e\u009f\7h\2\2\u009f\u00a0\7\"\2\2"+
		"\u00a0\u00a1\3\2\2\2\u00a1\u00a2\b\f\3\2\u00a2\31\3\2\2\2\u00a3\u00a4"+
		"\7C\2\2\u00a4\u00a5\7f\2\2\u00a5\u00a6\7f\2\2\u00a6\u00a7\3\2\2\2\u00a7"+
		"\u00a8\b\r\3\2\u00a8\33\3\2\2\2\u00a9\u00aa\7T\2\2\u00aa\u00ab\7g\2\2"+
		"\u00ab\u00ac\7o\2\2\u00ac\u00ad\7q\2\2\u00ad\u00ae\7x\2\2\u00ae\u00af"+
		"\7g\2\2\u00af\u00b0\3\2\2\2\u00b0\u00b1\b\16\3\2\u00b1\35\3\2\2\2\u00b2"+
		"\u00b3\7O\2\2\u00b3\u00b4\7Q\2\2\u00b4\u00b5\7P\2\2\u00b5\u00b6\7G\2\2"+
		"\u00b6\u00b7\7[\2\2\u00b7\u00b8\3\2\2\2\u00b8\u00b9\b\17\3\2\u00b9\37"+
		"\3\2\2\2\u00ba\u00bb\7}\2\2\u00bb!\3\2\2\2\u00bc\u00bd\7\177\2\2\u00bd"+
		"#\3\2\2\2\u00be\u00c0\t\3\2\2\u00bf\u00be\3\2\2\2\u00c0\u00c1\3\2\2\2"+
		"\u00c1\u00bf\3\2\2\2\u00c1\u00c2\3\2\2\2\u00c2%\3\2\2\2\u00c3\u00c7\t"+
		"\4\2\2\u00c4\u00c6\t\5\2\2\u00c5\u00c4\3\2\2\2\u00c6\u00c9\3\2\2\2\u00c7"+
		"\u00c5\3\2\2\2\u00c7\u00c8\3\2\2\2\u00c8\'\3\2\2\2\u00c9\u00c7\3\2\2\2"+
		"\u00ca\u00cc\7/\2\2\u00cb\u00ca\3\2\2\2\u00cb\u00cc\3\2\2\2\u00cc\u00ce"+
		"\3\2\2\2\u00cd\u00cf\t\6\2\2\u00ce\u00cd\3\2\2\2\u00cf\u00d0\3\2\2\2\u00d0"+
		"\u00ce\3\2\2\2\u00d0\u00d1\3\2\2\2\u00d1)\3\2\2\2\u00d2\u00d3\7.\2\2\u00d3"+
		"+\3\2\2\2\u00d4\u00d5\7*\2\2\u00d5-\3\2\2\2\u00d6\u00d7\7+\2\2\u00d7/"+
		"\3\2\2\2\u00d8\u00d9\7]\2\2\u00d9\61\3\2\2\2\u00da\u00db\7_\2\2\u00db"+
		"\63\3\2\2\2\u00dc\u00dd\7@\2\2\u00dd\65\3\2\2\2\u00de\u00df\7>\2\2\u00df"+
		"\67\3\2\2\2\u00e0\u00e1\7=\2\2\u00e19\3\2\2\2\u00e2\u00e3\7<\2\2\u00e3"+
		";\3\2\2\2\u00e4\u00e6\t\2\2\2\u00e5\u00e4\3\2\2\2\u00e6\u00e7\3\2\2\2"+
		"\u00e7\u00e5\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8\u00e9\3\2\2\2\u00e9\u00ea"+
		"\b\36\2\2\u00ea=\3\2\2\2\u00eb\u00ed\t\3\2\2\u00ec\u00eb\3\2\2\2\u00ed"+
		"\u00ee\3\2\2\2\u00ee\u00ec\3\2\2\2\u00ee\u00ef\3\2\2\2\u00ef\u00f0\3\2"+
		"\2\2\u00f0\u00f1\b\37\4\2\u00f1?\3\2\2\2\13\2\3C\u00c1\u00c7\u00cb\u00d0"+
		"\u00e7\u00ee\5\2\3\2\4\3\2\4\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}