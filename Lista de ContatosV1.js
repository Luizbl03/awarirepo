const prompt = require('prompt-sync')();

class Contato{
  constructor(nome,email,celular,rdSocial,notas){
    this.nome = nome;
    this.email = email;
    this.celular = celular;
    this.rdSocial = rdSocial;
    this.notas = notas;
  }
}

class CProfissional extends Contato{
  constructor(nome,cargo,empresa,email,celular,rdSocial,notas,){
    super(nome,email,celular,rdSocial,notas);
    this.cargo = cargo;
    this.empresa =empresa;
    this.listaPro = [];
  }
  adicionar(contato){
    this.listaPro.push(contato);
  }
  remover(contato){
    this.listaPro.shift(contato);
  }
  selecionarContatos(){
    this.listarContatos()
    var cnttSelecionar = parseInt(prompt("Selecione o Contato: "))
    console.log(`Contato desejado: \n
    ${this.listaPro[cnttSelecionar].cnttProfissional()}`) //Só funciona no browser.
  }
  listarContatos(){
    this.listaPro.forEach(function(contato,index){
      console.log(`${index} - ${contato.cnttProfissional()}`);
      })
  }
  cnttProfissional(){
    return `Nome: ${this.nome}
    Cargo: ${this.cargo}
    Empresa: ${this.empresa}
    Email: ${this.email}
    Celular: ${this.celular}
    Rede Social: ${this.rdSocial}
    Notas: ${this.notas}\n`;
  }
}

class CPessoal extends Contato{
  constructor(nome,email,celular,rdSocial,notas,dNiver,dCasamento){
    super(nome,email,celular,rdSocial,notas);
    this.dNiver = dNiver;
    this.dCasamento = dCasamento;
    this.listaPess = [];
  }
  adicionar(contato){
    this.listaPess.push(contato);
  }
  remover(contato){
    this.listaPess.shift(contato);
  }
  selecionarContatos(){
   
    this.listarContatos()
    var cnttSelecionar = parseInt(prompt("Selecione o Contato: "))
    console.log(`Contato desejado: \n
    ${this.listaPess[cnttSelecionar].cnttPessoal()}`) 
  }
  listarContatos(){
    this.listaPess.forEach(function(contato,index){
      console.log(`${index} - ${contato.cnttPessoal()}`);
      })
  }
  cnttPessoal(){
    return `Nome: ${this.nome}
    Email: ${this.email}
    Celular: ${this.celular}
    Rede Social: ${this.rdSocial}
    Data do aniversário: ${this.dNiver}
    Data do Casamento: ${this.dCasamento}
    Notas: ${this.notas}\n`;
  }
}  



var lima = new CProfissional("Luiz","Diretor","Minha S.A",'aaaa@bb.com',"31 7777888889","github", 'Gente boa');
var ro = new CProfissional("Rosangela","Programadora","Meninas S.A","bbb@bb.com", "38 999333333","github","Da melhor qualidade");
var joao = new CProfissional("João","Vice Diretor","Minha S.A",'yyyy@bb.com',"31 9900001111","github", 'Workaholic');

var lima2 = new CPessoal("Luiz",'aaaa@bb.com',"31 7777888889","whatsapp", "melhor qualidade","21/02/11", "01/09/19");
var ro2 = new CPessoal("Rosangela",'bbb@bb.com',"38 999333333","whatsapp", "Gente boa","21/02/98", "01/09/72");
var contPro = new CProfissional();
contPro.adicionar(lima);
contPro.adicionar(ro);
contPro.adicionar(joao);
//contPro.listarContatos();
//contPro.remover(lima)
contPro.listarContatos();
contPro.selecionarContatos();
contPess = new CPessoal();
contPess.adicionar(lima2)
contPess.adicionar(ro2);
contPess.listarContatos();
contPess.selecionarContatos();