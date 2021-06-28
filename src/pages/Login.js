import React, {useState} from 'react';
import '../css/Login.css';
import axios from 'axios';
import { Alert,FormFeedback ,Col,Button, Form, FormGroup, Label, Input } from 'reactstrap';
import imgError from '../images/error.png';
const styles = {
    Bottons:{
      width:"100%",
    },
    BottonsGroup:{
      marginTop:"20px",
      width:"100%",
    }
  }
const Login = (props) => {
  const [username,seUsername] = useState('');
  const [password,setPassword] = useState('');
  const [nameError,setNameError] = useState(false);
  const [passwordError,setPasswordError] = useState(false);
  const [visible, setVisible] = useState(false);

  const onChangeUserName = (e) => {
    setNameError(false);
    seUsername(e.target.value);
  };

  const onChangerePassword = (e) => {
    setPasswordError(false);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(username === "" ){ return setNameError(true); }
    if(password === "" ){ return setPasswordError(true); }

    axios.post("http://localhost:8080/api/authenticate", {
        username: username,
        password: password
    }).then((response) => {
         // response 
        console.log(response.data)
        const  accessToken  = response.data;
        localStorage.setItem('accessToken', accessToken.token);
         // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        //console.log(axios.defaults.headers.common['Authorization'])
        //history.push('/MyRelationships');
        props.history.push("/MyRelationships");

    }).catch((error) => {
        // 오류발생시 실행
        console.log("----error----") 
        console.log(error)
        setVisible(true)
    }).then(()  =>{
        // 항상 실행
    });
};

    return (
        <div className="app-login">
          <Form onSubmit={handleSubmit} >
            <FormGroup row className="position-relative">
              <Label for="userName" sm={4} size="lg">아이디</Label>
              <Col sm={8}>
                <Input type="text" name="userName" id="userName" placeholder="아이디" bsSize="lg" onChange={onChangeUserName} invalid={nameError} />
                <FormFeedback tooltip>아이디를 입력해 주세요.</FormFeedback>
              </Col>
            </FormGroup>
            <FormGroup row className="position-relative">
              <Label for="password" sm={4} size="lg">비밀번호</Label>
              <Col sm={8}>
                <Input type="password" name="userPassword" id="password" placeholder="비밀번호" bsSize="lg" onChange={onChangerePassword} invalid={passwordError}/>
                <FormFeedback tooltip>비밀번호를 입력해 주세요.</FormFeedback>
              </Col>
            </FormGroup>
            <Alert color="danger" isOpen={visible}>
              <img src={ imgError} className="error-icon" alt="error"/>{' '}  자격 증명에 실패하였습니다.
            </Alert>
            <div check row style={styles.BottonsGroup} >
              <Button color="primary" style={styles.Bottons}  size="lg" block>로그인</Button>
            </div>
          </Form>
          <div  style={styles.BottonsGroup} >
            <Button color="secondary" style={styles.Bottons} size="lg" onClick={() => props.history.push("/signup")} block>회원가입</Button>
          </div>
        </div>
    )
}
    
export default Login;