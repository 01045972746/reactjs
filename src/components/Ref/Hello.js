import React from 'react'
import TextBox from './TextBox'


class Hello extends React.Component {
    render() {
        return (
            <div>
                <TextBox ref={ref => this.textBox = ref}/>
                <button onClick={this.handleClick.bind(this)}>Click Me</button>
            </div>
        );
    }

    handleClick() {
        this.textBox.input.value = "I used ref";
    }


}


export default Hello;