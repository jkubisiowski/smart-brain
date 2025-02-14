import React from 'react';
import './Profile.css';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.user);

    this.state = {
      name: this.props.user.name,
      age: this.props.user.age,
      pet: this.props.user.pet
    };
  }

  onFormChange = event => {
    switch (event.target.name) {
      case 'user-name':
        this.setState({ name: event.target.value });
        break;
      case 'user-age':
        this.setState({ age: event.target.value });
        break;
      case 'user-pet':
        this.setState({ pet: event.target.value });
        break;
      default:
        return;
    }
  };

  onProfileUpdate = data => {
    fetch(`http://localhost:3000/profile/${this.props.user.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ formInput: data })
    })
      .then(response => {
        this.props.toggleModal();
        this.props.loadUser({ ...this.props.user, ...data });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { user } = this.props;
    const { name, age, pet } = this.state;
    return (
      <div className="profile-modal">
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
          <main className="pa4 black-80 w-80">
            <img src="http://tachyons.io/img/logo.jpg" className="h3 w3 dib" alt="avatar" />
            <h1>{this.state.name}</h1>
            <h4>Image submitted: {user.entries}</h4>
            <p>Member since: Januray</p>
            <hr />

            <label className="mt2 fw6" htmlFor="user-name">
              Name:
            </label>
            <input
              className="pa2 ba w-100"
              type="text"
              name="user-name"
              id="user-name"
              placeholder="Username"
              onChange={this.onFormChange}
            />
            <label className="mt2 fw6" htmlFor="user-age">
              Age:
            </label>
            <input
              className="pa2 ba w-100"
              type="text"
              name="user-age"
              id="user-age"
              placeholder="Age"
              onChange={this.onFormChange}
            />
            <label className="mt2 fw6" htmlFor="user-pet">
              Pet:
            </label>
            <input
              className="pa2 ba w-100"
              type="text"
              name="user-pet"
              id="user-pet"
              placeholder="Pet"
              onChange={this.onFormChange}
            />
            <div className="mt4" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <button
                className="b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20"
                onClick={() => this.onProfileUpdate({ name, age, pet })}
              >
                Save
              </button>
              <button
                className="b pa2 grow pointer hover-white w-40 bg-light-red b--black-20"
                onClick={this.props.toggleModal}
              >
                Cancel
              </button>
            </div>
          </main>
          <div className="modal-close" onClick={this.props.toggleModal}>
            &times;
          </div>
        </article>
      </div>
    );
  }
}

export default Profile;
