// # Exercício 1

// Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
    
// Faça isso:
    
// 1. Utilizando ifs aninhados

const number = prompt("digite um número")
if(number % 2 === 0)
{
    if (number % 3 === 0)
    {
        console.log("o número é divisível por 2 e 3")
    }
    else
    {
        console.log("o número é divisível somente por 2")
    }
}
else if (number % 3 === 0)
{
    console.log("o número é divisível somente por 3")
}
else
{
    console.log("o número não é divisível por 2 nem por 3")
}

// 2. Utilizando um operador lógico para unir duas operações relacionais


if(number % 2 === 0 || number % 3 === 0)
{
    console.log("o número é divisível por 2 ou 3")
}
else
{
    console.log("o número não é divisível por 2 nem por 3")
}