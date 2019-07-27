import React from "react";
import Form from "./Form";
import List from "./List";
import axios from "axios";
// import image from "./b.gif";

// const movies = [];

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: false
    };
  }

  componentDidMount = () => {
    this.setState({
      loading: true
    });
    axios
      .get("http://localhost:8080/posts")
      .then(response => {
        setTimeout(
          this.setState({
            movies: response.data,
            loading: false
          }),
          3000000
        );
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  upload = item => {
    const id = this.state.movies.length + 1;
    const record = { id: id, title: item };
    axios
      .post("http://localhost:8080/posts", record)
      .then(this.componentDidMount());
    this.setState({
      movies: [...this.state.movies, record]
    });
  };

  //  handleDelete = i => {
  //       alert("g")
  //  }

  render() {
    let loading = "";
    // if (this.state.loading) {
    //   loading = <div><p>Loading... Please wait!</p><img src={image}></img></div>;
    // }
    return (
      <div>
        <p>{this.state.name}</p>
        <Form upload={this.upload} />
        {loading}
        <List movies={this.state.movies} delete={this.state.handleDelete} />
      </div>
    );
  }
}
export default Parent;
