import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Main from 'containers/';
import reducer from './reducer/index';

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
  <AppContainer>
    <Provider store={createStoreWithMiddleware(reducer)}>
      <Main />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

// migrate by this guide
// https://github.com/gaearon/react-hot-loader/tree/master/docs#migration-to-30
// if (module.hot) {
//   module.hot.accept('containers/', () => {
//     const NewMain = require('containers/').default;
//     ReactDOM.render(
//       <Provider store={createStoreWithMiddleware(reducer)}>
//         <AppContainer>
//           <NewMain />
//         </AppContainer>
//       </Provider>
//       ,
//       document.getElementById('app')
//     );
//   });
// }
