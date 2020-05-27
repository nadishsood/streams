import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from './../actions'; 


class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load("client: auth2", ()=>{
            window.gapi.client.init({
              clientId: `462063278023-ohi1u73j0v3sigkie80qu70l0tj4345v.apps.googleusercontent.com`, 
              scope: "email"
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                //we couldve used if conditions here too, but we reuse our code instead
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    //custom function, not from google auth api
    onAuthChange=(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }    
    };

    SignIn = () =>{
        this.auth.signIn();
    }

    SignOut = () =>{
        this.auth.signOut();
    }
    //

    renderAuthButton =()=>{
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
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

const mapStateToProps = state => {
  return {isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);