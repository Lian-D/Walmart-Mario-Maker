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
		EQUAL=27, SEMICOLON=28, COLON=29, SPACE=30, NEWLINE=31;
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
			"CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", "LARGER", "SMALLER", "EQUAL", 
			"SEMICOLON", "COLON", "SPACE", "NEWLINE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'Player '", "'Enemy '", "'Door '", "'Terrain '", "'Platform '", 
			"'Button '", "'Coin'", "'Level '", "'Checks '", "'if '", "'Add'", "'Remove'", 
			"'MONEY'", "'{'", "'}'", null, null, null, "','", "'('", "')'", "'['", 
			"']'", "'>'", "'<'", "'='", "';'", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LEADING_SPACE", "PLAYER", "ENEMY", "DOOR", "TERRAIN", "PLATFORM", 
			"BUTTON", "COIN", "LEVEL", "CHECKS", "IF", "ADD", "REMOVE", "MONEY", 
			"OPEN_BRACE", "CLOSE_BRACE", "STMT_NEWLINE", "NAME", "CONST", "COMMA", 
			"OPEN_PAREN", "CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", "LARGER", 
			"SMALLER", "EQUAL", "SEMICOLON", "COLON", "SPACE", "NEWLINE"
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2!\u00f6\b\1\b\1\4"+
		"\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n"+
		"\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t"+
		" \3\2\6\2D\n\2\r\2\16\2E\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3"+
		"\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\n\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3"+
		"\r\3\r\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17"+
		"\3\17\3\17\3\17\3\17\3\17\3\17\3\20\3\20\3\21\3\21\3\22\6\22\u00c2\n\22"+
		"\r\22\16\22\u00c3\3\23\3\23\7\23\u00c8\n\23\f\23\16\23\u00cb\13\23\3\24"+
		"\5\24\u00ce\n\24\3\24\6\24\u00d1\n\24\r\24\16\24\u00d2\3\25\3\25\3\26"+
		"\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3\33\3\33\3\34\3\34\3\35"+
		"\3\35\3\36\3\36\3\37\6\37\u00ea\n\37\r\37\16\37\u00eb\3\37\3\37\3 \6 "+
		"\u00f1\n \r \16 \u00f2\3 \3 \2\2!\4\3\6\4\b\5\n\6\f\7\16\b\20\t\22\n\24"+
		"\13\26\f\30\r\32\16\34\17\36\20 \21\"\22$\23&\24(\25*\26,\27.\30\60\31"+
		"\62\32\64\33\66\348\35:\36<\37> @!\4\2\3\7\4\2\13\13\"\"\4\2\f\f\17\17"+
		"\4\2C\\c|\5\2\62;C\\c|\3\2\62;\2\u00fb\2\4\3\2\2\2\2\6\3\2\2\2\2\b\3\2"+
		"\2\2\2\n\3\2\2\2\2\f\3\2\2\2\2\16\3\2\2\2\2\20\3\2\2\2\2\22\3\2\2\2\2"+
		"\24\3\2\2\2\2\26\3\2\2\2\2\30\3\2\2\2\2\32\3\2\2\2\2\34\3\2\2\2\2\36\3"+
		"\2\2\2\2 \3\2\2\2\2\"\3\2\2\2\2$\3\2\2\2\3&\3\2\2\2\3(\3\2\2\2\3*\3\2"+
		"\2\2\3,\3\2\2\2\3.\3\2\2\2\3\60\3\2\2\2\3\62\3\2\2\2\3\64\3\2\2\2\3\66"+
		"\3\2\2\2\38\3\2\2\2\3:\3\2\2\2\3<\3\2\2\2\3>\3\2\2\2\3@\3\2\2\2\4C\3\2"+
		"\2\2\6I\3\2\2\2\bS\3\2\2\2\n\\\3\2\2\2\fd\3\2\2\2\16o\3\2\2\2\20{\3\2"+
		"\2\2\22\u0085\3\2\2\2\24\u008c\3\2\2\2\26\u0095\3\2\2\2\30\u009f\3\2\2"+
		"\2\32\u00a5\3\2\2\2\34\u00ab\3\2\2\2\36\u00b4\3\2\2\2 \u00bc\3\2\2\2\""+
		"\u00be\3\2\2\2$\u00c1\3\2\2\2&\u00c5\3\2\2\2(\u00cd\3\2\2\2*\u00d4\3\2"+
		"\2\2,\u00d6\3\2\2\2.\u00d8\3\2\2\2\60\u00da\3\2\2\2\62\u00dc\3\2\2\2\64"+
		"\u00de\3\2\2\2\66\u00e0\3\2\2\28\u00e2\3\2\2\2:\u00e4\3\2\2\2<\u00e6\3"+
		"\2\2\2>\u00e9\3\2\2\2@\u00f0\3\2\2\2BD\t\2\2\2CB\3\2\2\2DE\3\2\2\2EC\3"+
		"\2\2\2EF\3\2\2\2FG\3\2\2\2GH\b\2\2\2H\5\3\2\2\2IJ\7R\2\2JK\7n\2\2KL\7"+
		"c\2\2LM\7{\2\2MN\7g\2\2NO\7t\2\2OP\7\"\2\2PQ\3\2\2\2QR\b\3\3\2R\7\3\2"+
		"\2\2ST\7G\2\2TU\7p\2\2UV\7g\2\2VW\7o\2\2WX\7{\2\2XY\7\"\2\2YZ\3\2\2\2"+
		"Z[\b\4\3\2[\t\3\2\2\2\\]\7F\2\2]^\7q\2\2^_\7q\2\2_`\7t\2\2`a\7\"\2\2a"+
		"b\3\2\2\2bc\b\5\3\2c\13\3\2\2\2de\7V\2\2ef\7g\2\2fg\7t\2\2gh\7t\2\2hi"+
		"\7c\2\2ij\7k\2\2jk\7p\2\2kl\7\"\2\2lm\3\2\2\2mn\b\6\3\2n\r\3\2\2\2op\7"+
		"R\2\2pq\7n\2\2qr\7c\2\2rs\7v\2\2st\7h\2\2tu\7q\2\2uv\7t\2\2vw\7o\2\2w"+
		"x\7\"\2\2xy\3\2\2\2yz\b\7\3\2z\17\3\2\2\2{|\7D\2\2|}\7w\2\2}~\7v\2\2~"+
		"\177\7v\2\2\177\u0080\7q\2\2\u0080\u0081\7p\2\2\u0081\u0082\7\"\2\2\u0082"+
		"\u0083\3\2\2\2\u0083\u0084\b\b\3\2\u0084\21\3\2\2\2\u0085\u0086\7E\2\2"+
		"\u0086\u0087\7q\2\2\u0087\u0088\7k\2\2\u0088\u0089\7p\2\2\u0089\u008a"+
		"\3\2\2\2\u008a\u008b\b\t\3\2\u008b\23\3\2\2\2\u008c\u008d\7N\2\2\u008d"+
		"\u008e\7g\2\2\u008e\u008f\7x\2\2\u008f\u0090\7g\2\2\u0090\u0091\7n\2\2"+
		"\u0091\u0092\7\"\2\2\u0092\u0093\3\2\2\2\u0093\u0094\b\n\3\2\u0094\25"+
		"\3\2\2\2\u0095\u0096\7E\2\2\u0096\u0097\7j\2\2\u0097\u0098\7g\2\2\u0098"+
		"\u0099\7e\2\2\u0099\u009a\7m\2\2\u009a\u009b\7u\2\2\u009b\u009c\7\"\2"+
		"\2\u009c\u009d\3\2\2\2\u009d\u009e\b\13\3\2\u009e\27\3\2\2\2\u009f\u00a0"+
		"\7k\2\2\u00a0\u00a1\7h\2\2\u00a1\u00a2\7\"\2\2\u00a2\u00a3\3\2\2\2\u00a3"+
		"\u00a4\b\f\3\2\u00a4\31\3\2\2\2\u00a5\u00a6\7C\2\2\u00a6\u00a7\7f\2\2"+
		"\u00a7\u00a8\7f\2\2\u00a8\u00a9\3\2\2\2\u00a9\u00aa\b\r\3\2\u00aa\33\3"+
		"\2\2\2\u00ab\u00ac\7T\2\2\u00ac\u00ad\7g\2\2\u00ad\u00ae\7o\2\2\u00ae"+
		"\u00af\7q\2\2\u00af\u00b0\7x\2\2\u00b0\u00b1\7g\2\2\u00b1\u00b2\3\2\2"+
		"\2\u00b2\u00b3\b\16\3\2\u00b3\35\3\2\2\2\u00b4\u00b5\7O\2\2\u00b5\u00b6"+
		"\7Q\2\2\u00b6\u00b7\7P\2\2\u00b7\u00b8\7G\2\2\u00b8\u00b9\7[\2\2\u00b9"+
		"\u00ba\3\2\2\2\u00ba\u00bb\b\17\3\2\u00bb\37\3\2\2\2\u00bc\u00bd\7}\2"+
		"\2\u00bd!\3\2\2\2\u00be\u00bf\7\177\2\2\u00bf#\3\2\2\2\u00c0\u00c2\t\3"+
		"\2\2\u00c1\u00c0\3\2\2\2\u00c2\u00c3\3\2\2\2\u00c3\u00c1\3\2\2\2\u00c3"+
		"\u00c4\3\2\2\2\u00c4%\3\2\2\2\u00c5\u00c9\t\4\2\2\u00c6\u00c8\t\5\2\2"+
		"\u00c7\u00c6\3\2\2\2\u00c8\u00cb\3\2\2\2\u00c9\u00c7\3\2\2\2\u00c9\u00ca"+
		"\3\2\2\2\u00ca\'\3\2\2\2\u00cb\u00c9\3\2\2\2\u00cc\u00ce\7/\2\2\u00cd"+
		"\u00cc\3\2\2\2\u00cd\u00ce\3\2\2\2\u00ce\u00d0\3\2\2\2\u00cf\u00d1\t\6"+
		"\2\2\u00d0\u00cf\3\2\2\2\u00d1\u00d2\3\2\2\2\u00d2\u00d0\3\2\2\2\u00d2"+
		"\u00d3\3\2\2\2\u00d3)\3\2\2\2\u00d4\u00d5\7.\2\2\u00d5+\3\2\2\2\u00d6"+
		"\u00d7\7*\2\2\u00d7-\3\2\2\2\u00d8\u00d9\7+\2\2\u00d9/\3\2\2\2\u00da\u00db"+
		"\7]\2\2\u00db\61\3\2\2\2\u00dc\u00dd\7_\2\2\u00dd\63\3\2\2\2\u00de\u00df"+
		"\7@\2\2\u00df\65\3\2\2\2\u00e0\u00e1\7>\2\2\u00e1\67\3\2\2\2\u00e2\u00e3"+
		"\7?\2\2\u00e39\3\2\2\2\u00e4\u00e5\7=\2\2\u00e5;\3\2\2\2\u00e6\u00e7\7"+
		"<\2\2\u00e7=\3\2\2\2\u00e8\u00ea\t\2\2\2\u00e9\u00e8\3\2\2\2\u00ea\u00eb"+
		"\3\2\2\2\u00eb\u00e9\3\2\2\2\u00eb\u00ec\3\2\2\2\u00ec\u00ed\3\2\2\2\u00ed"+
		"\u00ee\b\37\2\2\u00ee?\3\2\2\2\u00ef\u00f1\t\3\2\2\u00f0\u00ef\3\2\2\2"+
		"\u00f1\u00f2\3\2\2\2\u00f2\u00f0\3\2\2\2\u00f2\u00f3\3\2\2\2\u00f3\u00f4"+
		"\3\2\2\2\u00f4\u00f5\b \4\2\u00f5A\3\2\2\2\13\2\3E\u00c3\u00c9\u00cd\u00d2"+
		"\u00eb\u00f2\5\2\3\2\4\3\2\4\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}