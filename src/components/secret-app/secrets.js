import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebase';
import '../../css/secret.scss';

class Secret extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('secrets');
    this.unsubscribe = null;
    this.state = {
      secretsNotes: [],
      loading : true
    };
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  onCollectionUpdate = (querySnapshot) => {
    const Notes = [];
    querySnapshot.forEach((doc) => {
      const { name, secret } = doc.data();
      Notes.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        secret,
      });
    });
    this.setState({ secretsNotes: Notes, loading: false });
  }

  render() {
    return (
      <div className="wrapper secretList">
        <Link to="/add-secret" className="add-secret-button" title="Add Your Secret">
          <span role='img' aria-label="Write">➕</span>
        </Link>
        <h2 style={{color: 'white', textAlign: 'center', marginBottom: '75px'}}>Secrets</h2>
        <p className={this.state.loading ? 'loading' : 'hidden'}>Loading...</p>
        {this.state.secretsNotes.map(note => <p className="secret" key="Math.random()"> <span className="name">{ note.name }:</span>{ note.secret }</p>)}
        {console.log(this.state.secretsNotes)}
      </div>
    )   
  }
}

export default Secret;
