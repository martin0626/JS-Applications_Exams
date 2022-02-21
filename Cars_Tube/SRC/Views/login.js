import { html, render } from '../../node_modules/lit-html/lit-html.js'
import {get, login } from '../Tools/api.js';
import page from "../../node_modules/page/page.mjs"
import { navUpdate } from '../Tools/updateNav.js';



let temp = () => html `
<section id="login">
            <div class="container">
                <form id="login-form" action="#" method="post" @submit="${loginFunc}">
                    <h1>Login</h1>
                    <p>Please enter your credentials.</p>
                    <hr>

                    <p>Username</p>
                    <input placeholder="Enter Username" name="username" type="text">

                    <p>Password</p>
                    <input type="password" placeholder="Enter Password" name="password">
                    <input type="submit" class="registerbtn" value="Login">
                </form>
                <div class="signin">
                    <p>Dont have an account?
                        <a href="/register">Sign up</a>.
                    </p>
                </div>
            </div>
        </section>
`


export async function loginView() {
    render(temp(), document.querySelector('main'));
}


async function loginFunc(event) {
    event.preventDefault();

    let data = new FormData(event.target);
    let username = data.get('username');
    let password = data.get('password');


    if (username.trim() != '' && password.trim() != '') {
        let info = { username: username, password: password };
        await login(info);
        navUpdate();
        page.redirect('/all')
    } else {
        alert('All fields are required!')
    }
}