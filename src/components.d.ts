/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface McPlayerModel {
        "height": number;
        "isSlim": boolean;
        "rotateX": number;
        "rotateY": number;
        "skinUrl": string;
    }
}
declare global {
    interface HTMLMcPlayerModelElement extends Components.McPlayerModel, HTMLStencilElement {
    }
    var HTMLMcPlayerModelElement: {
        prototype: HTMLMcPlayerModelElement;
        new (): HTMLMcPlayerModelElement;
    };
    interface HTMLElementTagNameMap {
        "mc-player-model": HTMLMcPlayerModelElement;
    }
}
declare namespace LocalJSX {
    interface McPlayerModel {
        "height"?: number;
        "isSlim"?: boolean;
        "rotateX"?: number;
        "rotateY"?: number;
        "skinUrl"?: string;
    }
    interface IntrinsicElements {
        "mc-player-model": McPlayerModel;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mc-player-model": LocalJSX.McPlayerModel & JSXBase.HTMLAttributes<HTMLMcPlayerModelElement>;
        }
    }
}
