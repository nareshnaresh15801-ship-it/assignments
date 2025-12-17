

function Prop() {
  const cities = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
    { id: 4, name: "Orange" },
    { id: 5, name: "kiwi" },
  ];

  return (
    <div>
      <h1>Fruites</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Prop;