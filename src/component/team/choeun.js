import style from './personal.module.css';

const INTRODUCE_DATA = [
    {
        name: "현초은",
        job: "Backend 짜바리",
        stack: ["Java", "Unity", "C/C#", "Python", "SpringBoot", "AWS"]
    },
]


function Choeun() {
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

export default Choeun;