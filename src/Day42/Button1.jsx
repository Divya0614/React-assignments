function Button1({text,color="blue",size="medium"}){
    const styles = {
        small: "8px 14px",
        medium: "10px 20px",
        large: "14px 28px"
        
    };
    return(
        <button style={{
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius:"6px",
            cursor:"pointer",
            margin:"5px"
        }}>
            {text}
        </button>
    );
    }
    export default Button1;