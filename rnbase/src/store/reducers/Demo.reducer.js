const defaultState = {
  data: [],
  loading: false,
  message: '',
};

export default function demoReducers(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
