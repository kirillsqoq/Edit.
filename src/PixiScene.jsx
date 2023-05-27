import * as PIXI from "pixi.js";
import {
	AdjustmentFilter,
	AdjustmentFilterOptions,
} from "@pixi/filter-adjustment";
import {
	Container,
	Stage,
	Sprite,
	withFilters,
	useApp,
	Graphics,
} from "@inlet/react-pixi";
import React, { useEffect } from "react";
import { View } from "@adobe/react-spectrum";
import { useStore } from "./store";
import Viewport from "./Viewport";

const Filters = withFilters(Container, {
	blur: PIXI.filters.BlurFilter,
	adjust: AdjustmentFilter,
});

export function PixiScene() {
	const imgUrl = useStore((state) => state.imgUrl);
	const imgDim = useStore((state) => state.imgDim);
	const imgDimOriginal = useStore((state) => state.imgDimOriginal);

	const scale = useStore((state) => state.scale);
	const blur = useStore((state) => state.blur);
	const exposure = useStore((state) => state.exposure);
	const contrast = useStore((state) => state.contrast);
	const red = useStore((state) => state.red);
	const green = useStore((state) => state.green);
	const saturation = useStore((state) => state.saturation);
	const blue = useStore((state) => state.blue);
	const brightness = useStore((state) => state.brightness);
	const selectedMode = useStore((state) => state.selectedMode);
	useEffect(() => {}, [imgDim]);
	return (
		<View width={imgDim[0] * scale} height={imgDim[1] * scale}>
			<Stage
				width={imgDim[0] * scale}
				height={imgDim[1] * scale}
				options={{ backgroundColor: 0x0e0e0e }}>
				<Filters
					// scale={2}
					blur={{ blur: blur }}
					adjust={{
						gamma: exposure,
						brightness: brightness,
						saturation: saturation,
						contrast: contrast,
						red: red,
						green: green,
						blue: blue,
					}}>
					<Viewport
						width={imgDim[0] * scale}
						height={imgDim[1] * scale}>
						<Container scale={scale}>
							{imgUrl && (
								<Sprite
									interactive
									cursor={
										[...selectedMode] == "crop"
											? "grab"
											: ""
									}
									image={imgUrl}
								/>
							)}
						</Container>
						<PixiApp />
					</Viewport>
				</Filters>
			</Stage>
		</View>
	);
}
function PixiApp() {
	const app = useApp();

	return null;
}
