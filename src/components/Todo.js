import React, { useState } from "react";
import {
  CheckCircleFill,
  Circle,
  Trash,
  ArrowClockwise,
} from "react-bootstrap-icons";

function Todo({ todo }) {
  const [hover, setHover] = useState(false);

  return (
    <div className="todo">
      <div
        className="todo-container"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="check-todo">
          {todo.checked ? (
            <span className="checked">
              <CheckCircleFill color="bebebebe" />
            </span>
          ) : (
            <span className="unchecked">
              <Circle color={todo.color} />
            </span>
          )}
        </div>
        <div className="text">
          <p style={{ color: todo.checked ? "#bebebe" : "#000000" }}>
            {todo.text}
          </p>
          <span>
            {todo.time} - {todo.projectName}
          </span>
          <div className={`line ${todo.checked ? "line-through" : ""}`}></div>
        </div>
        <div className="add-to-next-day">
          {todo.checked && (
            <span>
              <ArrowClockwise />
            </span>
          )}
        </div>
        <div className="delete-todo">
          {(hover || todo.checked) && (
            <span>
              <Trash />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
export default Todo;
