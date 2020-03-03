/* eslint no-restricted-globals:0 */
import Auth0Lock from 'auth0-lock'; 

var clientId = "QX5AUPQM4tdVHqst6S0zh01M8MQzUmtK";
var domain = "dev-1lob6mo9.auth0.com";
// var redirectUri = "http://localhost:3000/callback";
// var audience =  "https://dev-1lob6mo9.auth0.com/userinfo";

var auth0Options = {
  auth: {
    responseType: 'token id_token',
    redirectUrl: 'http://localhost:3000/Movie'
  },
  autoclose: true,
  oidcConformant: true
};


var lock = new Auth0Lock(clientId, domain, auth0Options);


export default class Auth {

  constructor() { 
    this.login = this.login.bind(this);

  }

  

  login(){
    lock.show();
    // this.auth0.authorize();
  }

  handleAuthentication(){
   
    lock.on("authenticated", function(authResult) {
      lock.getUserInfo(authResult.accessToken, function(error, profile) {
        if (error) {
          // Handle error
          return;
        }
     
        localStorage.setItem("accessToken", authResult.accessToken);
        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("profile", JSON.stringify(profile));
     
        console.log(authResult);
        // Update DOM
      });
    });
  }

  l

  logout(){
    localStorage.clear();
    localStorage.removeItem('accessToken');
    localStorage.removeItem('profile');
  }

  isAuthenticated(){
     let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
     return new Date().getTime() < expiresAt; 
  }

}