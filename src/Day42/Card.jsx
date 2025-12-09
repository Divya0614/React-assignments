import { Children } from "react";

function Card({Children})  {
    const cardstyle ={
        border : "1px solid blue",
        padding: "16px",
        margin: "10px",
        boxshadow: "2px 2px 8px red"
    };
    return
        <div style={cardstyle}>{Children}
        <h2>This is card</h2>
        </div>;
    
}
export default Card;