##### Redux Flow

1. action creator that is in actions folder
   > that provides action type and payload to STORE
2. reducer is the function which returns updated state according to actions.type
   > updated state is sent to STORE
3. STORE will sent the state to React Component
