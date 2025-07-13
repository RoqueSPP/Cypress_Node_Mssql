
export function CreateTable() {
  "CREATE TABLE clientes \
  (nome VARCHAR(100),\
  cpf CHAR(11),\
  email VARCHAR(100),\
  telefone VARCHAR(15),\
  cidade VARCHAR(50),\
  estado CHAR(2))"
}

export function SelectTable() {
  return 'Select * from clientes'
}
export function InsertTable() {
  return //`INSERT INTO clientes (nome, cpf, email, telefone, cidade, estado) VALUES('Ana Silva', '12345678901', 'ana.silva@email.com', '(11)98765-4321', 'São Paulo', 'SP')`
  `INSERT INTO clientes (nome, cpf, email, telefone, cidade, estado) VALUES('Bruno Souza', '23456789012', 'bruno.souza@email.com', '(21)91234-5678', 'Rio de Janeiro', 'RJ')`
  //"INSERT INTO clientes (nome, cpf, email, telefone, cidade, estado) VALUES('Carlos Lima', '34567890123', 'carlos.lima@email.com', '(31)99876-5432', 'Belo Horizonte', 'MG')"
  //"INSERT INTO clientes (nome, cpf, email, telefone, cidade, estado) VALUES('Daniela Costa', '45678901234', 'daniela.costa@email.com', '(41)98765-1234', 'Curitiba', 'PR')"
  //"INSERT INTO clientes (nome, cpf, email, telefone, cidade, estado) VALUES('Eduardo Alves', '56789012345', 'eduardo.alves@email.com', '(51)99888-7766', 'Porto Alegre', 'RS')"
  //"INSERT INTO clientes (nome, cpf, email, telefone, cidade, estado) VALUES('Fernanda Rocha', '67890123456', 'fernanda.rocha@email.com', '(71)98888-6655', 'Salvador', 'BA')"
  //"INSERT INTO clientes (nome, cpf, email, telefone, cidade, estado) VALUES('Gustavo Pinto', '78901234567', 'gustavo.pinto@email.com', '(61)97777-5544', 'Brasília', 'DF')"
  //"INSERT INTO clientes (nome, cpf, email, telefone, cidade, estado) VALUES('Helena Martins', '89012345678', 'helena.martins@email.com', '(91)96666-4433', 'Belém', 'PA')"
  //"INSERT INTO clientes (nome, cpf, email, telefone, cidade, estado) VALUES('Igor Fernandes', '90123456789', 'igor.fernandes@email.com', '(85)95555-3322', 'Fortaleza', 'CE')"
  //"INSERT INTO clientes (nome, cpf, email, telefone, cidade, estado) VALUES('Julia Oliveira', '01234567890', 'julia.oliveira@email.com', '(95)94444-2211', 'Boa Vista', 'RR')"
}

export function updateTable() {
  return `
UPDATE pessoa SET 
  NOME = 'Ana Souza', 
  EMAIL = 'ana.souza@email.com', 
  CPF = '123.456.789-00', 
  DATA_NASCIMENTO = TO_DATE('12/07/90','DD/MM/RR'), 
  SEXO = 'F', 
  TELEFONE = '91234-5678', 
  CRIADO_EM = TO_TIMESTAMP('16/06/25 00:20:08.985000000','DD/MM/RR HH24:MI:SS.FF') 
WHERE ID = 1;

UPDATE pessoa SET 
  NOME = 'Carlos Pereira', 
  EMAIL = 'carlos.pereira@email.com', 
  CPF = '234.567.890-11', 
  DATA_NASCIMENTO = TO_DATE('09/09/00','DD/MM/RR'), 
  SEXO = 'M', 
  TELEFONE = '92345-6789', 
  CRIADO_EM = TO_TIMESTAMP('16/06/25 00:25:31.569000000','DD/MM/RR HH24:MI:SS.FF') 
WHERE ID = 2;

UPDATE pessoa SET 
  NOME = 'Juliana Lima', 
  EMAIL = 'juliana.lima@email.com', 
  CPF = '345.678.901-22', 
  DATA_NASCIMENTO = TO_DATE('10/01/00','DD/MM/RR'), 
  SEXO = 'F', 
  TELEFONE = '93456-7890', 
  CRIADO_EM = TO_TIMESTAMP('16/06/25 00:26:28.281000000','DD/MM/RR HH24:MI:SS.FF') 
WHERE ID = 3;

UPDATE pessoa SET 
  NOME = 'Marcos Silva', 
  EMAIL = 'marcos.silva@email.com', 
  CPF = '456.789.012-33', 
  DATA_NASCIMENTO = TO_DATE('10/01/00','DD/MM/RR'), 
  SEXO = 'M', 
  TELEFONE = '94567-8901', 
  CRIADO_EM = TO_TIMESTAMP('16/06/25 00:26:55.647000000','DD/MM/RR HH24:MI:SS.FF') 
WHERE ID = 4;

UPDATE pessoa SET 
  NOME = 'Fernanda Costa', 
  EMAIL = 'fernanda.costa@email.com', 
  CPF = '567.890.123-44', 
  DATA_NASCIMENTO = TO_DATE('10/01/00','DD/MM/RR'), 
  SEXO = 'F', 
  TELEFONE = '95678-9012', 
  CRIADO_EM = TO_TIMESTAMP('16/06/25 00:27:16.819000000','DD/MM/RR HH24:MI:SS.FF') 
WHERE ID = 5;

UPDATE pessoa SET 
  NOME = 'Rafael Torres', 
  EMAIL = 'rafael.torres@email.com', 
  CPF = '678.901.234-55', 
  DATA_NASCIMENTO = TO_DATE('10/01/00','DD/MM/RR'), 
  SEXO = 'M', 
  TELEFONE = '96789-0123', 
  CRIADO_EM = TO_TIMESTAMP('16/06/25 00:27:36.979000000','DD/MM/RR HH24:MI:SS.FF') 
WHERE ID = 6;

UPDATE pessoa SET 
  NOME = 'Paula Mendes', 
  EMAIL = 'paula.mendes@email.com', 
  CPF = '789.012.345-66', 
  DATA_NASCIMENTO = TO_DATE('10/01/00','DD/MM/RR'), 
  SEXO = 'F', 
  TELEFONE = '97890-1234', 
  CRIADO_EM = TO_TIMESTAMP('16/06/25 00:27:54.578000000','DD/MM/RR HH24:MI:SS.FF') 
WHERE ID = 7;

UPDATE pessoa SET 
  NOME = 'Lucas Oliveira', 
  EMAIL = 'lucas.oliveira@email.com', 
  CPF = '890.123.456-77', 
  DATA_NASCIMENTO = TO_DATE('10/01/00','DD/MM/RR'), 
  SEXO = 'M', 
  TELEFONE = '98901-2345', 
  CRIADO_EM = TO_TIMESTAMP('16/06/25 00:28:09.995000000','DD/MM/RR HH24:MI:SS.FF') 
WHERE ID = 8;

UPDATE pessoa SET 
  NOME = 'Beatriz Almeida', 
  EMAIL = 'beatriz.almeida@email.com', 
  CPF = '901.234.567-88', 
  DATA_NASCIMENTO = TO_DATE('10/01/00','DD/MM/RR'), 
  SEXO = 'F', 
  TELEFONE = '99012-3456', 
  CRIADO_EM = TO_TIMESTAMP('16/06/25 00:28:23.599000000','DD/MM/RR HH24:MI:SS.FF') 
WHERE ID = 9;

UPDATE pessoa SET 
  NOME = 'Ricardo Gomes', 
  EMAIL = 'ricardo.gomes@email.com', 
  CPF = '012.345.678-99', 
  DATA_NASCIMENTO = TO_DATE('10/01/00','DD/MM/RR'), 
  SEXO = 'M', 
  TELEFONE = '90123-4567', 
  CRIADO_EM = TO_TIMESTAMP('16/06/25 00:28:35.525000000','DD/MM/RR HH24:MI:SS.FF') 
WHERE ID = 10;
`;
}

export function DeleteTable() {
  return `
DELETE FROM pessoa WHERE ID = 1;
DELETE FROM pessoa WHERE ID = 2;
DELETE FROM pessoa WHERE ID = 3;
DELETE FROM pessoa WHERE ID = 4;
DELETE FROM pessoa WHERE ID = 5;
DELETE FROM pessoa WHERE ID = 6;
DELETE FROM pessoa WHERE ID = 7;
DELETE FROM pessoa WHERE ID = 8;
DELETE FROM pessoa WHERE ID = 9;
DELETE FROM pessoa WHERE ID = 10;
`;
}
