

function City() {
  const cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];

  return (
    <div>
      <h1>City List</h1>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default City;