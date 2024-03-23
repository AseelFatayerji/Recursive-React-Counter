import "../CSS/App.css";

function App() {
  const createElement = (id) => {
    const item = document.createElement("div");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const label = document.createElement("label");

    label.innerText = "-" + id;
    btn1.innerText = "+";
    btn2.innerText = "-";

    btn1.onclick = add;
    btn2.onclick = remove;

    item.classList.add("margin");
    item.setAttribute("postid", "-1");
    item.appendChild(label);
    item.appendChild(btn1);
    item.appendChild(btn2);
    return item;
  };
  const add = (item) => {
    const div = item.target.parentElement;
    const id = parseInt(div.getAttribute("postid")) + div.children.length - 1;
    const newElement = createElement(id);
    div.appendChild(newElement);
  };
  const remove = (item) => {
    const div = item.target.parentElement;
    if (div.parentElement.children.length != 1) {
      const id = parseInt(div.parentElement.getAttribute("postid"))+1
      div.parentElement.setAttribute("postid", id);
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
