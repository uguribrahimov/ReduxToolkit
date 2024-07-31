import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/CounterSlice';
import todosReducer from '../slice/TodoSlice'
import registrationReducer from '../slice/RegisterSlice'
import productsReducer from '../slice/ProductsSlice';
import themeReducer from '../slice/ThemeSlice'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    registration: registrationReducer,
    products: productsReducer,
    theme: themeReducer,

  },
});

export default store;
