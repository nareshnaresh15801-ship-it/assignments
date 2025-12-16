export default function Card({ children }) {
  return (
    <div style={{ padding: "16px", border: "1px solid #ccc", borderRadius: "8px" }}>
      {children}
    </div>
  );
}