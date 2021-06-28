import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Body from '../layout/Body';
import Left from '../layout/Left';
const styles = {
    Body:{
      display:"flex",
      alignItems: "flex-start",
      width:"100%"
    }
  }
const MyRelationships = () => {
    const [accessToken, setSccessToken] = useState('');
  
    useEffect(() => {
        setSccessToken(localStorage.getItem('accessToken'));
        console.log('렌더링이 완료되었습니다!');
        console.log(accessToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        axios.get('http://localhost:8080/api/userInfo',null, {
        })
        .then((res) => {
        console.log(res.data)
        })
        .catch((error) => {
        console.error(error)
        }) 
    });
    return (
        <div className="BodyLeyout" style={styles.Body}>
            <Left/>
            <Body/>
        </div>
    )
}
    
export default MyRelationships;