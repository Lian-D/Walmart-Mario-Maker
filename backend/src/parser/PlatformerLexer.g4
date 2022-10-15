lexer grammar PlatformerLexer;


// we use the default mode only to recognise keywords that start statements
LEADING_SPACE : [ \t]+ -> channel(HIDDEN); // before a keyword
COMPONENT: ENEMY | DOOR | BUTTON | TERRAIN | PLATFORM | COIN;
PLAYER: 'Player ';    // including a single space in the token forces that one is always used
ENEMY: 'Enemy ';
DOOR: 'Door ' ;
TERRAIN: 'Terrain ' ;
PLATFORM: 'Platform ';
BUTTON: 'Button ';
COIN: 'Coin' ;
LEVEL: 'Level ';
CHECKS: 'Checks';
IF: 'IF';
ADD: 'Add';
REMOVE: 'Remove';
MONEY: 'MONEY';
STMT_NEWLINE: [\r\n]+; // newlines while in statement mode


NAME  : [A-Za-z][A-Za-z0-9]*;
CONST : '-'?[0-9]+;
COMMA : ',';
OPEN_BRACE  : '{';
CLOSE_BRACE : '}';
OPEN_PAREN  : '(';
CLOSE_PAREN : ')';
OPEN_SQUARE  : '[';
CLOSED_SQUARE  : ']';
LARGER  : '>';
SMALLER  : '<';
EQUAL   : '=';
SEMICOLON : ';';
COLON : ':';
LITERAL: ('#'| [A-Za-z0-9] | '/' | '.' | '-')+;
LOGIC : 'AND'| 'OR';
LINK: LITERAL+ COLON LITERAL+ ;

// spaces and tabs can be ignored (apart from those immediately following a keyword above):
SPACE : [ \t]+ -> channel(HIDDEN);
// newline(s) indicate end of a statement and start of the next
NEWLINE : [\r\n]+ -> mode(DEFAULT_MODE); // some number of these.. longest match means we won't go back to EXP_MODE "too early"
