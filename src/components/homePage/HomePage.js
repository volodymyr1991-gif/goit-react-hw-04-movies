import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchTrends } from "../../service/searchApi";
import { mainRoutes } from "../../routes/mainRoutes";

import styles from "./HomePage.module.css";
import Spiner from "../loader/Loader";

export default class HomePage extends Component {
  state = {
    films: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetchTrends()
      .then((response) =>
        this.setState({
          films: response.data.results,
        })
      )
      .catch((error) => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { films, isLoading } = this.state;
    return (
      <>
        <h2 className={styles.title}>Trend on this day</h2>
        {isLoading && <Spiner />}
        <ul className={styles.list}>
          {films.map((film) => (
            <li key={film.id} className={styles.listItem}>
              <Link
                className={styles.link}
                to={{
                  pathname: `${mainRoutes[1].path}/${film.id}`,
                  state: { from: this.props.location },
                }}
              >
                {film.poster_path ? (
                  <img
                    className={styles.listImage}
                    src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                    alt={film.original_title}
                  />
                ) : (
                  <img
                    className={styles.listImage}
                    src={`https://wiki.tripwireinteractive.com/images/4/47/Placeholder.png`}
                    alt={film.original_title}
                  />
                )}

                {film.original_title ? (
                  <span>{film.original_title}</span>
                ) : (
                  <span>{film.name}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

HomePage.propTypes = {
  props: PropTypes.object,
};