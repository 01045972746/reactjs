import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, multiply } from '../actions';

class Buttons extends React.Component {
    render() {
        return (
            <div>
                <button type="button"
                        onClick={ this.props.onIncrement }>
                        +
                </button>
                <button type="button"
                        onClick={ this.props.onDecrement }>
                        -
                </button>
                <button type="button"
                        onClick={ this.props.onMultiple }>
                        *
                </button>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement()),
        onMultiple: () => dispatch(multiply())
    }
}

Buttons = connect(undefined, mapDispatchToProps)(Buttons);

export default Buttons;