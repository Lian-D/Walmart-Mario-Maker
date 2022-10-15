import { ANTLRInputStream, CommonTokenStream, ConsoleErrorListener } from 'antlr4ts';
import { PlatformerLexer } from '../../PlatformerLexer';
import { PlatformerParser } from '../../PlatformerParser';
import { evaluator } from '../evaluator/evalulator';
import { jsoner } from '../evaluator/jsoner';
import { ParseTreetoAST } from '../parser/ParseTreetoAST';



export default function parseTheGame(userInput: string) {
    console.log("string received");
    // Create the lexer and parser
    let inputStream = new ANTLRInputStream(userInput);
    let lexer = new PlatformerLexer(inputStream);
    let tokens = lexer.getAllTokens();
    console.log(tokens[10]);
    lexer.reset();
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new PlatformerParser(tokenStream);
    let visitor = new ParseTreetoAST();
    let program = visitor.visitProgram(parser.program());
    let json = new jsoner(program);
    let js = json.jsoner();
    let e = new evaluator(js);
    e.evaluate();
    let s = e.getError();
    console.log(s);

    // parser.buildParseTree = true;
    // return parser.value();
}