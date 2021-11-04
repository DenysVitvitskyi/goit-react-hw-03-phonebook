import { Component } from "react";
import PropTypes from "prop-types";
import css from "./ContactItem.module.css";

class ContactItem extends Component {
  render() {
    return (
      <li className={css.item}>
        <span className={css.name}>{`${this.props.name}:`}</span>
        <span className={css.number}>{this.props.number}</span>
        <button
          type="submit"
          className={css.button}
          onClick={() => this.props.onDeleteNumber(this.props.name)}
        >
          Delete
        </button>
      </li>
    );
  }
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteNumber: PropTypes.func,
};

export default ContactItem;