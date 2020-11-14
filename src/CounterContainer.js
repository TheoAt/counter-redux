import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    result: state
})

const CounterContainer = ({ result, dispatch }) => (
    <div>
        <p id="render-store">{result}</p>
        <button onClick={() => dispatch({type: 'ADD'})}>+1</button>
        <button onClick={() => dispatch({type: 'REMOVE'})}>-1</button>
        <button onClick={() => dispatch({type: 'ADD10'})}>+10</button>
        <button onClick={() => dispatch({type: 'REMOVE10'})}>-10</button>
        <button onClick={() => dispatch({type: 'RESET'})}>Reset</button>
    </div>
)

export default connect(
    mapStateToProps
)(CounterContainer);