import Exposure from "@spectrum-icons/workflow/Exposure";
import Contrast from "@spectrum-icons/workflow/Contrast";
import Blur from "@spectrum-icons/workflow/Blur";
import Light from "@spectrum-icons/workflow/Light";
import ColorWheel from "@spectrum-icons/workflow/ColorWheel";
import ColorPalette from "@spectrum-icons/workflow/ColorPalette";
import Portrait from "@spectrum-icons/workflow/Portrait";
import Landscape from "@spectrum-icons/workflow/Landscape";

//
import React, { useEffect, useState } from "react";

import {
	Text,
	Flex,
	ActionButton,
	ActionGroup,
	Item,
	Heading,
	Slider,
	View,
	Divider,
} from "@adobe/react-spectrum";
import { parseColor } from "@react-stately/color";
import { useStore } from "./store";
import { ColorSlider } from "@react-spectrum/color";

import FullScreen from "@spectrum-icons/workflow/FullScreen";
import Perspective from "@spectrum-icons/workflow/Perspective";
import CropRotate from "@spectrum-icons/workflow/CropRotate";
import { ColorAdjustmentTools } from "./ColorAdjustmentTools";

export function DrawTools() {
	const blur = useStore((state) => state.blur);
	const saturation = useStore((state) => state.saturation);
	const exposure = useStore((state) => state.exposure);
	const contrast = useStore((state) => state.contrast);
	const red = useStore((state) => state.red);
	const green = useStore((state) => state.green);
	const blue = useStore((state) => state.blue);
	const brightness = useStore((state) => state.brightness);
	const setBlur = useStore((state) => state.setBlur);
	const setRed = useStore((state) => state.setRed);
	const setGreen = useStore((state) => state.setGreen);
	const setBlue = useStore((state) => state.setBlue);
	const setContrast = useStore((state) => state.setContrast);
	const setExposure = useStore((state) => state.setExposure);
	const setBrightness = useStore((state) => state.setBrightness);
	const setSaturation = useStore((state) => state.setSaturation);

	const selectedMode = useStore((state) => state.selectedMode);

	const selectedRatio = useStore((state) => state.selectedRatio);
	const setSelectedRatio = useStore((state) => state.setSelectedRatio);
	const selectedTool = useStore((state) => state.selectedTool);
	const setSelectedTool = useStore((state) => state.setSelectedTool);

	const selectedCropMode = useStore((state) => state.selectedCropMode);
	const setSelectedCropMode = useStore((state) => state.setSelectedCropMode);

	let [value, setValue] = useState(parseColor("hsl(0, 100%, 50%)"));

	return (
		<>
			{/* <Flex marginTop={"size-150"} gap='size-300' wrap>
				<View
					borderRadius={"large"}
					paddingX={"size-250"}
					paddingY={"size-175"}
					backgroundColor={"gray-200"}>
					<Flex
						alignItems={"center"}
						justifyContent={"center"}
						direction={"row"}>
						<ActionGroup isQuiet selectionMode='single'>
							<Item key='S'>
								<Text>S</Text>
							</Item>
							<Item key='M'>
								<Text>M</Text>
							</Item>
							<Item key='L'>
								<Text>L</Text>
							</Item>
						</ActionGroup>
						<Divider
							marginX={"size-200"}
							size='S'
							orientation='vertical'
						/>

						<ColorSlider
							label=''
							value={value}
							onChange={setValue}
							channel='hue'
						/>
					</Flex>
				</View>
			</Flex> */}
		</>
	);
}
