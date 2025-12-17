

function EmptyArray() {
  const data = [];

  return (
    <div>
      {data.length === 0 ? (
        <p>No Data Available</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmptyArray;