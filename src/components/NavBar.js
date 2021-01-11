import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Header, Dropdown, Icon, Menu } from 'semantic-ui-react'

export class NavBar extends Component {
  state = { 
    activeItem: 'green'
  }

  handleLogout = () => {
    localStorage.removeItem('my_app_token')
    this.props.logoutUser()
  }

  // handleItemClick = (e, { name }) => {
  //   this.setState({
  //     activeItem: name
  //   })
  // }

  render() {
    const { activeItem } = this.state
    const style = {
      position: "fixed",
        width: "100%",
        zIndex: "999"
    }

    return (
      <Menu inverted color='black' style={style}>
        <Menu.Item
          header
          as={NavLink}
          to='/dashboard'
          // name='home'
          // active={activeItem === 'home'}
          // onClick={this.handleItemClick}
        >
          <Icon name='plane' />G2M
        </Menu.Item>
        <Menu.Item
          header
          as={NavLink}
          to='/test'
          // name='home'
          // active={activeItem === 'home'}
          // onClick={this.handleItemClick}
        >
          <Icon name='tree' />Explore
        </Menu.Item>
        <Dropdown item text={<div><Icon name='tree'/>Explore</div>} simple>
          <Dropdown.Menu>
            <Dropdown.Item as={ NavLink } to='/books'>All Books</Dropdown.Item>
            <Dropdown.Item as={ NavLink } to='/reserved_books'>My Reserved Books</Dropdown.Item>
            <Dropdown.Item>
                <Icon name='book' />
                <span className='text'>Add</span>
                <Dropdown.Menu>
                  <Dropdown.Item as={ NavLink } to='/user_lib_books/new'>Library Books</Dropdown.Item>
                  <Dropdown.Item as={ NavLink } to='/user_wish_books/new'>WishList Books</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {
            this.props.auth ? 
            <Menu.Item
            position='right'
            as={NavLink}
            to='/'
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleLogout}
            >
            Logout
            </Menu.Item>
            :
            <Menu.Item
            position='right'
            as={NavLink}
            to='/'
            name='login'
            active={activeItem === ''}
            onClick={this.handleItemClick}
            >
            Login
            </Menu.Item>
        }
        {/* <Menu.Menu position='right'>
        <div className='ui right aligned category search item'>
          <div className='ui transparent icon input'>
            <input
              className='prompt'
              textColor='white'
              type='text'
              placeholder='Search Notes...'
            />
            <i className='search link icon' />
          </div>
          <div className='results' />
        </div>
      </Menu.Menu> */}
      </Menu>
    )
  }
}

export default connect()(NavBar)