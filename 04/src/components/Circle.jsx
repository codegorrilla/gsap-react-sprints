import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Circle = ({ children, addAnimation, index, rotation }) => {
	const el = useRef();

	useGSAP(
		() => {
			console.log('Circle effect');
			const animation = gsap.to(el.current, { rotation: rotation, x: 200 });

			addAnimation(animation, index);
		},
		{ dependencies: [index, addAnimation] }
	);

	return (
		<div
			className='circle gradient-blue'
			ref={el}
		>
			{children}
		</div>
	);
};

export default Circle;
