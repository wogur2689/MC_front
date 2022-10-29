import style from '../common/style.css';

function Header() {
    return (
        <div className={style.tab_box} id="main_tab">
            <div className={style.tab} id="console_tab">
                <img src="./img/icons/mc_favicon.svg"/>
                <span className={style.tab_name}>Monthly_Coding.index</span>
                <img src="./img/icons/circle_green.svg"/>
            </div>
        </div>
    );
}

export default Header;