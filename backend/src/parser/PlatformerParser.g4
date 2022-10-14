parser grammar PlatformerParser;
options { tokenVocab=PlatformerLexer; }

program   : player STMT_NEWLINE? entity* STMT_NEWLINE? level (STMT_NEWLINE? level)* EOF;

level    : LEVEL NAME OPEN_BRACE STMT_NEWLINE? level_body STMT_NEWLINE? CLOSE_BRACE;
level_body: (statement (STMT_NEWLINE | NEWLINE))* STMT_NEWLINE? 
(level_entity (STMT_NEWLINE | NEWLINE))* STMT_NEWLINE? 
CHECKS COLON (level_cond (STMT_NEWLINE | NEWLINE))*;

level_cond: IF COLON OPEN_PAREN condition (LOGIC condition)? CLOSE_PAREN OPEN_BRACE STMT_NEWLINE? (cond_statement (STMT_NEWLINE | NEWLINE))* CLOSE_BRACE;
condition: (varname op exp) | NAME;
level_entity : component COLON STMT_NEWLINE? (entity (STMT_NEWLINE | NEWLINE))*;
entity_bod: OPEN_BRACE NEWLINE? (statement (STMT_NEWLINE | NEWLINE))* CLOSE_BRACE;
player : PLAYER NAME COLON entity_bod;
entity : component NAME COLON entity_bod;
cond_statement: NAME COLON (ADD|REMOVE) value;
statement : NAME COLON value;
list: OPEN_SQUARE list_object (COMMA list_object)* CLOSED_SQUARE;
component: ENEMY | DOOR | BUTTON | TERRAIN | PLATFORM | COIN;
value : varname | CONST | list_object | LITERAL | LINK | list;
list_object: OPEN_PAREN exp (COMMA exp)* CLOSE_PAREN;
exp       : varname | CONST;
op        : LARGER | SMALLER | EQUAL;
varname   : NAME;