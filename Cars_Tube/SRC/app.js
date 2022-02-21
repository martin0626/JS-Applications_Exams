import { createView } from "./Views/create.js";
import { detailsView } from "./Views/details.js";
import { editView } from "./Views/edit.js";
import { homeView } from "./Views/home.js";
import { loginView } from "./Views/login.js";
import { registerView } from "./Views/register.js";
import page from "../node_modules/page/page.mjs"
import { allView } from "./Views/allListngs.js";
import { searchView } from "./Views/byYear.js";
import { myListView } from "./Views/myListings.js";
import { logoutFunc } from "./Views/logout.js";
import { navUpdate } from "./Tools/updateNav.js";


page('/', homeView);
page('/home', homeView);
page('/login', loginView);
page('/register', registerView);
page('/details/:id', detailsView);
page('/edit/:id', editView)
page('/create', createView);
page('/all', allView);
page('/search', searchView);
page('/my', myListView);
page('/logout', logoutFunc);
homeView();


page.start();
navUpdate();