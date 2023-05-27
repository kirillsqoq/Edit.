import Portrait from "@spectrum-icons/workflow/Portrait";
import Landscape from "@spectrum-icons/workflow/Landscape";
import React, { useEffect, useState } from "react";

import {
	Text,
	Flex,
	ActionGroup,
	Item,
	Slider,
	View,
	ActionButton,
	Divider,
} from "@adobe/react-spectrum";
import { parseColor } from "@react-stately/color";
import { useStore } from "./store";

import FullScreen from "@spectrum-icons/workflow/FullScreen";
import CropRotate from "@spectrum-icons/workflow/CropRotate";
import Border from "@spectrum-icons/workflow/Border";
import ViewSingle from "@spectrum-icons/workflow/ViewSingle";
import ImageProfile from "@spectrum-icons/workflow/ImageProfile";

import RotateRightOutline from "@spectrum-icons/workflow/RotateRightOutline";

export function CropTools() {
	const blur = useStore((state) => state.blur);
	const setBlur = useStore((state) => state.setBlur);
	//
	const selectedRatio = useStore((state) => state.selectedRatio);
	const setSelectedRatio = useStore((state) => state.setSelectedRatio);
	//
	const selectedCropMode = useStore((state) => state.selectedCropMode);
	const setSelectedCropMode = useStore((state) => state.setSelectedCropMode);
	//
	const imgDim = useStore((state) => state.imgDim);
	const setImgDim = useStore((state) => state.setImgDim);
	const imgDimOriginal = useStore((state) => state.imgDimOriginal);
	const zoom = useStore((state) => state.zoom);

	const setZoomIn = useStore((state) => state.setZoomIn);
	const setZoomOut = useStore((state) => state.setZoomOut);
	const setZoom = useStore((state) => state.setZoom);
	const setResetSnapTrue = useStore((state) => state.setResetSnapTrue);

	useEffect(() => {
		if ([...selectedRatio] == "square") {
			setImgDim([1080, 1080]);
			// setZoom(1);
			setResetSnapTrue();

			if (imgDimOriginal[0] * zoom < 1080) {
				console.log("width < 1080 ");
				setZoom(1080 / imgDimOriginal[0]);
			}
			if (imgDimOriginal[1] * zoom < 1080) {
				console.log("height < 1080 ");

				setZoom(1080 / imgDimOriginal[1]);
			}
		}
		if ([...selectedRatio] == "landscape") {
			setImgDim([1920, 1080]);

			setResetSnapTrue();
			if (imgDimOriginal[1] * zoom < 1080) {
				setZoom(1080 / imgDimOriginal[1]);
			}
			if (imgDimOriginal[0] * zoom < 1920) {
				setZoom(1920 / imgDimOriginal[0]);
			}
		}
		if ([...selectedRatio] == "portrait") {
			setImgDim([1080, 1350]);

			setResetSnapTrue();

			if (imgDimOriginal[0] * zoom < 1080) {
				setZoom(1080 / imgDimOriginal[0]);
			}
			if (imgDimOriginal[1] * zoom < 1350) {
				setZoom(1350 / imgDimOriginal[1]);
			}
		}
		if ([...selectedRatio] == "original") {
			setImgDim([imgDimOriginal[0], imgDimOriginal[1]]);
			if (imgDimOriginal[0] * zoom < imgDimOriginal[0]) {
				setZoom(1);
			}
			if (imgDimOriginal[1] * zoom < imgDimOriginal[1]) {
				setZoom(1);
			}
			setResetSnapTrue();
		}
		if ([...selectedRatio] == "") {
			setImgDim([imgDimOriginal[0], imgDimOriginal[1]]);
			if (imgDimOriginal[0] * zoom < imgDimOriginal[0]) {
				setZoom(1);
			}
			if (imgDimOriginal[1] * zoom < imgDimOriginal[1]) {
				setZoom(1);
			}
			setResetSnapTrue();
		}
	}, [selectedRatio, zoom]);
	return (
		<>
			<Flex
				gap={"size-100"}
				direction={"column"}
				justifyContent='center'
				alignItems={"center"}>
				{" "}
				<View
					marginTop={"size-50"}
					backgroundColor={"gray-100"}
					borderRadius='medium'>
					<ActionGroup
						defaultSelectedKeys={["landscape"]}
						isQuiet
						selectionMode='single'
						selectedKeys={selectedRatio}
						onSelectionChange={setSelectedRatio}>
						<Item key='original'>
							<Text>Original</Text>
							<FullScreen />
						</Item>
						<Item key='portrait'>
							<Text>Portrait</Text>
							<Portrait />
						</Item>
						<Item key='landscape'>
							<Landscape />
							<Text>Landscape</Text>
						</Item>
						<Item key='square'>
							<ViewSingle />
							<Text>Square</Text>
						</Item>
					</ActionGroup>
				</View>
				<View backgroundColor='gray-100' borderRadius={"medium"}>
					{" "}
				</View>
			</Flex>
		</>
	);
}
