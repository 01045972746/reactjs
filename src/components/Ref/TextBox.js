import React from 'react'

class TextBox extends React.Component {
    render() {
        return (
            <input ref={ref => this.input = ref}/>
        );
    }


}

export default TextBox;