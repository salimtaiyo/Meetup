import React from 'react'
import { connect } from 'react-redux';

const mapToState = (state) => ({
    data: state.test.data
})

const TestComponent = (props) => {
  return (
    <div>
      <h1> shalom dahal </h1>
      <h2> {props.data}</h2>
    </div>
  )
}

export default connect(mapToState)(TestComponent);

