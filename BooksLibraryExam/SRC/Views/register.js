import { html, render } from '../../node_modules/lit-html/lit-html.js'
import {get, register } from '../Tools/api.js';
import page from "../../node_modules/page/page.mjs"
import { navUpdate } from '../Tools/updateNav.js';


let temp = () => html `
<section id="register-page" class="register">
            <form id="register-form" action="" method="" @submit="${regFunc}">
                <fieldset>
                    <legend>Register Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>
`

export async function registerView() {
    render(temp(), document.querySelector('main'));
}


async function regFunc(event) {
    event.preventDefault();

    let formElem = event.target;
    let data = new FormData(formElem);

    let email = data.get('email');
    let password = data.get('password');
    let rePass = data.get('confirm-pass')

    if (email.trim() != '' && password.trim() != '' && rePass.trim() == password.trim()) {
        await register({ email: email, password: password })
        navUpdate();
        page.redirect('/home');
    } else {
        alert('All fields are required!')
    }
}