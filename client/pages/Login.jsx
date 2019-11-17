const React = require('react');

module.exports = class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  onSubmit(event){
    if(this.state.email != '' && this.state.password != ''){
      alert('A name was submitted: ' + this.state.email);
      this.props.history.push('/dashboard');
      return;
    }  
    alert('please authenticate');
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
        <label><b>Username</b></label>
        <input 
          type="text" 
          placeholder="Enter Username" 
          value={this.state.email}
          onChange={this.handleEmailChange}
          required /> 

        <label><b>Password</b></label>
        <input 
          type="password" 
          placeholder="Enter Password" 
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