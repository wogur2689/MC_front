import React, { useState, useRef } from "react";
import axios from 'axios';
import style from './support.module.css';
import Modal, { Confirm, Alert } from "../../util/popup";
import { render } from "react-dom";

/* 지원하기 */
function Support() {
    const inputname = useRef();
    const inputemail = useRef();
    const inputphone = useRef();
    const url = "https://open.kakao.com/o/skcTR2Ve"

    const [modalConfirmOpen, setModalConfirmOpen] = useState(false); //팝업
    const [modalAlertOpen, setModalAlertOpen] = useState(false); //팝업
    const [code, setCode] = useState(); //결과
    const [msg, setMsg] = useState(); //결과

    const openConfirm = () => {
        setModalConfirmOpen(true);
    };
    const closeConfirm = () => {
        setModalConfirmOpen(false);
        postPing();
    };

    const alertClose = () => {
        setModalAlertOpen(false);
    };

    const postPing = async() => { //post
        let supportUser = {
            name: inputname.current.value,
            email: inputemail.current.value,
            phone: inputphone.current.value
        }
        // 전송
        axios.post(
            'http://localhost:8080/v1/api/support', //url 미정 사용시 에러
            supportUser,
            {headers: {
            "Content-Type": 'application/json'
            }},
        ).then(response => {
            if(response.data.head.result_code == '0000') {
                setCode(response.data.head.result_code)
                setMsg(response.data.head.result_msg);
                alertHandler();
            } else {
                setCode(response.data.head.result_code)
                setMsg(response.data.head.result_msg);
                alertHandler();
            }
        }).catch(error => {
            console.log(error);
        });
    };
    
    const alertHandler = () => {
        console.log(msg);
        setModalAlertOpen(true);
    }

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
                        <button className={style.supportBtn} type="button" onClick={openConfirm}>지원</button>
                        <Confirm open={modalConfirmOpen} close={closeConfirm}>지원하시겠습니까?</Confirm>
                    </React.Fragment>
                        
                        <button className={style.inquiryBtn} type="submit" onClick={()=>{window.open(url)}}>1:1 문의</button>
                </div>
                <React.Fragment> 
                    <Alert open={modalAlertOpen} close={alertClose}>{msg}</Alert>
                </React.Fragment>
            </form>
            </div>
        </div>
    );
}

export default Support;