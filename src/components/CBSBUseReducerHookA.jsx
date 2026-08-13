import React, { useReducer } from "react";

const emptyData = {
  firstName: "",
  lastName: "",
  age: 0,
  gender: "",
  city: "",
  state: "",
  zipCode: 0,
  country: "",
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "SET_GENDER":
      return { ...state, gender: action.payload };
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_STATE":
      return { ...state, state: action.payload };
    case "SET_ZIP_CODE":
      return { ...state, zipCode: action.payload };
    case "SET_COUNTRY":
      return { ...state, country: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

function CBSBUseReducerHookA() {
  const [state, dispatch] = useReducer(reducer, emptyData);

  return (
    <div className="m-5 p-5 border w-100">
      <h1>Use Reducer Hook Demo</h1>
      <br />
      <input
        className="p-1 border rounded"
        type="text"
        placeholder="Enter first name"
        onChange={(event) =>
          dispatch({ type: "SET_FIRST_NAME", payload: event.target.value })
        }
      />
      <br />
      <br />
      <input
        className="p-1 border rounded"
        type="text"
        placeholder="Enter last name"
        onChange={(event) =>
          dispatch({ type: "SET_LAST_NAME", payload: event.target.value })
        }
      />
      <br />
      <br />
      <input
        className="p-1 border rounded"
        type="number"
        max="120"
        placeholder="Enter age"
        onChange={(event) =>
          dispatch({ type: "SET_AGE", payload: event.target.value })
        }
      />
      <br />
      <br />
      <input
        className="p-1 border rounded"
        type="text"
        placeholder="Enter gender"
        onChange={(event) =>
          dispatch({ type: "SET_GENDER", payload: event.target.value })
        }
      />
      <br />
      <br />
      <input
        className="p-1 border rounded"
        type="text"
        placeholder="Enter city"
        onChange={(event) =>
          dispatch({ type: "SET_CITY", payload: event.target.value })
        }
      />
      <br />
      <br />
      <input
        className="p-1 border rounded"
        type="text"
        placeholder="Enter state"
        onChange={(event) =>
          dispatch({ type: "SET_STATE", payload: event.target.value })
        }
      />
      <br />
      <br />
      <input
        className="p-1 border rounded"
        type="number"
        placeholder="Enter zip code"
        onChange={(event) =>
          dispatch({ type: "SET_ZIP_CODE", payload: event.target.value })
        }
      />
      <br />
      <br />
      <input
        className="p-1 border rounded"
        type="text"
        placeholder="Enter country"
        onChange={(event) =>
          dispatch({ type: "SET_COUNTRY", payload: event.target.value })
        }
      />
      <br />
      <br />
      <input
        className="p-1 border rounded"
        type="email"
        placeholder="Enter email"
        onChange={(event) =>
          dispatch({ type: "SET_EMAIL", payload: event.target.value })
        }
      />
      <br />
      <br />
      <input
        className="p-1 border rounded"
        type="password"
        placeholder="Enter password"
        onChange={(event) =>
          dispatch({ type: "SET_PASSWORD", payload: event.target.value })
        }
      />
      <br />
      <br />
      <div>
        <h3>First Name: {state.firstName}</h3>
        <h3>Last Name: {state.lastName}</h3>
        <h3>Age: {state.age}</h3>
        <h3>Gender: {state.gender}</h3> <h3>City: {state.city}</h3>
        <h3>State: {state.state}</h3>
        <h3>Zip Code: {state.zipCode}</h3>
        <h3>Country: {state.country}</h3>
        <h3>Email: {state.email}</h3>
        <h3>Password: {state.password}</h3>
      </div>
    </div>
  );
}

export default CBSBUseReducerHookA;
