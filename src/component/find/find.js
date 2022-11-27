import React from 'react';
import style from './find.module.css';
import a from './img/a.png';
import b from './img/b.png';
import c from './img/c.png';
import d from './img/d.png';
import e from './img/e.png';
import f from './img/f.png';

/**
 * 조건
 */
export const Content = ({imgSrc, children}) => {
    return <div className={style.content}>
        <img className={style.img} src={imgSrc} alt='아이콘'/>
        <span className={style.text}>&nbsp;{children}</span>
        </div>
}

function Find() {
    return (
        <div id={style.align}>
            <div>
                <div id={style.findtext}>저희는 이런 분을 찾고 있어요!</div>
                <div id={style.margin}>
                    <Content imgSrc={a}>일주일에 2시간 투자</Content>
                    <Content imgSrc={b}>오프라인 보다 온라인 만남</Content>
                    <Content imgSrc={c}>결과보다는 과정을 추구</Content>
                </div>
                <div id={style.margin}>
                    <Content imgSrc={d}>다양한 코딩 프로젝트를 경험</Content>
                    <Content imgSrc={e}>여러 분야 사람과 협업</Content>
                    <Content imgSrc={f}>다양한 개발툴 경험</Content>
                </div>   
            </div>
        </div>
    )
}

export default Find;