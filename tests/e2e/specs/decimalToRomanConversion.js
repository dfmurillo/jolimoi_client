describe("Conversion Number test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.reload(true);
  });

  it("Test that Number is converted with Node", () => {
    TypeDigitAndCheck(cy, 20, "XX", "conversionRomanNumber");
  });

  it("Test that Number is converted with JS", () => {
    cy.get("#requestType").click({ force: true });
    TypeDigitAndCheck(cy, 10, "X", "conversionRomanNumber");
  });

  /**
   * Given a digit validates the right conversion for the roman
   * @param {CypressObj} cy
   * @param {Number} decimal
   * @param {String} roman
   * @param {String} fieldId
   */
  function TypeDigitAndCheck(cy, decimal, roman, fieldId) {
    cy.get("#digit")
      .should("be.visible")
      .type(decimal);
    cy.get(`[data-test="${fieldId}"]`).should("have.text", roman);
    cy.get("#digit").clear();
  }
});
