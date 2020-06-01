import React from "react";
import { createStream } from "./../../actions";
import { connect } from "react-redux";
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };
  
  render() {
    return (
        <div>
            <h3>Create a Stream: </h3>
            <StreamForm onSubmit={this.onSubmit} />
        </div>
    )
  }
}


export default connect(null, { createStream })(StreamCreate);



//OLD CODE FOR NOTES BEFORE REFACTORING THIS COMPONENT TO USE THE COMMON FORM COMPONENT
// import React from 'react';
// import {Field, reduxForm} from 'redux-form';
// import { exact, object } from 'prop-types';
// import { createStream } from './../../actions';
// import {connect} from 'react-redux'

// class StreamCreate extends React.Component{

//     renderInput=({input, label, meta})=>{
//         const className = `field ${meta.error && meta.touched ? "error": ""}`;
//         return (
//           <div className = "${className}">
//             <label>{label}</label>
//             <input {...input} autoComplete="off"/>
//             <div>{this.renderError(meta)}</div>
//           </div>
//         );
//     }
//     onSubmit = (formValues) =>{
//         this.props.createStream(formValues);
//     }
//     renderError=(meta)=>{
//         const error = meta.error;
//         const touched = meta.touched;
//         if(touched && error){
//             return(
//             <div className="ui error message">
//                 <div className = "header">{error}</div>
//             </div>
//             )
//         }
//     }
//     render(){
//         return (
//           <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
//             <Field name="title" component={this.renderInput} label="Enter Title" />
//             <Field name="description" component= {this.renderInput} label="Enter a description"/>
//             <button className = "ui button primary">Submit</button>
//           </form>
//         );
//     }
// }

// const validate = (formValues) =>{
//     const errors = {};
//     if(!formValues.title){
//         errors.title = "You must enter a title";
//     }
//     if(!formValues.description){
//         errors.description = "You must enter a description";
//     }
//     return errors;
// }

// const formWrapped = reduxForm({
//     form: 'streamCreate', 
//     validate
// })(StreamCreate);

// export default connect(null, {createStream})(formWrapped);

//Field is a react component whereas reduxForm is a fn, therefore diff naming convention. 
// //redux form adds tons of props into our comp after configuration. 
// Field is just about hooking up the redux form magic, not for showing 
// input elements and all. 


// return (
//   <input onChange={formProps.input.onChange} value={formProps.input.value} />
// ) 

// return(
//             <input {...formProps.input}/>
//         )
//     }


// renderInput = ({ input }) => {
//   return <input {...input} />;
// };

// Field sends formProps to its component. formPorps has onchange, value etc  
// Redux from also sends props to our component like onFormSubmit. 
// this.props.handleSubmit(this.onSubmit), this.onSubmit is our custom callback function. 
// this.props.handleSubmit calls preventDefault so we dont have to call it and it is called with 
// the event object, not our callback is not called with event anymore. It is called with formValues. 

// handlesubmit is called, it processes the form etc and calls our callback with values. 

// Validating: 
// Our validate function is called everytime the form is rendered, or on any change happens to the form. 

// validate is called with formValues too. 
//validate sends the error (matches with the name of the field ) in a meta object which 
//also contains other things into our renderInput method. 

// validate is called everytime any interaction occurs, therefore meta is sent to renderItem and component is re-rendered 

//this.renderinput has to be an arrow fn, to be able to give access to this for the renderError fn. 
// because it is passed to coponent and loses the this inside of there. 



