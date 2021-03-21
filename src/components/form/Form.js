import React, { Component } from "react";

import styles from "./Form.module.css";
import { Form } from "react-bootstrap";

export default class Forma extends Component {
  state = {
    query: "",
  };
  componentDidMount() {
    console.log("object");
  }

  handleChange = (e) => this.setState({ query: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchQuery(this.state.query);
    this.setState({ query: "" });
  };
  render() {
    return (
      <div className={styles.container}>
        <Form  onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Search..."
              name="query"
              onChange={this.handleChange}
              value={this.state.query}
            />
          </Form.Group>
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
      </div>
      // <form className={styles.form} onSubmit={this.handleSubmit}>
      //   <label className={styles.label}>
      //     <input
      //       className={styles.input}
      //       type="text"
      //       value={this.state.query}
      //       onChange={this.handleChange}
      //     ></input>
      //   </label>
      //   <button className={styles.button} type="submit">
      //     Search
      //   </button>
      // </form>
    );
  }
}
