import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch, Redirect} from "react-router-dom"
import PropTypes from "prop-types"
import {Provider} from "react-redux"
import createStore from "./stores/Index"
import history from "./routers/history"
import './index.css';
import SignInComponent from "./containers/SignIn"
import SignUpComponent from "./containers/SignUp"
import * as serviceWorker from './serviceWorker';

const Root = ({store}) => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                {/* <Route path='/'>
                    <Redirect to="/login"/>
                </Route> */}
                <Route path="/signin" exact component={SignInComponent}/>
                <Route path="/signup" exact component={SignUpComponent}/>
            </Switch>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

// const splashScreen = document.getElementById("splash_screen")
// splashScreen.parentNode.removeChild(splashScreen)

ReactDOM.render(
    <Root store={createStore()} />,
    document.getElementById("root")
)

// Old Code create react app
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
