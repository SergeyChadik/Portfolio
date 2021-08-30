import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'
import img from '../images/01.jpg'

export function Main() {
	return (
		<div className={style.mainBlock}>
			<div className={styleContainer.container}>
				<div className={style.text}>
					<span>Hi, There</span>
					<h1>I am <span>Sergey Chadik</span></h1>
					<p>Front-end Development</p>
				</div>
				<div className={style.photo}>
					<img src={img}/>
				</div>

			</div>
		</div>
	);
}

