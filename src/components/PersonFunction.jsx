
const PersonFunction = (props) => {
    /*
    props are immutable (not changeable)
     
    */
    // console.log(props);
    // props.personName = "Test";
    return (
        <div style={{ backgroundColor: "aqua" }}>
            <h2>Welcome to Person Function Component</h2>
            <h3>Person Name : {props.personName}</h3>
            <h3>Total Cities : {props.cities.length}</h3>
        </div>
    )
}

export default PersonFunction;