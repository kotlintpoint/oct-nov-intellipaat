import React from "react";

class PersonClass extends React.Component {
    render() {

        // console.log(this.props);

        return(
            <div style={{ backgroundColor: "yellow" }}>
                <h2>Welcome to Person Class Component</h2>
                <h3>Person Name : {this.props.personName}</h3>
            </div>
        )
    }
}

export default PersonClass;