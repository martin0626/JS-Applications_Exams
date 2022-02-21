import { html, render } from '../../node_modules/lit-html/lit-html.js'
import {get, login } from '../Tools/api.js';
import page from "../../node_modules/page/page.mjs"
import { navUpdate } from '../Tools/updateNav.js';


let temp = () => html `
<section id="login-page" class="login">
<form id="login-form" action="" method="" @submit="${logFunc}">
    <fieldset>
        <legend>Login Form</legend>
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
        <input class="button submit" type="submit" value="Login">
    </fieldset>
</form>
</section>
`

export async function loginView() {
    render(temp(), document.querySelector('main'));
}

async function logFunc(event) {
    event.preventDefault();

    let formElem = event.target;
    let data = new FormData(formElem);

    let email = data.get('email');
    let password = data.get('password');

    if (email.trim() != '' && password.trim() != '') {
        await login({ email: email, password: password })
        page.redirect('/home');
        navUpdate();
    } else {
        alert('All fields are required!')
    }

}