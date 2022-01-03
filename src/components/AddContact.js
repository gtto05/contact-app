/* eslint-disable react/button-has-type */
/* eslint-disable class-methods-use-this */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

class AddContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
    };
  }

  add = (e) => {
    const { addContactHandler, history } = this.props;
    const { name, email } = this.state;
    e.preventDefault();
    if (name === '' || email === '') {
      alert('all the fields are mandatory');
      return;
    }
    const contact = {
      name,
      email,
    };

    addContactHandler(contact);
    history.push('/');
  };

  render() {
    const { name, email } = this.state;
    return (
      <div className="ui main">
        <h3 className="ui dividing header">添加联系人</h3>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>姓名</label>
            <input
              type="text"
              name="name"
              placeholder="姓名"
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>邮箱</label>
            <input
              type="text"
              name="email"
              placeholder="邮箱"
              value={email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button type="submit" className="ui button blue">
            添加
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
