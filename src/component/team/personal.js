import style from './personal.module.css';

const INTRODUCE_DATA = [
    {
        name: "정한솔",
        job: "Android-Native",
        stack: ["java","u"]
    },
    {
        name: "현초은",
        job: "Backend",
        stack: ["java","u"]
    },
    {
        name: "길재혁",
        job: "Full-Stack",
        stack: ["java","u"]
    },
    {
        name: "김서우",
        job: "Web-Frontend",
        stack: ["java","u"]
    },
    {
        name: "문상현",
        job: "Android-Native",
        stack: ["java","u"]
    },
    {
        name: "나강민",
        job: "치어리더",
        stack: ["java","u"]
    },
    {
        name: "정민서",
        job: "디자이너",
        stack: ["java","u"]
    },
]


function Personal() {
    return(
        <div className={style.introduce_box}>
            {INTRODUCE_DATA.map((data) => {
                return <div><p>{data.name}</p></div>
            })}
        </div>
    );
}

export default Personal;