/// <reference types="cypress" />

function cyid(id) {
  return `[data-testid="${id}"]`;
}

describe('Calculator - Simulated time', () => {
  beforeEach(() => {
    cy.clock();
    cy.visit('');
  });

  function simulateTime() {
    cy.tick(2000);
  }

  function setInputs(lhs, rhs) {
    cy.get(cyid('input1'))
      .clear()
      .type(lhs.toString());
    cy.get(cyid('input2'))
      .clear()
      .type(rhs.toString());
  }

  [
    [1, 2, 3],
    [0, 0, 0],
    [12, 34, 46],
    [100, 200, 300],
  ].forEach(([lhs, rhs, expectedResult]) => {
    it(`Add numbers (${lhs}, ${rhs})`, () => {
      setInputs(lhs, rhs);

      cy.get('button').contains('+').click();
      simulateTime();
      cy.get(cyid('latestResult')).should('have.text', expectedResult.toString());

    });
  });

  [
    [1, 2, -1],
    [0, 0, 0],
    [34, 12, 22],
    [100, 200, -100],
  ].forEach(([lhs, rhs, expectedResult]) => {
    it(`Subtract numbers (${lhs}, ${rhs})`, () => {
      setInputs(lhs, rhs);

      cy.get('button').contains('-').click();
      simulateTime();
      cy.get(cyid('latestResult')).should('have.text', expectedResult.toString());
    });
  });

  [
    [1, 2, 2],
    [0, 0, 0],
    [34, 12, 408],
    [100, 200, 20000],
  ].forEach(([lhs, rhs, expectedResult]) => {
    it(`Multiply numbers (${lhs}, ${rhs})`, () => {
      setInputs(lhs, rhs);

      cy.get('button').contains('x').click();
      simulateTime();
      cy.get(cyid('latestResult')).should('have.text', expectedResult.toString());
    });
  });

  [
    [6, 2, 3],
    [36, 12, 3],
    [100, 200, 0.5],
  ].forEach(([lhs, rhs, expectedResult]) => {
    it(`Divide numbers (${lhs}, ${rhs})`, () => {
      setInputs(lhs, rhs);

      cy.get('button').contains('/').click();
      simulateTime();
      cy.get(cyid('latestResult')).should('have.text', expectedResult.toString());
    });
  });

  it('Should show error if dividing by zero', () => {
    setInputs(10, 0);

    cy.get('button').contains('/').click();
    simulateTime();
    cy.get(cyid('latestResult')).should('have.text', 'Cannot divide by zero');
  });
});
