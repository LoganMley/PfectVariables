import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import LayoutRoute from './LayoutRoute';
import GuestLayoutRoute from './GuestLayoutRoute';
import PrivateLayoutRoute from './PrivateLayoutRoute';


function App() {
    return(
        <BrowserRouter>
            <Switch>
                <LayoutRoute path="/" exact={true} component={HomeScreen} />
                <LayoutRoute path="/about" exact={true} component={AboutScreen} />
                <LayoutRoute path="/contact" exact={true} component={ContactScreen} />
                <LayoutRoute path="/register" exact={true} component={RegistrationScreen} />
                <LayoutRoute path="/login" exact={true} component={LoginScreen} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;