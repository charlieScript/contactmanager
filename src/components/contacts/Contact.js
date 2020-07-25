import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../Context';
import axios from 'axios';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContactInfo: false,
    };
  }

  showInfo = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo,
    });
  };

  delContact = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({
        type: 'DELETE_CONTACT',
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: 'DELETE_CONTACT',
        payload: id,
      });
    }
  };

  render() {
    const { showContactInfo } = this.state;
    const { name, email, phone, id } = this.props.contact;
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{' '}
                <i
                  style={{ cursor: 'pointer' }}
                  onClick={this.showInfo}
                  className="fas fa-sort-down"
                ></i>
                <i
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.delContact.bind(this, id, value.dispatch)}
                  className="fas fa-times"
                ></i>
                <Link to={`contact/edit/${id}`}>
                  <i
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      marginRight: '1rem',
                    }}
                    className="fas fa-pencil-alt"
                  ></i>
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
