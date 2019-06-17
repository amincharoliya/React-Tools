import React, { Component } from 'react';
import firebase from './firebase';
import '../../css/secret-form.scss';
import randomName from './random-names';

class CreateSecret extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('secrets');
    this.state = {
      name: randomName(),
      secret: '',
    };
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, secret } = this.state;

    this.ref.add({
      name,
      secret,
    }).then(() => {
      this.setState({
        name: '',
        secret: '',
      });
      this.props.history.push('/secrets');
    })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }

  render() {
    const { name, secret } = this.state;
    return (
      <div className="Secret-form wrapper">
        <h2 style={ { color:'white', textAlign:'center' } }>Add Your Secret</h2>
        <form onSubmit={this.onSubmit}>
          <p>
            <label htmlFor="name">Name:*</label>
            <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="name" required/>
          </p>
          <p>
            <label htmlFor="secret">Secret:*</label>
            <textArea className="form-control" name="secret" onChange={this.onChange} placeholder="secret" cols="80" rows="3" required>{secret}</textArea>
          </p>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
}

export default CreateSecret;
