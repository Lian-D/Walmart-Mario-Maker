// Generated from c:\Users\steve\Documents\GitHub\Project1Group8\backend\src\parser\PlatformerParser.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class PlatformerParser extends Parser {
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
		RULE_program = 0, RULE_level = 1, RULE_level_body = 2, RULE_level_cond = 3, 
		RULE_level_objects = 4, RULE_objects = 5, RULE_object_bod = 6, RULE_statement = 7, 
		RULE_property = 8, RULE_statements = 9, RULE_array = 10, RULE_component = 11, 
		RULE_value = 12, RULE_array_object = 13, RULE_exp = 14, RULE_op = 15, 
		RULE_varname = 16;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "level", "level_body", "level_cond", "level_objects", "objects", 
			"object_bod", "statement", "property", "statements", "array", "component", 
			"value", "array_object", "exp", "op", "varname"
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

	@Override
	public String getGrammarFileName() { return "PlatformerParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public PlatformerParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public ObjectsContext objects() {
			return getRuleContext(ObjectsContext.class,0);
		}
		public List<LevelContext> level() {
			return getRuleContexts(LevelContext.class);
		}
		public LevelContext level(int i) {
			return getRuleContext(LevelContext.class,i);
		}
		public TerminalNode EOF() { return getToken(PlatformerParser.EOF, 0); }
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			objects();
			setState(36);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(35);
				match(STMT_NEWLINE);
				}
			}

			setState(38);
			level();
			setState(45);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LEVEL || _la==STMT_NEWLINE) {
				{
				{
				setState(40);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==STMT_NEWLINE) {
					{
					setState(39);
					match(STMT_NEWLINE);
					}
				}

				setState(42);
				level();
				}
				}
				setState(47);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(48);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LevelContext extends ParserRuleContext {
		public TerminalNode LEVEL() { return getToken(PlatformerParser.LEVEL, 0); }
		public TerminalNode NAME() { return getToken(PlatformerParser.NAME, 0); }
		public TerminalNode OPEN_BRACE() { return getToken(PlatformerParser.OPEN_BRACE, 0); }
		public Level_bodyContext level_body() {
			return getRuleContext(Level_bodyContext.class,0);
		}
		public TerminalNode CLOSE_BRACE() { return getToken(PlatformerParser.CLOSE_BRACE, 0); }
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public LevelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_level; }
	}

	public final LevelContext level() throws RecognitionException {
		LevelContext _localctx = new LevelContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_level);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(50);
			match(LEVEL);
			setState(51);
			match(NAME);
			setState(52);
			match(OPEN_BRACE);
			setState(54);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(53);
				match(STMT_NEWLINE);
				}
			}

			setState(56);
			level_body();
			setState(58);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(57);
				match(STMT_NEWLINE);
				}
			}

			setState(60);
			match(CLOSE_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Level_bodyContext extends ParserRuleContext {
		public StatementsContext statements() {
			return getRuleContext(StatementsContext.class,0);
		}
		public Level_objectsContext level_objects() {
			return getRuleContext(Level_objectsContext.class,0);
		}
		public Level_condContext level_cond() {
			return getRuleContext(Level_condContext.class,0);
		}
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public Level_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_level_body; }
	}

	public final Level_bodyContext level_body() throws RecognitionException {
		Level_bodyContext _localctx = new Level_bodyContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_level_body);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			statements();
			setState(64);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(63);
				match(STMT_NEWLINE);
				}
			}

			setState(66);
			level_objects();
			setState(68);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(67);
				match(STMT_NEWLINE);
				}
			}

			setState(70);
			level_cond();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Level_condContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(PlatformerParser.IF, 0); }
		public TerminalNode OPEN_PAREN() { return getToken(PlatformerParser.OPEN_PAREN, 0); }
		public VarnameContext varname() {
			return getRuleContext(VarnameContext.class,0);
		}
		public OpContext op() {
			return getRuleContext(OpContext.class,0);
		}
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public TerminalNode CLOSE_PAREN() { return getToken(PlatformerParser.CLOSE_PAREN, 0); }
		public TerminalNode OPEN_BRACE() { return getToken(PlatformerParser.OPEN_BRACE, 0); }
		public StatementsContext statements() {
			return getRuleContext(StatementsContext.class,0);
		}
		public TerminalNode CLOSE_BRACE() { return getToken(PlatformerParser.CLOSE_BRACE, 0); }
		public TerminalNode STMT_NEWLINE() { return getToken(PlatformerParser.STMT_NEWLINE, 0); }
		public Level_condContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_level_cond; }
	}

	public final Level_condContext level_cond() throws RecognitionException {
		Level_condContext _localctx = new Level_condContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_level_cond);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(72);
			match(IF);
			setState(73);
			match(OPEN_PAREN);
			setState(74);
			varname();
			setState(75);
			op();
			setState(76);
			exp();
			setState(77);
			match(CLOSE_PAREN);
			setState(78);
			match(OPEN_BRACE);
			setState(80);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(79);
				match(STMT_NEWLINE);
				}
			}

			setState(82);
			statements();
			setState(83);
			match(CLOSE_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Level_objectsContext extends ParserRuleContext {
		public ComponentContext component() {
			return getRuleContext(ComponentContext.class,0);
		}
		public TerminalNode COLON() { return getToken(PlatformerParser.COLON, 0); }
		public ArrayContext array() {
			return getRuleContext(ArrayContext.class,0);
		}
		public TerminalNode STMT_NEWLINE() { return getToken(PlatformerParser.STMT_NEWLINE, 0); }
		public Level_objectsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_level_objects; }
	}

	public final Level_objectsContext level_objects() throws RecognitionException {
		Level_objectsContext _localctx = new Level_objectsContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_level_objects);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			component();
			setState(86);
			match(COLON);
			setState(88);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(87);
				match(STMT_NEWLINE);
				}
			}

			setState(90);
			array();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectsContext extends ParserRuleContext {
		public TerminalNode PLAYER() { return getToken(PlatformerParser.PLAYER, 0); }
		public List<TerminalNode> NAME() { return getTokens(PlatformerParser.NAME); }
		public TerminalNode NAME(int i) {
			return getToken(PlatformerParser.NAME, i);
		}
		public List<Object_bodContext> object_bod() {
			return getRuleContexts(Object_bodContext.class);
		}
		public Object_bodContext object_bod(int i) {
			return getRuleContext(Object_bodContext.class,i);
		}
		public TerminalNode STMT_NEWLINE() { return getToken(PlatformerParser.STMT_NEWLINE, 0); }
		public List<ComponentContext> component() {
			return getRuleContexts(ComponentContext.class);
		}
		public ComponentContext component(int i) {
			return getRuleContext(ComponentContext.class,i);
		}
		public ObjectsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objects; }
	}

	public final ObjectsContext objects() throws RecognitionException {
		ObjectsContext _localctx = new ObjectsContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_objects);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PLAYER) {
				{
				setState(92);
				match(PLAYER);
				setState(93);
				match(NAME);
				setState(94);
				object_bod();
				}
			}

			setState(98);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(97);
				match(STMT_NEWLINE);
				}
				break;
			}
			setState(106);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ENEMY) | (1L << DOOR) | (1L << TERRAIN) | (1L << BUTTON))) != 0)) {
				{
				{
				setState(100);
				component();
				setState(101);
				match(NAME);
				setState(102);
				object_bod();
				}
				}
				setState(108);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Object_bodContext extends ParserRuleContext {
		public TerminalNode OPEN_BRACE() { return getToken(PlatformerParser.OPEN_BRACE, 0); }
		public TerminalNode CLOSE_BRACE() { return getToken(PlatformerParser.CLOSE_BRACE, 0); }
		public TerminalNode STMT_NEWLINE() { return getToken(PlatformerParser.STMT_NEWLINE, 0); }
		public StatementsContext statements() {
			return getRuleContext(StatementsContext.class,0);
		}
		public Object_bodContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_object_bod; }
	}

	public final Object_bodContext object_bod() throws RecognitionException {
		Object_bodContext _localctx = new Object_bodContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_object_bod);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			match(OPEN_BRACE);
			setState(111);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(110);
				match(STMT_NEWLINE);
				}
			}

			setState(114);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NAME) {
				{
				setState(113);
				statements();
				}
			}

			setState(116);
			match(CLOSE_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public PropertyContext property() {
			return getRuleContext(PropertyContext.class,0);
		}
		public TerminalNode COLON() { return getToken(PlatformerParser.COLON, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(118);
			property();
			setState(119);
			match(COLON);
			setState(120);
			value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PropertyContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(PlatformerParser.NAME, 0); }
		public PropertyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_property; }
	}

	public final PropertyContext property() throws RecognitionException {
		PropertyContext _localctx = new PropertyContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_property);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(122);
			match(NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementsContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(PlatformerParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(PlatformerParser.NEWLINE, i);
		}
		public StatementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statements; }
	}

	public final StatementsContext statements() throws RecognitionException {
		StatementsContext _localctx = new StatementsContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_statements);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(127); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(124);
				statement();
				setState(125);
				_la = _input.LA(1);
				if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(129); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==NAME );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayContext extends ParserRuleContext {
		public TerminalNode OPEN_SQUARE() { return getToken(PlatformerParser.OPEN_SQUARE, 0); }
		public List<Array_objectContext> array_object() {
			return getRuleContexts(Array_objectContext.class);
		}
		public Array_objectContext array_object(int i) {
			return getRuleContext(Array_objectContext.class,i);
		}
		public TerminalNode CLOSED_SQUARE() { return getToken(PlatformerParser.CLOSED_SQUARE, 0); }
		public List<TerminalNode> COMMA() { return getTokens(PlatformerParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(PlatformerParser.COMMA, i);
		}
		public ArrayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array; }
	}

	public final ArrayContext array() throws RecognitionException {
		ArrayContext _localctx = new ArrayContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_array);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(131);
			match(OPEN_SQUARE);
			setState(132);
			array_object();
			setState(137);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(133);
				match(COMMA);
				setState(134);
				array_object();
				}
				}
				setState(139);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(140);
			match(CLOSED_SQUARE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ComponentContext extends ParserRuleContext {
		public TerminalNode ENEMY() { return getToken(PlatformerParser.ENEMY, 0); }
		public TerminalNode DOOR() { return getToken(PlatformerParser.DOOR, 0); }
		public TerminalNode BUTTON() { return getToken(PlatformerParser.BUTTON, 0); }
		public TerminalNode TERRAIN() { return getToken(PlatformerParser.TERRAIN, 0); }
		public ComponentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_component; }
	}

	public final ComponentContext component() throws RecognitionException {
		ComponentContext _localctx = new ComponentContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_component);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(142);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ENEMY) | (1L << DOOR) | (1L << TERRAIN) | (1L << BUTTON))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueContext extends ParserRuleContext {
		public VarnameContext varname() {
			return getRuleContext(VarnameContext.class,0);
		}
		public TerminalNode CONST() { return getToken(PlatformerParser.CONST, 0); }
		public Array_objectContext array_object() {
			return getRuleContext(Array_objectContext.class,0);
		}
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_value);
		try {
			setState(147);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(144);
				varname();
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 2);
				{
				setState(145);
				match(CONST);
				}
				break;
			case OPEN_PAREN:
				enterOuterAlt(_localctx, 3);
				{
				setState(146);
				array_object();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Array_objectContext extends ParserRuleContext {
		public TerminalNode OPEN_PAREN() { return getToken(PlatformerParser.OPEN_PAREN, 0); }
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public TerminalNode CLOSE_PAREN() { return getToken(PlatformerParser.CLOSE_PAREN, 0); }
		public List<TerminalNode> COMMA() { return getTokens(PlatformerParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(PlatformerParser.COMMA, i);
		}
		public Array_objectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_array_object; }
	}

	public final Array_objectContext array_object() throws RecognitionException {
		Array_objectContext _localctx = new Array_objectContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_array_object);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			match(OPEN_PAREN);
			setState(150);
			exp();
			setState(155);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(151);
				match(COMMA);
				setState(152);
				exp();
				}
				}
				setState(157);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(158);
			match(CLOSE_PAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpContext extends ParserRuleContext {
		public VarnameContext varname() {
			return getRuleContext(VarnameContext.class,0);
		}
		public TerminalNode CONST() { return getToken(PlatformerParser.CONST, 0); }
		public ExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp; }
	}

	public final ExpContext exp() throws RecognitionException {
		ExpContext _localctx = new ExpContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_exp);
		try {
			setState(162);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(160);
				varname();
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 2);
				{
				setState(161);
				match(CONST);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OpContext extends ParserRuleContext {
		public TerminalNode LARGER() { return getToken(PlatformerParser.LARGER, 0); }
		public TerminalNode SMALLER() { return getToken(PlatformerParser.SMALLER, 0); }
		public TerminalNode EQUAL() { return getToken(PlatformerParser.EQUAL, 0); }
		public OpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_op; }
	}

	public final OpContext op() throws RecognitionException {
		OpContext _localctx = new OpContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_op);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(164);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LARGER) | (1L << SMALLER) | (1L << EQUAL))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class VarnameContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(PlatformerParser.NAME, 0); }
		public VarnameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varname; }
	}

	public final VarnameContext varname() throws RecognitionException {
		VarnameContext _localctx = new VarnameContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_varname);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(166);
			match(NAME);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3!\u00ab\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\3\2\3\2\5\2\'\n\2\3\2\3\2\5\2+\n\2\3\2\7\2.\n\2\f\2\16\2\61\13\2\3\2"+
		"\3\2\3\3\3\3\3\3\3\3\5\39\n\3\3\3\3\3\5\3=\n\3\3\3\3\3\3\4\3\4\5\4C\n"+
		"\4\3\4\3\4\5\4G\n\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5S\n\5\3"+
		"\5\3\5\3\5\3\6\3\6\3\6\5\6[\n\6\3\6\3\6\3\7\3\7\3\7\5\7b\n\7\3\7\5\7e"+
		"\n\7\3\7\3\7\3\7\3\7\7\7k\n\7\f\7\16\7n\13\7\3\b\3\b\5\br\n\b\3\b\5\b"+
		"u\n\b\3\b\3\b\3\t\3\t\3\t\3\t\3\n\3\n\3\13\3\13\3\13\6\13\u0082\n\13\r"+
		"\13\16\13\u0083\3\f\3\f\3\f\3\f\7\f\u008a\n\f\f\f\16\f\u008d\13\f\3\f"+
		"\3\f\3\r\3\r\3\16\3\16\3\16\5\16\u0096\n\16\3\17\3\17\3\17\3\17\7\17\u009c"+
		"\n\17\f\17\16\17\u009f\13\17\3\17\3\17\3\20\3\20\5\20\u00a5\n\20\3\21"+
		"\3\21\3\22\3\22\3\22\2\2\23\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \""+
		"\2\5\4\2\23\23!!\4\2\5\7\t\t\3\2\33\35\2\u00ad\2$\3\2\2\2\4\64\3\2\2\2"+
		"\6@\3\2\2\2\bJ\3\2\2\2\nW\3\2\2\2\fa\3\2\2\2\16o\3\2\2\2\20x\3\2\2\2\22"+
		"|\3\2\2\2\24\u0081\3\2\2\2\26\u0085\3\2\2\2\30\u0090\3\2\2\2\32\u0095"+
		"\3\2\2\2\34\u0097\3\2\2\2\36\u00a4\3\2\2\2 \u00a6\3\2\2\2\"\u00a8\3\2"+
		"\2\2$&\5\f\7\2%\'\7\23\2\2&%\3\2\2\2&\'\3\2\2\2\'(\3\2\2\2(/\5\4\3\2)"+
		"+\7\23\2\2*)\3\2\2\2*+\3\2\2\2+,\3\2\2\2,.\5\4\3\2-*\3\2\2\2.\61\3\2\2"+
		"\2/-\3\2\2\2/\60\3\2\2\2\60\62\3\2\2\2\61/\3\2\2\2\62\63\7\2\2\3\63\3"+
		"\3\2\2\2\64\65\7\13\2\2\65\66\7\24\2\2\668\7\21\2\2\679\7\23\2\28\67\3"+
		"\2\2\289\3\2\2\29:\3\2\2\2:<\5\6\4\2;=\7\23\2\2<;\3\2\2\2<=\3\2\2\2=>"+
		"\3\2\2\2>?\7\22\2\2?\5\3\2\2\2@B\5\24\13\2AC\7\23\2\2BA\3\2\2\2BC\3\2"+
		"\2\2CD\3\2\2\2DF\5\n\6\2EG\7\23\2\2FE\3\2\2\2FG\3\2\2\2GH\3\2\2\2HI\5"+
		"\b\5\2I\7\3\2\2\2JK\7\r\2\2KL\7\27\2\2LM\5\"\22\2MN\5 \21\2NO\5\36\20"+
		"\2OP\7\30\2\2PR\7\21\2\2QS\7\23\2\2RQ\3\2\2\2RS\3\2\2\2ST\3\2\2\2TU\5"+
		"\24\13\2UV\7\22\2\2V\t\3\2\2\2WX\5\30\r\2XZ\7\37\2\2Y[\7\23\2\2ZY\3\2"+
		"\2\2Z[\3\2\2\2[\\\3\2\2\2\\]\5\26\f\2]\13\3\2\2\2^_\7\4\2\2_`\7\24\2\2"+
		"`b\5\16\b\2a^\3\2\2\2ab\3\2\2\2bd\3\2\2\2ce\7\23\2\2dc\3\2\2\2de\3\2\2"+
		"\2el\3\2\2\2fg\5\30\r\2gh\7\24\2\2hi\5\16\b\2ik\3\2\2\2jf\3\2\2\2kn\3"+
		"\2\2\2lj\3\2\2\2lm\3\2\2\2m\r\3\2\2\2nl\3\2\2\2oq\7\21\2\2pr\7\23\2\2"+
		"qp\3\2\2\2qr\3\2\2\2rt\3\2\2\2su\5\24\13\2ts\3\2\2\2tu\3\2\2\2uv\3\2\2"+
		"\2vw\7\22\2\2w\17\3\2\2\2xy\5\22\n\2yz\7\37\2\2z{\5\32\16\2{\21\3\2\2"+
		"\2|}\7\24\2\2}\23\3\2\2\2~\177\5\20\t\2\177\u0080\t\2\2\2\u0080\u0082"+
		"\3\2\2\2\u0081~\3\2\2\2\u0082\u0083\3\2\2\2\u0083\u0081\3\2\2\2\u0083"+
		"\u0084\3\2\2\2\u0084\25\3\2\2\2\u0085\u0086\7\31\2\2\u0086\u008b\5\34"+
		"\17\2\u0087\u0088\7\26\2\2\u0088\u008a\5\34\17\2\u0089\u0087\3\2\2\2\u008a"+
		"\u008d\3\2\2\2\u008b\u0089\3\2\2\2\u008b\u008c\3\2\2\2\u008c\u008e\3\2"+
		"\2\2\u008d\u008b\3\2\2\2\u008e\u008f\7\32\2\2\u008f\27\3\2\2\2\u0090\u0091"+
		"\t\3\2\2\u0091\31\3\2\2\2\u0092\u0096\5\"\22\2\u0093\u0096\7\25\2\2\u0094"+
		"\u0096\5\34\17\2\u0095\u0092\3\2\2\2\u0095\u0093\3\2\2\2\u0095\u0094\3"+
		"\2\2\2\u0096\33\3\2\2\2\u0097\u0098\7\27\2\2\u0098\u009d\5\36\20\2\u0099"+
		"\u009a\7\26\2\2\u009a\u009c\5\36\20\2\u009b\u0099\3\2\2\2\u009c\u009f"+
		"\3\2\2\2\u009d\u009b\3\2\2\2\u009d\u009e\3\2\2\2\u009e\u00a0\3\2\2\2\u009f"+
		"\u009d\3\2\2\2\u00a0\u00a1\7\30\2\2\u00a1\35\3\2\2\2\u00a2\u00a5\5\"\22"+
		"\2\u00a3\u00a5\7\25\2\2\u00a4\u00a2\3\2\2\2\u00a4\u00a3\3\2\2\2\u00a5"+
		"\37\3\2\2\2\u00a6\u00a7\t\4\2\2\u00a7!\3\2\2\2\u00a8\u00a9\7\24\2\2\u00a9"+
		"#\3\2\2\2\25&*/8<BFRZadlqt\u0083\u008b\u0095\u009d\u00a4";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}