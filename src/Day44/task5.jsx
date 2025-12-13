export default function Citylist2() {
    const cities =[];
    return(
        <div style={{padding:"20px"}}>
            <h2>City list</h2>

            {cities.length === 0 ? (
                <p>No Data Available</p>
            ) : (
                <ul>
                    {cities.map((city) => (
                        <li key={city.id}>{city.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}