import React from 'react';
import './MyInput.css';

class MyInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            valid: false,
            touched: false,
        };
    }

    handleInput = (e) => {
        let { valid, url } = this.props.validator(e.target.value);
        this.setState({
            valid,
            url,
        });
    }

    handleFocus = () => {
        if (!this.state.touched) {
            this.setState({
                touched: true,
            });
        }
    }

    render() {
        let className = `MyInput-input ${this.state.valid ? 'isValid' : 'isInvaid'} ${this.state.touched ? 'isTouched' : 'unTouched'}`;
        return (
            <div className="MyInput">
                <input
                    type="text"
                    className={className}
                    placeholder={this.props.placeholder}
                    onInput={this.handleInput}
                    onFocus={this.handleFocus}
                />
                <div className="MyInput-error">
                </div>
            </div>
        )
    }
}

export default MyInput;
