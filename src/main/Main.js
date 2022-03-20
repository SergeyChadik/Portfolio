import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'
import img from '../images/01.jpg'
import Particles  from "react-tsparticles";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

const particlesInit = (main) => {
	console.log(main);

};

const particlesLoaded = (container) => {
	console.log(container);
};


export function Main() {
	return (
		<div className={style.mainBlock}>
			<Fade top>
			{/*<Particles*/}
			{/*	id="tsparticles"*/}
			{/*	init={particlesInit}*/}
			{/*	loaded={particlesLoaded}*/}
			{/*	*/}
			{/*	options={{*/}
			{/*		background: {*/}
			{/*			color: {*/}
			{/*				value: "#333",*/}
			{/*			},*/}
			{/*		},*/}
			{/*		fpsLimit: 120,*/}
			{/*		interactivity: {*/}
			{/*			events: {*/}
			{/*				onClick: {*/}
			{/*					enable: true,*/}
			{/*					mode: "push",*/}
			{/*				},*/}
			{/*				onHover: {*/}
			{/*					enable: true,*/}
			{/*					mode: "repulse",*/}
			{/*				},*/}
			{/*				resize: true,*/}
			{/*			},*/}
			{/*			modes: {*/}
			{/*				bubble: {*/}
			{/*					distance: 400,*/}
			{/*					duration: 2,*/}
			{/*					opacity: 0.8,*/}
			{/*					size: 40,*/}
			{/*				},*/}
			{/*				push: {*/}
			{/*					quantity: 4,*/}
			{/*				},*/}
			{/*				repulse: {*/}
			{/*					distance: 200,*/}
			{/*					duration: 0.4,*/}
			{/*				},*/}
			{/*			},*/}
			{/*		},*/}
			{/*		particles: {*/}
			{/*			color: {*/}
			{/*				value: "#ffffff",*/}
			{/*			},*/}
			{/*			links: {*/}
			{/*				color: "#ffffff",*/}
			{/*				distance: 150,*/}
			{/*				enable: true,*/}
			{/*				opacity: 0.5,*/}
			{/*				width: 1,*/}
			{/*			},*/}
			{/*			collisions: {*/}
			{/*				enable: true,*/}
			{/*			},*/}
			{/*			move: {*/}
			{/*				direction: "none",*/}
			{/*				enable: true,*/}
			{/*				outMode: "bounce",*/}
			{/*				random: false,*/}
			{/*				speed: 4,*/}
			{/*				straight: false,*/}
			{/*			},*/}
			{/*			number: {*/}
			{/*				density: {*/}
			{/*					enable: true,*/}
			{/*					area: 800,*/}
			{/*				},*/}
			{/*				value: 80,*/}
			{/*			},*/}
			{/*			opacity: {*/}
			{/*				value: 0.5,*/}
			{/*			},*/}
			{/*			shape: {*/}
			{/*				type: "circle",*/}
			{/*			},*/}
			{/*			size: {*/}
			{/*				random: true,*/}
			{/*				value: 5,*/}
			{/*			},*/}
			{/*		},*/}
			{/*		detectRetina: true,*/}
			{/*	}}*/}
			{/*/>*/}

			<div className={styleContainer.container}>
				<div className={style.text}>
					<span>Hi, There</span>

					<h1>I am <span>Sergey Chadik</span></h1>
					<ReactTypingEffect
						text={["Front-end Development"]}
					/>
				</div>
				<Tilt className="Tilt" options={{ max : 25 }} >
					<div className={style.photo}>
						<img src={img}/>
					</div>
				</Tilt>
				</div>
			</Fade>
		</div>
	);
}

