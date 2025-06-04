import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const randomX = gsap.utils.random(-200, 200, 1, true);

export default function App() {
	return <></>;
}
