import{ Exp } from './Exp';

export class Condition3{
    opA:String;
    op:String;
    opB:Exp;

    constructor(opA:String, op:String, opB:Exp){
        this.opA = opA;
        this.op = op;
        this.opB = opB;
    }
}