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
		LEADING_SPACE=1, COMPONENT=2, OP=3, PLAYER=4, ENEMY=5, DOOR=6, TERRAIN=7, 
		PLATFORM=8, BUTTON=9, COIN=10, LEVEL=11, CHECKS=12, IF=13, ADD=14, REMOVE=15, 
		LOGIC=16, STMT_NEWLINE=17, NAME=18, CONST=19, COMMA=20, OPEN_BRACE=21, 
		CLOSE_BRACE=22, OPEN_PAREN=23, CLOSE_PAREN=24, OPEN_SQUARE=25, CLOSED_SQUARE=26, 
		SEMICOLON=27, COLON=28, LITERAL=29, LINK=30, SPACE=31, NEWLINE=32;
	public static final int
		RULE_program = 0, RULE_level = 1, RULE_level_body = 2, RULE_level_cond = 3, 
		RULE_condition = 4, RULE_level_entity = 5, RULE_entity_bod = 6, RULE_player = 7, 
		RULE_entity = 8, RULE_cond_statement = 9, RULE_statement = 10, RULE_list = 11, 
		RULE_value = 12, RULE_list_object = 13, RULE_exp = 14;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "level", "level_body", "level_cond", "condition", "level_entity", 
			"entity_bod", "player", "entity", "cond_statement", "statement", "list", 
			"value", "list_object", "exp"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'Player'", "'Enemy'", "'Door'", "'Terrain'", 
			"'Platform'", "'Button'", "'Coin'", "'Level'", "'Checks'", "'IF'", null, 
			null, null, null, null, null, "','", "'{'", "'}'", "'('", "')'", "'['", 
			"']'", "';'", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LEADING_SPACE", "COMPONENT", "OP", "PLAYER", "ENEMY", "DOOR", 
			"TERRAIN", "PLATFORM", "BUTTON", "COIN", "LEVEL", "CHECKS", "IF", "ADD", 
			"REMOVE", "LOGIC", "STMT_NEWLINE", "NAME", "CONST", "COMMA", "OPEN_BRACE", 
			"CLOSE_BRACE", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", 
			"SEMICOLON", "COLON", "LITERAL", "LINK", "SPACE", "NEWLINE"
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
		public PlayerContext player() {
			return getRuleContext(PlayerContext.class,0);
		}
		public TerminalNode EOF() { return getToken(PlatformerParser.EOF, 0); }
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public List<EntityContext> entity() {
			return getRuleContexts(EntityContext.class);
		}
		public EntityContext entity(int i) {
			return getRuleContext(EntityContext.class,i);
		}
		public List<LevelContext> level() {
			return getRuleContexts(LevelContext.class);
		}
		public LevelContext level(int i) {
			return getRuleContext(LevelContext.class,i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(PlatformerParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(PlatformerParser.NEWLINE, i);
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
			setState(30);
			player();
			setState(32);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(31);
				match(STMT_NEWLINE);
				}
			}

			setState(39);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMPONENT) {
				{
				{
				setState(34);
				entity();
				setState(35);
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
				setState(41);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(45); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(42);
				level();
				setState(43);
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
				setState(47); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==LEVEL );
			setState(49);
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
			setState(51);
			match(LEVEL);
			setState(52);
			match(NAME);
			setState(53);
			match(OPEN_BRACE);
			setState(55);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(54);
				match(STMT_NEWLINE);
				}
			}

			setState(57);
			level_body();
			setState(59);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(58);
				match(STMT_NEWLINE);
				}
			}

			setState(61);
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
		public TerminalNode CHECKS() { return getToken(PlatformerParser.CHECKS, 0); }
		public TerminalNode COLON() { return getToken(PlatformerParser.COLON, 0); }
		public TerminalNode OPEN_SQUARE() { return getToken(PlatformerParser.OPEN_SQUARE, 0); }
		public TerminalNode CLOSED_SQUARE() { return getToken(PlatformerParser.CLOSED_SQUARE, 0); }
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(PlatformerParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(PlatformerParser.NEWLINE, i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<Level_entityContext> level_entity() {
			return getRuleContexts(Level_entityContext.class);
		}
		public Level_entityContext level_entity(int i) {
			return getRuleContext(Level_entityContext.class,i);
		}
		public List<Level_condContext> level_cond() {
			return getRuleContexts(Level_condContext.class);
		}
		public Level_condContext level_cond(int i) {
			return getRuleContext(Level_condContext.class,i);
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
			setState(68);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NAME) {
				{
				{
				setState(63);
				statement();
				setState(64);
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
				setState(70);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMPONENT) {
				{
				{
				setState(71);
				level_entity();
				setState(73);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==STMT_NEWLINE || _la==NEWLINE) {
					{
					setState(72);
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

				}
				}
				setState(79);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(80);
			match(CHECKS);
			setState(81);
			match(COLON);
			setState(82);
			match(OPEN_SQUARE);
			setState(84);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE || _la==NEWLINE) {
				{
				setState(83);
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

			setState(91);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IF) {
				{
				{
				setState(86);
				level_cond();
				setState(87);
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
				setState(93);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(94);
			match(CLOSED_SQUARE);
			setState(95);
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
		public TerminalNode COLON() { return getToken(PlatformerParser.COLON, 0); }
		public TerminalNode OPEN_PAREN() { return getToken(PlatformerParser.OPEN_PAREN, 0); }
		public List<ConditionContext> condition() {
			return getRuleContexts(ConditionContext.class);
		}
		public ConditionContext condition(int i) {
			return getRuleContext(ConditionContext.class,i);
		}
		public TerminalNode CLOSE_PAREN() { return getToken(PlatformerParser.CLOSE_PAREN, 0); }
		public TerminalNode OPEN_BRACE() { return getToken(PlatformerParser.OPEN_BRACE, 0); }
		public TerminalNode CLOSE_BRACE() { return getToken(PlatformerParser.CLOSE_BRACE, 0); }
		public TerminalNode LOGIC() { return getToken(PlatformerParser.LOGIC, 0); }
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public List<Cond_statementContext> cond_statement() {
			return getRuleContexts(Cond_statementContext.class);
		}
		public Cond_statementContext cond_statement(int i) {
			return getRuleContext(Cond_statementContext.class,i);
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
			setState(97);
			match(IF);
			setState(98);
			match(COLON);
			setState(99);
			match(OPEN_PAREN);
			setState(100);
			condition();
			setState(103);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LOGIC) {
				{
				setState(101);
				match(LOGIC);
				setState(102);
				condition();
				}
			}

			setState(105);
			match(CLOSE_PAREN);
			setState(106);
			match(OPEN_BRACE);
			setState(108);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(107);
				match(STMT_NEWLINE);
				}
			}

			setState(115);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMPONENT) {
				{
				{
				setState(110);
				cond_statement();
				setState(111);
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
				setState(117);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(118);
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

	public static class ConditionContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(PlatformerParser.NAME, 0); }
		public TerminalNode OP() { return getToken(PlatformerParser.OP, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_condition);
		try {
			setState(124);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(120);
				match(NAME);
				setState(121);
				match(OP);
				setState(122);
				exp();
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(123);
				match(NAME);
				}
				break;
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

	public static class Level_entityContext extends ParserRuleContext {
		public TerminalNode COMPONENT() { return getToken(PlatformerParser.COMPONENT, 0); }
		public TerminalNode COLON() { return getToken(PlatformerParser.COLON, 0); }
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(PlatformerParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(PlatformerParser.NEWLINE, i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public Level_entityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_level_entity; }
	}

	public final Level_entityContext level_entity() throws RecognitionException {
		Level_entityContext _localctx = new Level_entityContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_level_entity);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(126);
			match(COMPONENT);
			setState(127);
			match(COLON);
			setState(128);
			_la = _input.LA(1);
			if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(134);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NAME) {
				{
				{
				setState(129);
				statement();
				setState(130);
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
				setState(136);
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
		public List<TerminalNode> NEWLINE() { return getTokens(PlatformerParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(PlatformerParser.NEWLINE, i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
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
			setState(137);
			match(OPEN_BRACE);
			setState(138);
			_la = _input.LA(1);
			if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(144);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NAME) {
				{
				{
				setState(139);
				statement();
				setState(140);
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
				setState(146);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(147);
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

	public static class PlayerContext extends ParserRuleContext {
		public TerminalNode PLAYER() { return getToken(PlatformerParser.PLAYER, 0); }
		public TerminalNode NAME() { return getToken(PlatformerParser.NAME, 0); }
		public TerminalNode COLON() { return getToken(PlatformerParser.COLON, 0); }
		public Entity_bodContext entity_bod() {
			return getRuleContext(Entity_bodContext.class,0);
		}
		public PlayerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_player; }
	}

	public final PlayerContext player() throws RecognitionException {
		PlayerContext _localctx = new PlayerContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_player);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(149);
			match(PLAYER);
			setState(150);
			match(NAME);
			setState(151);
			match(COLON);
			setState(152);
			entity_bod();
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

	public static class EntityContext extends ParserRuleContext {
		public TerminalNode COMPONENT() { return getToken(PlatformerParser.COMPONENT, 0); }
		public TerminalNode NAME() { return getToken(PlatformerParser.NAME, 0); }
		public TerminalNode COLON() { return getToken(PlatformerParser.COLON, 0); }
		public Entity_bodContext entity_bod() {
			return getRuleContext(Entity_bodContext.class,0);
		}
		public EntityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_entity; }
	}

	public final EntityContext entity() throws RecognitionException {
		EntityContext _localctx = new EntityContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_entity);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(154);
			match(COMPONENT);
			setState(155);
			match(NAME);
			setState(156);
			match(COLON);
			setState(157);
			entity_bod();
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

	public static class Cond_statementContext extends ParserRuleContext {
		public TerminalNode COMPONENT() { return getToken(PlatformerParser.COMPONENT, 0); }
		public TerminalNode COLON() { return getToken(PlatformerParser.COLON, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode ADD() { return getToken(PlatformerParser.ADD, 0); }
		public TerminalNode REMOVE() { return getToken(PlatformerParser.REMOVE, 0); }
		public Cond_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cond_statement; }
	}

	public final Cond_statementContext cond_statement() throws RecognitionException {
		Cond_statementContext _localctx = new Cond_statementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_cond_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(159);
			match(COMPONENT);
			setState(160);
			match(COLON);
			setState(161);
			_la = _input.LA(1);
			if ( !(_la==ADD || _la==REMOVE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(162);
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

	public static class StatementContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(PlatformerParser.NAME, 0); }
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
		enterRule(_localctx, 20, RULE_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(164);
			match(NAME);
			setState(165);
			match(COLON);
			setState(166);
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
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(PlatformerParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(PlatformerParser.NEWLINE, i);
		}
		public ListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list; }
	}

	public final ListContext list() throws RecognitionException {
		ListContext _localctx = new ListContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(168);
			match(OPEN_SQUARE);
			setState(170);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE || _la==NEWLINE) {
				{
				setState(169);
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

			setState(172);
			list_object();
			setState(178);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(173);
				match(COMMA);
				setState(174);
				_la = _input.LA(1);
				if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(175);
				list_object();
				}
				}
				setState(180);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(182);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE || _la==NEWLINE) {
				{
				setState(181);
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

			setState(184);
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

	public static class ValueContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(PlatformerParser.NAME, 0); }
		public TerminalNode CONST() { return getToken(PlatformerParser.CONST, 0); }
		public List_objectContext list_object() {
			return getRuleContext(List_objectContext.class,0);
		}
		public TerminalNode LITERAL() { return getToken(PlatformerParser.LITERAL, 0); }
		public TerminalNode LINK() { return getToken(PlatformerParser.LINK, 0); }
		public ListContext list() {
			return getRuleContext(ListContext.class,0);
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
			setState(192);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(186);
				match(NAME);
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 2);
				{
				setState(187);
				match(CONST);
				}
				break;
			case OPEN_PAREN:
				enterOuterAlt(_localctx, 3);
				{
				setState(188);
				list_object();
				}
				break;
			case LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(189);
				match(LITERAL);
				}
				break;
			case LINK:
				enterOuterAlt(_localctx, 5);
				{
				setState(190);
				match(LINK);
				}
				break;
			case OPEN_SQUARE:
				enterOuterAlt(_localctx, 6);
				{
				setState(191);
				list();
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
		enterRule(_localctx, 26, RULE_list_object);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			match(OPEN_PAREN);
			setState(195);
			exp();
			setState(200);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(196);
				match(COMMA);
				setState(197);
				exp();
				}
				}
				setState(202);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(203);
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
		public TerminalNode NAME() { return getToken(PlatformerParser.NAME, 0); }
		public TerminalNode CONST() { return getToken(PlatformerParser.CONST, 0); }
		public ExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp; }
	}

	public final ExpContext exp() throws RecognitionException {
		ExpContext _localctx = new ExpContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_exp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(205);
			_la = _input.LA(1);
			if ( !(_la==NAME || _la==CONST) ) {
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

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\"\u00d2\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\3\2\5\2#\n\2\3\2"+
		"\3\2\3\2\7\2(\n\2\f\2\16\2+\13\2\3\2\3\2\3\2\6\2\60\n\2\r\2\16\2\61\3"+
		"\2\3\2\3\3\3\3\3\3\3\3\5\3:\n\3\3\3\3\3\5\3>\n\3\3\3\3\3\3\4\3\4\3\4\7"+
		"\4E\n\4\f\4\16\4H\13\4\3\4\3\4\5\4L\n\4\7\4N\n\4\f\4\16\4Q\13\4\3\4\3"+
		"\4\3\4\3\4\5\4W\n\4\3\4\3\4\3\4\7\4\\\n\4\f\4\16\4_\13\4\3\4\3\4\3\4\3"+
		"\5\3\5\3\5\3\5\3\5\3\5\5\5j\n\5\3\5\3\5\3\5\5\5o\n\5\3\5\3\5\3\5\7\5t"+
		"\n\5\f\5\16\5w\13\5\3\5\3\5\3\6\3\6\3\6\3\6\5\6\177\n\6\3\7\3\7\3\7\3"+
		"\7\3\7\3\7\7\7\u0087\n\7\f\7\16\7\u008a\13\7\3\b\3\b\3\b\3\b\3\b\7\b\u0091"+
		"\n\b\f\b\16\b\u0094\13\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3"+
		"\n\3\13\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\r\3\r\5\r\u00ad\n\r\3\r"+
		"\3\r\3\r\3\r\7\r\u00b3\n\r\f\r\16\r\u00b6\13\r\3\r\5\r\u00b9\n\r\3\r\3"+
		"\r\3\16\3\16\3\16\3\16\3\16\3\16\5\16\u00c3\n\16\3\17\3\17\3\17\3\17\7"+
		"\17\u00c9\n\17\f\17\16\17\u00cc\13\17\3\17\3\17\3\20\3\20\3\20\2\2\21"+
		"\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36\2\5\4\2\23\23\"\"\3\2\20\21\3"+
		"\2\24\25\2\u00db\2 \3\2\2\2\4\65\3\2\2\2\6F\3\2\2\2\bc\3\2\2\2\n~\3\2"+
		"\2\2\f\u0080\3\2\2\2\16\u008b\3\2\2\2\20\u0097\3\2\2\2\22\u009c\3\2\2"+
		"\2\24\u00a1\3\2\2\2\26\u00a6\3\2\2\2\30\u00aa\3\2\2\2\32\u00c2\3\2\2\2"+
		"\34\u00c4\3\2\2\2\36\u00cf\3\2\2\2 \"\5\20\t\2!#\7\23\2\2\"!\3\2\2\2\""+
		"#\3\2\2\2#)\3\2\2\2$%\5\22\n\2%&\t\2\2\2&(\3\2\2\2\'$\3\2\2\2(+\3\2\2"+
		"\2)\'\3\2\2\2)*\3\2\2\2*/\3\2\2\2+)\3\2\2\2,-\5\4\3\2-.\t\2\2\2.\60\3"+
		"\2\2\2/,\3\2\2\2\60\61\3\2\2\2\61/\3\2\2\2\61\62\3\2\2\2\62\63\3\2\2\2"+
		"\63\64\7\2\2\3\64\3\3\2\2\2\65\66\7\r\2\2\66\67\7\24\2\2\679\7\27\2\2"+
		"8:\7\23\2\298\3\2\2\29:\3\2\2\2:;\3\2\2\2;=\5\6\4\2<>\7\23\2\2=<\3\2\2"+
		"\2=>\3\2\2\2>?\3\2\2\2?@\7\30\2\2@\5\3\2\2\2AB\5\26\f\2BC\t\2\2\2CE\3"+
		"\2\2\2DA\3\2\2\2EH\3\2\2\2FD\3\2\2\2FG\3\2\2\2GO\3\2\2\2HF\3\2\2\2IK\5"+
		"\f\7\2JL\t\2\2\2KJ\3\2\2\2KL\3\2\2\2LN\3\2\2\2MI\3\2\2\2NQ\3\2\2\2OM\3"+
		"\2\2\2OP\3\2\2\2PR\3\2\2\2QO\3\2\2\2RS\7\16\2\2ST\7\36\2\2TV\7\33\2\2"+
		"UW\t\2\2\2VU\3\2\2\2VW\3\2\2\2W]\3\2\2\2XY\5\b\5\2YZ\t\2\2\2Z\\\3\2\2"+
		"\2[X\3\2\2\2\\_\3\2\2\2][\3\2\2\2]^\3\2\2\2^`\3\2\2\2_]\3\2\2\2`a\7\34"+
		"\2\2ab\t\2\2\2b\7\3\2\2\2cd\7\17\2\2de\7\36\2\2ef\7\31\2\2fi\5\n\6\2g"+
		"h\7\22\2\2hj\5\n\6\2ig\3\2\2\2ij\3\2\2\2jk\3\2\2\2kl\7\32\2\2ln\7\27\2"+
		"\2mo\7\23\2\2nm\3\2\2\2no\3\2\2\2ou\3\2\2\2pq\5\24\13\2qr\t\2\2\2rt\3"+
		"\2\2\2sp\3\2\2\2tw\3\2\2\2us\3\2\2\2uv\3\2\2\2vx\3\2\2\2wu\3\2\2\2xy\7"+
		"\30\2\2y\t\3\2\2\2z{\7\24\2\2{|\7\5\2\2|\177\5\36\20\2}\177\7\24\2\2~"+
		"z\3\2\2\2~}\3\2\2\2\177\13\3\2\2\2\u0080\u0081\7\4\2\2\u0081\u0082\7\36"+
		"\2\2\u0082\u0088\t\2\2\2\u0083\u0084\5\26\f\2\u0084\u0085\t\2\2\2\u0085"+
		"\u0087\3\2\2\2\u0086\u0083\3\2\2\2\u0087\u008a\3\2\2\2\u0088\u0086\3\2"+
		"\2\2\u0088\u0089\3\2\2\2\u0089\r\3\2\2\2\u008a\u0088\3\2\2\2\u008b\u008c"+
		"\7\27\2\2\u008c\u0092\t\2\2\2\u008d\u008e\5\26\f\2\u008e\u008f\t\2\2\2"+
		"\u008f\u0091\3\2\2\2\u0090\u008d\3\2\2\2\u0091\u0094\3\2\2\2\u0092\u0090"+
		"\3\2\2\2\u0092\u0093\3\2\2\2\u0093\u0095\3\2\2\2\u0094\u0092\3\2\2\2\u0095"+
		"\u0096\7\30\2\2\u0096\17\3\2\2\2\u0097\u0098\7\6\2\2\u0098\u0099\7\24"+
		"\2\2\u0099\u009a\7\36\2\2\u009a\u009b\5\16\b\2\u009b\21\3\2\2\2\u009c"+
		"\u009d\7\4\2\2\u009d\u009e\7\24\2\2\u009e\u009f\7\36\2\2\u009f\u00a0\5"+
		"\16\b\2\u00a0\23\3\2\2\2\u00a1\u00a2\7\4\2\2\u00a2\u00a3\7\36\2\2\u00a3"+
		"\u00a4\t\3\2\2\u00a4\u00a5\5\32\16\2\u00a5\25\3\2\2\2\u00a6\u00a7\7\24"+
		"\2\2\u00a7\u00a8\7\36\2\2\u00a8\u00a9\5\32\16\2\u00a9\27\3\2\2\2\u00aa"+
		"\u00ac\7\33\2\2\u00ab\u00ad\t\2\2\2\u00ac\u00ab\3\2\2\2\u00ac\u00ad\3"+
		"\2\2\2\u00ad\u00ae\3\2\2\2\u00ae\u00b4\5\34\17\2\u00af\u00b0\7\26\2\2"+
		"\u00b0\u00b1\t\2\2\2\u00b1\u00b3\5\34\17\2\u00b2\u00af\3\2\2\2\u00b3\u00b6"+
		"\3\2\2\2\u00b4\u00b2\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\u00b8\3\2\2\2\u00b6"+
		"\u00b4\3\2\2\2\u00b7\u00b9\t\2\2\2\u00b8\u00b7\3\2\2\2\u00b8\u00b9\3\2"+
		"\2\2\u00b9\u00ba\3\2\2\2\u00ba\u00bb\7\34\2\2\u00bb\31\3\2\2\2\u00bc\u00c3"+
		"\7\24\2\2\u00bd\u00c3\7\25\2\2\u00be\u00c3\5\34\17\2\u00bf\u00c3\7\37"+
		"\2\2\u00c0\u00c3\7 \2\2\u00c1\u00c3\5\30\r\2\u00c2\u00bc\3\2\2\2\u00c2"+
		"\u00bd\3\2\2\2\u00c2\u00be\3\2\2\2\u00c2\u00bf\3\2\2\2\u00c2\u00c0\3\2"+
		"\2\2\u00c2\u00c1\3\2\2\2\u00c3\33\3\2\2\2\u00c4\u00c5\7\31\2\2\u00c5\u00ca"+
		"\5\36\20\2\u00c6\u00c7\7\26\2\2\u00c7\u00c9\5\36\20\2\u00c8\u00c6\3\2"+
		"\2\2\u00c9\u00cc\3\2\2\2\u00ca\u00c8\3\2\2\2\u00ca\u00cb\3\2\2\2\u00cb"+
		"\u00cd\3\2\2\2\u00cc\u00ca\3\2\2\2\u00cd\u00ce\7\32\2\2\u00ce\35\3\2\2"+
		"\2\u00cf\u00d0\t\4\2\2\u00d0\37\3\2\2\2\27\")\619=FKOV]inu~\u0088\u0092"+
		"\u00ac\u00b4\u00b8\u00c2\u00ca";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}