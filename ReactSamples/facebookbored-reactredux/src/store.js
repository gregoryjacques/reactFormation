import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import reducers from './reducers';

const persistConfig = {
    key: 'gja-storage',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, reducers);
  let store = createStore(persistedReducer, applyMiddleware(thunk, logger));
  let persistor = persistStore(store);
  export default  { store, persistor }
  