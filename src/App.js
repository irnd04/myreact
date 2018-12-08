// 2018-12-08 08:31 집에서

import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {

  id = 0;

  state = {
    information: [
      {
        id: ++this.id,
        name: '홍길동',
        phone: '010-0000-0001'
      },
      {
        id: ++this.id,
        name: '이재국',
        phone: '010-0000-0002'
      },
      {
        id: ++this.id,
        name: 'irnd04',
        phone: '010-0000-0003'
      },
    ],
    keyword: '',
  };

  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
  };

  handleCreate = data => {
    const { information } = this.state;
    // information.push({
    //   ...data, 
    //   id: ++this.id });   
    // 이전 객체를 변경
    this.setState({
      // information: information.concat({
      //   ...data,
      //   id: ++this.id
      // })
      information: information.concat(Object.assign(
        {}, data, {id: ++this.id}
      )) // 이전객체를 변경하지않음.
      // information: information // 이전객체를 변경
    });
  };

  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  };

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => {
          if (info.id === id) return {
            id,
            ...data
          }
          return info;
        }
      )
    });
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        {/*{JSON.stringify(this.state.information)}*/}
        <input 
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="검색..."
        />
        <PhoneInfoList 
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) !== -1
          )}
          onRemove={this.handleRemove} 
          onUpdate={this.handleUpdate} />
      </div>
    );
  }
}

export default App;
