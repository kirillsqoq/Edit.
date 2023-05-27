import React from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { Flex, Heading, IllustratedMessage, View } from "@adobe/react-spectrum";

import Upload from "@spectrum-icons/illustrations/Upload";
import { useStore } from "./store";

export function DropPhoto() {
	const dropPhotoUpdate = useStore((state) => state.dropPhotoUpdate);
	const setImgUrl = useStore((state) => state.setImgUrl);
	const setImgDim = useStore((state) => state.setImgDim);

	const setImgDimOriginal = useStore((state) => state.setImgDimOriginal);
	const setScale = useStore((state) => state.setScale);

	return (
		<Flex direction='column' gap='size-100'>
			<View height='20vh'>
				<Flex
					height={"20vh"}
					direction={"column"}
					alignItems={"center"}
					gap='size-100'
					justifyContent={"center"}>
					<h1>Edit.</h1>
				</Flex>
			</View>
			<Flex direction='row' height='60vh' gap='size-100'>
				<View
					marginX={"size-1000"}
					borderRadius={"large"}
					backgroundColor='gray-200'
					flex>
					<Flex
						height={"60vh"}
						direction={"column"}
						alignItems={"center"}
						gap='size-100'
						justifyContent={"center"}>
						{/* <Button onPress={dropPhotoUpdate} variant='cta'>
							Update
						</Button> */}
						<View height={"size-100"} />
						<Dropzone
							maxFiles={1}
							onDropAccepted={(file) => {
								const reader = new FileReader();
								reader.onloadend = (e) => {
									const imgUrl = e.target?.result?.toString();
									if (imgUrl) {
										setImgUrl(imgUrl);
										findImageDimensions(imgUrl)
											.then((img) => {
												setImgDim([
													img.naturalWidth,
													img.naturalHeight,
												]);
												setImgDimOriginal([
													img.naturalWidth,
													img.naturalHeight,
												]);

												dropPhotoUpdate();
											})
											.catch(console.error.bind(console));
									}
								};
								reader.readAsDataURL(file[0]);
							}}
						/>
					</Flex>
				</View>
			</Flex>
		</Flex>
	);
}

function Dropzone({ children, style, ...dropOptions }) {
	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		accept: [
			"image/png",
			"image/jpg",
			"image/jpeg",
			"image/gif",
			"image/webp",
		],
		...dropOptions,
	});

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? (
				<IllustratedMessage>
					<Upload />
					<Heading>Drop the photo here ...</Heading>
				</IllustratedMessage>
			) : (
				<IllustratedMessage>
					<Upload />
					<Heading>Drag and Drop your photo</Heading>
				</IllustratedMessage>
			)}
		</div>
	);
}
const findImageDimensions = (url) => {
	return new Promise((resolve, reject) => {
		const img = document.createElement("img");
		img.onload = () => resolve(img);
		img.onabort = reject;
		img.oncancel = reject;
		img.onerror = reject;
		img.src = url;
	});
};
