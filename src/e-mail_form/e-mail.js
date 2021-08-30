import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import style from '../e-mail_form/e-mail.module.css'

function Email() {
	return (
		<div className={style.formBlock}>
				<div className={style.formContainer}>
					<h2 className={style.title}>Contact</h2>
					<form className={style.form}>
						<input type="text" placeholder='Name'/>
						<input type="text" placeholder='E-mail'/>
						<textarea name="" placeholder='Your message' ></textarea>
						<div className={style.btn}><a href=''>Send</a></div>
					</form>
				</div>
		</div>
	)
}

export default Email;