import page from '../node_modules/page/page.mjs'
import { navUpdate } from './tools/updateNav.js';
import { allMemesView } from './views/allMemes.js';
import { createView } from './views/create.js';
import { details } from './views/details.js';
import { edit } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { logoutF } from './views/logout.js';
import { profileView } from './views/profile.js';
import { registerView } from './views/register.js';


page('/', homeView);
page('/home', homeView);
page('/login', loginView);
page('/register', registerView);
page('/profile', profileView);
page('/create', createView);
page('/allMemes', allMemesView);
page('/logout', logoutF);
page('/details/:id', details);
page('/edit/:id', edit)

homeView()


page.start();

navUpdate();