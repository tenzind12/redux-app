### Redux Flow

1. `action creator` is used by `dispatch`
2. `dispatch` sends new state to `STORE`
3. `STORE` sends the new state to `reducer`
4. `reducer` a function which returns updated state according to `actions.type`
   > updated state is sent to `STORE`
5. `STORE` will sent the state to `React Component`

### Redux-Thunk

1. `useEffect` in `Tasks.jsx` calls `fetchTask()`
2. received by `redux-thunk` which enables us to use `async` operations

_Redux-thunk flow_  
`View` -dispatches-> `Async Action` -sends HTTP req-> `Wait for HTTP response` -Dispatch new action with HTTP response-> `Reducer` -Return new state-> `Store` -Update new state to-> `View`
