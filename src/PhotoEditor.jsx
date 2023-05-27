import React, { useEffect, useState } from "react";
import { Flex, View } from "@adobe/react-spectrum";
import { useStore } from "./store";
import { PixiScene } from "./PixiScene";
import { ModePanel } from "./ModePanel";
import { RightPanel } from "./RightPanel";
import { BottomPanel } from "./BottomPanel";

export function PhotoEditor() {
	const imgDim = useStore((state) => state.imgDim);
	const scale = useStore((state) => state.scale);
	const setScale = useStore((state) => state.setScale);

	return (
		<>
			<Flex direction='column' gap={"size-130"}>
				<View height={"size-10"}></View>
				<View>
					<Flex gap='size-100' justifyContent='space-around'>
						<Flex direction='row'>
							<View flex />
							<View width={imgDim[0] * scale}>
								<Flex direction={"row"}>
									<Flex
										width={imgDim[0] * scale}
										direction={"row"}>
										<ModePanel />
									</Flex>
								</Flex>
							</View>
							<View flex />
						</Flex>
					</Flex>
				</View>
				<Flex direction='row' gap='size-100'>
					<View flex />

					<PixiScene />
					<View flex>
						<RightPanel />
					</View>
				</Flex>
				<View backgroundColor height='size-800'>
					<BottomPanel />
				</View>
			</Flex>
		</>
	);
}
