import React from "react"
import HomeView from "../resources/views/Frontend/HomeView"
import {Route, Redirect} from 'react-router-dom'
import AboutView from "../resources/views/Frontend/AboutView"
import GuestRouteGroup from "./Group/GuestRouteGroup"
import UserRouteGroup from "./Group/UserRouteGroup"
import AdminRouteGroup from "./Group/AdminRouteGroup"
import My404View from '../../src/resources/views/My404View'
// import {createBrowserHistory} from "history";
import {
    ABOUT_PATH,
    ADMIN_LOGIN_PATH,
    MAIN_PATH,
    NOT_FOUND_PATH,
} from './RouteType/GuestRouteType'
import LoginView from "../resources/views/Administrator/Auth/LoginView";

// const history = createBrowserHistory();

const MainRoutePlace = (props) => {
    return (
        <div className="main-route-place">
            {/*<Router history={history}>*/}
                <Route exact path={MAIN_PATH} component={HomeView}/>
                <Route path={ABOUT_PATH} component={AboutView}/>
                <Route path={ADMIN_LOGIN_PATH} component={LoginView}/>

                <AdminRouteGroup {...props}/>
                <GuestRouteGroup {...props}/>
                <UserRouteGroup {...props}/>

                <Route path={NOT_FOUND_PATH} component={My404View}/>
                {/*<Redirect from='*' to={{NOT_FOUND_PATH}}/>*/}
            {/*</Router>*/}
        </div>
    )
}

export default MainRoutePlace
