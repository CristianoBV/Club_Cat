import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import ServiceForm from '../pages/ServiceForm';
import ServiceList from '../pages/ServiceList';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={ServiceList} />
      <Route path="/register" component={ServiceForm} />
    </BrowserRouter>
  );
}

export default Routes;
