import React, { createContext, useContext, useReducer } from "react";
import { fromJS } from "immutable";

const CategoryContext = createContext({});

const SetName = "hooks/SetName";
const SetSex = "hooks/SetSex";

// 纯函数
const reducer = (state, action) => {
  switch (action.type) {
    case SetName:
      return state.set("name", aciton.payload);
    case SetSex:
      return state.set("sex", aciton.payload);
    default:
      return state;
  }
};

const HooksRedux = () => {
  const [data, dispatch] = useReducer(
    reducer,
    fromJS({
      name: "",
      sex: "",
    })
  );
  return (
    <CategoryContext.Provider value={{ data, dispatch }}>
      {props.children}
    </CategoryContext.Provider>
  );
};
// children.js
const Children = () => {
  const { data, dispatch } = useContext(CategoryContext);
  const { name, sex } = data.toJS();

  const handle = () => {
    dispatch({
      type: "SetName",
      payload: "Drex",
    });
  };
  return (
    <div onClick={handle}>
      {name}: {sex}
    </div>
  );
};
// App.js
const App = () => {
  <HooksRedux>
    <Children />
  </HooksRedux>;
};
export default App;
