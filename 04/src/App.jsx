import { useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import Box from './components/Box';
import Circle from './components/Circle';

gsap.registerPlugin(useGSAP);

console.clear();

const App = () => {
	const [tl, setTl] = useState();
	const { contextSafe } = useGSAP(() => {
		console.log('App effect(create timeline');
		const tl = gsap.timeline();

		setTl(tl);
	});

	const addAnimation = useCallback(
		(animation, index) => {
			tl && tl.add(animation, index * 0.1);
		},
		[tl]
	);

	const toggleTimeline = contextSafe(() => {
		console.log('toggle');
		tl && tl.reversed(!tl.reversed());
	});
	return (
		<div className='app'>
			<button onClick={toggleTimeline}>Toggle</button>
			<Box
				addAnimation={addAnimation}
				index={0}
			>
				Box
			</Box>
			<Circle
				addAnimation={addAnimation}
				index={1}
				rotation={360}
			>
				Circle
			</Circle>
		</div>
	);
};

export default App;
