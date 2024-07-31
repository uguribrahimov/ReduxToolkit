import React from 'react';
import Counter from './components/Counter';
import Todos from './components/Todo';
import RegistrationForm from './components/Register';
import ProductList from './components/Pruducts';
import Theme from './components/Theme';


const App = () => {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter />
      <Todos />
      <RegistrationForm />
      <ProductList/>
      <Theme/>
    </div>
  );
};

export default App;
