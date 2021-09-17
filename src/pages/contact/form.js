import React from "react";
import "./form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: "",
      mobile: "",
      fullname: "",
    };
  }
  handleInput = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <form style={{ font: "message-box" }}>
        <label>
          Full Name:
          <input name="fullname" onChange={this.handleInput} type="text" />
        </label>
        <label>
          Mobile Number:
          <input name="mobile" onChange={this.handleInput} type="text" />
        </label>
        <label>
          Email:
          <input name="email" onChange={this.handleInput} type="text" />
        </label>
        <label>
          Message:
          <textarea name="message" onChange={this.handleInput} type="text" />
        </label>
        <input className="send" type="submit" value="Send" />
      </form>
    );
  }
}

export default Form;
