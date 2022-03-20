import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './MyWorks.module.scss';
import Works from './Works/Works';
import {Title} from "../common/components/title/Title";
import todoImage from './../images/todo.jpg'
import socialImage from './../images/sn.jpg'
import card_app from './../images/Card_app.jpg'
import goCorona from './../images/GoCorona.jpg'
import {Slide} from "react-reveal";

function MyWorks() {


	const socialNetwork = {
		backgroundImage: `url(${socialImage})`,
	}
	const todolist = {
		backgroundImage: `url(${todoImage})`,
	}

	const cardApp = {
		backgroundImage: `url(${card_app})`,
	}
	const goCoronaImage = {
		backgroundImage: `url(${goCorona})`,
	}


	return (
		<div id='Projects' className={style.myWorks}>
			<div className={`${styleContainer.blockContainer} ${style.myWorksContainer}`} >
				<Slide bottom>
				<Title text={'My works'}/>
				<div className={style.aroundWorks}>
					<Works style={socialNetwork} href={'https://sergeychadik.github.io/Social-network/#/'} title={'Social-Network'} discription={'React, Redux, TypeScript, Thunk, Module CSS, Formik, React-router-dom, Rest API'} />
					<Works style={todolist} href={'https://sergeychadik.github.io/ToDoList'} title={'TodoList'} discription={'React, Redux, TypeScript, Thunk, Material UI, Storybook, Formik, Rest API'} />
					<Works style={cardApp} href={'https://nirweint.github.io/cards-project/#/packs-list'} title={'Card App'}  discription={'React, Redux, TypeScript, Thunk, React-router-dom, Rest API'} />
					<Works style={goCoronaImage} href={'https://sergeychadik.github.io/GoCoruna'} title={'Lending Page'} discription={'HTML,CSS'}  />
				</div>
				</Slide>
			</div>

		</div>
	)
}

export default MyWorks;

// discription={'Lorem ipdesigek grafických návraketách (tzv. mock-up) předtím, neplný obsah.'}