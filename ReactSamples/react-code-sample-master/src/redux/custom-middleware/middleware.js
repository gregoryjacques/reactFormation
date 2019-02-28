
const customMiddleware = store => next => action => {
  const { counterState: { counter } } = store.getState();
  console.log('[Custom middleware]', action.type);

  if (counter >= 5 & action.type === 'INC') {
    console.log('[Custom middleware]', 'stop & cancel action');
    return;
  }

  next(action);
};

export default customMiddleware;