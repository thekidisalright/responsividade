const posts = [
    {
        pagetitle: 'Blade Runner - Booklire',

        titulo:'Blade Runner - Philip K. Dick', 

        author:' Alexandre Silva',

        date:'5 de maio de 2023',

        datetime:'2023-05-05',

        artigo:'<p>"Blade Runner" é um romance de ficção científica escrito por Philip K. Dick e publicado em 1968. A história se passa em um futuro distópico, em 1992 (posteriormente alterado para 2021), onde a Terra é habitada por humanos e androides chamados de "replicantes". Esses replicantes são criados para serem servos e trabalhadores, mas alguns deles rebelam-se e fogem para a Terra, tornando-se ilegais.</p><p>O protagonista do livro é Rick Deckard, um "blade runner", um caçador de recompensas especializado em perseguir e "aposentar" replicantes fugitivos. Deckard é enviado para caçar um grupo de seis replicantes extremamente perigosos que estão escondidos em Los Angeles.</p><p>À medida que Deckard rastreia os replicantes, ele começa a questionar sua própria humanidade e a natureza da realidade. Ele enfrenta dilemas éticos e morais, pois os replicantes demonstram uma gama complexa de emoções e desejos, desafiando a noção de que apenas humanos são capazes de possuí-los.</p><p>Ao longo da narrativa, Deckard se envolve emocionalmente com Rachael, uma replicante que é inicialmente apresentada como humana. Essa relação desafia ainda mais sua compreensão do que é ser humano e levanta questões sobre a natureza da identidade e da alma.</p><p>"Blade Runner" aborda temas como a busca pela identidade, a relação entre humanos e máquinas, a natureza da realidade e a ética da criação de seres artificiais. O livro explora a distinção cada vez mais tênue entre humanos e replicantes, convidando os leitores a questionar o que realmente define a humanidade.</p>'
    },
    {
        pagetitle: 'A Guerra Dos Tronos - Booklire',

        titulo:'A Guerra dos Tronos - George R. R. Martin', 

        author:' Alexandre Silva',

        date:'6 de maio de 2023',

        datetime:'2023-05-06',

        artigo:'<p>"A Guerra dos Tronos", escrito por George R. R. Martin, é o primeiro livro da aclamada série "As Crônicas de Gelo e Fogo". Ambientado em um mundo medieval fictício, o livro apresenta um enredo intrincado repleto de política, intriga, traição e batalhas épicas pelo controle do Trono de Ferro.</p><p>A história se desenrola em Westeros, um continente dividido em sete reinos, cada um governado por uma casa nobre. Quando o rei Robert Baratheon chama seu amigo de infância, Eddard Stark, para se tornar sua Mão do Rei, uma série de eventos é desencadeada, levando a um jogo mortal de poder entre várias casas nobres.</p><p>"A Guerra dos Tronos" é famoso por sua narrativa multi-perspectiva, onde os capítulos alternam entre diferentes personagens, permitindo que o leitor experimente os eventos pelos olhos de diversos protagonistas. Isso oferece uma visão ampla das intrigas palacianas, alianças instáveis e tramas políticas que se desenrolam em todo o reino.</p><p>Além disso, o livro é conhecido por seus personagens complexos e bem desenvolvidos. Desde os nobres e ambiciosos Lannisters até os membros exilados da Casa Targaryen, cada personagem é único e cativante, repletos de virtudes e falhas. A riqueza psicológica dos personagens é um dos pontos fortes da obra, pois eles enfrentam escolhas difíceis e lidam com as consequências de suas ações.</p><p>Outro aspecto marcante da obra é a violência e a brutalidade retratadas nas batalhas e nos confrontos entre as casas. Martin não hesita em mostrar as consequências terríveis da guerra, desafiando a visão idealizada dos conflitos medievais.</p><p>"A Guerra dos Tronos" também é conhecido por suas reviravoltas surpreendentes e inesperadas, que mantêm os leitores ávidos por mais. Ninguém está seguro nesse mundo implacável, onde personagens importantes podem ser mortos de forma repentina e chocante.</p><p>Em resumo, "A Guerra dos Tronos" é uma obra-prima da fantasia épica que apresenta um mundo rico e complexo, repleto de personagens memoráveis, intriga política e batalhas sangrentas. Com sua narrativa envolvente e imprevisível, o livro cativa os leitores e estabelece as bases para uma das séries mais populares e influentes da literatura moderna.</p>'
    }
];

var x;


if (document.URL.includes('blade-runner')){
    x = 0;
}
else if (document.URL.includes('got')){
    x = 1;
}
else if (document.URL.includes('fogo-sangue')){
    x = 2;
}
else if (document.URL.includes('it-sk')){
    x = 3;
}
else if (document.URL.includes('percy')){
    x = 4;
}
else if (document.URL.includes('carrie')){
    x = 5;
}

const pagetitle = document.querySelector('title');
const titulo = document.querySelector('.titulo');
const author = document.querySelector('.author');
const date = document.querySelector('.date');
const artigo = document.querySelector('.artigo');

pagetitle.textContent = posts[x].pagetitle;
titulo.textContent = posts[x].titulo;
author.insertAdjacentHTML('beforeend', posts[x].author);
date.textContent = posts[x].date;
date.setAttribute('datetime', posts[x].datetime);
artigo.innerHTML = posts[x].artigo;