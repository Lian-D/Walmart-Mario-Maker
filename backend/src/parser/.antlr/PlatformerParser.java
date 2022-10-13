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
		RULE_level_entities = 4, RULE_entities = 5, RULE_entity_bod = 6, RULE_statement = 7, 
		RULE_property = 8, RULE_list = 9, RULE_component = 10, RULE_value = 11, 
		RULE_list_object = 12, RULE_exp = 13, RULE_op = 14, RULE_varname = 15;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "level", "level_body", "level_cond", "level_entities", "entities", 
			"entity_bod", "statement", "property", "list", "component", "value", 
			"list_object", "exp", "op", "varname"
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
		public EntitiesContext entities() {
			return getRuleContext(EntitiesContext.class,0);
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
			setState(32);
			entities();
			setState(34);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(33);
				match(STMT_NEWLINE);
				}
			}

			setState(36);
			level();
			setState(43);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==LEVEL || _la==STMT_NEWLINE) {
				{
				{
				setState(38);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==STMT_NEWLINE) {
					{
					setState(37);
					match(STMT_NEWLINE);
					}
				}

				setState(40);
				level();
				}
				}
				setState(45);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(46);
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
			setState(48);
			match(LEVEL);
			setState(49);
			match(NAME);
			setState(50);
			match(OPEN_BRACE);
			setState(52);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(51);
				match(STMT_NEWLINE);
				}
				break;
			}
			setState(54);
			level_body();
			setState(56);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(55);
				match(STMT_NEWLINE);
				}
			}

			setState(58);
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
		public Level_entitiesContext level_entities() {
			return getRuleContext(Level_entitiesContext.class,0);
		}
		public Level_condContext level_cond() {
			return getRuleContext(Level_condContext.class,0);
		}
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
			setState(65);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NAME) {
				{
				{
				setState(60);
				statement();
				setState(61);
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
				setState(67);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(69);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(68);
				match(STMT_NEWLINE);
				}
			}

			setState(71);
			level_entities();
			setState(73);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(72);
				match(STMT_NEWLINE);
				}
			}

			setState(75);
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
		public TerminalNode CLOSE_BRACE() { return getToken(PlatformerParser.CLOSE_BRACE, 0); }
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(PlatformerParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(PlatformerParser.NEWLINE, i);
		}
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
			setState(77);
			match(IF);
			setState(78);
			match(OPEN_PAREN);
			setState(79);
			varname();
			setState(80);
			op();
			setState(81);
			exp();
			setState(82);
			match(CLOSE_PAREN);
			setState(83);
			match(OPEN_BRACE);
			setState(85);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(84);
				match(STMT_NEWLINE);
				}
			}

			setState(92);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NAME) {
				{
				{
				setState(87);
				statement();
				setState(88);
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
				setState(94);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(95);
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

	public static class Level_entitiesContext extends ParserRuleContext {
		public ComponentContext component() {
			return getRuleContext(ComponentContext.class,0);
		}
		public TerminalNode COLON() { return getToken(PlatformerParser.COLON, 0); }
		public ListContext list() {
			return getRuleContext(ListContext.class,0);
		}
		public TerminalNode STMT_NEWLINE() { return getToken(PlatformerParser.STMT_NEWLINE, 0); }
		public Level_entitiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_level_entities; }
	}

	public final Level_entitiesContext level_entities() throws RecognitionException {
		Level_entitiesContext _localctx = new Level_entitiesContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_level_entities);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			component();
			setState(98);
			match(COLON);
			setState(100);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(99);
				match(STMT_NEWLINE);
				}
			}

			setState(102);
			list();
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

	public static class EntitiesContext extends ParserRuleContext {
		public TerminalNode PLAYER() { return getToken(PlatformerParser.PLAYER, 0); }
		public List<TerminalNode> NAME() { return getTokens(PlatformerParser.NAME); }
		public TerminalNode NAME(int i) {
			return getToken(PlatformerParser.NAME, i);
		}
		public List<Entity_bodContext> entity_bod() {
			return getRuleContexts(Entity_bodContext.class);
		}
		public Entity_bodContext entity_bod(int i) {
			return getRuleContext(Entity_bodContext.class,i);
		}
		public TerminalNode STMT_NEWLINE() { return getToken(PlatformerParser.STMT_NEWLINE, 0); }
		public List<ComponentContext> component() {
			return getRuleContexts(ComponentContext.class);
		}
		public ComponentContext component(int i) {
			return getRuleContext(ComponentContext.class,i);
		}
		public EntitiesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_entities; }
	}

	public final EntitiesContext entities() throws RecognitionException {
		EntitiesContext _localctx = new EntitiesContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_entities);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==PLAYER) {
				{
				setState(104);
				match(PLAYER);
				setState(105);
				match(NAME);
				setState(106);
				entity_bod();
				}
			}

			setState(110);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				{
				setState(109);
				match(STMT_NEWLINE);
				}
				break;
			}
			setState(118);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ENEMY) | (1L << DOOR) | (1L << TERRAIN) | (1L << BUTTON))) != 0)) {
				{
				{
				setState(112);
				component();
				setState(113);
				match(NAME);
				setState(114);
				entity_bod();
				}
				}
				setState(120);
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

	public static class Entity_bodContext extends ParserRuleContext {
		public TerminalNode OPEN_BRACE() { return getToken(PlatformerParser.OPEN_BRACE, 0); }
		public TerminalNode CLOSE_BRACE() { return getToken(PlatformerParser.CLOSE_BRACE, 0); }
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(PlatformerParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(PlatformerParser.NEWLINE, i);
		}
		public Entity_bodContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_entity_bod; }
	}

	public final Entity_bodContext entity_bod() throws RecognitionException {
		Entity_bodContext _localctx = new Entity_bodContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_entity_bod);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(121);
			match(OPEN_BRACE);
			setState(123);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(122);
				match(STMT_NEWLINE);
				}
			}

			setState(130);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NAME) {
				{
				{
				setState(125);
				statement();
				setState(126);
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
				setState(132);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(133);
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
			setState(135);
			property();
			setState(136);
			match(COLON);
			setState(137);
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
			setState(139);
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

	public static class ListContext extends ParserRuleContext {
		public TerminalNode OPEN_SQUARE() { return getToken(PlatformerParser.OPEN_SQUARE, 0); }
		public List<List_objectContext> list_object() {
			return getRuleContexts(List_objectContext.class);
		}
		public List_objectContext list_object(int i) {
			return getRuleContext(List_objectContext.class,i);
		}
		public TerminalNode CLOSED_SQUARE() { return getToken(PlatformerParser.CLOSED_SQUARE, 0); }
		public List<TerminalNode> COMMA() { return getTokens(PlatformerParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(PlatformerParser.COMMA, i);
		}
		public ListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list; }
	}

	public final ListContext list() throws RecognitionException {
		ListContext _localctx = new ListContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(141);
			match(OPEN_SQUARE);
			setState(142);
			list_object();
			setState(147);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(143);
				match(COMMA);
				setState(144);
				list_object();
				}
				}
				setState(149);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(150);
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
		enterRule(_localctx, 20, RULE_component);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(152);
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
		public List_objectContext list_object() {
			return getRuleContext(List_objectContext.class,0);
		}
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_value);
		try {
			setState(157);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(154);
				varname();
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 2);
				{
				setState(155);
				match(CONST);
				}
				break;
			case OPEN_PAREN:
				enterOuterAlt(_localctx, 3);
				{
				setState(156);
				list_object();
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

	public static class List_objectContext extends ParserRuleContext {
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
		public List_objectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list_object; }
	}

	public final List_objectContext list_object() throws RecognitionException {
		List_objectContext _localctx = new List_objectContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_list_object);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(159);
			match(OPEN_PAREN);
			setState(160);
			exp();
			setState(165);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(161);
				match(COMMA);
				setState(162);
				exp();
				}
				}
				setState(167);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(168);
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
		enterRule(_localctx, 26, RULE_exp);
		try {
			setState(172);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(170);
				varname();
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 2);
				{
				setState(171);
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
		enterRule(_localctx, 28, RULE_op);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(174);
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
		enterRule(_localctx, 30, RULE_varname);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3!\u00b5\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\3\2\3\2\5"+
		"\2%\n\2\3\2\3\2\5\2)\n\2\3\2\7\2,\n\2\f\2\16\2/\13\2\3\2\3\2\3\3\3\3\3"+
		"\3\3\3\5\3\67\n\3\3\3\3\3\5\3;\n\3\3\3\3\3\3\4\3\4\3\4\7\4B\n\4\f\4\16"+
		"\4E\13\4\3\4\5\4H\n\4\3\4\3\4\5\4L\n\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\3\5\5\5X\n\5\3\5\3\5\3\5\7\5]\n\5\f\5\16\5`\13\5\3\5\3\5\3\6\3\6"+
		"\3\6\5\6g\n\6\3\6\3\6\3\7\3\7\3\7\5\7n\n\7\3\7\5\7q\n\7\3\7\3\7\3\7\3"+
		"\7\7\7w\n\7\f\7\16\7z\13\7\3\b\3\b\5\b~\n\b\3\b\3\b\3\b\7\b\u0083\n\b"+
		"\f\b\16\b\u0086\13\b\3\b\3\b\3\t\3\t\3\t\3\t\3\n\3\n\3\13\3\13\3\13\3"+
		"\13\7\13\u0094\n\13\f\13\16\13\u0097\13\13\3\13\3\13\3\f\3\f\3\r\3\r\3"+
		"\r\5\r\u00a0\n\r\3\16\3\16\3\16\3\16\7\16\u00a6\n\16\f\16\16\16\u00a9"+
		"\13\16\3\16\3\16\3\17\3\17\5\17\u00af\n\17\3\20\3\20\3\21\3\21\3\21\2"+
		"\2\22\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \2\5\4\2\23\23!!\4\2\5\7"+
		"\t\t\3\2\33\35\2\u00b9\2\"\3\2\2\2\4\62\3\2\2\2\6C\3\2\2\2\bO\3\2\2\2"+
		"\nc\3\2\2\2\fm\3\2\2\2\16{\3\2\2\2\20\u0089\3\2\2\2\22\u008d\3\2\2\2\24"+
		"\u008f\3\2\2\2\26\u009a\3\2\2\2\30\u009f\3\2\2\2\32\u00a1\3\2\2\2\34\u00ae"+
		"\3\2\2\2\36\u00b0\3\2\2\2 \u00b2\3\2\2\2\"$\5\f\7\2#%\7\23\2\2$#\3\2\2"+
		"\2$%\3\2\2\2%&\3\2\2\2&-\5\4\3\2\')\7\23\2\2(\'\3\2\2\2()\3\2\2\2)*\3"+
		"\2\2\2*,\5\4\3\2+(\3\2\2\2,/\3\2\2\2-+\3\2\2\2-.\3\2\2\2.\60\3\2\2\2/"+
		"-\3\2\2\2\60\61\7\2\2\3\61\3\3\2\2\2\62\63\7\13\2\2\63\64\7\24\2\2\64"+
		"\66\7\21\2\2\65\67\7\23\2\2\66\65\3\2\2\2\66\67\3\2\2\2\678\3\2\2\28:"+
		"\5\6\4\29;\7\23\2\2:9\3\2\2\2:;\3\2\2\2;<\3\2\2\2<=\7\22\2\2=\5\3\2\2"+
		"\2>?\5\20\t\2?@\t\2\2\2@B\3\2\2\2A>\3\2\2\2BE\3\2\2\2CA\3\2\2\2CD\3\2"+
		"\2\2DG\3\2\2\2EC\3\2\2\2FH\7\23\2\2GF\3\2\2\2GH\3\2\2\2HI\3\2\2\2IK\5"+
		"\n\6\2JL\7\23\2\2KJ\3\2\2\2KL\3\2\2\2LM\3\2\2\2MN\5\b\5\2N\7\3\2\2\2O"+
		"P\7\r\2\2PQ\7\27\2\2QR\5 \21\2RS\5\36\20\2ST\5\34\17\2TU\7\30\2\2UW\7"+
		"\21\2\2VX\7\23\2\2WV\3\2\2\2WX\3\2\2\2X^\3\2\2\2YZ\5\20\t\2Z[\t\2\2\2"+
		"[]\3\2\2\2\\Y\3\2\2\2]`\3\2\2\2^\\\3\2\2\2^_\3\2\2\2_a\3\2\2\2`^\3\2\2"+
		"\2ab\7\22\2\2b\t\3\2\2\2cd\5\26\f\2df\7\37\2\2eg\7\23\2\2fe\3\2\2\2fg"+
		"\3\2\2\2gh\3\2\2\2hi\5\24\13\2i\13\3\2\2\2jk\7\4\2\2kl\7\24\2\2ln\5\16"+
		"\b\2mj\3\2\2\2mn\3\2\2\2np\3\2\2\2oq\7\23\2\2po\3\2\2\2pq\3\2\2\2qx\3"+
		"\2\2\2rs\5\26\f\2st\7\24\2\2tu\5\16\b\2uw\3\2\2\2vr\3\2\2\2wz\3\2\2\2"+
		"xv\3\2\2\2xy\3\2\2\2y\r\3\2\2\2zx\3\2\2\2{}\7\21\2\2|~\7\23\2\2}|\3\2"+
		"\2\2}~\3\2\2\2~\u0084\3\2\2\2\177\u0080\5\20\t\2\u0080\u0081\t\2\2\2\u0081"+
		"\u0083\3\2\2\2\u0082\177\3\2\2\2\u0083\u0086\3\2\2\2\u0084\u0082\3\2\2"+
		"\2\u0084\u0085\3\2\2\2\u0085\u0087\3\2\2\2\u0086\u0084\3\2\2\2\u0087\u0088"+
		"\7\22\2\2\u0088\17\3\2\2\2\u0089\u008a\5\22\n\2\u008a\u008b\7\37\2\2\u008b"+
		"\u008c\5\30\r\2\u008c\21\3\2\2\2\u008d\u008e\7\24\2\2\u008e\23\3\2\2\2"+
		"\u008f\u0090\7\31\2\2\u0090\u0095\5\32\16\2\u0091\u0092\7\26\2\2\u0092"+
		"\u0094\5\32\16\2\u0093\u0091\3\2\2\2\u0094\u0097\3\2\2\2\u0095\u0093\3"+
		"\2\2\2\u0095\u0096\3\2\2\2\u0096\u0098\3\2\2\2\u0097\u0095\3\2\2\2\u0098"+
		"\u0099\7\32\2\2\u0099\25\3\2\2\2\u009a\u009b\t\3\2\2\u009b\27\3\2\2\2"+
		"\u009c\u00a0\5 \21\2\u009d\u00a0\7\25\2\2\u009e\u00a0\5\32\16\2\u009f"+
		"\u009c\3\2\2\2\u009f\u009d\3\2\2\2\u009f\u009e\3\2\2\2\u00a0\31\3\2\2"+
		"\2\u00a1\u00a2\7\27\2\2\u00a2\u00a7\5\34\17\2\u00a3\u00a4\7\26\2\2\u00a4"+
		"\u00a6\5\34\17\2\u00a5\u00a3\3\2\2\2\u00a6\u00a9\3\2\2\2\u00a7\u00a5\3"+
		"\2\2\2\u00a7\u00a8\3\2\2\2\u00a8\u00aa\3\2\2\2\u00a9\u00a7\3\2\2\2\u00aa"+
		"\u00ab\7\30\2\2\u00ab\33\3\2\2\2\u00ac\u00af\5 \21\2\u00ad\u00af\7\25"+
		"\2\2\u00ae\u00ac\3\2\2\2\u00ae\u00ad\3\2\2\2\u00af\35\3\2\2\2\u00b0\u00b1"+
		"\t\4\2\2\u00b1\37\3\2\2\2\u00b2\u00b3\7\24\2\2\u00b3!\3\2\2\2\26$(-\66"+
		":CGKW^fmpx}\u0084\u0095\u009f\u00a7\u00ae";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}