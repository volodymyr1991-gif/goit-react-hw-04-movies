import React, { Component } from "react";
import PropTypes from "prop-types";

import { fetchCast } from "../../service/searchApi";

import styles from "./Cast.module.css";

export default class Cast extends Component {
  state = {
    casts: [],
  };
  componentDidMount() {
    fetchCast(this.props.match.params.movieId).then((response) =>
      this.setState({ casts: response.data.cast })
    );

    console.log('Запустився');
  }

  render() {
    const { casts } = this.state;
    return (
      <>
        <ul className={styles.list}>
          {casts.map((cast) => (
            <li key={cast.id} className={styles.item}>
              {cast.profile_path ? (
                <img
                  className={styles.image}
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt={cast.name}
                />
              ) : (
                <img
                  className={styles.image}
                  src="https://wiki.tripwireinteractive.com/images/4/47/Placeholder.png"
                  alt={cast.name}
                />
              )}
              <p className={styles.name}>{cast.original_name}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

Cast.propTypes = {
  props: PropTypes.object,
};