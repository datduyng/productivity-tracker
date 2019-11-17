const React = require('react');

module.exports = class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event){
    alert('A name was submitted: ' + this.state.value);
    console.log('submit', event);
  }
  handleEmailChange(event){
    this.setState({
      email: event.target.value
    });
  }
  handlePasswordChange(event){
    this.setState({
      password: event.target.value
    });
  }
  render() {
    return (
    <div className="form-input">
      <h1 style={{ textAlign: "center" }}>Login form</h1>
      <form
        className="form-inside-input"
        onSubmit={this.onSubmit}
      >
        <label htmlFor="uname"><b>Username</b></label>
        <input 
          type="text" 
          placeholder="Enter Username" 
          name="uname" 
          value={this.state.email}
          onChange={this.handleEmailChange}
          required /> 

        <label htmlFor="psw"><b>Password</b></label>
        <input 
          type="password" 
          placeholder="Enter Password" 
          name="psw" 
          value={this.state.password}
          onChange={this.handlePasswordChange}
          required />
        <button type="button" value="Submit" onClick={this.onSubmit}>
        </button>
      <input type="submit" value="Submit" onClick={this.onSubmit}/>
      </form>
    </div>
    );
  }
}
