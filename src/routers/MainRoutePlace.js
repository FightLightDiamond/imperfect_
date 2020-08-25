import React from "react";
import HomeView from "../resources/views/Frontend/HomeView";
import {Route} from 'react-router-dom'
import AboutView from "../resources/views/Frontend/AboutView";
import GuestRouteGroup from "./Group/GuestRouteGroup";
import UserRouteGroup from "./Group/UserRouteGroup";
import AdminRouteGroup from "./Group/AdminRouteGroup";

export default class MainRoutePlace extends React.Component {

    render() {
        const {isAuthenticated} = this.props

        return (
            <div className="main-route-place">
                <Route exact path="/" component={HomeView}/>
                <Route path="/about" component={AboutView}/>

                <GuestRouteGroup isAuthenticated={isAuthenticated}/>
                <UserRouteGroup isAuthenticated={isAuthenticated}/>
                <AdminRouteGroup isAuthenticated={isAuthenticated}/>
                {/*<Route path='/404' component={My404View}/>*/}
                {/*<Redirect from='*' to='/404'/>*/}

            </div>
        );
    }
}
