import { html, render } from '../../node_modules/lit-html/lit-html.js'
import {get, login } from '../Tools/api.js';
import page from '../../node_modules/page/page.mjs'
import { navUpdate } from '../Tools/updateNav.js';


let temp = () => html `
<section id="loginPage">
            <form @submit="${loginFunc}">
                <fieldset>
                    <legend>Login</legend>

                    <label for="email" class="vhide">Email</label>
                    <input id="email" class="email" name="email" type="text" placeholder="Email">

                    <label for="password" class="vhide">Password</label>
                    <input id="password" class="password" name="password" type="password" placeholder="Password">

                    <button type="submit" class="login">Login</button>

                    <p class="field">
                        <span>If you don't have profile click <a href="/register">here</a></span>
                    </p>
                </fieldset>
            </form>
        </section>
`


export async function loginView() {
    render(temp(), document.querySelector('main'));
}

async function loginFunc(event) {
    event.preventDefault();
    let form = event.target;
    let data = new FormData(form);

    let email = data.get('email');
    let password = data.get('password');

    if (email.trim() != '' && password.trim() != '') {
        let info = { email: email, password: password }
        await login(info)
        page.redirect('/home')
        navUpdate();
    } else {
        alert('All fields are required!')
    }
}