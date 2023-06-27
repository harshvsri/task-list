import { ChangeEvent, MouseEvent, useState } from "react";
import List from "./List";

function InputBox() {
  const [list, setList] = useState([
    "This is a dummy task",
    "This is another dummy task",
  ]);

  const [task, setTask] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setTask(value);
  }

  function handleListClick(item: string) {
    setList(() => list.filter((task) => task !== item));
  }

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    // Stops from refreshing page.
    event.preventDefault();
    // Add to array of list
    setList((prevList) => [...prevList, task]);
    setTask("");
  }

  return (
    <>
      <div className="m-3 border border-dark rounded">
        <div className="input-group p-3">
          <input
            type="text"
            className="form-control"
            placeholder="What would you like to add?"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={handleChange}
            value={task}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onClick={handleClick}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <List list={list} onClick={handleListClick} />
    </>
  );
}

export default InputBox;
