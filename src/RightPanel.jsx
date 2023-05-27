import RotateCCW from "@spectrum-icons/workflow/RotateCCW";
import SaveToLight from "@spectrum-icons/workflow/SaveToLight";
import Close from "@spectrum-icons/workflow/Close";
import React, { useEffect, useState } from "react";
import { Flex, ActionButton } from "@adobe/react-spectrum";
import { useStore } from "./store";

export function RightPanel() {
	const dropPhotoUpdate = useStore((state) => state.dropPhotoUpdate);
	const setReset = useStore((state) => state.setReset);
	const setResetSnapFalse = useStore((state) => state.setResetSnapFalse);
	const setResetSnapTrue = useStore((state) => state.setResetSnapTrue);
	const setImgDim = useStore((state) => state.setImgDim);

	return (
		<>
			<Flex alignItems='start' direction={"column"} gap='size-100'>
				<ActionButton isQuiet onPress={dropPhotoUpdate}>
					<Close />
				</ActionButton>
				<ActionButton
					isQuiet
					onPress={setReset}
					onPressEnd={setResetSnapTrue}
					variant='overBackground'>
					<RotateCCW />
				</ActionButton>
				{/* <ActionButton
					isQuiet
					onPress={() =>
						console.log(document.getElementsByTagName("canvas")[0])
					}>
					<SaveToLight />
				</ActionButton> */}
			</Flex>
		</>
	);
}
