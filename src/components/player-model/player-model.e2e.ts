import { newE2EPage } from '@stencil/core/testing';

describe('mc-player-model', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<mc-player-model></mc-player-model>');
		const element = await page.find('mc-player-model');
		expect(element).toHaveClass('hydrated');
	});
});
