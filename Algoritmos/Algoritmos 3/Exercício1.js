const prompt = require('prompt-sync')();

/*
Escreva um algoritmo que determine se um dado número N (digitado pelo usuário) é primo ou não (primo => divisível por 1 e por ele mesmo)
*/

var quociente, dividendo, divisor, resto;

dividendo = Number(prompt("Informe um número: "));

if(dividendo <= 0)
{
    for(var x = 0; x <=1; x++)
    {
        dividendo = Number(prompt("Informe um número não nulo ou não negativo: "));

        if(dividendo > 0)
        {
            dividendo = dividendo;
            x = x + 2;
        }
        else if(dividendo <= 0)
        {
            x = 0;
        }
    }

    if(dividendo > 0)
    {
        console.log("--------------------------------------------");
        console.log("              Número válido!");
        console.log("                   " + dividendo);
        console.log("--------------------------------------------");

        if(dividendo == 1)
        {
            console.log("Por conta da unicidade do processo de fatoração de um número, o número 1 não é considerado como número primo e nem composto.");
        }
        else if(dividendo > 1)
        {
            quociente = 0;
            divisor = 2;
            resto = 0;

            for(var x = 0; x < dividendo; x++)
            {
                quociente = dividendo / divisor;
                resto = dividendo % divisor;

                if(divisor == dividendo && resto == 0)
                {
                    console.log("O número é primo!")
                    x = dividendo + 1;
                }
                else if(divisor != dividendo && resto == 0)
                {
                    console.log("O número é composto!");
                    x = dividendo + 1;
                }
                divisor++;
            }
        }
    }
}
else
{
    if(dividendo > 0)
    {
        console.log("--------------------------------------------");
        console.log("              Número válido!");
        console.log("                   " + dividendo);
        console.log("--------------------------------------------");

        if(dividendo == 1)
        {
            console.log("Por conta da unicidade do processo de fatoração de um número, o número 1 não é considerado como número primo e nem composto.");
        }
        else if(dividendo > 1)
        {
            quociente = 0;
            divisor = 2;
            resto = 0;

            for(var x = 0; x < dividendo; x++)
            {
                quociente = dividendo / divisor;
                resto = dividendo % divisor;

                if(divisor == dividendo && resto == 0)
                {
                    console.log("O número é primo!")
                    x = dividendo + 1;
                }
                else if(divisor != dividendo && resto == 0)
                {
                    console.log("O número é composto!");
                    x = dividendo + 1;
                }
                divisor++;
            }
        }
    }
}