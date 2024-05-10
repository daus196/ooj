class Carro{
    constructor(){
        if(this.constructor===Carro){
            throw new TypeError('Esta Classe não pode ser instânciada!')
        }
        this.rodas=4
        this.portas=4
        
    }
}

class CarroPopular extends Carro{
    constructor(tipo,ano,cilindrada){
        super()
        this.tipo=tipo
        this.ano=ano
        this.cilindrada=cilindrada
    }
    info(){
        console.log(`O carro possui ${this.portas} portas, ${this.rodas} rodas. Ele é do tipo ${this.tipo}. Foi fabricado no ano de ${this.ano}, e tem ${this.cilindrada}cc`)

    }
}


class CarroEsportivo extends CarroPopular{
    constructor(cavalos){
        super('Esportivo',2024, 980)
        this.cavalos=cavalos
        
    }
    info(){
        console.log(`O carro possui ${this.portas} portas, ${this.rodas} rodas. Ele é do tipo ${this.tipo}. Foi fabricado no ano de ${this.ano}, e tem ${this.cilindrada}cc com ${this.cavalos} cavlos de potencia`)
        

    }
}


const carro1 = new CarroPopular('popular',2012,200)
const carro2 = new CarroPopular('comum',2023,350)
const carro3 = new CarroEsportivo(1000)

carro1.info()
carro2.info()
carro3.info()











// class Carro extends CarroPadrao{
//     constructor(tipo,estagioTurbo){
//         super()
//         this.turbo = new Turbo(estagioTurbo)
//         if(tipo==1){
//             this.velMax=120
//             this.nome="normal"
//         }else if(tipo==2){
//             this.velMax=160
//             this.nome="esportivo"
//         }else if(tipo==3){
//             this.velMax=200
//             this.nome="sEsportivo"
//         }
//         this.velMax+=this.turbo.potencia
//     }

//     ligar(){
//         this.ligado=true
//     }
//     desligar(){
        
//     }

//     info(){
//         console.log(this.nome)
//         console.log(this.turbo)
//         console.log(this.velMax)
//         console.log(this.portas)
//         console.log(this.rodas)
//         console.log(this.ligado)
//     }
// }

// class Turbo{
//     constructor(e){
//         if(e==0){
//             this.potencia=0
//         }else if(e == 1){
//             this.potencia=50
//         }else if(e==2){
//             this.potencia=75
//         }else if(e==3){
//             this.potencia=100
//         }
//     }
// }

// class CarroEspecial extends Carro{
//     constructor(estagioTurbo){
//         super(4,estagioTurbo)
//         this.velMax=300+this.turbo.potencia
//         this.nome="carro especial"
//     }
//     info(){
//         console.log(`Nome:....: ${this.nome}`)
//         console.log(`Vel.Max..: ${this.velMax}`)
//         console.log(`Turbo..... ${this.turbo.potencia}`)
//     }
    
// }


// const carro1 = new Carro(1,1)
// const carro2 = new Carro(2,1)
// const carro3 = new CarroEspecial(3)


// carro1.info()
// carro2.info()
// carro3.info()