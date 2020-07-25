import React, { Component } from 'react';
import Contact from './Contact'

import { Consumer } from "../../Context";

export class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                Contact
                <span className="text-danger">
                  List
                </span>
              </h1>
              {value.contacts.map((contact) => (
                <Contact
                  contact={contact}
                  id={contact.id}
                  key={contact.id}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    )
  }
}

export default Contacts;
