import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import {PlatformerLexer, PlatformerPraser};

// Create the lexer and parser
let inputStream = new ANTLRInputStream("text");
let lexer = new PlatformerLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new PlatformerPraser(tokenStream);

// Parse the input, where `compilationUnit` is whatever entry point you defined
let tree = parser.compilationUnit();