import React from 'react';
import './MyInput.css';

class MyInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            error: null,
            valid: false,
            touched: false,
        };
    }

    handleInput = (e) => {
        let { url, valid, error } = this.props.validator(e.target.value);
        this.setState({
            url,
            valid,
            error,
        });
        this.props.input({url, valid, error });
    }

    handleFocus = () => {
        if (!this.state.touched) {
            this.setState({
                touched: true,
            });
        }
    }

    render() {
        let className = `MyInput-input ${this.state.valid ? 'isValid' : 'isInvalid'} ${this.state.touched ? 'isTouched' : 'isUntouched'}`;
        let errorMessage = this.state.touched && !this.state.valid && this.state.error;
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
                    {errorMessage &&
                        <span className="MyInput-error__text">
                            { errorMessage }
                        </span>
                    }
                </div>
            </div>
        )
    }
}

export default MyInput;
