import Crop from "@spectrum-icons/workflow/Crop";
import Brush from "@spectrum-icons/workflow/Brush";
import React, { useEffect, useState } from "react";
import {
	Text,
	Flex,
	ActionButton,
	ActionGroup,
	Item,
	View,
	Divider,
} from "@adobe/react-spectrum";
import { useStore } from "./store";

import ZoomIn from "@spectrum-icons/workflow/ZoomIn";
import ZoomOut from "@spectrum-icons/workflow/ZoomOut";
import AddCircle from "@spectrum-icons/workflow/AddCircle";
import RotateLeft from "@spectrum-icons/workflow/RotateLeft";
import RotateLeftOutline from "@spectrum-icons/workflow/RotateLeftOutline";

export function ModePanel() {
	//
	const selectedMode = useStore((state) => state.selectedMode);
	const setSelectedMode = useStore((state) => state.setSelectedMode);
	const setZoomIn = useStore((state) => state.setZoomIn);
	const setZoomOut = useStore((state) => state.setZoomOut);
	const imgDim = useStore((state) => state.imgDim);

	const setImgDim = useStore((state) => state.setImgDim);

	return (
		<>
			<ActionGroup
				isQuiet
				selectionMode='single'
				selectedKeys={selectedMode}
				onSelectionChange={setSelectedMode}>
				<Item key='crop'>
					<Crop />
				</Item>
			</ActionGroup>
			{[...selectedMode] == "crop" && (
				<>
					<Divider
						// marginX={"size-10"}
						size='S'
						orientation='horizontal'
					/>
					<View
						marginX={"size-130"}
						borderRadius={"medium"}
						backgroundColor='gray-100'></View>
					<View borderRadius={"medium"} backgroundColor='gray-200'>
						<Flex gap='size-100'>
							{/* <ActionButton
								onPress={() =>
									setImgDim([imgDim[1], imgDim[0]])
								}
								marginStart={"size-50"}
								isQuiet>
								<RotateLeft />
							</ActionButton>
							<Divider orientation='vertical' size='S' /> */}
							<ActionButton onPress={setZoomIn} isQuiet>
								<ZoomIn />
							</ActionButton>

							<ActionButton
								onPress={setZoomOut}
								marginEnd={"size-50"}
								isQuiet>
								<ZoomOut />
							</ActionButton>
						</Flex>
					</View>
				</>
			)}
			{[...selectedMode] != "crop" && (
				<>
					<Divider
						marginX={"size-125"}
						size='S'
						orientation='horizontal'
					/>
					<View borderRadius={"medium"} backgroundColor='gray-200'>
						<Flex gap='size-100'>
							{/* <ActionButton
								marginStart={"size-50"}
								marginEnd={"size-50"}
								isQuiet>
								<AddCircle />

								<Text>Text</Text>
							</ActionButton> */}
						</Flex>
					</View>
				</>
			)}
		</>
	);
}
