import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

function App() {
	const app = useRef();

	const box1 = useRef();
	const box2 = useRef();
	const box3 = useRef();

	const [count, setCount] = useState(0);
	const [delayedCount, setDelayedCount] = useState(0);

	//only runs on first render
	useGSAP(() => {
		gsap.to(box1.current, { rotation: '+=360' });
	});

	//runs on first render and every time delayedCount changes
	useGSAP(() => {
		gsap.to(box2.current, { rotation: '+=360' });
	}, [delayedCount]);

	//passing in null to use no dependency array in the internal useEffect
	//runs on every render
	useGSAP(() => {
		gsap.to(box3.current, { rotation: '+=360' });
	}, null);

	useEffect(() => {
		const timer = setTimeout(() => setDelayedCount(count), 500);
		return () => clearTimeout(timer);
	}, [count]);

	return (
		<div
			className='app'
			ref={app}
		>
			<div>
				<button onClick={() => setCount(count + 1)}>
					Click to trigger a render
				</button>
			</div>
			<p>Count: {count}</p>
			<p>Delayed Count: {delayedCount}</p>
			<p>Renders: {1 + delayedCount + count}</p>
			<div className='flex-row'>
				<div
					className='box gradient-purple'
					ref={box1}
				>
					First Render
				</div>
				<div
					className='box gradient-blue'
					ref={box2}
				>
					First render & Delayed Count Change
				</div>
				<div
					className='box gradient-red'
					ref={box3}
				>
					Every Render
				</div>
			</div>
		</div>
	);
}

export default App;
