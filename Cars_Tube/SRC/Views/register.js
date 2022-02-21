import { html, render } from '../../node_modules/lit-html/lit-html.js'
import {get, register } from '../Tools/api.js';
import { navUpdate } from '../Tools/updateNav.js';
import page from "../../node_modules/page/page.mjs"


let temp = () => html `
<section id="register">
            <div class="container">
                <form id="register-form" @submit="${registerFunc}">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr>

                    <p>Username</p>
                    <input type="text" placeholder="Enter Username" name="username" required>

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password" required>

                    <p>Repeat Password</p>
                    <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                    <hr>

                    <input type="submit" class="registerbtn" value="Register">
                </form>
                <div class="signin">
                    <p>Already have an account?
                        <a href="/login">Sign in</a>.
                    </p>
                </div>
            </div>
        </section>
`


export async function registerView() {
    render(temp(), document.querySelector('main'));
}

async function registerFunc(event) {
    event.preventDefault();

    let data = new FormData(event.target);
    let username = data.get('username');
    let password = data.get('password');
    let rePass = data.get('repeatPass');

    if (username.trim() != '' && password.trim() != '' && rePass == password) {
        let info = { username: username, password: password };
        await register(info);
        navUpdate();
        page.redirect('/all')
    } else {
        alert('All fields are required!')
    }
}