export function Tile({ value, onClick }) {
  return (
    <button style={{ height: "20px", width: "20px" }} onClick={onClick}>
      {value}
    </button>
  );
}
