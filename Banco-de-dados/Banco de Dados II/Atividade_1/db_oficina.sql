create database oficina;
use oficina;
create table cliente(
id_cliente int serial default value,
nome varchar(50) not null,
telefone varchar (15) not null,
endereço varchar(50),
email varchar(30),
primary key (id_cliente)
);

insert into cliente(nome,telefone,endereço,email) 
value ('Roberto Silva Junior','22 998987478','Rua das Acacias','rjunior@gmail.com');
insert into cliente(nome,telefone,endereço,email) 
value ('Alex Silva','22 998982027','Rua flamengo','asilva@gmail.com');
insert into cliente(nome,telefone,endereço,email) 
value ('Ronaldo Junior','22 999999999','Rua das Palmeiras','ronaldo_junior@gmail.com');

create table veiculo(
id_veiculo int serial default value,
marca varchar (20) not null,
modelo varchar(30) not null,
placa varchar(10) not null,
cliente_id int,
primary key (id_veiculo),
foreign key (cliente_id) references cliente(id_cliente)
);

insert into veiculo(marca,modelo,placa) 
value ('Fiat','Palio Weekend','LUZ-7878');
insert into veiculo(marca,modelo,placa) 
value ('Ford','KA','APT-2415');
insert into veiculo(marca,modelo,placa) 
value ('Renault','Kwid','AZA-4020');
insert into veiculo(marca,modelo,placa) 
value ('Fiat','Fiorino','AZT-1020');


create table revisao(
id_revisao int serial default value,
data_revisao varchar (10) not null,
tipo_servico varchar(30),
data_entrega varchar(10),
servico varchar(255),
primary key (id_revisao),
veiculo_id int,
foreign key (veiculo_id) references veiculo(id_veiculo)
);

insert into revisao(data_revisao,tipo_servico,data_entrega,servico) 
value ('20/04/2022','basico','27/04/2022','Troca de óleo, filtro de óleo e filtro de ar');
insert into revisao(data_revisao,tipo_servico,data_entrega,servico) 
value ('27/12/2022','completo','10/01/2023','Troca de óleo, filtro de óleo e filtro de ar,4 pneus, limpeza de ar e lavagem');
insert into revisao(data_revisao,tipo_servico,data_entrega,servico) 
value ('01/02/2023','completo','','Troca de óleo, filtro de óleo e filtro de ar, alinhamento pnes,lavagem,troca limpador');

select nome,marca from cliente inner join veiculo on cliente.id_cliente = veiculo.id_veiculo;
select marca,modelo,data_revisao,data_entrega from veiculo left join revisao on  veiculo.id_veiculo = revisao.id_revisao;
select nome,data_revisao,data_entrega from cliente right join revisao on cliente.id_cliente = revisao.id_revisao;
select nome,marca from cliente left join veiculo on cliente.id_cliente = veiculo.id_veiculo
union
select tipo_servico,servico from cliente right join revisao on cliente.id_cliente = revisao.id_revisao;