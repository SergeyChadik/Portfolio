import React from 'react';
import style from './skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import { Skill } from './skill/Skill'
import js from '../images/js.png'
import css from '../images/css.png'
import rect from '../images/react.png'

export function Skills() {
	return (
		<div className={style.skillsBlock}>
			<div className={`${styleContainer.container} ${style.skillsContainer}`}>
				<h2 className={style.title}>Skills</h2>
				<div className={style.skills}>
					<Skill img={js} title={'Js'} discription={'Lorem ipsum  lipsu grafickém designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového návrhu vložen smysluplný obsah.'} />
					<Skill img={css} title={'CSS'} discription={'Lorem ipsum  v grafickém designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového návrhu vložen smysluplný obsah.'} />
					<Skill img={rect} title={'React'} discription={'Lorem ipsum  užívaný v grafickém designu a navrhování jako demonstrativní výplňový text při vytváření pracovních ukázek grafických návrhů (např. internetových stránek, rozvržení časopisů či všech druhů reklamních materiálů). Lipsum tak pracovně znázorňuje text v ukázkových maketách (tzv. mock-up) předtím, než bude do hotového návrhu vložen smysluplný obsah.'} />
				</div>
			</div>
		</div>
	);
}



