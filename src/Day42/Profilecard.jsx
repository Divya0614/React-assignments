function Profilecard({name,job,avatar}){
    return(
        <div style={{
            border: "1px solid blue",
            padding: "1px",
            borderRadius: "10px",
            width:"250px",
            textAlign:"center",
            margin:"20px auto"
        }}>
            <h2>{name}</h2>
            <p>{job}</p>
        </div>
    );

}

export default Profilecard;