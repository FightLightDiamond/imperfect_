import React from "react"
import HomeView from "../resources/views/Frontend/HomeView"
import {Route, Redirect} from 'react-router-dom'
import AboutView from "../resources/views/Frontend/AboutView"
import GuestRouteGroup from "./Group/GuestRouteGroup"
import UserRouteGroup from "./Group/UserRouteGroup"
import AdminRouteGroup from "./Group/AdminRouteGroup"
import My404View from '../../src/resources/views/My404View'
import {createBrowserHistory} from "history";
import {
    MAIN_PATH,
    ABOUT_PATH,
    NOT_FOUND_PATH,
} from './RouteType/GuestRouteType'

const history = createBrowserHistory();

const MainRoutePlace = (props) => {
    return (
        <div className="main-route-place">
            {/*<Router history={history}>*/}
                <Route exact path={MAIN_PATH} component={HomeView}/>
                <Route path={ABOUT_PATH} component={AboutView}/>

                <GuestRouteGroup {...props}/>
                <UserRouteGroup {...props}/>
                <AdminRouteGroup {...props}/>
                <Route path={NOT_FOUND_PATH} component={My404View}/>
                <Redirect from='*' to={history.location.pathname || {NOT_FOUND_PATH}}/>
            {/*</Router>*/}
        </div>
    )
}

export default MainRoutePlace
