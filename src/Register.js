import React, { useState } from "react";

export default function Forms() {
  return (
    <div>
      <h1 style={{ borderBottom: "4px dotted #004aad" }}>
        Create Your Own Fish
      </h1>
      <span style={{ fontWeight: "bold" }}>
        <h3> Log In/Register </h3>
      </span>
      <UserData />
      <h4>Not interested? </h4>
      <p>Hop right in & create your friend under the "Create Fish" tab.</p>
      <h4>Terms & Conditions </h4>
      <p>Be nice to your new friend!</p>
    </div>
  );
}

const UserData = () => {
  const [users, setUsers] = useState([]);
  const addUser = (user) => {
    const { username = "", password = "", email = "" } = user;
    setUsers([...users, { username, password, email }]);
  };
  console.log(users);
  return (
    <div>
      <UserForm addUser={addUser} />
      <UserStats users={users} />
    </div>
  );
};

const UserStats = (props) => {
  const { users = [] } = props;
  // console.log([1,2,3].reduce((total, num)=>total+num,0))
  return <div></div>;
};

const UserForm = (props) => {
  const { addUser = () => {} } = props;
  const [inputs, setInputs] = useState({});
  const [errorText, setErrorText] = useState("");

  const handleSave2 = () => {
    if (inputs.username === undefined || inputs.username.trim() === "") {
      setErrorText("Username invalid");
    } else if (inputs.password === undefined || inputs.password.trim() === "") {
      setErrorText("Password invalid");
    } else if (inputs.email === undefined || inputs.email.trim() === "") {
      setErrorText("Email invalid");
    } else if (inputs.terms === false || inputs.terms.trim() === "") {
      setErrorText("Please read our terms and conditions.");
    } else {
      // TODO: Quality checks:
      // 1. Ensure required fields provided
      // 2. Validate field data
      addUser(inputs);
      setInputs({});
      setErrorText("");
    }
  };
  const handleChange2 = (e) => {
    const { name, value, type, checked } = e.target;
    switch (type) {
      case "checkbox":
        setInputs((values) => ({ ...values, [name]: checked }));
        // setInputs({...inputs, [name]: checked});
        break;
      default:
        setInputs((values) => ({ ...values, [name]: value }));
        return;
    }
  };

  console.log(inputs);
  return (
    <div className="attendance-form-wrapper">
      <div className="row">
        <div className="column">
          <label className="label">Username: </label>
        </div>
        <div className="column">
          <input
            name="username"
            className="inputs"
            onChange={handleChange2}
            value={inputs.username || ""}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="column">
          <label className="label">Password:</label>
        </div>
        <div className="column">
          <input
            name="password"
            className="inputs"
            onChange={handleChange2}
            value={inputs.password || ""}
          />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="column">
          <label className="label">Email:</label>
        </div>
        <div className="column">
          <input
            name="email"
            className="inputs"
            onChange={handleChange2}
            value={inputs.email || ""}
          />
        </div>
      </div>
      <br />
      <label>
        <input
          type="radio"
          name="terms"
          onChange={handleChange2}
          value={inputs.terms || true}
        />
        I agree to the terms and conditions.
      </label>
      <div>
        <br />
        <div style={{ color: "red" }}>{errorText}</div>
        <br />
        <button onClick={handleSave2}> Log In/Register </button>
      </div>
    </div>
  );
};
