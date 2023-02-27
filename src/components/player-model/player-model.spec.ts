import { newSpecPage } from '@stencil/core/testing';
import { MinecraftPlayerModel } from './player-model';

describe('mc-player-model', () => {
	it('renders', async () => {
		const { root } = await newSpecPage({
			components: [MinecraftPlayerModel],
			html: '<mc-player-model></mc-player-model>',
		});
		expect(root).toEqualHtml(`
      <mc-player-model>
        <mock:shadow-root>
          <div></div>
        </mock:shadow-root>
      </mc-player-model>
    `);
	});
});
