export const UPDATE_CURRENT_COMPONENT = 'UPDATE_CURRENT_COMPONENT';

export const updateCurrentComponent = function (value) {
  return {
    type: UPDATE_CURRENT_COMPONENT,
    value: value
  };
};

export default function reducer(state = '', action) {
  switch (action.type) {
  case UPDATE_CURRENT_COMPONENT:
    return action.value;
  default:
    return state;
  }
};
