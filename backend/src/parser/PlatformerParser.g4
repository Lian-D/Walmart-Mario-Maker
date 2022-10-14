parser grammar PlatformerParser;
options { tokenVocab=PlatformerLexer; }

program   : player STMT_NEWLINE? entity* STMT_NEWLINE? level (STMT_NEWLINE? level)* EOF;

level    : LEVEL NAME OPEN_BRACE STMT_NEWLINE? level_body STMT_NEWLINE? CLOSE_BRACE;
level_body: (statement (STMT_NEWLINE | NEWLINE))* STMT_NEWLINE? (level_entity (STMT_NEWLINE | NEWLINE))* STMT_NEWLINE? level_cond;

level_cond: IF OPEN_PAREN varname op exp CLOSE_PAREN OPEN_BRACE STMT_NEWLINE? (statement (STMT_NEWLINE | NEWLINE))* CLOSE_BRACE;
level_entity : component COLON STMT_NEWLINE? list;
entity_bod: OPEN_BRACE STMT_NEWLINE? (statement (STMT_NEWLINE | NEWLINE))* CLOSE_BRACE;
player : PLAYER NAME entity_bod;
entity : component NAME entity_bod;
statement : property COLON value;
property: NAME; // Need to add more or just allow any text
list: OPEN_SQUARE list_object (COMMA list_object)* CLOSED_SQUARE;
component: ENEMY | DOOR | BUTTON | TERRAIN;
value : varname | CONST | list_object;
list_object: OPEN_PAREN exp (COMMA exp)* CLOSE_PAREN;
exp       : varname | CONST;
op        : LARGER | SMALLER | EQUAL;
varname   : NAME;