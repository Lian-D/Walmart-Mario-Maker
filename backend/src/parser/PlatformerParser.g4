parser grammar TinyVarsParser;
options { tokenVocab=TinyVarsLexer; }

program   : objects level* (statement (STMT_NEWLINE | NEWLINE))* EOF;

proc_body : OPEN_BRACE STMT_NEWLINE? (statement (STMT_NEWLINE | NEWLINE))* CLOSE_BRACE;


level    : level_s component COLON STMT_NEWLINE? statement;
lcond: IF OPEN_PAREN varname op exp CLOSE_PAREN;
level_s  : LEVEL NAME OPEN_BRACE STMT_NEWLINE? (statement (STMT_NEWLINE | NEWLINE))* CLOSE_BRACE;
objects : (PLAYER object_bod)? (component object_bod)*;
object_bod: OPEN_BRACE STMT_NEWLINE? (statement (STMT_NEWLINE | NEWLINE)*)? CLOSE_BRACE;
statement : property COLON exp;
property: 'friction' | 'health' | 'height';
statements: (statement NEWLINE)*;
component: ENEMY | DOOR | BUTTON | TERRAIN;
exp       : varname | CONST;
op        : '>' | '<' | '=';
varname   : NAME;


LEADING_SPACE : [ \t]+ -> channel(HIDDEN); // before a keyword
PLAYER: 'Player ' -> mode(EXP_MODE);     // including a single space in the token forces that one is always used
ENEMY: 'Enemy ' -> mode(EXP_MODE);
DOOR: 'Door ' -> mode(EXP_MODE);
TERRAIN: 'Terrain ' -> mode(EXP_MODE);
BUTTON: 'Button ' -> mode(EXP_MODE);
LEVEL: 'Level ' -> mode(EXP_MODE);
IF: 'if ' -> mode(EXP_MODE);
OPEN_BRACE  : '{';
CLOSE_BRACE : '}';
STMT_NEWLINE: [\r\n]+; // newlines while in statement mode

mode EXP_MODE;


OBJECT : 'Enemy' | 'Button' | 'Door' | 'Terrain';
CONST : [0-9]+;
NAME  : [A-Za-z][A-Za-z0-9]*;
DIRECTION: 'left' | 'right';
OPEN_PAREN  : '(';
CLOSE_PAREN : ')';
OPEN_BRACK : '[';
CLOSE_BRACK : ']';
COMMA : ',';
SEMICOLON : ';';
COLON : ':';
NEWLINE : [\r\n]+ -> mode(DEFAULT_MODE); // some number of these.. longest match means we won't go back to EXP_MODE "too early"
