import React, { Component, Fragment } from 'react';

class PhoneInfo extends Component {

    state = {
        editing: false,
        name: '',
        phone: '',
    };

    shouldComponentUpdate(nextProps, nextState) {
        // 성능최적화를 위해 객체를 새로만든다
        // 이함수를 쓰려면 비교를 해야하므로 이전 객체의 상태를 변경되지않게 
        // 하는게 중요한듯 하다.
        if (this.state !== nextState)
            return true;
        return this.props.info !== nextProps.info;
    }
    

    handleRemove = () => {
        const {info , onRemove} = this.props;
        onRemove(info.id);
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleToggleEdit = () => {
        const {info, onUpdate} = this.props;
        if (this.state.editing) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone,
            });
        } else {
            this.setState({name: info.name, phone: info.phone});
        }
        this.setState({
            editing: !this.state.editing
        });
    }

    render() {
        const {name, phone, id} = this.props.info;
        const {editing} = this.state;
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px',
        };

        console.log(name);

        return (
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <div>
                                <input name="name" 
                                    onChange={this.handleChange} 
                                    value={this.state.name} />
                            </div>
                            <div>
                                <input name="phone" 
                                    onChange={this.handleChange} 
                                    value={this.state.phone} />
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div><b>{name}</b></div>
                            <div>{phone}</div>
                        </Fragment>
                    )
                }
                <button onClick={this.handleRemove}>삭제</button>
                <button onClick={this.handleToggleEdit}>
                    { editing ? '적용' : '수정'}
                </button>
            </div>
        );
    }
}

export default PhoneInfo;