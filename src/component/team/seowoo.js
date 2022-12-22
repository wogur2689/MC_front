import style from './personal.module.css';

const INTRODUCE_DATA = [
    {
        name: "김서우",
        job: "웹 프론트엔드 취준생",
        stack: ["JS", "React", "RTK", "Redux", "Next.js", "Typescript"]
    },
]


function Seowoo() {
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

export default Seowoo;