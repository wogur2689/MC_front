import Personal from "./personal";
import style from "./team.module.css";

function Team() {
    return(
        <div>
            <h2>팀원 소개</h2>
            <div>
                <Personal/>
            </div>
        </div>
    );
}

export default Team;