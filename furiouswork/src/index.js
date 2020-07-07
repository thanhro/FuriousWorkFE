import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import createStore from './stores/Index'
import history from './routers/history'
// import './index.css'
import SignInComponent from './containers/SignIn'
import SignUpComponent from './containers/SignUp'
import HomeComponent from './containers/Home'
import * as serviceWorker from './serviceWorker'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/signin" exact component={SignInComponent} />
                <Route path="/signup" exact component={SignUpComponent} />
                <Route path="/home" exact component={HomeComponent} />
            </Switch>
        </Router>
    </Provider>
)

Root.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    store: PropTypes.object.isRequired,
}

ReactDOM.render(
    <Root store={createStore()} />,
    document.getElementById('root'),
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
serviceWorker.unregister()
