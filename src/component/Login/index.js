import React,{useState} from 'react'
import { Card ,Button, Result } from 'antd';
import { Col, Row } from 'antd'
import {  Form, Input,message } from 'antd';
import {  useDispatch } from 'react-redux'
import {checkLogin} from '../store/reducers/userReducer'
import {Link } from "react-router-dom";
import api from '../Helpers/axios'
import './login.css'

const Login = () => { 
  const dispatch = useDispatch()
  const [loading , setLoading] = useState(false);

    const onFinish = async(values) => {
        console.log('Success:', values);

      const payload ={
        "email":values.email,
        "password": values.password
    }
    console.log("payload",payload)

    const result = await api.post('/auth/login',payload);
    console.log("result",result.data.token)

    if(result.data.token){
      // console.log("Login success full")
      message.success('Login success full');
     await localStorage.setItem("token", result.data.token );
      await dispatch(checkLogin(result.data.token))
      //navigate("/home");
       window.location.href = "http://localhost:3000/home";
    }else{
      // console.log("In valid Email and Password")
      message.error('In valid Email and Password');
    }

      };

  return (
    <div className='login-div'>    

    <Row>
    <Col

      xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 6}}
      lg={{span: 6 }}
      xl={{span: 8}}
      xxl={{span: 8}}
    >
      

    </Col>
    <Col
     xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 12}}
      lg={{span: 12 }}
      xl={{span: 8}}
      xxl={{span: 8}}
    
    >
    <Card   className='card-login'
     bordered={false}

  >
  <h2 className='login-tittle'>Login</h2>

   <Form
   layout="vertical"
    name="basic"
    labelCol={{
      span: 8,
    }}
   
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
    >
      <Input  style={{  width: "100%" }} />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    {/* <Form.Item
      name="remember"
      valuePropName="checked"
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}
<br/>
    <Form.Item
     
    >
   <Button type="primary" htmlType="submit">
        Submit
      </Button> 
    </Form.Item>
  </Form>

  <p style={{fontSize:"9px",fontStyle: "oblique",float: "right"}}> Designed & Developed by Akshay s Hatkar @ 2023 </p>
  </Card>
 
    </Col>

    <Col
     xs={{span: 24}}
      sm={{span: 24}}
      md={{span: 6}}
      lg={{span: 6 }}
      xl={{span: 8}}
      xxl={{span: 8}}
   
    >
    
    </Col>

  </Row>
  </div>
  )
}

export default Login