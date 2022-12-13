import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length < 1) {
      return alert("la categoria debe ser mas larga");
    }
    // setCategories((catergories) => [inputValue, ...catergories]);
    onNewCategory(inputValue.trim())
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};
