##### Redux Flow

1. `action creator` is used by `dispatch`
2. `dispatch` sends new state to `STORE`
3. `STORE` sends the new state to `reducer`
4. `reducer` a function which returns updated state according to `actions.type`
   > updated state is sent to `STORE`
5. `STORE` will sent the state to `React Component`
