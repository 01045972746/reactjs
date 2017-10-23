import React from 'react'


class Hello extends React.Component {
    render() {
        return (
            <div>
                <input ref={ref => this.input = ref}>
                </input>
            </div>
        );
    }

    componentDidMount() {
        this.input.value = "I used ref to do this";
    }


}


export default Hello;