import React from "react"; 

class Form extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.getVader}> 
                <input type="text" name="city" placeholder="Stad"/> 
                <input type="text" name="country" placeholder="Land"/> 
                <button> Sök  </button>
            </form>
        );
    }
};

export default Form;