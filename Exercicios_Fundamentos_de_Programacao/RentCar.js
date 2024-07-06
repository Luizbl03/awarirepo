class Carro{
    constructor(placa,ano,cor,modelo,km,diaria,obs){
        this.placa = placa;
        this.ano = ano;
        this.cor = cor;
        this.modelo = modelo;
        this.km = km; 
        this.diaria = diaria;
        this.obs  = obs;
    }
}
class CEsportivo extends Carro{
    constructor(placa,ano,cor,modelo,km,diaria,obs,tempKmHora,melhorias){
        super(placa,ano,cor,modelo,km,diaria,obs);
        this.tempKmHora = tempKmHora; 
        this.melhorias = melhorias;
    }
}
class CUtilitario extends Carro{
    constructor(placa,ano,cor,modelo,km,diaria,obs,codigo,qtddPassageiros,tmhBagageiro,kmLitro){
        super(placa,ano,cor,modelo,km,diaria,obs);
        this.codigo =codigo;
        this.qtddPassageiros = qtddPassageiros;
        this.tmhBagageiro = tmhBagageiro;
        this.kmLitro = kmLitro;
    }
}
class Reserva{
    constructor(codigo,cli,carro,situacao,dtInicio,dtFim){
        this.codigo = codigo;
        this.cli = cli;
        this.carro = carro;
        this.situacao = situacao;
        this.dtInicio = dtInicio;
        this.dtFim = dtFim;

    }
    setStatus(situacao){
        this.situacao = situacao;
    }
}
class Pessoa{
    constructor(nome,cpf,idade,endereco,telCntt){
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
        this.endereco = endereco;
        this.telCntt = telCntt;

    }
}
class Funcionario extends Pessoa{
    constructor(nome,cpf,idade, endereco,telCntt,dtContrata,salario,qtddAlugueis, sttAtivoInativo){
        super(nome,cpf,idade,endereco,telCntt);
        this.dtContrata = dtContrata;
        this.salario = salario;
        this.qtddAlugueis =  qtddAlugueis;
        this.sttAtivoInativo = sttAtivoInativo;
    }
    setSituacao(sttAtivoInativo){
        this.sttAtivoInativo = sttAtivoInativo;

    }
}
class Cliente extends Pessoa{
    constructor(nome,cpf,idade, endereco, telCntt,dtNasc,cartMotorista,fotoCartMotor,cartMotorVencimento,email){
        super(nome,cpf,idade,endereco,telCntt);
        this.dtNasc = dtNasc;
        this.cartMotorista = cartMotorista;
        this.fotoCartMotor = fotoCartMotor;
        this.cartMotorVencimento =  cartMotorVencimento;
        this.email = email;
    }
    getCPF(){
        return this.cpf;
    }
    getNome(){
        return this.nome;
    }
}
class Promocao{
    constructor(titulo,descricao,validade){
        this.titulo = titulo;
        this.descricao = descricao;
        this.validade = validade;
    }
    
}

class Gerenciamento{
    constructor(){
        this.clientes = [];
        this.funcionarios = [];
        this.reservas = [];
        this.carros = [];
    }
    
    getCli(cpf){
        return this.clientes.filter(cli => {
            if(cli.getCPF() == cpf){
                return cli;
            }
        })[0];
        
    }
    
    addCli(nome,cpf,idade, endereco, telCntt,dtNasc,cartMotorista,fotoCartMotor,cartMotorVencimento,email){
        let novoCli = new Cliente(nome,cpf,idade, endereco, telCntt,dtNasc,cartMotorista,fotoCartMotor,cartMotorVencimento,email);
        this.clientes.push(novoCli);
        return novoCli;
    }
    
    addFuncionario(nome,cpf,idade, endereco,telCntt,dtContrata,salario,qtddAlugueis, sttAtivoInativo){
        let novoFuncionario = new Funcionario(nome,cpf,idade, endereco,telCntt,dtContrata,salario,qtddAlugueis, sttAtivoInativo);
        this.funcionarios.push(novoFuncionario);
        return novoFuncionario;
    }
    
    addCarro(tipoCarro){
        switch(tipoCarro){
            case "Esportivo":
                let novoEsportivo = new CEsportivo("JUN10001",2020,'Vermelho','Mod1',0,50.00,'Carro Esportivo');
                this.carros.push(novoEsportivo);
                return novoEsportivo;
            case 'Utilitário':
                let novoUtilitario = new CUtilitario('JUN20001',2019,'Preto','Mod2',0,45.00,'Carro Utilitário');
                this.carros.push(novoUtilitario);
                return novoUtilitario;
            default:
                console.error("Erro ao tentar criar tipo de carro informado!")
        }
    }
    
    addReserva(cli,carro,situacao,dtInicio,dtFim){
        if(this.validaReseserva(cli)){
            let codigo = this.reservas.length + 1;
            let novaReserva = new Reserva(cli,codigo,situacao,dtInicio,dtFim);
            this.reservas.push(novaReserva);
            return novaReserva;
        }else{
            console.log('O Cliente ja possui uma reserva ativa!')
        }
        console.log(this.reservas);
    }
    
    validaReseserva(cli){
        let reserva = this.reservas.find(reserva => {
            console.log(reserva);
            reserva.cli.cpf == cli.cpf;
        });
        console.log(reserva);
    }
    
    getCarros(){
        return this.carros;
    }
    
    getClientes(){
        return this.clientes;
    }
    
    getReservas(){
        return this.reservas;
    }
    
    getDesativarReserva(reserva){
    
    }
}



//var rent1 = new Gerenciamento();
//var joao = new Cliente("João","111.222.333-34",28,"Rua 1 220 B CasaNova",'319999252525','01-01-16',111111,'foto','01-01-50','joao@email');
//console.log(joao);
//rent1.addCli(joao);
//console.log(rent1.getClientes());



//var rent2 = new Gerenciamento();
//rent2.addCarro('Esportivo');
//var fusca = rent2.addCarro('Utilitário');
//var joao = rent2.addCli("João","111.222.333-34",28,"Rua 1 220 B CasaNova",'319999252525','01-01-16',111111,'foto','01-01-50','joao@email');
//rent2.addReserva(joao,fusca,"Ativo","26/06/24","30/06/24");
//var verifica = new Gerenciamento();

//console.log(rent1.getClientes());