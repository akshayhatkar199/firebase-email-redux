import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Row } from 'antd'
import { Card,Button } from 'antd';
import {  Form, Input } from 'antd';
import {Link } from "react-router-dom";
import Home from '../Home/index'
import './email.css'

const Sendemail =() => {
  // const form = useRef();

  const MessagesendEmail = (values) => {
    // e.preventDefault();
    var form = document.createElement("form");
    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "user_name");
    FN.setAttribute("value", values.user_name);
    var EID = document.createElement("input");
    EID.setAttribute("type", "text");
    EID.setAttribute("name", "user_email");
    EID.setAttribute("value", values.user_email);
    var mes = document.createElement("input");
    mes.setAttribute("type", "text");
    mes.setAttribute("name", "message");
    mes.setAttribute("value", values.message);
    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    
    form.appendChild(FN);
    form.appendChild(EID);
    form.appendChild(mes);
    form.appendChild(s);
    console.log(form)
    emailjs.sendForm('service_s8zlusi', 
                     'template_f2utbwz',
                     form,
                     '8MUX_0jxAVQD8lMle')
                  
      .then((result) => {
          console.log(result.text);
          console.log('message sent')
      }, (error) => {
          console.log(error.text);
      });
  };

  

  return (
    <div >
    <div>
    <Home/>
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
    <Card   className='card-email'
     bordered={false}

  >
    <h2 className='email-tittle'>Email</h2>

    {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}


   <Form
   layout="vertical"
    name="basic"
    labelCol={{
      span: 8,
    }}
   
    initialValues={{
      remember: true,
    }}
    onFinish={MessagesendEmail}
   
    autoComplete="off"
  >
    <Form.Item
      label="username"
      name="user_name"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input  style={{  width: "100%" }} />
    </Form.Item>

    <Form.Item
      label="Email"
      name="user_email"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input  style={{  width: "100%" }} />
    </Form.Item>

    <Form.Item
      label="Message"
      name="message"
      rules={[
        {
          required: true,
          message: 'Please input your message!',
        },
      ]}
    >
      <Input.TextArea />
    </Form.Item>

    
<br/>
    <Form.Item
     
    >
    <Button type="primary" value="Send" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
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
  
  {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
   </div>
  )
}

export default Sendemail














// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const email = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };