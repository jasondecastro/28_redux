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
  return {
    cats: state.cats
  }
}

const componentCreator = connect(MapStateToProps)
export default componentCreator(CatsIndex)