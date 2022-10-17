import { ANTLRInputStream, CommonTokenStream, ConsoleErrorListener } from 'antlr4ts';
import { PlatformerLexer } from '../../PlatformerLexer';
import { PlatformerParser } from '../../PlatformerParser';
import { evaluator } from '../evaluator/evalulator';
import { jsoner } from '../evaluator/jsoner';
import { ParseTreetoAST } from '../parser/ParseTreetoAST';
import { TokenizerErrorListener } from '../parser/TokenizerErrorListener';


export class mainHomoSapien {
    constructor() {
        console.log("Mom can we have mario maker. No we have mario maker at home. Mario maker at home:");
    }


    public parseAndEvaluateGame(userInput: string): [boolean,any] {
        // Create the lexer and parser
        let inputStream = new ANTLRInputStream(userInput);
        let lexer = new PlatformerLexer(inputStream);
        // Remove error listeners from lexer and parser so we can return them instead of just printing to console
        lexer.removeErrorListeners();
        lexer.addErrorListener(TokenizerErrorListener.INSTANCE);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new PlatformerParser(tokenStream);
        // Remove error listeners from lexer and parser so we can return them instead of just printing to console
        parser.removeErrorListeners();
        parser.addErrorListener(TokenizerErrorListener.INSTANCE);
        let tokenizationErrors = TokenizerErrorListener.INSTANCE.getError();
        if (tokenizationErrors !== "") {
            return [false,{"error": tokenizationErrors}];
        }
        let visitor = new ParseTreetoAST();
        let program = visitor.visitProgram(parser.program());
        let json = new jsoner(program);
        try {
            let js = json.jsoner();
            let e = new evaluator(js);
            let error;
            if (!e.evaluate()) {
                error = e.getError();
                return [false,{"error": error}];
            } else {
                return [true,js];
            }
        } catch (err: any) {
            return [false,err];
        }
        
    }
}
