export default function Citylist() {
    const cities = ["Madurai","Chennai","Bangalore","Kerala","Mumbai"];

    return(
        <div style={{padding:"20px"}}>
            <h2>City list</h2>
            <ul>
                {cities.map((city,index) => (
                <li key={index}>{city}</li>
            ))}
            </ul>
        </div>
    );
}