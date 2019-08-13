import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <React.Fragment>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>Dropdown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>View profile</DropdownItem>
            <DropdownItem>Sign out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div class="pa4 tc">
          <img src="http://tachyons.io/img/logo.jpg" class="br-100 ba h3 w3 dib" alt="avatar" />
        </div>
      </React.Fragment>
    );
  }
}

export default ProfileIcon;
