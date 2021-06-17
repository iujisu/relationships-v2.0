import React, {useState} from 'react';
import {  FormFeedback ,Col, Button, Form, FormGroup, Label, Input,FormText } from 'reactstrap';
import axios from 'axios';

const Signup = (props) => {

    const [userName,seUserName] = useState('');
    const [userId,setUserId] = useState('');
    const [userPassword,setUserPassword] = useState('');
    const [rePassword,setRePassword] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [userEmail,setUserEmail] = useState('');
    const [term,setTerm] = useState(false);

    const [message,setMessage] = useState('');
    const [idsSuccess,setIdsSuccess] = useState(false);
    
    
   
    const [termError,setTermError] = useState(false);

    const [nameError,setNameError] = useState(false);
    const [idError,setIdError] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [rePasswordError,setRepasswordError] = useState(false);
    const [phoneNumberError,setPhnonNumberError] = useState(false);
    const [emailError,setEmailError] = useState(false);
    const [file,setFile] = useState(null);
/*
    const [data, setData] = useState({
        nameError: false,
        idError: false,
        passwordError: false,
        rePasswordError: false,
        phoneNumberError: false,
        emailError: false
    });
    */
    const onSubmit = (e) => {

        e.preventDefault();
    
        setNameError(false);
        setIdError(false);
        setPasswordError(false);
        setRepasswordError(false);
        setPhnonNumberError(false);
        setEmailError(false);

        if(userName === "" ){
            return setNameError(true);
        }
        if(userId === "" ){
            setMessage("아이디를 입력해 주세요.")
            return setIdError(true);
        }
        if(userPassword === "" ){
            return setPasswordError(true);
        }
        if(rePassword === "" ){
            return setRepasswordError(true);
        }
        if(phoneNumber === "" ){
            return setPhnonNumberError(true);
        }
        if(userPassword !== rePassword){
            return setRepasswordError(true);
        }
        if(userEmail === "rePassword"){
            return setEmailError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log({
            userName,
            userId,
            userPassword,
            rePassword,
            passwordError,
            termError,
            term
        });
        const formData = new FormData();
        formData.append('file', file);
        formData.append('userName', userName);
        formData.append('userId', userId);
        formData.append('userPassword', userPassword);
        formData.append('phoneNumber', phoneNumber);
        formData.append('userEmail', userEmail);
        const config = {
          headers: {
            'Accept': 'application/json, application/*+json',
            'Content-Type': 'multipart/form-data'
          }
        }
        console.log("========onsubmit=start========");
        axios.post('http://localhost:8080/api/memberJoin', formData, config).then((response) => {
            console.log("======response=====");
            console.log(response.data);
            if (response.data.success === true) {
                alert(response.data.message)
            }else{
               alert(response.data.message)
            }
          }).catch((error) => {
            console.log(error);
            alert('error 가입된 아이디입니다.');
            props.history.push("/login");
        });
        console.log("========onsubmit=start========");
    };
    
    const handleFileChange= (e) => {
        e.preventDefault();
        setFile(e.target.files[0])
        console.log("==fileName====>>"+e.target.value);
    }
    const onChangeUserName = (e) => {
        setNameError(false);
        seUserName(e.target.value);
    };
    const onChangeUserId = (e) => {
        setIdError(false);
        setUserId(e.target.value);
    };
    const onChangeUserPassword = (e) => {
        setPasswordError(false);
        setUserPassword(e.target.value);
    };
    const onChangerePassword = (e) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setPasswordError(e.target.value !== userPassword);
        setRePassword(e.target.value);
    };
    const onChangePhoneNumber = (e) => {
        setPhnonNumberError(false);
        setPhoneNumber(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmailError(false);
        setUserEmail(e.target.value);
    };
    const onChangeTerm = (e) => {
        //체크박스 초기화
        setTermError(false);
        setTerm(e.target.checked);
    };
    const onUseridCheck = (e) => {
        //아이디체크
        e.preventDefault();
        console.log("========onUseridCheck=========>>"+userId);
        if(userId === "" ){
            setMessage("아이디를 입력해 주세요.")
            return setIdError(true);
        }
        axios.get("http://localhost:8080/api/userIdCheck", {
            params: {userId:userId}
        }).then((response) => {
            setMessage(response.data.message)
            if(!response.data.success){
                setIdError(true);
                return setIdsSuccess(false);
            }else{
                setIdError(false);
                setIdsSuccess(true);
            }console.log(response.data)
       }).catch((error) => {
           // 오류발생시 실행
           console.log("----error----") 
           console.log(error)
       }).then(()  =>{
           // 항상 실행
       });
    };
     

    return (
        <div >
             <Form onSubmit={onSubmit}>
                <FormGroup row className="position-relative">
                    <Label for="userName" sm={3}>name</Label>
                    <Col sm={9}>
                        <Input type="text" name="userName" id="userName" placeholder="이름" onChange={onChangeUserName} invalid={nameError}/>
                        <FormFeedback tooltip>이름을 입력해 주세요.</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row className="position-relative">
                    <Label for="userId" sm={3}>id</Label>
                    <Col sm={6}>
                        <Input type="text" name="userId" id="userId" placeholder="아이디" onChange={onChangeUserId} invalid={idError} valid={idsSuccess} />
                        <FormFeedback tooltip>{message}</FormFeedback>
                        <FormFeedback valid tooltip>{message}</FormFeedback>
                    </Col>
                    <Col sm={3}>
                        <Button color="info" size="sm" onClick={onUseridCheck}>중복확인</Button>
                    </Col>
                </FormGroup>
                <FormGroup row className="position-relative">
                    <Label for="userPassword" sm={3}>Password</Label>
                    <Col sm={9}>
                        <Input type="password" name="userPassword" id="userPassword" placeholder="비밀번호" onChange={onChangeUserPassword} invalid={passwordError}/>
                        <FormFeedback tooltip>비밀번호를 입력해 주세요.</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row className="position-relative">
                    <Label for="rePassword" sm={3}>rePassword</Label>
                    <Col sm={9}>
                        <Input type="password" name="rePassword" id="rePassword" placeholder="재확인 비밀번호" onChange={onChangerePassword} invalid={rePasswordError}/>
                        <FormFeedback tooltip>비밀번호를 확인해 주세요.</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row className="position-relative">
                    <Label for="phoneNumber" sm={3}>전화번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="전화번호" onChange={onChangePhoneNumber} invalid={phoneNumberError}/>
                        <FormFeedback tooltip>전화번호를 입력해 주세요.</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row className="position-relative">
                    <Label for="userEmail" sm={3}>Email</Label>
                    <Col sm={9}>
                        <Input type="email" name="userEmail" id="userEmail" placeholder="이메일" onChange={onChangeEmail} invalid={emailError}/>
                        <FormFeedback tooltip>이메일을 입력해 주세요</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row className="position-relative">
                    <Label for="exampleFile" sm={3}>증명 이미지</Label>
                    <Col sm={9}>
                        <Input type="file" name="file" id="userImageFile"  onChange={handleFileChange} />
                    <br/>
                    <FormText color="muted">1024M 미만의 얼굴 이미지 </FormText>
                    </Col>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                    <Input type="checkbox" name="user-term" value={term} onChange={onChangeTerm} />{' '}
                        개인정보 이용 확인을 동의함
                    </Label>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    )
}
    
export default Signup;