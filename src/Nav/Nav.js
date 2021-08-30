import React from 'react';
import style from'./Nav.module.css';
import styleContainer from '../common/styles/Container.module.css'

export function Nav() {
  return (
    <div className={style.nav}>
      <a href=''>Home</a>
      <a href=''>Skills</a>
      <a href=''>Project</a>
      <a href=''>Contacts</a>
    </div>
  );
}