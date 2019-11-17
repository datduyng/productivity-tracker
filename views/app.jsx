const React = require('react');
const ReactDOM = require('react-dom');



/* Import Components */
const HelloWorld = require('./components/HelloWorld');

/* Import page */
const Login = require('./pages/Login');

module.exports = function App() {
    return (
        <main>
            <HelloWorld />
        </main>
    );
}

// ReactDOM.render(<App />, 
//     document.getElementById('main'));