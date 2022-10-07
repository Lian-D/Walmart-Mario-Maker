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
		LEADING_SPACE=1, PLAYER=2, ENEMY=3, DOOR=4, TERRAIN=5, BUTTON=6, LEVEL=7, 
		IF=8, OPEN_BRACE=9, CLOSE_BRACE=10, STMT_NEWLINE=11, NAME=12, CONST=13, 
		COMMA=14, OPEN_PAREN=15, CLOSE_PAREN=16, SEMICOLON=17, COLON=18, SPACE=19, 
		NEWLINE=20;
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
			"LEADING_SPACE", "PLAYER", "ENEMY", "DOOR", "TERRAIN", "BUTTON", "LEVEL", 
			"IF", "OPEN_BRACE", "CLOSE_BRACE", "STMT_NEWLINE", "NAME", "CONST", "COMMA", 
			"OPEN_PAREN", "CLOSE_PAREN", "SEMICOLON", "COLON", "SPACE", "NEWLINE"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'Player '", "'Enemy '", "'Door '", "'Terrain '", "'Button '", 
			"'Level '", "'if '", "'{'", "'}'", null, null, null, "','", "'('", "')'", 
			"';'", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LEADING_SPACE", "PLAYER", "ENEMY", "DOOR", "TERRAIN", "BUTTON", 
			"LEVEL", "IF", "OPEN_BRACE", "CLOSE_BRACE", "STMT_NEWLINE", "NAME", "CONST", 
			"COMMA", "OPEN_PAREN", "CLOSE_PAREN", "SEMICOLON", "COLON", "SPACE", 
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\26\u00a2\b\1\b\1"+
		"\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t"+
		"\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4"+
		"\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\3\2\6\2.\n\2\r\2\16\2/\3\2\3\2"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3"+
		"\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\13\3\13\3\f\6\fx"+
		"\n\f\r\f\16\fy\3\r\3\r\7\r~\n\r\f\r\16\r\u0081\13\r\3\16\5\16\u0084\n"+
		"\16\3\16\6\16\u0087\n\16\r\16\16\16\u0088\3\17\3\17\3\20\3\20\3\21\3\21"+
		"\3\22\3\22\3\23\3\23\3\24\6\24\u0096\n\24\r\24\16\24\u0097\3\24\3\24\3"+
		"\25\6\25\u009d\n\25\r\25\16\25\u009e\3\25\3\25\2\2\26\4\3\6\4\b\5\n\6"+
		"\f\7\16\b\20\t\22\n\24\13\26\f\30\r\32\16\34\17\36\20 \21\"\22$\23&\24"+
		"(\25*\26\4\2\3\7\4\2\13\13\"\"\4\2\f\f\17\17\4\2C\\c|\5\2\62;C\\c|\3\2"+
		"\62;\2\u00a7\2\4\3\2\2\2\2\6\3\2\2\2\2\b\3\2\2\2\2\n\3\2\2\2\2\f\3\2\2"+
		"\2\2\16\3\2\2\2\2\20\3\2\2\2\2\22\3\2\2\2\2\24\3\2\2\2\2\26\3\2\2\2\2"+
		"\30\3\2\2\2\3\32\3\2\2\2\3\34\3\2\2\2\3\36\3\2\2\2\3 \3\2\2\2\3\"\3\2"+
		"\2\2\3$\3\2\2\2\3&\3\2\2\2\3(\3\2\2\2\3*\3\2\2\2\4-\3\2\2\2\6\63\3\2\2"+
		"\2\b=\3\2\2\2\nF\3\2\2\2\fN\3\2\2\2\16Y\3\2\2\2\20c\3\2\2\2\22l\3\2\2"+
		"\2\24r\3\2\2\2\26t\3\2\2\2\30w\3\2\2\2\32{\3\2\2\2\34\u0083\3\2\2\2\36"+
		"\u008a\3\2\2\2 \u008c\3\2\2\2\"\u008e\3\2\2\2$\u0090\3\2\2\2&\u0092\3"+
		"\2\2\2(\u0095\3\2\2\2*\u009c\3\2\2\2,.\t\2\2\2-,\3\2\2\2./\3\2\2\2/-\3"+
		"\2\2\2/\60\3\2\2\2\60\61\3\2\2\2\61\62\b\2\2\2\62\5\3\2\2\2\63\64\7R\2"+
		"\2\64\65\7n\2\2\65\66\7c\2\2\66\67\7{\2\2\678\7g\2\289\7t\2\29:\7\"\2"+
		"\2:;\3\2\2\2;<\b\3\3\2<\7\3\2\2\2=>\7G\2\2>?\7p\2\2?@\7g\2\2@A\7o\2\2"+
		"AB\7{\2\2BC\7\"\2\2CD\3\2\2\2DE\b\4\3\2E\t\3\2\2\2FG\7F\2\2GH\7q\2\2H"+
		"I\7q\2\2IJ\7t\2\2JK\7\"\2\2KL\3\2\2\2LM\b\5\3\2M\13\3\2\2\2NO\7V\2\2O"+
		"P\7g\2\2PQ\7t\2\2QR\7t\2\2RS\7c\2\2ST\7k\2\2TU\7p\2\2UV\7\"\2\2VW\3\2"+
		"\2\2WX\b\6\3\2X\r\3\2\2\2YZ\7D\2\2Z[\7w\2\2[\\\7v\2\2\\]\7v\2\2]^\7q\2"+
		"\2^_\7p\2\2_`\7\"\2\2`a\3\2\2\2ab\b\7\3\2b\17\3\2\2\2cd\7N\2\2de\7g\2"+
		"\2ef\7x\2\2fg\7g\2\2gh\7n\2\2hi\7\"\2\2ij\3\2\2\2jk\b\b\3\2k\21\3\2\2"+
		"\2lm\7k\2\2mn\7h\2\2no\7\"\2\2op\3\2\2\2pq\b\t\3\2q\23\3\2\2\2rs\7}\2"+
		"\2s\25\3\2\2\2tu\7\177\2\2u\27\3\2\2\2vx\t\3\2\2wv\3\2\2\2xy\3\2\2\2y"+
		"w\3\2\2\2yz\3\2\2\2z\31\3\2\2\2{\177\t\4\2\2|~\t\5\2\2}|\3\2\2\2~\u0081"+
		"\3\2\2\2\177}\3\2\2\2\177\u0080\3\2\2\2\u0080\33\3\2\2\2\u0081\177\3\2"+
		"\2\2\u0082\u0084\7/\2\2\u0083\u0082\3\2\2\2\u0083\u0084\3\2\2\2\u0084"+
		"\u0086\3\2\2\2\u0085\u0087\t\6\2\2\u0086\u0085\3\2\2\2\u0087\u0088\3\2"+
		"\2\2\u0088\u0086\3\2\2\2\u0088\u0089\3\2\2\2\u0089\35\3\2\2\2\u008a\u008b"+
		"\7.\2\2\u008b\37\3\2\2\2\u008c\u008d\7*\2\2\u008d!\3\2\2\2\u008e\u008f"+
		"\7+\2\2\u008f#\3\2\2\2\u0090\u0091\7=\2\2\u0091%\3\2\2\2\u0092\u0093\7"+
		"<\2\2\u0093\'\3\2\2\2\u0094\u0096\t\2\2\2\u0095\u0094\3\2\2\2\u0096\u0097"+
		"\3\2\2\2\u0097\u0095\3\2\2\2\u0097\u0098\3\2\2\2\u0098\u0099\3\2\2\2\u0099"+
		"\u009a\b\24\2\2\u009a)\3\2\2\2\u009b\u009d\t\3\2\2\u009c\u009b\3\2\2\2"+
		"\u009d\u009e\3\2\2\2\u009e\u009c\3\2\2\2\u009e\u009f\3\2\2\2\u009f\u00a0"+
		"\3\2\2\2\u00a0\u00a1\b\25\4\2\u00a1+\3\2\2\2\13\2\3/y\177\u0083\u0088"+
		"\u0097\u009e\5\2\3\2\4\3\2\4\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}