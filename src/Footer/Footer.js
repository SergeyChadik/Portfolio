import React from 'react';
import style from './Footer.module.css';
import {Slide} from "react-reveal";

export function Footer() {
	return (
		<div className={style.footer}>
			<Slide bottom>
			<h2>Sergey</h2>
			<div className={style.footerLinks}>
				<a href='https://www.facebook.com/sergei.chadik'>Facebook</a>
				<a href='https://www.linkedin.com/in/SergeyChadik'>Linkedin</a>
				<a href='https://t.me/SergoDEV'>Telegram</a>
				<a href='https://github.com/SergeyChadik'>GitHub</a>
			</div>
			<div className={style.footerAfter}>© 2021 beingeorge, All Rights Reserved.</div>
			</Slide>
		</div>
	);
}

