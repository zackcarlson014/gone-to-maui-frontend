import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import GoogleLogin from 'react-google-login';
import { Button, Form, Grid, Header, Segment, Message, Icon } from 'semantic-ui-react'


export class Login extends Component {

    state = {
        username: '',
        password: '',
        error: null
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        window.scrollTo(100, 100)
    }

    responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj)
      }

    handleSubmit = (e) => {
        e.preventDefault();

        const reqObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/api/v1/auth', reqObj)
        .then(resp => resp.json())
        .then(data => {
            if (data.error) {
                this.setState({
                    error: data.error
                })
            } else {
                this.props.loginSuccess(data)
                this.props.history.push('/profile')
                localStorage.setItem('my_app_token', data.token)
            }
        })
    }

    render() {
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        {this.state.error ? <Header as='h4' block style={{color: 'red'}} textAlign='center'><Icon name='user'/>{this.state.error}</Header> : null}
                        <Header as='h2' icon style={{color: 'white'}} textAlign='center'>
                            <Icon name='book' circular />
                            <Header.Content>Gone to Maui</Header.Content>
                        </Header>
                        <Form size='large' onSubmit={this.handleSubmit}>
                            <Segment stacked>
                                <Form.Input onChange={this.handleInputChange} icon='user' name='username' value={this.state.username} iconPosition='left' placeholder='Username' />
                                <Form.Input
                                    onChange={this.handleInputChange}
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    name='password'
                                    value={this.state.password}
                                    type='password'
                                />
                                <Button color='blue' fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            New to us? <Button as={ Link } exact to={`/users/new`} color='green' size='mini'>Sign Up</Button>
                        </Message><br/><br/>
                        <Grid textAlign='center'>
                            <GoogleLogin
                                onClick={this}
                                clientId="785444074989-mrk0omnv94oc7f03c0rohh3k56j6qdf6.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </Grid>
                    </Grid.Column>
                </Grid>
                <Footer/>
            </div>
        )
    }
}

export default Login
