import { userData } from "./user.js";
import { html, render } from '../../node_modules/lit-html/lit-html.js'



let temp = (isLog) => html `
    <nav>
    <img src="./images/headphones.png">
    <a href="/home">Home</a>
    <ul>
        <!--All user-->
        <li><a href="/catalog">Catalog</a></li>
        <li><a href="/search">Search</a></li>
        ${isLog == true
            ?html`<li id="user1"><a href="/create">Create Album</a></li>
            <li id="user2"><a href="/logout">Logout</a></li>`
            :html`<li id='guest1'><a href="/login">Login</a></li>
            <li id='guest2'><a href="/register">Register</a></li>`
            }
    </ul>
    </nav>

`


export function navUpdate() {
    let isLog = userData() != null
    render(temp(isLog), document.querySelector('header'))

    // if (userData() != null) {
    //     document.getElementById('user1').style.display = 'block';
    //     document.getElementById('user2').style.display = 'block';
    //     document.getElementById('guest1').style.display = 'none';
    //     document.getElementById('guest2').style.display = 'none';


    //     // document.querySelector('span.user').textContent = `Welcome, ${userData().email}`
    // } else {
    //     document.getElementById('user1').style.display = 'none';
    //     document.getElementById('user2').style.display = 'none';
    //     document.getElementById('guest1').style.display = 'block';
    //     document.getElementById('guest2').style.display = 'block';
    // }

}


{/* <nav>
<img src="./images/headphones.png">
<a href="/home">Home</a>
<ul>
    <!--All user-->
    <li><a href="/catalog">Catalog</a></li>
    <li><a href="/search">Search</a></li>
    <!--Only guest-->
    <li id='guest1'><a href="/login">Login</a></li>
    <li id='guest2'><a href="/register">Register</a></li>
    <!--Only user-->
    <li id="user1"><a href="/create">Create Album</a></li>
    <li id="user2"><a href="/logout">Logout</a></li>
</ul>
</nav> */}