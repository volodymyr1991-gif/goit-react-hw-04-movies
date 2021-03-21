  
import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "../form/Form";
import { fetchItems, fetchTrends } from "../../service/searchApi";
import getQueryParams from "../../utils/getQueryString";

import styles from "../homePage/HomePage.module.css";
import { Link } from "react-router-dom";
import Spiner from "../loader/Loader";

// import { Form, Button } from "react-bootstrap";

export default class MoviesPage extends Component {
  state = {
    searchQuery: [],
    error: null,
    isLoading: false,
  };

  componentDidMount() {

   
    const { query } = getQueryParams(this.props.location.search);
    this.setState({ isLoading: true });
    if (query) {
      return fetchItems(query)
        .then((response) =>
          this.setState({ searchQuery: response.data.results })
        )
        .catch((err) => this.setState({ error: err }))
        .finally(() => this.setState({ isLoading: false }));
    }
    fetchTrends()
      .then((response) => this.setState({ searchQuery: response.data.results }))
      .catch((err) => this.setState({ error: err }))
      .finally(() => this.setState({ isLoading: false }));
  }
  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.setState({ isLoading: true });
      fetchItems(nextQuery)
        .then((response) =>
          this.setState({
            searchQuery: response.data.results,
          })
        )
        .catch((err) => this.setState({ error: err }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { isLoading, error } = this.state;
    return (
      <>
        {error && <h2>ERROR</h2>}
        <Form searchQuery={this.handleQuery} />
        <h2 className={styles.title}>Movies</h2>
        {isLoading && <Spiner />}
        {this.state.searchQuery.length > 0 && (
          <ul className={styles.list}>
            {this.state.searchQuery.map((film) => (
              <li key={film.id} className={styles.listItem}>
                <Link
                  className={styles.link}
                  to={{
                    pathname: `${this.props.match.url}/${film.id}`,
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

                  {film.original_title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

MoviesPage.propTypes = {
  props: PropTypes.object,
};