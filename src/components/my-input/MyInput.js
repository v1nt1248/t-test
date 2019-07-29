import React from 'react';
import './MyInput.css';

class MyInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: null,
            valid: true,
            touched: false,
        };
    }

    handleInput = (e) => {
        let currentValue = e.target.value,
        currentValid = 'true',
        currentError = null;
        if (this.props.validator) {
            let { valid, error } = this.props.validator(e.target.value);
            currentValid = valid;
            currentError = error;
        }
        this.setState({
            value: currentValue,
            valid: currentValid,
            error: currentError,
        });
        if (this.props.change) {
            this.props.change({
                value: currentValue,
                valid: currentValid,
                error: currentError,
            });
        }
    }

    handleFocus = () => {
        if (!this.state.touched) {
            this.setState({
                touched: true,
            });
        }
    }

    render() {
        let className = `MyInput__input ${this.state.valid ? 'isValid' : 'isInvalid'} ${this.state.touched ? 'isTouched' : 'isUntouched'}`;
        let errorMessage = this.state.touched && !this.state.valid && this.state.error;

        return (
            <div className="MyInput">
                <input
                    type="text"
                    className={className}
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.handleInput}
                    onFocus={this.handleFocus}
                />
            <div className="MyInput__error">
                    {errorMessage &&
                        <span className="MyInput__error-text">
                            { errorMessage }
                        </span>
                    }
                </div>
            </div>
        )
    }
}

export default MyInput;
