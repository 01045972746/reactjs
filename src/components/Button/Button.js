import React from 'react'

class Button extends React.Component {

    render() {
        let className = "ui button " + this.props.customClass;

        return (
            <div onClick={this.props.onClick}className={className}>
                {this.props.caption}
            </div>
        );

    }


}


export default Button;