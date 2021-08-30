import React from 'react';
import style from './Work.module.css'

function Works(props) {
	return (

		<div className={style.worksContainer}>
			<div className={style.image}></div>
			<div className={style.titleDiscription}>
				<h3>{props.title}</h3>
				<span>{props.discription}</span>
			</div>
		</div>
	)
}

export default Works;