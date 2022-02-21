import { html, render } from '../../node_modules/lit-html/lit-html.js'
import {get, register } from '../Tools/api.js';
import page from '../../node_modules/page/page.mjs'
import { navUpdate } from '../Tools/updateNav.js';



let temp = () => html `
<section id="registerPage">
<form @submit="${regFunc}">
    <fieldset>
        <legend>Register</legend>

        <label for="email" class="vhide">Email</label>
        <input id="email" class="email" name="email" type="text" placeholder="Email">

        <label for="password" class="vhide">Password</label>
        <input id="password" class="password" name="password" type="password" placeholder="Password">

        <label for="conf-pass" class="vhide">Confirm Password:</label>
        <input id="conf-pass" class="conf-pass" name="conf-pass" type="password" placeholder="Confirm Password">

        <button type="submit" class="register">Register</button>

        <p class="field">
            <span>If you already have profile click <a href="/login">here</a></span>
        </p>
    </fieldset>
</form>
</section>
`


export async function registerView() {
    render(temp(), document.querySelector('main'));
}


async function regFunc(event) {
    event.preventDefault();
    let form = event.target;
    let data = new FormData(form);

    let email = data.get('email');
    let password = data.get('password');
    let rePass = data.get('conf-pass')

    if (email.trim() != '' && password.trim() != '' && rePass.trim() == password.trim()) {
        let info = { email: email, password: password }
        await register(info)
        page.redirect('/home')
        navUpdate();
    } else {
        alert('All fields are required!')
    }
}