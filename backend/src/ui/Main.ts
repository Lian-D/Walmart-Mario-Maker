import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { PlatformerLexer } from '../../PlatformerLexer';
import { PlatformerParser } from '../../PlatformerParser';

// Create the lexer and parser
let inputStream = new ANTLRInputStream("text");
let lexer = new PlatformerLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new PlatformerParser(tokenStream);