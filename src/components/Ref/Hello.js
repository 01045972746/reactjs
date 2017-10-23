import React from 'react'


class Hello extends React.Component {
    render() {
        return (
            <div>
                <input ref="myInput">
                </input>
            </div>
        );
    }

    componentDidMount() {
        this.refs.myInput.value = "Hi, I used ref to do this";
    }


}


export default Hello;