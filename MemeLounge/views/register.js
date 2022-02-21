import { html, render } from '../node_modules/lit-html/lit-html.js'
import { register } from '../tools/api.js';
import page from '../node_modules/page/page.mjs';
import { navUpdate } from '../tools/updateNav.js';
import { notify } from '../tools/notify.js';

let temp = () => html `
<section id="register">
            <form id="register-form" @submit="${registerFunc}">
                <div class="container">
                    <h1>Register</h1>
                    <label for="username">Username</label>
                    <input id="username" type="text" placeholder="Enter Username" name="username">
                    <label for="email">Email</label>
                    <input id="email" type="text" placeholder="Enter Email" name="email">
                    <label for="password">Password</label>
                    <input id="password" type="password" placeholder="Enter Password" name="password">
                    <label for="repeatPass">Repeat Password</label>
                    <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
                    <div class="gender">
                        <input type="radio" name="gender" id="female" value="female">
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="male" value="male" checked>
                        <label for="male">Male</label>
                    </div>
                    <input type="submit" class="registerbtn button" value="Register">
                    <div class="container signin">
                        <p>Already have an account?<a href="/login">Sign in</a>.</p>
                    </div>
                </div>
            </form>
        </section>
`


export function registerView() {
    render(temp(), document.querySelector('main'))
}


async function registerFunc(event) {
    event.preventDefault();
    let formElem = event.target;

    let data = new FormData(formElem);
    let username = data.get('username');
    let email = data.get('email');
    let password = data.get('password');
    let rePass = data.get('repeatPass');
    let gender = data.get('gender');

    if (username.trim() == '' && email.trim() == '' && password.trim() == '') {


        return notify('All fields are required!')
    }
    if (password.trim() != rePass.trim()) {
        return notify('Passwords don\'t match!')
    }

    await register({
        username: username,
        email: email,
        password: password,
        gender: gender
    })
    navUpdate();
    page.redirect('/allMemes')
}