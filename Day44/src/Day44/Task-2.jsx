

function PremiumUseer() {
  const isPremiumUser = true; 

  return (
    <div>
      <h1>Welcome!</h1>
      {isPremiumUser && <button>Premium Feature</button>}
    </div>
  );
}

export default PremiumUseer;