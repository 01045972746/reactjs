import React from 'react';
// import Contacts from './Contact/Contacts'
import Button from './Button/Button'
import Card from './Card/Card'



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            show: false
        };
    }

    _increase() {
        this.setState({
            number: this.state.number+1
        });
    }

    _show() {
        this.setState({
            show: true
        });
    }

    _unmount() {
        this.setState({
            number: 0,
            show: false
        });
    }


    render(){
        let component = (<Card number={this.state.number}/>);

        return  (
            <div>
                <Button caption="Show Card" cutomClass="green" onClick={this._show.bind(this)} />
                <Button caption="Increase Number" customClass="blue" onClick={this._increase.bind(this)} />
                <Button caption="Unmount Card" customClass="red" onClick={this._unmount.bind(this)} />
                {this.state.show ? component : ""}
            </div>
        );
    }
}


export default App;