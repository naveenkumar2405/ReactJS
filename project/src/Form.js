import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Guvi"
    };
  }

  handleClick = () => {
    this.setState({
      name: "Zen"
    });
  };

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <div className="form-group">
        <h1 onClick={this.handleClick}>{this.state.name}</h1>

        <input
          type="text"
          className="form-control"
          onChange={this.handleChange.bind(this)}
        />

        <button
          className="btn btn-primary btn-block"
          onClick={this.props.upload.bind(this, this.state.input)}
        >
          upload
        </button>
      </div>
    );
  }
}

export default Form;
