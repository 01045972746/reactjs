import React from 'react'
import TextBox from './TextBox'


class Hello extends React.Component {
    render() {
        return (
            <div>
                <input ref={ref => this.input = ref} />
                <button onClick={this.handleClick.bind(this)}>Click Me</button>
            </div>
        );
    }

    handleClick() {
        this.input.value = "";
        this.input.focus();
    }


}


export default Hello;