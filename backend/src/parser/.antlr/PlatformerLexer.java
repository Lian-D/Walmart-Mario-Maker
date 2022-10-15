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
		LEADING_SPACE=1, COMPONENT=2, PLAYER=3, ENEMY=4, DOOR=5, TERRAIN=6, PLATFORM=7, 
		BUTTON=8, COIN=9, LEVEL=10, CHECKS=11, IF=12, ADD=13, REMOVE=14, LOGIC=15, 
		STMT_NEWLINE=16, NAME=17, CONST=18, COMMA=19, OPEN_BRACE=20, CLOSE_BRACE=21, 
		OPEN_PAREN=22, CLOSE_PAREN=23, OPEN_SQUARE=24, CLOSED_SQUARE=25, LARGER=26, 
		SMALLER=27, EQUAL=28, SEMICOLON=29, COLON=30, LITERAL=31, LINK=32, SPACE=33, 
		NEWLINE=34;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"LEADING_SPACE", "COMPONENT", "PLAYER", "ENEMY", "DOOR", "TERRAIN", "PLATFORM", 
			"BUTTON", "COIN", "LEVEL", "CHECKS", "IF", "ADD", "REMOVE", "LOGIC", 
			"STMT_NEWLINE", "NAME", "CONST", "COMMA", "OPEN_BRACE", "CLOSE_BRACE", 
			"OPEN_PAREN", "CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", "LARGER", 
			"SMALLER", "EQUAL", "SEMICOLON", "COLON", "LITERAL", "LINK", "SPACE", 
			"NEWLINE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'Player'", "'Enemy'", "'Door'", "'Terrain'", "'Platform'", 
			"'Button'", "'Coin'", "'Level'", "'Checks'", "'IF'", null, null, null, 
			null, null, null, "','", "'{'", "'}'", "'('", "')'", "'['", "']'", "'>'", 
			"'<'", "'='", "';'", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LEADING_SPACE", "COMPONENT", "PLAYER", "ENEMY", "DOOR", "TERRAIN", 
			"PLATFORM", "BUTTON", "COIN", "LEVEL", "CHECKS", "IF", "ADD", "REMOVE", 
			"LOGIC", "STMT_NEWLINE", "NAME", "CONST", "COMMA", "OPEN_BRACE", "CLOSE_BRACE", 
			"OPEN_PAREN", "CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", "LARGER", 
			"SMALLER", "EQUAL", "SEMICOLON", "COLON", "LITERAL", "LINK", "SPACE", 
			"NEWLINE"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2$\u00fc\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\3\2\6\2I\n\2\r\2\16\2J\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\5\3U\n\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3"+
		"\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r\3\16\3\16"+
		"\3\16\3\16\3\16\3\16\5\16\u009c\n\16\3\17\3\17\3\17\3\17\3\17\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\17\5\17\u00aa\n\17\3\20\3\20\3\20\3\20\3\20\5\20"+
		"\u00b1\n\20\3\21\6\21\u00b4\n\21\r\21\16\21\u00b5\3\22\3\22\7\22\u00ba"+
		"\n\22\f\22\16\22\u00bd\13\22\3\23\5\23\u00c0\n\23\3\23\6\23\u00c3\n\23"+
		"\r\23\16\23\u00c4\3\24\3\24\3\25\3\25\3\26\3\26\3\27\3\27\3\30\3\30\3"+
		"\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37\3"+
		" \6 \u00e0\n \r \16 \u00e1\3!\6!\u00e5\n!\r!\16!\u00e6\3!\3!\6!\u00eb"+
		"\n!\r!\16!\u00ec\3\"\6\"\u00f0\n\"\r\"\16\"\u00f1\3\"\3\"\3#\6#\u00f7"+
		"\n#\r#\16#\u00f8\3#\3#\2\2$\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13\25"+
		"\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61\32"+
		"\63\33\65\34\67\359\36;\37= ?!A\"C#E$\3\2\b\4\2\13\13\"\"\4\2\f\f\17\17"+
		"\4\2C\\c|\5\2\62;C\\c|\3\2\62;\6\2%%/;C\\c|\2\u010d\2\3\3\2\2\2\2\5\3"+
		"\2\2\2\2\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2"+
		"\21\3\2\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3"+
		"\2\2\2\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'"+
		"\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63"+
		"\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2"+
		"?\3\2\2\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\3H\3\2\2\2\5T\3\2\2\2\7V\3"+
		"\2\2\2\t]\3\2\2\2\13c\3\2\2\2\rh\3\2\2\2\17p\3\2\2\2\21y\3\2\2\2\23\u0080"+
		"\3\2\2\2\25\u0085\3\2\2\2\27\u008b\3\2\2\2\31\u0092\3\2\2\2\33\u009b\3"+
		"\2\2\2\35\u00a9\3\2\2\2\37\u00b0\3\2\2\2!\u00b3\3\2\2\2#\u00b7\3\2\2\2"+
		"%\u00bf\3\2\2\2\'\u00c6\3\2\2\2)\u00c8\3\2\2\2+\u00ca\3\2\2\2-\u00cc\3"+
		"\2\2\2/\u00ce\3\2\2\2\61\u00d0\3\2\2\2\63\u00d2\3\2\2\2\65\u00d4\3\2\2"+
		"\2\67\u00d6\3\2\2\29\u00d8\3\2\2\2;\u00da\3\2\2\2=\u00dc\3\2\2\2?\u00df"+
		"\3\2\2\2A\u00e4\3\2\2\2C\u00ef\3\2\2\2E\u00f6\3\2\2\2GI\t\2\2\2HG\3\2"+
		"\2\2IJ\3\2\2\2JH\3\2\2\2JK\3\2\2\2KL\3\2\2\2LM\b\2\2\2M\4\3\2\2\2NU\5"+
		"\t\5\2OU\5\13\6\2PU\5\21\t\2QU\5\r\7\2RU\5\17\b\2SU\5\23\n\2TN\3\2\2\2"+
		"TO\3\2\2\2TP\3\2\2\2TQ\3\2\2\2TR\3\2\2\2TS\3\2\2\2U\6\3\2\2\2VW\7R\2\2"+
		"WX\7n\2\2XY\7c\2\2YZ\7{\2\2Z[\7g\2\2[\\\7t\2\2\\\b\3\2\2\2]^\7G\2\2^_"+
		"\7p\2\2_`\7g\2\2`a\7o\2\2ab\7{\2\2b\n\3\2\2\2cd\7F\2\2de\7q\2\2ef\7q\2"+
		"\2fg\7t\2\2g\f\3\2\2\2hi\7V\2\2ij\7g\2\2jk\7t\2\2kl\7t\2\2lm\7c\2\2mn"+
		"\7k\2\2no\7p\2\2o\16\3\2\2\2pq\7R\2\2qr\7n\2\2rs\7c\2\2st\7v\2\2tu\7h"+
		"\2\2uv\7q\2\2vw\7t\2\2wx\7o\2\2x\20\3\2\2\2yz\7D\2\2z{\7w\2\2{|\7v\2\2"+
		"|}\7v\2\2}~\7q\2\2~\177\7p\2\2\177\22\3\2\2\2\u0080\u0081\7E\2\2\u0081"+
		"\u0082\7q\2\2\u0082\u0083\7k\2\2\u0083\u0084\7p\2\2\u0084\24\3\2\2\2\u0085"+
		"\u0086\7N\2\2\u0086\u0087\7g\2\2\u0087\u0088\7x\2\2\u0088\u0089\7g\2\2"+
		"\u0089\u008a\7n\2\2\u008a\26\3\2\2\2\u008b\u008c\7E\2\2\u008c\u008d\7"+
		"j\2\2\u008d\u008e\7g\2\2\u008e\u008f\7e\2\2\u008f\u0090\7m\2\2\u0090\u0091"+
		"\7u\2\2\u0091\30\3\2\2\2\u0092\u0093\7K\2\2\u0093\u0094\7H\2\2\u0094\32"+
		"\3\2\2\2\u0095\u0096\7c\2\2\u0096\u0097\7f\2\2\u0097\u009c\7f\2\2\u0098"+
		"\u0099\7C\2\2\u0099\u009a\7f\2\2\u009a\u009c\7f\2\2\u009b\u0095\3\2\2"+
		"\2\u009b\u0098\3\2\2\2\u009c\34\3\2\2\2\u009d\u009e\7t\2\2\u009e\u009f"+
		"\7g\2\2\u009f\u00a0\7o\2\2\u00a0\u00a1\7q\2\2\u00a1\u00a2\7x\2\2\u00a2"+
		"\u00aa\7g\2\2\u00a3\u00a4\7T\2\2\u00a4\u00a5\7g\2\2\u00a5\u00a6\7o\2\2"+
		"\u00a6\u00a7\7q\2\2\u00a7\u00a8\7x\2\2\u00a8\u00aa\7g\2\2\u00a9\u009d"+
		"\3\2\2\2\u00a9\u00a3\3\2\2\2\u00aa\36\3\2\2\2\u00ab\u00ac\7C\2\2\u00ac"+
		"\u00ad\7P\2\2\u00ad\u00b1\7F\2\2\u00ae\u00af\7Q\2\2\u00af\u00b1\7T\2\2"+
		"\u00b0\u00ab\3\2\2\2\u00b0\u00ae\3\2\2\2\u00b1 \3\2\2\2\u00b2\u00b4\t"+
		"\3\2\2\u00b3\u00b2\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\u00b3\3\2\2\2\u00b5"+
		"\u00b6\3\2\2\2\u00b6\"\3\2\2\2\u00b7\u00bb\t\4\2\2\u00b8\u00ba\t\5\2\2"+
		"\u00b9\u00b8\3\2\2\2\u00ba\u00bd\3\2\2\2\u00bb\u00b9\3\2\2\2\u00bb\u00bc"+
		"\3\2\2\2\u00bc$\3\2\2\2\u00bd\u00bb\3\2\2\2\u00be\u00c0\7/\2\2\u00bf\u00be"+
		"\3\2\2\2\u00bf\u00c0\3\2\2\2\u00c0\u00c2\3\2\2\2\u00c1\u00c3\t\6\2\2\u00c2"+
		"\u00c1\3\2\2\2\u00c3\u00c4\3\2\2\2\u00c4\u00c2\3\2\2\2\u00c4\u00c5\3\2"+
		"\2\2\u00c5&\3\2\2\2\u00c6\u00c7\7.\2\2\u00c7(\3\2\2\2\u00c8\u00c9\7}\2"+
		"\2\u00c9*\3\2\2\2\u00ca\u00cb\7\177\2\2\u00cb,\3\2\2\2\u00cc\u00cd\7*"+
		"\2\2\u00cd.\3\2\2\2\u00ce\u00cf\7+\2\2\u00cf\60\3\2\2\2\u00d0\u00d1\7"+
		"]\2\2\u00d1\62\3\2\2\2\u00d2\u00d3\7_\2\2\u00d3\64\3\2\2\2\u00d4\u00d5"+
		"\7@\2\2\u00d5\66\3\2\2\2\u00d6\u00d7\7>\2\2\u00d78\3\2\2\2\u00d8\u00d9"+
		"\7?\2\2\u00d9:\3\2\2\2\u00da\u00db\7=\2\2\u00db<\3\2\2\2\u00dc\u00dd\7"+
		"<\2\2\u00dd>\3\2\2\2\u00de\u00e0\t\7\2\2\u00df\u00de\3\2\2\2\u00e0\u00e1"+
		"\3\2\2\2\u00e1\u00df\3\2\2\2\u00e1\u00e2\3\2\2\2\u00e2@\3\2\2\2\u00e3"+
		"\u00e5\5? \2\u00e4\u00e3\3\2\2\2\u00e5\u00e6\3\2\2\2\u00e6\u00e4\3\2\2"+
		"\2\u00e6\u00e7\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8\u00ea\5=\37\2\u00e9\u00eb"+
		"\5? \2\u00ea\u00e9\3\2\2\2\u00eb\u00ec\3\2\2\2\u00ec\u00ea\3\2\2\2\u00ec"+
		"\u00ed\3\2\2\2\u00edB\3\2\2\2\u00ee\u00f0\t\2\2\2\u00ef\u00ee\3\2\2\2"+
		"\u00f0\u00f1\3\2\2\2\u00f1\u00ef\3\2\2\2\u00f1\u00f2\3\2\2\2\u00f2\u00f3"+
		"\3\2\2\2\u00f3\u00f4\b\"\2\2\u00f4D\3\2\2\2\u00f5\u00f7\t\3\2\2\u00f6"+
		"\u00f5\3\2\2\2\u00f7\u00f8\3\2\2\2\u00f8\u00f6\3\2\2\2\u00f8\u00f9\3\2"+
		"\2\2\u00f9\u00fa\3\2\2\2\u00fa\u00fb\b#\3\2\u00fbF\3\2\2\2\22\2JT\u009b"+
		"\u00a9\u00b0\u00b5\u00bb\u00bf\u00c4\u00df\u00e1\u00e6\u00ec\u00f1\u00f8"+
		"\4\2\3\2\4\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}