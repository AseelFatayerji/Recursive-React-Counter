import "../CSS/App.css";

function App() {

  return (
    <div className="App">
      <div className="body" id="body">
          <div postid="-1">
            <label>-1</label> <button onClick={add}>+</button>
            <button onClick={remove}>-</button>
          </div>
      </div>
    </div>
  );
}

export default App;
