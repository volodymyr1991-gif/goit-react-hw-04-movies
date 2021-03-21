import React, { Component } from 'react';
import fetchFilmInfo from '../service/TvApi';

export default class ShowDetails extends Component {
  state = { show: null };

  componentDidMount() {

    fetchFilmInfo(this.props.match.params.showId)
      .then(show => this.setState({ show }));
  }

  render() {
    return (
      <div>
        {this.state.show && (
          <>
            <img
              src={this.state.show.image.medium}
              alt={this.state.show.name}
            />
            <h1>{this.state.show.name}</h1>
          </>
        )}
      </div>
    );
  }
}