
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload, // usado para carregar elementos que a página vai precisar em breve
        create: create, // usado para adicionar elementos já carregados no preload
        update: update // usado para atualizar elementos da página
    }
};

var passarinho; // criando a váriavel "passarinho"

var game = new Phaser.Game(config); // carregando as config do Phaser

function preload() {
    this.load.image('bg', 'assets/bg_space.png'); // carregando com antecedência o background
    this.load.spritesheet('bird', 'assets/bird-red.png', { frameWidth: 75, frameHeight: 75 }); // carregando com antecedência o pássaro
}

function create() {
    this.add.image(400, 300, 'bg').setScale(1.2); // adicionando o "bg" à página
    passarinho = this.add.sprite(100, 300, 'bird').setScale(1.3); // adicionando o passaro à página

    this.anims.create({ // criando a animação do sprite para o pássaro
        key: 'fly',
        frames: this.anims.generateFrameNumbers('bird', { start: 0, end: 7 }), // usando aqui as 8 cenas
        frameRate: 12, // número de repetições por segundo da imagem
        repeat: -1 // usamos -1 para repetição contínua, 0 para não repetir e um número positivo para o número de repetição que desejamos.
    });

    passarinho.anims.play('fly', true);
    passarinho.cima = true; //criando a variavel para declarar ela no passaro.y 
    let vari = 0 // criando variável para criar uma estrutura while

    // estrutura while - fazendo a tarefa adicional
    while (vari < 100) {
        console.log('estrutura while pra atividade extra');
        vari += 1;
    }

}

//configurando meu passaro para andar pra frente (.x)

function update() { 

    if (passarinho.x === 100) {
        passarinho.setFlip(false, false);
        passarinho.ida = true;
    }

    if (passarinho.x < 700 && passarinho.ida === true) {
       console.log("O pássaro sai do ponto de partida"); 
        passarinho.x += 5;
    }

    if (passarinho.x === 700) {
        passarinho.setFlip(true, false); // usado para inverter a imagem do passarinho
        passarinho.ida = false; // se igual a 700 a posição x do pássaro, ele voltará.
    }

    if (passarinho.x > 100 && passarinho.ida === false) {
        console.log("O pássaro chegou ao limite, e comecou a voltar");
        passarinho.x -= 5;
    }

    // separando o código para facilitar a visualização da diferença
    // usei o mesmo estilo do passarinho.x

    // configurando meu passaro para voar para cima e para baixo (.y)
    
    if (passarinho.y === 100) {
        passarinho.cima = true;
    }
    
    if (passarinho.y < 550 && passarinho.cima === true) {
        passarinho.y += 5;
        
    }

    if (passarinho.y === 550) {
        passarinho.cima = false;
    }

    if (passarinho.y > 100 && passarinho.cima === false) {
        passarinho.y -= 5;
    }

}


