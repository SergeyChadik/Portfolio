import React from 'react';
import { Nav } from '../Nav/Nav';
import style from './Header.module.css';
import {BurgerNav} from "./burgerNav/burgerNav";

export function Header() {
	return (
		<div className={style.header__container} >
			<div className={style.header__nav}>
				<Nav />
				<BurgerNav/>
			</div>
		</div>
	);
}

