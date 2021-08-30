import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './MyWorks.module.css';
import Works from './Works/Works';

function MyWorks() {
	return (
		<div className={style.myWorks}>
			<div className={`${styleContainer.blockContainer} ${style.myWorksContainer}`} >
				<h2 className={style.title}>My works</h2>
				<div className={style.aroundWorks}>
					<Works title={'Social-Network'} discription={'Lorem ipdesigek grafických návraketách (tzv. mock-up) předtím, neplný obsah.Lorem ipdesigek grafických návraketách (tzv. mock-up) předtím, neplný obsah.Lorem ipdesigek grafických návraketách (tzv. mock-up) předtím, neplný obsah.'} />
					<Works title={'TodoList'} discription={'Lorem ipdesigek grafických návraketách (tzv. mock-up) předtím, neplný obsah.Lorem ipdesigek grafických návraketách (tzv. mock-up) předtím, neplný obsah.Lorem ipdesigek grafických návraketách (tzv. mock-up) předtím, neplný obsah.'} />
					<Works title={'Slider'} discription={'Lorem ipdesigek grafických návraketách (tzv. mock-up) předtím, neplný obsah.Lorem ipdesigek grafických návraketách (tzv. mock-up) předtím, neplný obsah.Lorem ipdesigek grafických návraketách (tzv. mock-up) předtím, neplný obsah.'} />
					<Works title={'Name'} discription={'Lorem ipdesigek grafických návraketách (tzv. mock-up) předtím, neplný obsah.Lorem ipdesigek grafických návraketách (tzv. mock-up) předtím, neplný obsah.Lorem ipdesigek grafických návraketách (tzv. mock-up) předtím, neplný obsah.'} />
				</div>
			</div>

		</div>
	)
}

export default MyWorks;

// discription={'Lorem ipdesigek grafických návraketách (tzv. mock-up) předtím, neplný obsah.'}