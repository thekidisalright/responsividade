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
        pagetitle: 'Blade Runner - Booklire',

        titulo:'Blade Runner - Philip K. Dick', 

        author:' Alexandre Silva',

        date:'5 de maio de 2023',

        datetime:'2023-05-05',

        artigo:''
    }
];

var x;
const pagetitle = document.querySelector('title');
const titulo = document.querySelector('.titulo');
const author = document.querySelector('.author');
const date = document.querySelector('.date');
const artigo = document.querySelector('.artigo');


if (document.URL.includes('blade-runner')){
    x = 0;
    pagetitle.textContent = posts[0].pagetitle;
    titulo.textContent = posts[0].titulo;
    author.insertAdjacentHTML('beforeend', posts[0].author);
    date.textContent = posts[0].date;
    date.setAttribute('datetime', posts[0].datetime);
    artigo.innerHTML = posts[0].artigo;
}