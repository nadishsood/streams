import React from 'react';

class GoogleAuth extends React.Component{
    state = {isSignedIn: null};
    componentDidMount(){
        window.gapi.load("client: auth2", ()=>{
            window.gapi.client.init({
              clientId: `462063278023-ohi1u73j0v3sigkie80qu70l0tj4345v.apps.googleusercontent.com`, 
              scope: "email"
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    //custom function, not from google auth api
    onAuthChange=()=>{
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    };

    SignIn = () =>{
        this.auth.signIn();
    }

    SignOut = () =>{
        this.auth.signOut();
    }
    //

    renderAuthButton =()=>{
        if(this.state.isSignedIn === null){
            return null;
        }else if(this.state.isSignedIn){
            return(
                <button className = "ui red google button" onClick = {this.SignOut}>
                    <i className = "google icon" />
                    Sign Out
                </button>
            )
        }else{
            return (
              <button className="ui green google button" onClick = {this.SignIn}>
                <i className="google icon" />
                Sign in with Google
              </button>
            );
        }
    }

    render(){
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;