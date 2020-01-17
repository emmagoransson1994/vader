import React from "react"; 

class Vader extends React.Component {
    render(){
        return(
            <div> 
                { this.props.city && this.props.country && <p>Plats: { this.props.city }, { this.props.country }</p>  }
                { this.props.temperature && <p>Temperatur: { this.props.temperature } grader</p> }
                { this.props.humidity &&  <p>Luftfuktighet: { this.props.humidity }</p> }
                { this.props.wind &&  <p>Vindstyrka: { this.props.wind } m/s</p> }
                { this.props.description && <p>Övrigt: { this.props.description }</p> }
                { this.props.error && <p>{ this.props.error }</p> }
            </div>
        );
    }
}; 

export default Vader;