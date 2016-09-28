<<<<<<< HEAD
import React from 'react'
import { connect } from 'react-redux'

export default function CatShow(props) {
  return <h1>"CAT SHOW"</h1>
}

=======
import React from 'react';
import {connect} from 'react-redux';


function CatShow(props) {
  return (
    <div>
      {props.cat.name}
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  const cat = state.cats.find((cat) => {return cat.id == ownProps.params.id})
  return {cat: cat}
}

const componentCreator = connect(mapStateToProps)
export default componentCreator(CatShow);

>>>>>>> 420338f0ea162958d5a60c6ddbd4bb79cae5d87b

