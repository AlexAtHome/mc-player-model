export default class MinecraftPlayerModel extends HTMLElement {
  rotateX = 0;
  rotateY = 0;
  height = 0;
  /** Skin URL */
  skin = "";
  /** Whether the player model is slim */
  slim = false;
  /** @type ShadowRoot */
  shadowRoot;
  /** @type HTMLDivElement */
  #playerRef;

  constructor() {
    super();
    this.#init();
  }

  static get observedAttributes() {
    return ["skin", "slim", "rotate-x", "rotate-y", "height"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} has changed.`);
    switch (name) {
      case "skin": {
        this.setSkin(newValue);
        break;
      }
      case "slim": {
        this.slim = this.isSlim();
        break;
      }
      case "height": {
        this.height = newValue;
        this.style.setProperty("--mc-height", newValue);
        break;
      }
      case "rotate-x":
      case "rotate-y": {
        this.style.setProperty(`--mc-${name}`, `${newValue}deg`);
      }
    }
  }

  #init() {
    this.shadowRoot = this.attachShadow({ mode: "open" });

    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("href", "style.css");
    this.shadowRoot.appendChild(linkElement);

    this.#playerRef = document.createElement("div");
    this.#playerRef.className = "model player";
    if (this.isSlim()) {
      this.#playerRef.classList.add("player__slim");
    }
    this.#playerRef.innerHTML = `
			<div class="row">
        ${this.#getCuboid("cube player__head")}
			</div>
			<div class="row">
        ${this.#getCuboid("player__left-hand")}
        ${this.#getCuboid("player__torso")}
        ${this.#getCuboid("player__right-hand")}
			</div>
			<div class="row">
        ${this.#getCuboid("player__left-leg")}
        ${this.#getCuboid("player__right-leg")}
			</div>
    `;
    this.shadowRoot.appendChild(this.#playerRef);
  }

  isSlim() {
    return this.getAttribute("slim") !== null;
  }

  setSkin(url) {
    this.skin = url;
    this.style.setProperty("--mc-skin", `url('${url}')`);
  }

  #getCuboid(className) {
    return `<div class="cuboid ${className}">
		  <div class="face front"></div>
		  <div class="face rear"></div>
		  <div class="face left"></div>
		  <div class="face right"></div>
		  <div class="face top"></div>
		  <div class="face bottom"></div>
	  </div>`;
  }
}

if ("customElements" in window) {
  customElements.define("mc-player-model", MinecraftPlayerModel);
}
