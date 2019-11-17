const React = require('react');
const ReactDOM = require('react-dom');
const { 
  Route, 
  Link, 
  Switch,
  BrowserRouter 
} = require('react-router-dom');



/* Import Components */
const HelloWorld = require('./components/HelloWorld');

/* Import page */
const Login = require('./pages/Login');

class App extends React.Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={HelloWorld}/>

          <Route exact path='/login' component={Login}/>
          
        </Switch>
      </div>
    )
    return (
      <BrowserRouter>
        <Switch>
          <App/>
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, 
    document.getElementById('main'));