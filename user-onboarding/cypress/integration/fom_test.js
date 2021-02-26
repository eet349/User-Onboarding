describe('From Tests', () => {
	// connect to our localhost for testing
	beforeEach('Connect to localhost.', () => {
		cy.visit('/'); // navigate to / of our baseUrl (http://localhost:3001)
	});

	const nameInput = () => cy.get('input[name=name]');
	const emailInput = () => cy.get('input[name=email]');
	const passwordInput = () => cy.get('input[name=password]');

	const agreeTOSInput = () => cy.get('input[name=agreeTOS]');
	const submitButton = () => cy.get('input[type=submit]');

	const testText = 'Testing Testing';
	const testEmail = 'email@example.com';
	const testPassword = '123Test321';

	it('Testing test connection', () => {
		expect(true).to.equal(true);
	});

	it.only('MVP Tests', () => {
		submitButton().should('be.disabled');
		nameInput()
			.should('have.value', '')
			.type(testText)
			.should('have.value', testText);
		emailInput()
			.should('have.value', '')
			.type(testEmail)
			.should('have.value', testEmail);
		passwordInput()
			.should('have.value', '')
			.type(testPassword)
			.should('have.value', testPassword);
		agreeTOSInput().should('have.not.checked');
		agreeTOSInput().click();
		agreeTOSInput().should('have.checked');
		submitButton().should('exist');
		submitButton().should('not.be.disabled');
		submitButton().click();
	});
});
