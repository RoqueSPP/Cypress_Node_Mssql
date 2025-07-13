

describe('template spec', () => {
  it('Criar Tabela', () => {
    cy.SelectTable()
    .then((res)=>{
      cy.log(res.recordset[0].nome)
      cy.log(res.recordset[1].nome)
      cy.log(res.recordset[2].nome)
      cy.log(res.recordset[3].nome)
      cy.log(res.recordset[4].nome)
    })
  })
})