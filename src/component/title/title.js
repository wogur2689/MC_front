import style from './title.module.css';

function Title() {
    return (
        <div id={style.text_align}>
            <div id={style.main_text}>
                <div><span id={style.m}>M</span>onthly</div>
                <div><span id={style.c}>C</span>oding</div>
            </div>
        </div>
    );
}

export default Title;