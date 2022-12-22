import style from './personal.module.css';

const INTRODUCE_DATA = [
    {
        name: "문상현",
        job: "Android-Native",
        stack: ["Kotlin", "Git", "Java", "Firebase", "Android"]
    },
]


function Sanghyun() {
    return(
        <div className={style.container}>
            <div className={style.introduce_box}>
                <div>
                    {INTRODUCE_DATA.map((data) => {
                        return  <div>
                                    <p className={style.name}>{data.name}</p>
                                    <p className={style.major}>{data.job}</p>
                                    <p>주요스택</p>
                                    <div className={style.div}>
                                        {data.stack.map((data) =>{
                                            return  <div className={style.personal_box}><p>{data}</p></div>
                                        })}
                                    </div>
                               </div>})}
                </div>
            </div>
        </div>
    );
}

export default Sanghyun;