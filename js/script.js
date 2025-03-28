    class Calculator {
        constructor(){
            this.upperValue = document.querySelector
            ('#upper-number');
            this.resultValue = document.querySelector('#result-number');
            this.reset = false;
        }

        sum(n1,n2){
            return n1 + n2;
        }
    }

    //Instanciar a classe
    const calc = new Calculator();

    let resultado = calc.sum(5,3);
    console.log(resultado);
