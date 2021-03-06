import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login'

export default class Fackbook extends Component {
    state ={
        isLoggedin: false,
        userID:"",
        name:"",
        email:"",
        picture:""
    }
    
    responseFacebook = response => {
        console.log(response)

        this.setState({
            isLoggedin: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        })
    }

    componentClicked = () => console.log('clicked')

    render() {
        let fbContent

        if(this.state.isLoggedin){
            fbContent = (
                <div style={{
                    width:'400px',
                    margin:'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                    color: 'black'
                }}>
                    <img src={this.state.picture} alt={this.state.name}/>
                    <h2>Welcome {this.state.name}</h2>
                    <h4>Email {this.state.email}</h4>
                </div>
            )
        } else {
            fbContent = (
                <FacebookLogin
                appId="2233095280116749"
                autoLoad={false}
                fields="name,email,picture"
                callback={this.responseFacebook} />
            )
        }

        return (
            <div>
                {fbContent}
            </div>
        )
    }
}