import style from './classrule.module.css';
import star from './img/star.png';
import time from './img/time.png';
import hand from './img/hand.png';
import trend from './img/trend.png';
/* 모임규칙 */
function Classrule() { 
    return (
      <div id={style.align}>
        <div>
            <div id={style.ruletext}>모임 규칙</div>
            <div id={style.content}>
                <img src={star}></img> 매달 첫째주, 같이 목표 정하기!
            </div>
            <div id={style.content}>
                <img src={time}></img> 매주 목요일(회의를 통해 시간 결정) / 2시간 (23:30~01:30)
            </div>
            <div id={style.content}>
                <img src={hand}></img> 게더타운, 모임 프로젝트 회의및 개인 담당 작업 (화상 회의)
            </div>
            <div id={style.content}>
                <img src={trend}></img> 본업에 방해되지 않는 시간에 요즘 대세를 따른 언택트 모임을 추구합니다.
            </div>
        </div>
      </div>
    );
}

export default Classrule;