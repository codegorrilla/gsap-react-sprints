import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Box = ({ children, index, addAnimation }) => {
	const el = useRef();

	useGSAP(
		() => {
			console.log('Box effect');
			const animation = gsap.to(el.current, { x: -200 });
			addAnimation(animation, index);
		},
		{ dependencies: [addAnimation, index] }
	);

	return (
		<div
			className='box gradient-green'
			ref={el}
		>
			{children}
		</div>
	);
};

export default Box;
