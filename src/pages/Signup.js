import React from 'react';
import {  Col, Button, Form, FormGroup, Label, Input,FormText } from 'reactstrap';



const Signup = () => {
    return (
        <div >
             <Form>
                <FormGroup row>
                    <Label for="userName" sm={3}>name</Label>
                    <Col sm={9}>
                    <Input type="text" name="userName" id="userName" placeholder="이름" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="userId" sm={3}>id</Label>
                    <Col sm={9}>
                    <Input type="text" name="userId" id="userId" placeholder="아이디" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="userPassword" sm={3}>Password</Label>
                    <Col sm={9}>
                    <Input type="password" name="userPassword" id="userPassword" placeholder="비밀번호" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="rePassword" sm={3}>rePassword</Label>
                    <Col sm={9}>
                    <Input type="text" name="rePassword" id="rePassword" placeholder="재확인 비밀번호" />
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
                    <Input type="checkbox" />{' '}
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