import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function App() {
	const container = useRef();
	const badRef = useRef();
	const goodRef = useRef();

	useGSAP(
		(context, contextSafe) => {
			gsap.to(goodRef.current, { x: 100 });

			//bad practice
			badRef.current.addEventListener('click', () => {
				gsap.to(badRef.current, { y: 100 });
			});

			//safe
			const onClickGood = contextSafe(() => {
				gsap.to(goodRef.current, { rotation: 180 });
			});

			goodRef.current.addEventListener('click', onClickGood);

			//we remove the event listener in the cleanup function below
			return () => {
				goodRef.current.removeEventListener('click', onClickGood);
			};
		},
		{ scope: container }
	);

	return (
		<div ref={container}>
			<button ref={badRef}>Bad</button>
			<button ref={goodRef}>Good</button>
		</div>
	);
}
