import React from 'react';
import style from './Work.module.scss'

function Works(props) {
	return (

		<div className={style.worksContainer}>
			<div className={style.image} style={props.style}>
				<a className={style.viewBtn} href={props.href}>View</a>
			</div>
			<div className={style.workInfo}>
				<h3 className={style.worksTitle}>{props.title}</h3>
				<span className={style.worksDiscription}>{props.discription}</span>
			</div>
		</div>
	)
}

export default Works;