lexer grammar PlatformerLexer;


// we use the default mode only to recognise keywords that start statements
LEADING_SPACE : [ \t]+ -> channel(HIDDEN); // before a keyword
PLAYER: 'Player ' -> mode(EXP_MODE);     // including a single space in the token forces that one is always used
ENEMY: 'Enemy ' -> mode(EXP_MODE);
DOOR: 'Door ' -> mode(EXP_MODE);
TERRAIN: 'Terrain ' -> mode(EXP_MODE);
PLATFORM: 'Platform ' -> mode(EXP_MODE);
BUTTON: 'Button ' -> mode(EXP_MODE);
COIN: 'Coin' -> mode(EXP_MODE);
LEVEL: 'Level ' -> mode(EXP_MODE);
CHECKS: 'Checks ' -> mode(EXP_MODE);
IF: 'if ' -> mode(EXP_MODE);
ADD: 'Add' -> mode(EXP_MODE);
REMOVE: 'Remove' -> mode(EXP_MODE);
MONEY: 'MONEY' -> mode(EXP_MODE);
OPEN_BRACE  : '{';
CLOSE_BRACE : '}';
STMT_NEWLINE: [\r\n]+; // newlines while in statement mode

mode EXP_MODE;

NAME  : [A-Za-z][A-Za-z0-9]*;
CONST : '-'?[0-9]+;
COMMA : ',';
OPEN_PAREN  : '(';
CLOSE_PAREN : ')';
OPEN_SQUARE  : '[';
CLOSED_SQUARE  : ']';
LARGER  : '>';
SMALLER  : '<';
SEMICOLON : ';';
COLON : ':';

// spaces and tabs can be ignored (apart from those immediately following a keyword above):
SPACE : [ \t]+ -> channel(HIDDEN);
// newline(s) indicate end of a statement and start of the next
NEWLINE : [\r\n]+ -> mode(DEFAULT_MODE); // some number of these.. longest match means we won't go back to EXP_MODE "too early"
