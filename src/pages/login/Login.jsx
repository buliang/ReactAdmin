import React, { Component } from 'react'
import "./login.less"
import logo from "./images/logo.png"
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const Item = Form.Item;

export default class Login extends Component {
  state = {
    rules: {
      username: [
        { required: true, whitespace: true, message: 'Please input your Username!' },
        { min: 4, message: '用户名必须大于4位!' },
        { max: 12, message: '用户名必须小于12位!' },
        { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是字母数字或下划线' },
      ],
      password: [{ required: true, message: 'Please input your Password!' }]
    }
  }
  onFinish = async () => {
    try {
      const values = await this.loginForm.validateFields()
      console.log('success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);

    }

  }
  render () {
    const { username, password } = this.state.rules
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>React:后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登陆</h2>
          <Form name="normal_login" ref={c => this.loginForm = c} className="login-form">
            <Item name="username" rules={username} >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Item>
            <Item name="password" rules={password}   >
              <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" onClick={this.onFinish} className="login-form-button">    登陆  </Button>
            </Item>
          </Form>
        </section>
      </div>
    )
  }
}

