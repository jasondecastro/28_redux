<<<<<<< HEAD
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class CatsIndex extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.cats.map((cat, index) => 
            
            <Link key={index} to={`/cats/${cat.id}`}>
              <li>{cat.name}</li>
            </Link> )}
        </ul>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

function MapStateToProps(state) {
=======
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

function CatsIndex (props) {
  return (
  <div>
    <Link to="/cats/new">Add a cat!!!</Link>
    <ul>
      {props.cats.map(cat => <Link to={`/cats/${cat.id}`}><li key={cat.id}>{cat.name}</li></Link>)}
    </ul>
    {props.children}
  </div>)
};

function mapStateToProps(state){
>>>>>>> 420338f0ea162958d5a60c6ddbd4bb79cae5d87b
  return {
    cats: state.cats
  }
}

<<<<<<< HEAD
const componentCreator = connect(MapStateToProps)
export default componentCreator(CatsIndex)
=======
const componentCreator = connect(mapStateToProps)
export default componentCreator(CatsIndex);


>>>>>>> 420338f0ea162958d5a60c6ddbd4bb79cae5d87b
