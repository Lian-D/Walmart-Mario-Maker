// An error listener to receive error messages raised during tokenization instead of simply printing to console
import { ANTLRErrorListener, RecognitionException, Recognizer } from 'antlr4ts';


export class TokenizerErrorListener implements ANTLRErrorListener<any> {
    /**
     * Derived from ConsoleErrorListener from within the antlr4ts package
     * and from https://stackoverflow.com/questions/18132078/handling-errors-in-antlr4/18137301#18137301, one of the authors of the antlr4ts package
     */
    static readonly INSTANCE: TokenizerErrorListener = new TokenizerErrorListener();

    static errStr: string = "";

    syntaxError<T>(recognizer: Recognizer<T, any>, offendingSymbol: T, line: number, charPositionInLine: number, msg: String, e: RecognitionException | undefined) {
        
        let errorInstanceString: string = `Syntax error occured at line ${line}, character ${charPositionInLine}. ${msg}`;
        console.error(errorInstanceString);

        TokenizerErrorListener.errStr = TokenizerErrorListener.errStr + 
        errorInstanceString + "\n";
    }

    // The reset parameter indicates whether the error string is to be erased after being returned
    getError(reset: boolean = true) {
        if (reset) {
            let ret = TokenizerErrorListener.errStr.slice();
            TokenizerErrorListener.errStr = "";
            return ret;
        } else {
            return TokenizerErrorListener.errStr;
        }
        
    }
}