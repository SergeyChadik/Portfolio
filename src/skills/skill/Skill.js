import React from 'react';
import style from './Skill.module.css';

export function Skill(props) {
	return (
		<div className={style.skill}>
			<div>
				<img  className={style.icon} src={props.img} alt=""/>
			</div>
			<h3>{props.title}</h3>
			<span className={style.discription}>
				{props.discription}
			</span>
		</div>
	);
}

