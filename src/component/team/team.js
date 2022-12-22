import Personal from "./personal";
import Hansol from "./hansol";
import Choeun from "./choeun";
import Jaehyck from "./jaehyuk";
import Kangmin from "./kangmin";
import Sanghyun from "./sanghyun";  
import Seowoo from "./seowoo";
import style from "./team.module.css";


function Team() {
    return(
        <div>
            <h2>팀원 소개</h2>
                <div className={style.introduce_box}>
                    <Choeun/><Hansol/><Jaehyck/><Kangmin/><Sanghyun/><Seowoo/>
                </div>
        </div>
    );
}

export default Team;