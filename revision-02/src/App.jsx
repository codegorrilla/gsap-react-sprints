import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import './App.css';

gsap.registerPlugin(useGSAP);
const randomY = gsap.utils.random(2, 200, 1, true);

function App() {
	const container = useRef();
	const circle = useRef();
	const circle2 = useRef();
	const box = useRef();
	const box2 = useRef();

	const [count, setCount] = useState(0);
	const [delayedCount, setDelayedCount] = useState(0);
	const [valY, setValY] = useState(0);

	useGSAP(
		() => {
			gsap.to(box.current, { rotation: '+=360' });
			gsap.to(circle.current, { rotation: '+=360' });
		},
		{ dependencies: [count], revertOnUpdate: true, scope: container }
	);

	useGSAP(
		() => {
			gsap.to('.box-2', { rotation: '-=360' });
		},
		{ scope: container, dependencies: [delayedCount], revertOnUpdate: true }
	);

	useGSAP(
		() => {
			gsap.to('.circle-2', {
				y: valY,
				duration: 1,
			});
		},
		{ scope: container, dependencies: [valY] }
	);

	const triggerCounter = () => {
		setCount(count + 1);
		setValY(randomY());
		console.log(randomY());
	};

	useEffect(() => {
		const timer = setTimeout(() => setDelayedCount(count), 1000);
		return () => clearTimeout(timer);
	}, [count]);

	return (
		<div
			className='container'
			ref={container}
		>
			<button
				className='align-self'
				onClick={triggerCounter}
			>
				Click to rotate | Total rotation: {1 + count + delayedCount} | Delayed
				Count: {delayedCount}
			</button>
			<div
				className='circle-1'
				ref={circle}
			>
				Circle
			</div>
			<div
				className='box-1'
				ref={box}
			>
				Box
			</div>
			<div
				className='box-2'
				ref={box2}
			>
				Box 2
			</div>
			<div
				className='circle-2'
				ref={circle2}
			>
				Moving Circle {valY > 0 && `by ${valY}px`}
			</div>
		</div>
	);
}

export default App;
