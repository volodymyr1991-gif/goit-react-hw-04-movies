import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchFilmInfo } from "../../service/searchApi";
import { optionRoutes } from "../../routes/optionRoutes";

import styles from "./MovieDetailsPage.module.css";
import Spiner from "../loader/Loader";
import {Button} from 'react-bootstrap'


export default class MovieDetailsPage extends Component {
  state = {
    filmInfo: null,
    error: null,
    isLoading: false,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    fetchFilmInfo(this.props.match.params.movieId)
      .then((response) => this.setState({ filmInfo: response.data }))
      .catch((err) => this.setState({ error: err }))
      .finally(() => this.setState({ isLoading: false }));
  }

  handleGoBack = () => {
    console.log("hello");
    if (this.props.location.state && this.props.location.state.from) {
      return this.props.history.push(this.props.location.state.from);
    }
    this.props.history.push("/movies");
  };
  render() {
    const { filmInfo, isLoading } = this.state;
    return (
      <>
        {isLoading && <Spiner />}
        {filmInfo && (
          <div className={styles.container}>
            <div className={styles.view}>

            <Button 
            onClick={this.handleGoBack}
            variant="primary"
            > Go back</Button>
              {/* <button
                type="button"
                className={styles.button}
                onClick={this.handleGoBack}
              >
                Go back
              </button> */}
              <img
                className={styles.img}
                src={`https://image.tmdb.org/t/p/w500/${filmInfo.poster_path}`}
                alt={filmInfo.original_title}
              />
            </div>
            <div className={styles.about}>
              <h2 className={styles.name}>
                {filmInfo.original_title}
                {filmInfo.releaseYear}
              </h2>
              <p>User score: {filmInfo.vote_average * 10}% </p>
              <p className="bold">Overwiew</p>
              <p className={styles.overview}>{filmInfo.overview}</p>
              <p className="bold">Genres</p>
              <ul>
                {filmInfo.genres.map((genre) => (
                  <li className="genresList" key={genre.id}>
                    {genre.name}
                  </li>
                ))}
              </ul>
              <ul>
                {optionRoutes.map((option) => (
                  <li key={option.path} className={styles.list}>
                    <NavLink
                      className={styles.listLink}
                      activeClassName={styles.active}
                      to={{
                        pathname: `${this.props.match.url}${option.url}`,
                        state: { from: this.props.location.state.from },
                      }}
                    >
                      {option.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    );
  }
}

MovieDetailsPage.propTypes = {
  props: PropTypes.object,
};