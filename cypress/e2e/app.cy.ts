describe('App', () => {
  it('should show rows', () => {
    cy.visit('/');

    cy.get('.dsBasicTable .ouiTableRow').its('length').should('be.gt', 1);
  });

  it('should delete rows', () => {
    cy.visit('/');

    const firstEnabledCheckboxSelector =
      '.dsBasicTable .ouiTableRow-isSelectable .ouiCheckbox__input:not([disabled])';

    const firstEnabledCheckbox = cy.get(firstEnabledCheckboxSelector).eq(0);

    firstEnabledCheckbox.check();

    const deleteButton = cy.get('.dsPageBody .ouiButton--danger').eq(0);

    deleteButton.click();

    firstEnabledCheckbox.should('not.exist');
  });

  it('should filter rows', () => {
    cy.visit('/');

    const superSelect = cy.get('.dsPageBody .ouiSuperSelectControl').eq(0);

    superSelect.click();

    const firstOption = cy.get('.dsBody .ouiSuperSelect__item').eq(0);

    firstOption.click();

    const logLevelCellsSelector =
      '.dsPageBody .ouiTableRow .ouiTableRowCell:nth-child(3) pre';

    firstOption.then((value) => {
      cy.get(logLevelCellsSelector).contains(value[0].id);
    });
  });

  it('should not let filtering reset deleted rows', () => {
    cy.visit('/');

    const superSelect = cy.get('.dsPageBody .ouiSuperSelectControl').first();

    superSelect.click();

    cy.get('.dsBody .ouiSuperSelect__item').eq(1).click();

    const firstEnabledCheckboxSelector =
      '.dsPageBody .ouiTableRow-isSelectable .ouiCheckbox__input:not([disabled])';

    const firstEnabledCheckbox = cy.get(firstEnabledCheckboxSelector).eq(0);

    firstEnabledCheckbox.check();

    const deleteButton = cy.get('.dsPageBody .ouiButton--danger').eq(0);

    deleteButton.click();

    superSelect.click();

    cy.get('.dsBody .ouiSuperSelect__item').eq(0).click();

    superSelect.click();

    cy.get('.dsBody .ouiSuperSelect__item').eq(1).click();

    firstEnabledCheckbox.then((el) => {
      cy.get(`#${el[0].id}`).should('not.exist');
    });
  });
});
