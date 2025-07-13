
# Integração Cypress com SQL Server

Este projeto mostra como integrar o Cypress com um banco de dados SQL Server utilizando Node.js.

2️⃣ **para iniciar o projeto crie o packager.json**

```bash
npm init
```
---

## 📦 Dependências

Execute os seguintes comandos para instalar as dependências necessárias:

```bash
npm install cypress --save-dev
npm install dotenv --save-dev
npm install mssql --save-dev
```

---

## 📁 Estrutura Inicial do Projeto

1. Após instalar as dependências, execute o comando abaixo para o Cypress gerar a estrutura de pastas:

```bash
npx cypress open
```

2. Dentro da pasta `cypress`, crie uma nova pasta chamada `plugins`.

3. Dentro da pasta `plugins`, crie um arquivo chamado `index.js`.

---

## ⚙️ Configuração do arquivo `plugins/index.js`

Insira o código abaixo:

```javascript
require('dotenv').config()
const sql = require('mssql')

const dbConnection = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    server: process.env.SQL_SERVER,
    database: process.env.SQL_DATABASE,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
}

async function buscarDados(query) {
    const conect = await sql.connect(dbConnection)
    return await conect.request().query(query)
}

module.exports = (on, config) => {
    on('task', {
        sqlServer: (query) => {
            return buscarDados(query)
        }
    })
}
```

> 💡 **Dica:** Não esqueça de criar um arquivo `.env` na raiz com as variáveis:
>
> ```env
> SQL_USER=seu_usuario
> SQL_PASSWORD=sua_senha
> SQL_SERVER=seu_servidor
> SQL_DATABASE=sua_base
> ```

---

## 🛠️ Configuração no `cypress.config.js`

Adicione esta linha dentro da função `setupNodeEvents`:

```javascript
return require('./cypress/plugins/index')(on, config)
```

---

## ✅ Teste de Integração

Crie um arquivo de teste dentro da pasta `cypress/e2e` com o nome `spec.cy.js`, e adicione o seguinte conteúdo:

```javascript
describe('template spec', () => {
  it('Criar Tabela', () => {
    cy.task('sqlServer', 'SELECT * FROM clientes')
    .then((response) => {
      cy.log(JSON.stringify(response))
    })
  })
})
```

---

## 🚀 Pronto!

Agora você pode rodar o Cypress com:

```bash
npx cypress open
```
