import { html, render } from '../node_modules/lit-html/lit-html.js'
import { login } from '../tools/api.js';
import page from '../node_modules/page/page.mjs'
import { navUpdate } from '../tools/updateNav.js';
import { notify } from '../tools/notify.js';

let temp = () => html `
<section id="login">
    <form @submit="${loginFunc}" id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>
`


export function loginView() {
    render(temp(), document.querySelector('main'))
}

async function loginFunc(event) {
    event.preventDefault();
    let formElem = event.target;

    let data = new FormData(formElem);

    let email = data.get('email');
    let password = data.get('password');

    if (email.trim() != '' && password.trim() != '') {

        await login({
            email: email,
            password: password
        })
        navUpdate()
        page.redirect('/allMemes')
    } else {

        notify('All fields are required!')
    }
}