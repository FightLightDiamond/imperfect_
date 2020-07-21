import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import {Provider} from 'react-redux';
import {configureStore} from '../src/stores/redux/store';
import {Container} from "react-bootstrap";
import NavbarTop from "./components/layout/NavbarTop";
import MainRoutePlace from "./routers/MainRoutePlace";

class App extends React.Component {
    render() {
        return (
            <Provider store={configureStore()}>
                <BrowserRouter>
                    <NavbarTop/>

                    <Container style={{padding: "20px 0"}}>
                        <MainRoutePlace/>
                    </Container>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
