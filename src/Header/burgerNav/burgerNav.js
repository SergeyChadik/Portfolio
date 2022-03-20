import React, {useState} from 'react';
import style from './burgerNav.module.css';
import { Link, animateScroll as scroll } from "react-scroll";

export function BurgerNav() {
    const [menuIsOpen,setMenuIsOpen] = useState(false)


    const onBurgerBtnClick = () => {
        setMenuIsOpen(
            !menuIsOpen
        )
    }


  return (
    <div className={style.burgerNav}>
      <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
        <a href=''>Home</a>
        <Link
            activeClass={style.active}
            to="Skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
        >Skills</Link>
        <Link
            activeClass={style.active}
            to="Projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
        >Projects</Link>

        <Link
            activeClass={style.active}
            to="Contacts"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
        >Contacts</Link>
      </div>
      <div onClick={onBurgerBtnClick} className={style.burgerBtn}></div>
    </div>
  );
}