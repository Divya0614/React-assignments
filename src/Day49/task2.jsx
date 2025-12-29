// a) Store
// The central place where all app data (state) is kept.
// Only one store per app.
// Example: Think of it as a global database for your app’s state.

// b) Action
// An object that describes what happened in the app.
// Actions are plain JavaScript objects with a type property.
// Example: “User clicked login button” → action dispatched to update state.

// c) Reducer
// A function that decides how the state should change based on an action.
// Takes the current state and an action → returns new state.s