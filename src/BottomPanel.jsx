import React, { useEffect, useState } from "react";
import { Flex } from "@adobe/react-spectrum";
import { useStore } from "./store";
import { ColorAdjustmentTools } from "./ColorAdjustmentTools";
import { DrawTools } from "./DrawTools";
import { CropTools } from "./CropTools";

export function BottomPanel() {
	const selectedMode = useStore((state) => state.selectedMode);

	return (
		<>
			<Flex direction='column' alignItems={"center"}>
				<Flex
					direction={"column"}
					gap='size-100'
					justifyContent='center'>
					{[...selectedMode] != "crop" &&
						[...selectedMode] != "brush" && (
							<ColorAdjustmentTools />
						)}
					{[...selectedMode] == "crop" && <CropTools />}
					{[...selectedMode] == "brush" && <DrawTools />}
				</Flex>
			</Flex>
		</>
	);
}
