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
        subtraction(n1,n2){
            return n1 - n2;
        }

        divide(n1,n2){
            try {
                if (n2 === 0){
                    throw new Error('Divisão por zero');
                }
                return n1 / n2;
            } catch (error){
                return `Erro: ${error.message}`;
            } 
        }
        multiplication(n1,n2){
            return n1 * n2 ;
        }
    }

    //Instanciar a classe
    const calc = new Calculator();

    // chamando a soma
    let resultado = calc.sum(5,3);
    console.log(resultado);

     // chamando a multiplicação
     resultado = calc.multiplication(5,6);
     console.log(resultado);
     document.querySelector('#result-number'). textContent = resultado;

    // chamando a divisão 
    resultado = calc.divide(10,0);
    console.log(resultado); 

    // chamando a subtração 
    resultado = calc.subtraction(10,5);
    console.log(resultado);

  

    
