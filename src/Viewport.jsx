import React, { useEffect } from "react";
import * as PIXI from "pixi.js";
import { PixiComponent, useApp } from "@inlet/react-pixi";
import { Viewport as PixiViewport } from "pixi-viewport";
import { useStore } from "./store";

const PixiComponentViewport = PixiComponent("Viewport", {
	// const selectedMode = useStore((state) => state.selectedMode)
	create: (props) => {
		const viewport = new PixiViewport({
			screenWidth: props.width,
			screenHeight: props.height,
			worldWidth: props.width * 2,
			worldHeight: props.height * 2,
			ticker: props.app.ticker,
			interaction: props.app.renderer.plugins.interaction,
		});

		viewport
			.drag({
				wheel: false,
			})
			.pinch();

		return viewport;
	},

	applyProps: (instance, oldProps, newProps) => {
		instance.setZoom(newProps.zoom);
		// instance.worldScreenHeight = 1000;
		// instance.worldScreenWidth = 1000;
		instance.screenWidth = newProps.width;
		instance.screenHeight = newProps.height;

		console.log(newProps);
		console.log("instance:");

		console.log(instance.width, instance.height);
		console.log("world:");
		console.log(instance.worldScreenWidth, instance.worldScreenHeight);

		if (newProps.resetSnap == true) {
			instance.x = 0;
			instance.y = 0;
			newProps.setResetSnapFalse();
		}
		if (newProps.allowDrag == "crop") {
			instance.plugins.resume("drag");
		}
		if (newProps.allowDrag != "crop") {
			instance.plugins.pause("drag");
		}
	},
});

const Viewport = (props) => {
	const selectedMode = useStore((state) => state.selectedMode);
	const app = useApp();
	const zoom = useStore((state) => state.zoom);
	const resetSnap = useStore((state) => state.resetSnap);
	const setResetSnapFalse = useStore((state) => state.setResetSnapFalse);

	return (
		<PixiComponentViewport
			app={app}
			zoom={zoom}
			allowDrag={[...selectedMode]}
			resetSnap={resetSnap}
			setResetSnapFalse={setResetSnapFalse}
			{...props}
		/>
	);
};

export default Viewport;
