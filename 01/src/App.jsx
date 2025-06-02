import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export default function App() {
	const circle = useRef();
	const box = useRef();
	const container = useRef();

	useGSAP(
		() => {
			gsap.to(box.current, { rotation: '+=360', duration: 3 });
			gsap.to(circle.current, { rotation: '-=360', duration: 3 });
		},
		{ scope: container }
	);

	return (
		<div className='container'>
			<div
				className='box'
				ref={box}
			>
				Box
			</div>
			<div
				className='circle'
				ref={circle}
			>
				Circle
			</div>
		</div>
	);
}
