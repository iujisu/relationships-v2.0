import React, {useState} from 'react';
import {  FormFeedback ,Col, Button, Form, FormGroup, Label, Input,FormText } from 'reactstrap';

const Signup = () => {

    const [userName,seUserName] = useState('');
    const [userId,setUserId] = useState('');
    const [userPassword,setUserPassword] = useState('');
    const [rePassword,setRePassword] = useState('');
    const [term,setTerm] = useState(false);
    const [passwordError,setPasswordError] = useState(false);
    const [termError,setTermError] = useState(false);

    const onSubmit = (e) => {
        console.log("========onsubmit=========");
        e.preventDefault();
        /**검증 로직 만들기
         * 1. 비밀번호와 비밀번호 체크가 다를 경우를 검증한다
         * 2. 약관 동의를 확인한다.
         */
        if(userName === ""){
            console.log("========name 입력=========");
            //let element = document.getElementById("userName");
            //element.setAttribute( 'invalid', false )
        }
        if(userPassword !== rePassword){
            return setPasswordError(true);
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
    };
    const onChangeUserName = (e) => {
        seUserName(e.target.value);
    };
    const onChangeUserId = (e) => {
        setUserId(e.target.value);
    };
    const onChangeUserPassword = (e) => {
        setUserPassword(e.target.value);
    };
    const onChangerePassword = (e) => {
        //비밀번호를 입력할때마다 password 를 검증하는 함수
        setPasswordError(e.target.value !== userPassword);
        setRePassword(e.target.value);
    };
    const onChangeTerm = (e) => {
        //체크박스 초기화
        setTermError(false);
        setTerm(e.target.checked);
    }
    
           

    return (
        <div >
             <Form onSubmit={onSubmit}>
                <FormGroup row className="position-relative">
                    <Label for="userName" sm={3}>name</Label>
                    <Col sm={9}>
                        <Input type="text" name="userName" id="userName" placeholder="이름" onChange={onChangeUserName}/>
                        <FormFeedback tooltip>Oh noes! that name is already user id</FormFeedback>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="userId" sm={3}>id</Label>
                    <Col sm={9}>
                    <Input type="text" name="userId" id="userId" placeholder="아이디" onChange={onChangeUserId} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="userPassword" sm={3}>Password</Label>
                    <Col sm={9}>
                    <Input type="password" name="userPassword" id="userPassword" placeholder="비밀번호" onChange={onChangeUserPassword} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="rePassword" sm={3}>rePassword</Label>
                    <Col sm={9}>
                    <Input type="text" name="rePassword" id="rePassword" placeholder="재확인 비밀번호" onChange={onChangerePassword} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="phoneNumber" sm={3}>전화번호</Label>
                    <Col sm={9}>
                    <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="전화번호" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="userEmail" sm={3}>Email</Label>
                    <Col sm={9}>
                    <Input type="email" name="userEmail" id="userEmail" placeholder="이메일" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleFile" sm={3}>증명 이미지</Label>
                    <Col sm={9}>
                    <Input type="file" name="file" id="exampleFile" />
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