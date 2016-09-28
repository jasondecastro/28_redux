import React from 'react'

import App from './components/app'

import CatsIndex from './components/cats_index'
import DogsIndex from './components/dogs_index'

import CatShow from './components/cat_show'
import DogShow from './components/dog_show'


import { Route } from 'react-router'

export default (
  <Route path="/" component={App}>
    <Route path="cats" component={CatsIndex}>
      <Route path=":id" component={CatShow} />
    </Route>
    
    <Route path="/dogs" component={DogsIndex}>
      <Route path="/dogs/:id" component={DogShow} />
    </Route>
  </Route>
)