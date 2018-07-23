import React from 'react'
import { connect } from 'react-redux';
import {incrementCounter, decrementCounter} from './testAction';
import { Button } from 'semantic-ui-react';

const mapToState = (state) => ({
    data: state.test.data
})

const action = { incrementCounter, decrementCounter }

const TestComponent = (props) => {
  return (
    <div>
      <h1> shalom dahal </h1>
      <h2> {props.data}</h2>
      <Button onClick={props.incrementCounter} content="Increment" color='green'/>
      <Button onClick={props.decrementCounter} color='red' content="Decrement"/>

    </div>
  )
}

export default connect(mapToState, action )(TestComponent);

