import EmailEditorPage from '../../../pages/emailEditorPage';

describe('Email Editor Tests with Nested XPath', () => {
  const emailEditorPage = new EmailEditorPage();
 

  before(() => {
    // Visit the email editor page
    cy.visit('https://react-email-editor-demo.netlify.app/');
  });

  it('Should modify text properties inside nested iframe and verify changes', () => {
    const emailEditorPage = new EmailEditorPage();
      emailEditorPage.changeTextSize(40);
      emailEditorPage.changeFontFamily('Andale Mono');
      emailEditorPage.exportHtmlFunction();
      emailEditorPage.cssPropertiesAssetions("40px", '"andale mono", times')
  });
});
 