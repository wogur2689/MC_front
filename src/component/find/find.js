import style from './find.module.css';
import a from './img/a.png';
import b from './img/b.png';
import c from './img/c.png';
import d from './img/d.png';
import e from './img/e.png';
import f from './img/f.png';

function Find() {
    return (
        <div id={style.align}>
            <div>
                <div id={style.findtext}>저희는 이런 분을 찾고 있어요!</div>
                <div id={style.margin}>
                    <div id={style.content}><img id={style.ab} src={a}></img> 
                    일주일에 2시간 투자</div>
                    <div id={style.content}><img src={b}></img> 오프라인 보다 온라인 만남</div>
                    <div id={style.content}><img src={c}></img> 결과보다는 과정을 추구</div>
                </div>
                <div id={style.margin}>
                    <div id={style.content}><img src={d}></img> 다양한 코딩 프로젝트를 경험</div>
                    <div id={style.content}><img src={e}></img> 여러 분야 사람과 협업</div>
                    <div id={style.content}><img src={f}></img> 다양한 개발툴 경험</div>
                </div>
                
            </div>
        </div>
    )
}

export default Find;