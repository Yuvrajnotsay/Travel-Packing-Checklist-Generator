export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <input
        className="input-checkbox"
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="item-btn" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
