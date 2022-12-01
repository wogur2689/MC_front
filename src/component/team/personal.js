import style from './personal.module.css';

const HANSOL_DATA = [
    
    {   
        id : 1,
        contents : "JS"
    },
    {   
        id : 2,
        contents : "Kotlin"
    },
    {   
        id : 3,
        contents : "Java"
    },
    {   
        id : 4,
        contents : "React"
    },
    {   
        id : 5,
        contents : "Git"
    }
]


function Personal() {
    return(
        <div className={style.container}>
            <h2>팀원 소개</h2>
            <div className={style.personal_box}>
                <p className={style.name}>정한솔</p>
                <p calssName={style.major}>Android_Native</p>
                <div><p>주요 스택</p></div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default Personal;