import Exposure from "@spectrum-icons/workflow/Exposure";
import Contrast from "@spectrum-icons/workflow/Contrast";
import Blur from "@spectrum-icons/workflow/Blur";
import Light from "@spectrum-icons/workflow/Light";
import ColorWheel from "@spectrum-icons/workflow/ColorWheel";
import ColorPalette from "@spectrum-icons/workflow/ColorPalette";
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

import { useStore } from "./store";

export function ColorAdjustmentTools() {
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
	const setSelectedTool = useStore((state) => state.setSelectedTool);
	const selectedTool = useStore((state) => state.selectedTool);

	return (
		<>
			<ActionGroup
				isQuiet
				selectionMode='single'
				selectedKeys={selectedTool}
				onSelectionChange={setSelectedTool}>
				<Item key='exposure'>
					<Exposure />
					<Text>Exposure</Text>
				</Item>
				<Item key='saturation'>
					<ColorPalette />
					<Text>Saturation</Text>
				</Item>
				<Item key='contrast'>
					<Contrast />
					<Text>Contrast</Text>
				</Item>
				<Item key='brightness'>
					<Light />
					<Text>Brightness</Text>
				</Item>

				<Item key='channels'>
					<ColorWheel />
					<Text>Channels</Text>
				</Item>
				<Item key='blur'>
					<Blur />
					<Text>Blur</Text>
				</Item>
			</ActionGroup>
			<View margin={"size-200"}>
				<Flex
					direction={"row"}
					justifyContent='center'
					alignItems={"center"}
					gap='size-100'>
					<>
						{[...selectedTool] == "exposure" && (
							<View
								backgroundColor='gray-200'
								borderRadius={"large"}
								borderColor='blue-400'
								paddingX={"size-300"}
								paddingY={"size-160"}>
								<Slider
									label={<Exposure />}
									minValue={0}
									labelPosition='side'
									step={0.1}
									maxValue={2}
									value={exposure}
									onChange={setExposure}
									isFilled
									fillOffset={0}
									// formatOptions={{
									// 	signDisplay: "always",
									// }}
								/>
							</View>
						)}
						{[...selectedTool] == "contrast" && (
							<View
								backgroundColor='gray-200'
								borderRadius={"large"}
								borderColor='blue-400'
								paddingX={"size-300"}
								paddingY={"size-160"}>
								<Slider
									label={<Contrast />}
									minValue={0}
									labelPosition='side'
									maxValue={2}
									value={contrast}
									onChange={setContrast}
									isFilled
									fillOffset={0}
									step={0.1}

									// formatOptions={{ signDisplay: "always" }}
								/>
							</View>
						)}
						{/*  */}
						{[...selectedTool] == "brightness" && (
							<View
								backgroundColor='gray-200'
								borderRadius={"large"}
								borderColor='blue-400'
								paddingX={"size-300"}
								paddingY={"size-160"}>
								<Slider
									// trackGradient={["black", "white"]}
									value={brightness}
									onChange={setBrightness}
									label={<Light />}
									minValue={0}
									labelPosition='side'
									maxValue={2}
									step={0.1}
									// formatOptions={{ signDisplay: "always" }}
									isFilled
									fillOffset={0}
								/>
							</View>
						)}
						{[...selectedTool] == "saturation" && (
							<View
								backgroundColor='gray-200'
								borderRadius={"large"}
								borderColor='blue-400'
								paddingX={"size-300"}
								paddingY={"size-160"}>
								<Slider
									// trackGradient={["grey", "red"]}
									value={saturation}
									onChange={setSaturation}
									label={<ColorPalette />}
									minValue={0}
									labelPosition='side'
									step={0.1}
									maxValue={2}
									// formatOptions={{ signDisplay: "always" }}
									isFilled
									fillOffset={0}
								/>
							</View>
						)}
						{[...selectedTool] == "channels" && (
							<>
								<View
									backgroundColor='gray-200'
									paddingEnd={"size-225"}
									paddingStart='size-200'
									paddingTop={"size-130"}
									paddingBottom={"size-130"}
									borderRadius={"large"}>
									<Flex direction={"column"} gap='size-50'>
										<Slider
											trackGradient={["gray", "red"]}
											label='R'
											labelPosition='side'
											value={red}
											onChange={setRed}
											step={0.1}
											minValue={0}
											maxValue={1}

											// orientation='vertical'
										/>

										<Slider
											trackGradient={["gray", "green"]}
											label='G'
											labelPosition='side'
											value={green}
											onChange={setGreen}
											step={0.1}
											minValue={0}
											maxValue={1}

											// orientation='vertical'
										/>

										<Slider
											trackGradient={["gray", "blue"]}
											label='B'
											labelPosition='side'
											value={blue}
											onChange={setBlue}
											step={0.1}
											minValue={0}
											maxValue={1}

											// orientation='vertical'
										/>
									</Flex>
								</View>
							</>
						)}
						{[...selectedTool] == "blur" && (
							<>
								<View
									backgroundColor='gray-200'
									borderRadius={"large"}
									borderColor='blue-400'
									paddingX={"size-300"}
									paddingY={"size-160"}>
									<Slider
										value={blur}
										onChange={setBlur}
										// trackGradient={["black", "white"]}
										label={<Blur />}
										minValue={0}
										labelPosition='side'
										maxValue={10}
										// formatOptions={{ signDisplay: "always" }}
										isFilled
										fillOffset={0}
									/>
								</View>
							</>
						)}
					</>
				</Flex>
			</View>
		</>
	);
}
