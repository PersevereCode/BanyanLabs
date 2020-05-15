import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss'
import * as serviceWorker from './serviceWorker';

// const store = configureStore()
// console.log(store.getState())
// store.subscribe(() => {
//     console.log(store.getState())
// })


const jsx = (
  <div>
    <AppRouter/>
  </div>
)

ReactDOM.render(
  jsx,
  document.getElementById('root')
);


serviceWorker.unregister();
