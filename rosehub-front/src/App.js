import React, { memo, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux'; 

import store from '@/store';
import routes from '@/router'
import LSAppHeader from '@/components/app-header'

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LSAppHeader/>
        <Suspense fallback={<div>page loading</div>}>
        {renderRoutes(routes)}
        </Suspense>
      </BrowserRouter>
    </Provider>
  )
})
