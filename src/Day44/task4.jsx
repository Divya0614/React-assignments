export default function CityList1() {
  const cities = [
    { id: 1, name: "Madurai" },
    { id: 2, name: "Chennai" },
    { id: 3, name: "Bangalore" },
    { id: 4, name: "Hyderabad" },
    { id: 5, name: "Mumbai" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>City List</h2>

      <ul>
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
}
