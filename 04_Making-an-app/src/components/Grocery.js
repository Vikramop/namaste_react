const Grocery = () => {
  return (
    <div>
      <h1>Grocery List</h1>
      <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <button
          text="Add Item"
          onClick={() => {
            alert('Item added');
          }}
        >
          add items
        </button>
      </ul>
    </div>
  );
};

export default Grocery;
