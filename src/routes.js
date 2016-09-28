<<<<<<< HEAD
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
=======
import React from 'react';
import {Route} from 'react-router';

import App from './components/app';
import CatsIndex from './components/cats_index';
import CatShow from './components/cat_show'
import CatNew from './components/cat_new'

export default (
  <Route path="/" component={App} >
    <Route path="/cats" component={ CatsIndex } >
      <Route path="/cats/new" component={ CatNew } />
      <Route path="/cats/:id" component={ CatShow } />
    </Route>
  </Route>
)

// export default React.createClass(Route, {path: '/', component:App })
>>>>>>> 420338f0ea162958d5a60c6ddbd4bb79cae5d87b
