// Imagina que você tem uma caixinha mágica onde você pode guardar qualquer coisa que quiser.
// Essa caixinha precisa ter um nome para que você saiba o que tem guardado dela.
// Por exemplo, você tem uma caixinha chamada "coisas velhas" e coloca um livro dentro dela:

let coisasVelhas = "livro";

// Agora, se você quiser saber ou pegar o que tem dentro da caixinha, você pode perguntar para ela:

console.log(coisasVelhas);

// E ela vai te responder:

"livro"

// No JavaScript, essa caixinha mágica é chamada de variável.
// Uma variável é um espaço na memória do computador onde você pode guardar qualquer coisa que quiser.
// Para criar uma variável, você precisa dar um nome para ela e guardar alguma coisa dentro dela.
// Usamos "let" como uma "etiqueta" para a caixinha, com ele é como se você identificasse a caixinha com um nome.
// E também o que pode fazer com ela, como por exemplo, "let" também permite que você mude o que tem dentro da caixinha.
// Por exemplo, se você quiser trocar o livro por um caderno, você pode fazer isso:

coisasVelhas = "caderno";

// Agora na mesma caixinha tem um item novo: "caderno"!
// Na programação, as variáveis são muito úteis para guardar informações que você vai usar mais tarde.
// Por exemplo, você pode guardar o seu nome em uma variável:   

let meuNome = "Talita";

// E depois usar essa variável para imprimir o seu nome no console:

console.log(meuNome);

// Mas e se você quiser guardar mais de um item na mesma caixinha?
// Você pode fazer isso usando um tipo de variável chamado "array".
// Um array é uma coleção de itens que você pode guardar em uma variável.
// Por exemplo, você pode guardar uma lista de coisas velhas que você pretende doar e estão na caixinha "coisasVelhasParaDoar":
// Para criar um array, você usa colchetes [] e separa os itens com vírgulas:

let coisasVelhasParaDoar = ["livro", "caderno", "caneta", "óculos"];

// E aí, se você quiser ver o que tem dentro da caixinha, você pode perguntar para ela:

console.log(coisasVelhasParaDoar);

// Para escolher um item da caixinha ou mais você pode usar o índice do item.
// O índice é um número que representa a posição do item na caixinha.
// No JavaScript, os índices começam a contar do zero.
// Por exemplo, se você quiser pegar o primeiro item da caixinha, você pode fazer isso:

console.log(coisasVelhasParaDoar[0]);

// Mas e se quisermos descartar os itens dentro da caixinha ou mudar de posição?
// Você pode fazer isso usando o índice do item.
// Por exemplo, se você quiser descartar o livro, você pode fazer isso:

coisasVelhasParaDoar.splice(0, 1);

// O primeiro número do método "splice" é o índice do item que você quer descartar.
// O segundo número do método "splice" é a quantidade de itens que você quer descartar.
// E como sabemos se o item da caixinha foi descartado?
// Você pode perguntar para a caixinha novamente:

console.log(coisasVelhasParaDoar);

// O livro não está mais na caixinha!
// E se você quiser mudar um item de posição na caixinha?
// Você pode fazer isso usando o índice do item.
// Por exemplo, se você quiser colocar o óculos no lugar do caderno, você pode fazer isso: 

coisasVelhasParaDoar.splice(1, 1, "óculos");

// O primeiro número do método "splice" é o índice do item que você quer mudar.
// O segundo número do método "splice" é a quantidade de itens que você quer mudar.
// O terceiro item do método "splice" é o novo item que você quer colocar no lugar.
// E como sabemos se o item da caixinha foi mudado de posição?

console.log(coisasVelhasParaDoar);

// O caderno não está mais na caixinha e o óculos está no lugar dele!
// E se você quiser adicionar um item novo na caixinha?
// Você pode fazer isso usando o método "push".
// Por exemplo, se você quiser adicionar um celular na caixinha, você pode fazer isso:

coisasVelhasParaDoar.push("celular");

// E como sabemos se o item foi adicionado na caixinha?

console.log(coisasVelhasParaDoar);

// O celular está na caixinha!
// E se você quiser saber quantos itens tem na caixinha?
// Você pode fazer isso usando a propriedade "length".
// Por exemplo, se você quiser saber quantos itens tem na caixinha, você pode fazer isso:

console.log(coisasVelhasParaDoar.length);

// A caixinha tem 4 itens!
// "Push" é um método que adiciona um item no final da caixinha.
// E "Length" é uma propriedade que conta quantos itens tem na caixinha.
// E se você quiser saber se um item específico está na caixinha?
// Você pode fazer isso usando o método "includes".

console.log(coisasVelhasParaDoar.includes("caderno"));

// Tivemos um "true" como resposta, isso significa que o caderno está na caixinha!
// E se você quiser saber a posição de um item específico na caixinha?
// Você pode fazer isso usando o método "indexOf".

console.log(coisasVelhasParaDoar.indexOf("caderno"));

// Tivemos um "0" como resposta, isso significa que o caderno está na primeira posição da caixinha!
// E se você quiser saber a posição de um item específico na caixinha a partir de uma posição específica?
// Você pode fazer isso usando o método "indexOf" com um segundo argumento.
// Para ilustrar, imagine que você quer saber a posição do caderno a partir da segunda posição da caixinha:
// Você pode fazer isso:

console.log(coisasVelhasParaDoar.indexOf("caderno", 1));

// Tivemos um "-1" como resposta, isso significa que o caderno não está na segunda posição da caixinha!
// E se você quiser saber a última posição de um item específico na caixinha?
// Você pode fazer isso usando o método "lastIndexOf".
// Para ilustrar, imagine que você quer saber a última posição do óculos na caixinha:
// Você pode fazer isso:

console.log(coisasVelhasParaDoar.lastIndexOf("óculos"));

// Tivemos um "2" como resposta, isso significa que o óculos está na terceira posição da caixinha!
// E se você quiser saber a posição de todos os itens da caixinha?
// Você pode fazer isso usando o método "forEach".
// Para ilustrar, imagine que você quer saber a posição de todos os itens da caixinha:
// Você pode fazer isso:

coisasVelhasParaDoar.forEach(function(item, index) {
  console.log(item, index);
});

// Até agora vimos como criar variáveis e arrays, adicionar, remover, encontrar, listar e mudar itens de posição na caixinha.
// Teste os códigos e tente fazer outras operações com as caixinhas!
// Parabéns! Você acabou de aprender um pouco sobre variáveis e arrays em JavaScript! 🎉

// Para fazer o commit dessa aula, você deve copiar o código desta aula e colar no arquivo que você criou na aula 01-Introdução.
// E fazer o commit com a seguinte mensagem:
// "Aula 02 - Variáveis e Arrays"