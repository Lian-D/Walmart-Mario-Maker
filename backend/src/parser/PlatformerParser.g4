parser grammar TinyVarsParser;
options { tokenVocab=TinyVarsLexer; }

program   : objects STMT_NEWLINE? level (STMT_NEWLINE? level)* EOF;

level    : LEVEL NAME OPEN_BRACE level_body CLOSE_BRACE;
level_body: statements STMT_NEWLINE? level_objects STMT_NEWLINE? level_cond;

level_cond: IF OPEN_PAREN varname op exp CLOSE_PAREN OPEN_BRACE STMT_NEWLINE? statements CLOSE_BRACE;
level_objects : component COLON STMT_NEWLINE? array ;
objects : (PLAYER NAME object_bod)? STMT_NEWLINE? (component NAME object_bod)*;
object_bod: OPEN_BRACE STMT_NEWLINE? statements? CLOSE_BRACE;
statement : property COLON value;
property: 'friction' | 'health' | 'height'; // Need to add more or just allow any text
statements: (statement (STMT_NEWLINE | NEWLINE))+;
array: OPEN_BRACK array_object (COMMA array_object)* CLOSE_BRACK;
component: ENEMY | DOOR | BUTTON | TERRAIN;
value : varname | CONST | array_object;
array_object: OPEN_PAREN exp (COMMA exp)* CLOSE_PAREN;
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
