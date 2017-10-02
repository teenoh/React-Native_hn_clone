import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation'

//import the welcome screen 
import Welcome from './screens/Home';

//import the Auth screens
import Login from './screens/Auth/login';
import Register from './screens/Auth/register';



// const HomeRoutes = TabNavigator({

// })

const App = StackNavigator({
    welcome: {
        screen: Welcome,
        navigationOptions: {
            title: 'Welcome to HackersNews Clone'
        }
    },
    login: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },
    register: {
        screen: Register,
        navigationOptions: {
            title: 'signup'
        }
    },
    // Tabs: {
    //     screen: HomeRoutes
    // }
})

export default App;