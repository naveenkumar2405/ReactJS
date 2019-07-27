import React from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ""
    };
  }
  render() {
    return (
      <div className="list-group">
        {console.log(this.props.movies)}
        <ul className="list-group">
          {this.props.movies.map(movies => {
            return (
              <li key={movies} className="list-group-item">
                {movies.title}
                {/* <button onClick={this.props.delete}>delete</button> */}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;
