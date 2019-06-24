import React from "react";


import Spinner from '../spinner'

const Form = ({ user, loading, error, buttonAction, changeUser }) => (
  <div className="formContainer">
    <input
      type="text"
      className="Search-Input"
      value={user}
      placeholder="Usuário ou organização"
      onChange={e => changeUser(e.target.value)}
    />
    <button className="search-Button" onClick={buttonAction}>
    {loading ? <Spinner /> : "Buscar"}
    </button>
    <p className="errorText">{error}</p>

  </div>
);

export default Form;
