import React, { useState } from "react";
import axios from 'axios';
import style from './support.module.css';

/**
 *  이름, 이메일, 전화번호
 */
export const InputBox = ({name, placeholder}) => {
    return <input type="text" name={name} className={style.inputBox} placeholder={placeholder}></input>
}

/* 지원하기 */
function Support() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: ''
    }); //상태값 관리
    
    const { name, email, phone } = inputs; // 비구조화 할당을 통해 값 추출
    
    const onChange = (e) => {
        const { value, name } = e.target; //e.target 에서 name 과 value 를 추출
        setInputs({
          ...inputs, // 기존의 input 객체를 복사한 뒤
          [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const postPing = async() => { //post
        let supportUser = {
            name: inputs.name,
            email: inputs.email,
            phone: inputs.phone
        }
        // 전송
        const res = await axios.post(
            'http://localhost:8080/member/login', //url 미정 사용시 에러
            supportUser,
            {headers: {
            "Content-Type": 'application/json'
            }},
        ).then(response => {
            return response.data.head.result_code;
        }).catch(error => {
            console.log(error);
        });
            
        setInputs({
            userId: '',
            password: ''
        }) //전송후 폼에 입력된 값 초기화 

        return res;
    };
    /* 코드에 따른 반환형식 추가(진행중) */
    /* api 통신 방화벽 설정(진행중) */

    return (
        <div id={style.align}>
            <form className={style.formBox} onSubmit={(e) => {
                e.preventDefault();
                postPing();}
                }>
                <InputBox name='name' placeholder='이름'></InputBox>
                <InputBox name='email' placeholder='이메일'></InputBox>
                <InputBox name='phone' placeholder='전화번호'></InputBox>
            </form>
            <div className={style.supportBox}>
                <button className={style.supportBtn} type="submit">지원</button>
                <button className={style.inquiryBtn} type="submit">1:1 문의</button>
            </div>
        </div>
    );
}

export default Support;