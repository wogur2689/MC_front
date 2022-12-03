import React, { useState, useRef } from "react";
import axios from 'axios';
import style from './support.module.css';
import Modal, { Confirm, Alert } from "../../util/popup";

/* 지원하기 */
function Support() {
    const inputname = useRef();
    const inputemail = useRef();
    const inputphone = useRef();

    const [modalOpen, setModalOpen] = useState(false); //팝업

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
        postPing();
    };

    const postPing = async() => { //post
        let supportUser = {
            name: inputname.current.value,
            email: inputemail.current.value,
            phone: inputphone.current.value
        }
        // 전송
        const res = await axios.post(
            'http://localhost:8080/v1/api/support', //url 미정 사용시 에러
            supportUser,
            {headers: {
            "Content-Type": 'application/json'
            }},
        ).then(response => {
            return response.data.head.result_code;
        }).catch(error => {
            console.log(error);
        });
        
        return res;
    };
    /* 코드에 따른 반환형식 추가(진행중) */

    return (
        <div className={style.container}>
            <h2>지원하기</h2>
            <div className={style.contents}>
            <form method='post' className={style.formBox}>
                <input type="text" name="name" placeholder="이름" className={style.inputBox} ref={inputname}/>
                <input type="text" name="email" placeholder="이메일" className={style.inputBox} ref={inputemail}/>
                <input type="text" name="phone" placeholder="전화번호" className={style.inputBox} ref={inputphone}/>
                <div className={style.supportBox}>
                    <React.Fragment>
                        <button className={style.supportBtn} type="button" onClick={openModal}>지원</button>
                        <Confirm open={modalOpen} close={closeModal}>지원하시겠습니까?</Confirm>
                    </React.Fragment>
                        <button className={style.inquiryBtn} type="submit">1:1 문의</button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Support;