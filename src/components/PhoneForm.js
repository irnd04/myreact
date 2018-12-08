import React, { Component } from 'react';

class PhoneForm extends Component {

    // input = null // 1. 방법
    input = React.createRef() // 2.방법

    state = {
        name: '',
        phone: '',
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        // this.props.onCreate({
        //     name: this.state.name,
        //     phone: this.state.phone
        // });
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        });
        // this.input.focus(); // 1.방법
        console.log(this.input);
        this.input.current.focus(); // 2.방법
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name="name"
                    placeholder="이름" 
                    onChange={this.handleChange}
                    value={this.state.name}
                    // ref={ref => this.input = ref} // 1.방법
                    ref={this.input} // 2.방법
                    />
                <input 
                    name="phone"
                    placeholder="전화번호" 
                    onChange={this.handleChange}
                    value={this.state.phone}
                    />
                <button type="submit">등록</button>
                {/*
                <div>
                    name: {this.state.name}
                </div>
                <div>
                    phone: {this.state.phone}
                </div>
                */}
            </form>
        );
    }
}

export default PhoneForm;