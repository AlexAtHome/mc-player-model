import { Component, Host, State, h, FunctionalComponent, Prop, Watch } from '@stencil/core';

@Component({
	tag: 'mc-player-model',
	styleUrl: 'player-model.scss',
	shadow: true,
})
export class MinecraftPlayerModel {
	@Prop() rotateX: number
	@Prop() rotateY: number
	@Prop() height: number
	@Prop({ attribute: 'skin' }) skinUrl: string
	@Prop({ attribute: 'slim' }) isSlim: boolean

	@State() private styles: Record<string, string> = {};

	@Watch('rotateX')
	@Watch('rotateY')
	@Watch('height')
	@Watch('skinUrl')
	refreshStyles(): void {
		this.styles = {}
		if (this.rotateX) {
			this.styles['--mc-rotate-x'] = `${this.rotateX}deg`
		}
		if (this.rotateY) {
			this.styles['--mc-rotate-y'] = `${this.rotateY}deg`
		}
		if (this.skinUrl) {
			this.styles['--mc-skin'] = `url('${this.skinUrl}')`
		}
		if (this.height) {
			this.styles['--mc-height'] = `${this.height}px`
		}
	}

	componentWillLoad(): void {
		this.refreshStyles()
	}

	render() {
		return <Host>
			<div class={{
				"model": true, "player": true, "player_slim": this.isSlim
			}} style={this.styles}>
				<div class="row">
					<Cube className="player__head" />
				</div>
				<div class="row">
					<Cuboid className="player__left-hand" />
					<Cuboid className="player__torso" />
					<Cuboid className="player__right-hand" />
				</div>
				<div class="row">
					<Cuboid className="player__left-leg" />
					<Cuboid className="player__right-leg" />
				</div>
			</div>
		</Host>;
	}
}

type FC = FunctionalComponent<{ className: string }>

const Cuboid: FC = ({ className }) => (
	<div class={`cuboid ${className}`}>
		<div class="face front"></div>
		<div class="face rear"></div>
		<div class="face left"></div>
		<div class="face right"></div>
		<div class="face top"></div>
		<div class="face bottom"></div>
	</div>
)

const Cube: FC = ({ className }) => <Cuboid className={`cube ${className}`} />

