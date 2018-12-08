import React, { Component } from 'react';

export default class FacebookLogin extends Component {

    componentDidMount(){
        window.fbAsyncInit = function(){
            window.FB.init({
                appId      : '2233095280116749',
                cookie     : true,
                xfbml      : true,
                version    : 'v3.2'
            });
            window.FB.getLoginStatus(function(response){
                if (response.status === 'connected') {
                    // Logged into your app and Facebook.
                    // console.log(response)
                    this.statusChangeCallback(response)
                  }
            }.bind(this))
        }.bind(this);

          (function(d, s, id){
             var js, fjs = d.getElementsByTagName(s)[0];
             if (d.getElementById(id)) {return;}
             js = d.createElement(s); js.id = id;
             js.src = 'https://connect.facebook.net/zh_TW/sdk.js#xfbml=1&version=v3.2&appId=235375220463729&autoLogAppEvents=1';
             fjs.parentNode.insertBefore(js, fjs);
           }(document, 'script', 'facebook-jssdk'));
    }

    statusChangeCallback(response) {
        console.log('statusChangeCallback');
        console.log(response);
        // The response object is returned with a status field that lets the
        // app know the current login status of the person.
        // Full docs on the response object can be found in the documentation
        // for FB.getLoginStatus().
        if (response.status === 'connected') {
          // Logged into your app and Facebook.
          console.log(this)
          this.testAPI();
        } else {
          // The person is not logged into your app or we are unable to tell.
        //   document.getElementById('status').innerHTML = 'Please log ' +
        //     'into this app.';
        }
    }

    checkLoginState() {
        window.FB.getLoginStatus(function(response) {
            this.statusChangeCallback(response);
        });
    }

    testAPI() {
        console.log('Welcome!  Fetching your information.... ');
        window.FB.api('/me', function(response) {
          console.log('Successful login for: ' + response.name);
        //   document.getElementById('status').innerHTML =
        //     'Thanks for logging in, ' + response.name + '!';
        });
    }

    render(){
        return (
            <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false"></div>
        )
    }
}