function Studentinfo(props) {
    return(
        <div>
            <h2>Student Info</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
}

export default Studentinfo;