import Lottie from "react-lottie";

interface AnimationProps {
	src: any;
	width: number;
	height: number;
}

export const Animation = ({ src, width, height }: AnimationProps) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: src,
	};

	return <Lottie options={defaultOptions} width={width} height={height} />;
};
