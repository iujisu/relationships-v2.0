import React from 'react';
import '../css/Login.css';
import { FormFeedback ,Container,Col,Button, Form, FormGroup, Label, Input } from 'reactstrap';

const styles = {
    Bottons:{
      width:"100%",
    },
    BottonsGroup:{
      marginTop:"20px"
    }
  }

const Login = (props) => {
    return (
        <div>
          <Form inline>
            <FormGroup row className="position-relative">
              <Label for="userName" sm={3} size="lg">아이디</Label>
              <Col sm={9}>
                <Input type="text" name="email" id="userName" placeholder="아이디" bsSize="lg" />
                <FormFeedback tooltip>Oh noes! that name is already user id</FormFeedback>
              </Col>
            </FormGroup>
            <br/>
            <FormGroup row className="position-relative">
              <Label for="password" sm={3} size="lg">password</Label>
              <Col sm={9}>
                <Input type="password" name="userPassword" id="password" placeholder="password" bsSize="lg" invalid/>
                <FormFeedback tooltip>Oh noes! that name is already password</FormFeedback>
              </Col>
            </FormGroup>
          </Form>
          <div  style={styles.BottonsGroup} >
            <Container className="themed-container" fluid="lg"><Button color="primary" style={styles.Bottons} size="lg" block>로그인</Button></Container>
          </div>
          <div  style={styles.BottonsGroup} >
            <Container className="themed-container" fluid="lg"><Button color="secondary" style={styles.Bottons} size="lg" onClick={() => props.history.push("/signup")} block>회원가입</Button></Container>
          </div>
        </div>
    )
}
    
export default Login;