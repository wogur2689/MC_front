import style from './classrule.module.css';

function Classrule() {
    return (
        <div>
            <div id={style.ruletext}>모임 규칙</div>
            <div >
                <div id={style.text_margin}>매달 첫째주, 같이 목표 정하기!</div>
                <div id={style.text_margin}>매주 목요일(회의를 통해 시간 결정) / 2시간(23:30~01:30)</div>
                <div id={style.text_margin}>게더타운, 모임 프로젝트 회의 및 개인 담당 작업 (화상 회의)</div>
                <div id={style.text_margin}>본업에 방해되지 않는 시간에 요즘 대세를 따른 언택트 모임을 추구합니다.</div>
            </div>
        </div>
    );
}

export default Classrule;