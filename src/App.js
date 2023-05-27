import React, { useEffect } from "react";

import { Provider, darkTheme } from "@adobe/react-spectrum";

import { useStore } from "./store";
import { PhotoEditor } from "./PhotoEditor";
import { DropPhoto } from "./DropPhoto";

function App() {
	const isDroppedPhoto = useStore((state) => state.isDroppedPhoto);
	const setReset = useStore((state) => state.setReset);

	useEffect(() => setReset, [isDroppedPhoto]);

	return (
		<>
			<Provider theme={darkTheme}>
				{isDroppedPhoto && <PhotoEditor />}
				{!isDroppedPhoto && <DropPhoto />}
			</Provider>
		</>
	);
}

export default App;
