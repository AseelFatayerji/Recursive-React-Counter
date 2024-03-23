import "../CSS/App.css";

function App() {

  const add = (item) => {
    const div = item.target.parentElement;
    const id = parseInt(div.getAttribute("postid")) + div.children.length - 1;
    const newElement = createElement(id);
    div.appendChild(newElement);
  };
  const remove = (item) => {
    const div = item.target.parentElement;
    if (div.parentElement.children.length != 1) {
      div.remove();
    }
  };
  return (
    <div className="App">
      <div className="body" id="body">
        <div postid="-1">
          <label>-1</label> <button onClick={add}>+</button>
          <button onClick={remove}>-</button>
          <div className="margin" postid="-1">
            <label>-1</label> <button onClick={add}>+</button>
            <button onClick={remove}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
