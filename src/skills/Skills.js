import React from 'react';
import style from './skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import { Skill } from './skill/Skill'
import js from '../images/js.png'
import css from '../images/css.png'
import rect from '../images/react.png'
import {Title} from "../common/components/title/Title";
import {Slide} from "react-reveal";

export function Skills() {
	return (
		<div id="Skills" className={style.skillsBlock}>
			<div className={`${styleContainer.container} ${style.skillsContainer}`}>
				<Slide bottom>
					<Title text={'Skills'}/>
				<div className={style.skills}>
					<Skill img={rect}
						   title={'React'}
						   discription={'React, Redux, Axios etc'} />
					<Skill img={js}
						   title={'Js'}
						   discription={'JavaScript, TypeScript, HTML, CSS'} />
					<Skill img={css}
						   title={'CSS'}
						   discription={'Sass,BEM'} />

				</div>
				</Slide>
			</div>
		</div>
	);
}



