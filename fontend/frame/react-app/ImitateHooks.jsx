import React from "react";
/**
 * 模仿Hooks
 */
const memoizedState = [];
let cursor = 0;

const useState = (initialValue) => {
  const currentCursor = cursor;
  memoizedState[currentCursor] = memoizedState[currentCursor] || initialValue;
  function setState(newState) {
    memoizedState[currentCursor] = newState;
  }
  cursor++;
  return [memoizedState[currentCursor], setState];
}
const useEffect = (callback, depArray) => {
  // 初始判断是否为空
  const hasNoDeps = !depArray;
  const currentCursor = cursor;
  const deps = memoizedState[currentCursor];
  // 依赖数组遍历是否有变化
  const hasChangedDeps = deps
    ? !depArray.every((el, i) => el === deps[i])
    : true;
  if (hasNoDeps || hasChangedDeps) {
    callback();
    memoizedState[currentCursor] = depArray;
  }
  cursor++;
}

const App = () => {
  const [state, setState] = useState(0);
  const [status, setStatus] = useState(10);
  useEffect(() => {
    console.log(123);
  }, []);
  const getMemoizedState = () => {
    console.log(memoizedState)
  }
  return (
    <>
      <div onClick={() => setState(state+1)}>{state}</div>
      <div onClick={() => setStatus(status+1)}>{status}</div>
      <div onClick={() => getMemoizedState()}>获取状态</div>
    </>
  );
};
export default App;
