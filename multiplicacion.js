"use strict";

(function (operations){

  /**
  * Clase que calcula la multiplicacion entre dos dígitos
  * @class Multiplicacion
  * @param {number} izq Operando izquierdo
  * @param {number} dch Operando derecho
  */

    operations['x'] = class Multiplicacion extends Operation {
      /**
  		* Constructor de la Multiplicacion
  		* @param {number} izq Operando izquierdo
 		  * @param {number} dch Operando derecho
 		  */
      constructor (izq, dch){
        super(izq,dch);
      }

      /**
   		* Función que devuelve el resultado de la Multiplicacion
   		* @function calculate
   		*/
      calculate(){
        return (this.izq_ * this.dch_).toFixed(2);
      }
    }

  if(operations.symbols){
    operations.symbols += 'x';
  }else{
    operations.symbols = 'x';
  }
// }(global.operations = global.operations || {}));
 }(operations = operations || {}));
