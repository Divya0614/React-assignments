function Layout({children}) {
    return(
        <div style = {{
            padding:"20px",
            border:"2px solid blue",
            borderRadius:"10px",
            background:"blue",
            margin:"20px"
        }}>
            {children}
        </div>
    );
}
export default Layout;