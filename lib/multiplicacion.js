"use strict";

var Operation = require("@ull-edna-joseluis-kevin-35l2/ull-operation");

(function (operations){
  module.exports = operations['x'] = class Multiplicacion extends Operation {
    constructor (izq, dch){
      super(izq,dch);
    }
    calculate(){
      return (this.izq_ * this.dch_).toFixed(2);
    }
  }

  if(operations.symbols){
    operations.symbols += 'x';
  }else{
    operations.symbols = 'x';
  }
}(global.operations = global.operations || {}));
