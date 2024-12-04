class EmailEditorPage {
  iframeSelector = 'iframe[src="https://editor.unlayer.com/1.169.0/editor.html"]';
  elementSelector = '#u_content_heading_2 .editable';
  headingSelector = '#u_content_heading_2';
  textSizeInputSelector = '[name="counter-input"]';
  fontFamilyDropdown = 'span:contains("Select...")'
  exportHtml = 'button:contains("Export HTML")'

  getIframe() {
      return cy.getIframe(this.iframeSelector);
  }

  changeTextSize(size) {
      this.getIframe()
          .find(this.headingSelector)
          .click({ force: true });
      this.getIframe()
          .find(this.textSizeInputSelector)
          .eq(0)
          .click({ force: true })
      this.getIframe()
          .find(this.textSizeInputSelector)
          .eq(0)
          .clear();
      cy.wait(5000);
      this.getIframe()
          .find(this.textSizeInputSelector)
          .eq(0)
          .click({ force: true });
      this.getIframe()
          .find(this.textSizeInputSelector)
          .eq(0)
          .type(size);
      
  }

changeFontFamily(fontFamily){
      this.getIframe()
          .find(this.fontFamilyDropdown)
          .click({ force: true });
      this.getIframe()
          .find(`span:contains("${fontFamily}")`)
          .eq(0)
          .click({ force: true });
}

exportHtmlFunction(){
      cy.get(this.exportHtml).click();
}

cssPropertiesAssetions(fontSize, fontFamily){
  this.getIframe()
  .find(this.elementSelector)
  .should('have.css', 'font-size', `${fontSize}`) 
  .should('have.css', 'font-family', `${fontFamily}`);
}
}

export default EmailEditorPage;
