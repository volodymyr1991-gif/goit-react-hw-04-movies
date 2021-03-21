import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchReviews } from "../../service/searchApi";

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    fetchReviews(this.props.match.params.movieId).then((response) =>
      this.setState({ reviews: response.data.results })
    );
  }

  render() {
    const { reviews } = this.state;
    return (
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}

Reviews.propTypes = {
  props: PropTypes.object,
};