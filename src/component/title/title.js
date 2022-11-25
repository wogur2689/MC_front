import style from './title.module.css';

/* Monthly Coding */
function Title() {
    return (
        <div id={style.main_align}>
            <div id={style.main_text}>
                <div><span id={style.m}>M</span>onthly</div>
                <div><span id={style.c}>C</span>oding</div>
            </div>
        </div>
    );
}

export default Title;