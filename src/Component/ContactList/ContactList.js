import { Component } from "react";
import PropTypes from "prop-types";
import { Fragment } from "react/cjs/react.production.min";
import ContactItem from "../ContactItem/ContactItem";

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map((contact) => {
          return (
            <Fragment key={contact.id}>
              <ContactItem
                name={contact.name}
                number={contact.number}
                onDeleteNumber={this.props.onDeleteContact}
              />
            </Fragment>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;