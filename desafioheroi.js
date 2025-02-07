class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;

        switch(this.tipo){
            case "mago":
                ataque = "usou magia";
                break;
            case "guereirro":
                ataque = "usou espada"
                break;
            case "monge":
                ataque = "usou artes marciais"
                break;
            case "ninja":
                ataque = "usou shuriken"
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new heroi("Carlos", 30, "mago");
const heroi2 = new heroi("João", 50, "guerreiro");
const heroi3 = new heroi("Gabriel", 42, "monge");
const heroi4 = new heroi("Luan", 15, "ninja");

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()