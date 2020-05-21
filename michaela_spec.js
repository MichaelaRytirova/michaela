describe('My First Test', () => {
  it('Visits Google Translate', () => {
    cy.visit ('https://translate.google.com')
   cy.get ('.sl-more.tlid-open-source-language-list').click()
    cy.contains ('Hungarian').click()

    cy.contains ('Detect language').click()
    cy.get ('.goog-textarea')
	 .type ('Schmetterling')
	.should ('have.value', 'Schmetterling')
    //cy.contains ('German - detected')
    cy.get ('.orig.tlid-source-text-input.goog-textarea').focus().clear()
	.type ('Prase')
	.should ('have.value', 'Prase')
//cy.contains ('German - detected')
cy.get ('.documents-icon').click()
cy.get ('.tlid-select-file-button').click({force:true})
  }) 

})

