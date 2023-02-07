create database mercado;
use mercado;
create table produtos(
id_produto int serial default value primary key,
nome_produto varchar(50) unique,
estoque int not null default 0
);

insert into produtos (nome_produto,estoque) values ('Suco',20);
insert into produtos (nome_produto,estoque) values ('Leite',10);
insert into produtos (nome_produto,estoque) values ('Farinha',5);
insert into produtos (nome_produto,estoque) values ('Tomate',25);

create table itensVenda(
venda int,
produto varchar(3),
quantidade int
)

delimiter $$
create trigger inserir_venda after insert
on itensVenda
for each row
begin
   update produtos set estoque = estoque - new.quantidade
where id_produto = new.produto;

end$$

DELIMITER $$

create trigger apagar_venda after delete
on itensVenda
for each row
begin
    update produtos set estoque = estoque + old.quantidade
where id_produto = old.produto;
end $$

delimiter &&


insert into itensVenda values (1, '001', 5);
insert into itensVenda values (1, '002', 5);
insert into itensVenda values (1, '003', 5);
insert into itensVenda values (1, '004', 5);


delete from itensVenda where venda = '1' and produto = '001';

show triggers
