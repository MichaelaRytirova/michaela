context('My First Test', () => {
  it('Manual language picker', () => {

// GO TO GOOGLE TRANSLATE PAGE AND SELECT HUNGARIAN TO TRANSLATE FROM
    cy.visit ('https://translate.google.com')
    cy.get ('.sl-more.tlid-open-source-language-list').click()
    cy.wait(2000)
    cy.contains ('Hungarian').click()
    cy.get('#sugg-item-hu').should('be.visible')
    cy.wait(2000)
})
  it('Two languages detected automatically + clear input', () => {
// DETECT LANGUAGE AUTOMATICALLY AND THEN CLEAR THE INPUT FIELD
    cy.contains ('Detect language').click()
    cy.get ('.goog-textarea')
	 .type ('Schmetterling')
	 .should ('have.value', 'Schmetterling')
    cy.contains ('German - detected').should('be.visible')
    cy.get ('.orig.tlid-source-text-input.goog-textarea').focus().clear()
	 .should('have.value', '')
      .type ('Kocourek')
	 .should ('have.value', 'Kocourek')
    cy.contains ('Czech - detected').should('be.visible')
    cy.get ('.orig.tlid-source-text-input.goog-textarea').focus().clear()
	 .should('have.value', '')
})
  it('Document translation', () => {

// SELECT DOCUMENT TRANSLATION AND ATTACH FILE FROM FIXTURES FOLDER
    cy.get('.tlid-input-button-docs').click();
    const fileName = 'text.docx';
    cy.fixture(fileName).then(fileContent => {
    cy.get('.tlid-select-file-button').attachFile({ fileContent, fileName, mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessing' });
});
    cy.get ('.tlid-translate-doc-button').click({ force: true });
    cy.url().should('include', '/translate_f')
}) 

})
