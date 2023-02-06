create database ESCOLA;
use ESCOLA;
create table aluno (
id_aluno int serial default value,
nome varchar(50) not null,
matricula int not null,
email varchar(30) not null,
endereco varchar(50) not null,
telefone varchar(15),
primary key (id_aluno)
);
insert into aluno (nome,matricula,email,endereco,telefone)
values ('João Carlos','1234','Jcarlos@gmail.com','Rua 13 de maio','(11)7825-4489');
insert into aluno (nome,matricula,email,endereco,telefone) 
values ('João Vitor','2345','Jvitor@gmail.com','Rua da saudade','(11)7825-6589');
insert into aluno (nome,matricula,email,endereco,telefone) 
values ('Paulo André','3456','Pandr@gmail.com','Rua do Sol','(11)7825-4495');
select* from aluno;


create table emprestimo(
cod_emprestimo int serial default value,
data_hora varchar(20) not null,
matri_aluno int not null,
data_devolucao varchar (10) not null,
primary key (cod_emprestimo)
);
insert into emprestimo(data_hora,matri_aluno,data_devolucao) 
values ('12/03/2022 | 15:25','1234','15/03/2022');
insert into emprestimo(data_hora,matri_aluno,data_devolucao) 
values ('15/03/2022 | 14:32','3456','18/03/2022');
insert into emprestimo(data_hora,matri_aluno,data_devolucao) 
values ('20/03/2022 | 03:51','2345','23/03/2022');

select* from emprestimo;

create table livro_emprestimo(
cod_livro int,
cod_emprestimo int,
foreign key (cod_livro) references livro(cod_livro),
foreign key (cod_emprestimo) references emprestimo(cod_emprestimo)
);

create table livro(
cod_livro int serial default value,
titulo varchar(50) not null,
autor varchar(50) not null,
cod_sessao int
);

insert into livro(titulo,autor) 
values ('Modelo Conceitual e Diagrama ER','Pressman, Roger S.');
insert into livro(titulo,autor) 
values ('Livro 2: Modelo Relacional e Álgebra Relacional','Heuser, Carlos Alberto');
insert into livro(titulo,autor) 
values ('Livro 3: Linguagem SQL','Beighley, Lynn');
select* from livro;


create table sessao(
cod_sessao int serial default value not null,
descricao varchar(100),
localizacao varchar(15),
primary key (cod_sessao)
);
alter table sessao change column cod_sessao cod_sessao int serial default value;
insert into sessao(descricao,localizacao) 
values ('Sessa1','Partilheira1');
insert into sessao(descricao,localizacao) 
values ('Sessa2','Partilheira2');
insert into sessao(descricao,localizacao) 
values ('Sessa3','Partilheira3');

alter table livro
add column fk_livsessao int, 
add constraint fk_livsessao 
foreign key (cod_sessao) 
references sessao(cod_sessao);

