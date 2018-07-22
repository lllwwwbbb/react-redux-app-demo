
export const CounterReducer = (state = 0, action) => {
      switch (action.type) {
          case 'increase':
              return state + 1;
          default:
              return state;
      }
};

export const increaseAction = {
    type: 'increase',
};