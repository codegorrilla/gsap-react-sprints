import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const randomX = gsap.utils.random(2, 200, 1, true);

export default function App() {
	const [endX, setEndX] = useState(0);
	const boxRef = useRef();
	const container = useRef();

	useGSAP(
		() => {
			gsap.to('.box', {
				x: endX,
				duration: 1,
			});
		},
		{ dependencies: [endX], scope: container }
	);

	const handleClick = () => {
		setEndX(randomX());
	};

	return (
		<div
			className='app'
			ref={container}
		>
			<button onClick={handleClick}>Pass in a randomized value</button>
			<div
				className='box gradient-blue'
				ref={boxRef}
			>
				{endX}
			</div>
		</div>
	);
}
