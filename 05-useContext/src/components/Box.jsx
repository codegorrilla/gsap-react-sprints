import { createContext, useContext, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

//React context
const SelectedContext = createContext();

export default function Box({ children, id }) {
	const el = useRef();

	//React context - not GSAP context
	const { selected } = useContext(SelectedContext);

	useGSAP(
		() => {
			gsap.to(el.current, {
				x: selected === id ? 200 : 0,
				ease: 'power2.out',
			});
		},
		{ dependencies: [selected, id] }
	);

	return (
		<div
			className='box gradient-blue'
			ref={el}
		>
			{children}
		</div>
	);
}
