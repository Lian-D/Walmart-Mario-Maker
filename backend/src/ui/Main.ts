import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { PlatformerLexer } from '../../PlatformerLexer';
import { PlatformerParser } from '../../PlatformerParser';
import { ParseTreetoAST } from '../parser/ParseTreetoAST';



export default function parseTheGame(userInput: string) {
    console.log("string received");
    // Create the lexer and parser
    let inputStream = new ANTLRInputStream(userInput);
    let lexer = new PlatformerLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let tokens = lexer.getAllTokens();
    console.log(tokens.length);
    let parser = new PlatformerParser(tokenStream);
    let visitor = new ParseTreetoAST();
    let program = visitor.visitProgram(parser.program());
    // parser.buildParseTree = true;
    // return parser.value();
}