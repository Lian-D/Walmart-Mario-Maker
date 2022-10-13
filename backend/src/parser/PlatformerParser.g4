parser grammar PlatformerParser;
options { tokenVocab=PlatformerLexer; }

program   : objects STMT_NEWLINE? level (STMT_NEWLINE? level)* EOF;

level    : LEVEL NAME OPEN_BRACE STMT_NEWLINE? level_body STMT_NEWLINE? CLOSE_BRACE;
level_body: (statement (STMT_NEWLINE | NEWLINE))* STMT_NEWLINE? level_objects STMT_NEWLINE? level_cond;

level_cond: IF OPEN_PAREN varname op exp CLOSE_PAREN OPEN_BRACE STMT_NEWLINE? (statement (STMT_NEWLINE | NEWLINE))* CLOSE_BRACE;
level_objects : component COLON STMT_NEWLINE? array ;
objects : (PLAYER NAME object_bod)? STMT_NEWLINE? (component NAME object_bod)*;
object_bod: OPEN_BRACE STMT_NEWLINE? (statement (STMT_NEWLINE | NEWLINE))* CLOSE_BRACE;
statement : property COLON value;
property: NAME; // Need to add more or just allow any text
array: OPEN_SQUARE array_object (COMMA array_object)* CLOSED_SQUARE;
component: ENEMY | DOOR | BUTTON | TERRAIN;
value : varname | CONST | array_object;
array_object: OPEN_PAREN exp (COMMA exp)* CLOSE_PAREN;
exp       : varname | CONST;
op        : LARGER | SMALLER | EQUAL;
varname   : NAME;