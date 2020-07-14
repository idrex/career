# Redux

Redux 是一个 **数据管理中心**，可以把它理解为一个全局的 data store 实例。它通过一定的使用规则和限制，保证着数据的健壮性、可追溯和可预测性。它与 React 无关，可以独立运行于任何 JavaScript 环境中，从而也为同构应用提供了更好的数据同步通道。

## 核心理念

- **单一数据源**: 整个应用只有唯一的状态树，也就是所有 state 最终维护在一个根级 Store 中；
- **状态只读**: 为了保证状态的可控性，最好的方式就是监控状态的变化。那这里就两个必要条件：
  - Redux Store 中的数据无法被直接修改；
  - 严格控制修改的执行；
- **纯函数**: 规定只能通过一个纯函数 (Reducer) 来描述修改；

- 大致的数据结构如下所示:

<img width="500" src="https://raw.githubusercontent.com/xd-tayde/blog/master/images/interview/8.png">

## 理念实现

- **Store**: 全局 Store 单例， 每个 Redux 应用下只有一个 store， 它具有以下方法供使用:
  - `getState`: 获取 state；
  - `dispatch`: 触发 action, 更新 state；
  - `subscribe`: 订阅数据变更，注册监听器；

```js
// 创建
const store = createStore(Reducer, initStore);
```

- **Action**: 它作为一个行为载体，用于映射相应的 Reducer，并且它可以成为数据的载体，将数据从应用传递至 store 中，是 store **唯一的数据源**；

```js
// 一个普通的 Action
 const action = {
  type: 'ADD_LIST',
  item: 'list-item-1',
}

// 使用：
store.dispatch(action)

// 通常为了便于调用，会有一个 Action 创建函数 (action creater)
funtion addList(item) {
  return const action = {
    type: 'ADD_LIST',
    item,
  }
}

// 调用就会变成:
dispatch(addList('list-item-1'))
```

- **Reducer**: 用于描述如何修改数据的纯函数，Action 属于行为名称，而 Reducer 便是修改行为的实质；

```js
// 一个常规的 Reducer
// @param {state}: 旧数据
// @param {action}: Action 对象
// @returns {any}: 新数据
const initList = [];
function ListReducer(state = initList, action) {
  switch (action.type) {
    case "ADD_LIST":
      return state.concat([action.item]);
      break;
      defalut: return state;
  }
}
```

## 注意

> 1. 遵守数据不可变，不要去直接修改 state，而是返回出一个 **新对象**，可以使用 `assign / copy / extend / 解构` 等方式创建新对象；
> 2. 默认情况下需要 **返回原数据**，避免数据被清空；
> 3. 最好设置 **初始值**，便于应用的初始化及数据稳定；

## 进阶

- **React-Redux**: 结合 React 使用；
  - `<Provider>`: 将 store 通过 context 传入组件中；
  - `connect`: 一个高阶组件，可以方便在 React 组件中使用 Redux；
    - 1. 将`store`通过`mapStateToProps`进行筛选后使用`props`注入组件
    - 2. 根据`mapDispatchToProps`创建方法，当组件调用时使用`dispatch`触发对应的`action`
- **Reducer 的拆分与重构**:
  - 随着项目越大，如果将所有状态的 reducer 全部写在一个函数中，将会 **难以维护**；
  - 可以将 reducer 进行拆分，也就是 **函数分解**，最终再使用`combineReducers()`进行重构合并；
- **异步 Action**: 由于 Reducer 是一个严格的纯函数，因此无法在 Reducer 中进行数据的请求，需要先获取数据，再`dispatch(Action)`即可，下面是三种不同的异步实现:
  - [redex-thunk](https://github.com/reduxjs/redux-thunk)
  - [redux-saga](https://github.com/redux-saga/redux-saga)
  - [redux-observable](https://github.com/redux-observable/redux-observable)
