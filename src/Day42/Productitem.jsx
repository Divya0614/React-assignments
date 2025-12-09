function Productitem({title,price}){
    return(
        <div style={{
            border:"1px solid black",
            padding:"15px",
            borderRadius: "8px",
            width:"250px",
            margin:"10px",
            boxshadow:"2px 2px 8px pink"
        }}>
            <h3>{title}</h3>
            <p style={{fontWeight:"bold"}}>{price}</p>
        </div>
    );
}

export default Productitem;