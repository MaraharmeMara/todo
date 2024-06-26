import React from "react";

function ProjectForm({
  handleSubmit,
  heading,
  value,
  setValue,
  setShowModal,
  confirmButtonText,
}) {
  return (
    <form onSubmit={handleSubmit} className="projectForm">
      <h3>{heading}</h3>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Project Name"
        autoFocus
      />
      <button className="cancel" onClick={() => setShowModal(false)}>
        cancel
      </button>
      <button className="confirm">{confirmButtonText}</button>
    </form>
  );
}

export default ProjectForm;
