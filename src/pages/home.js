import style from "../common/style.css";

function App() {
return (
<div>   
    <div id="sidebar">
        <div
            className="sidebar_btn"
            id="btn_home"
            onclick="location.href='home.js';"
        >
            <img src="./img/icons/light_index.svg" />
        </div>
        <div
            className="sidebar_btn"
            id="btn_introduce"
            onclick="location.href='introduce.js';"
            >
            <img src="./img/icons/dark_introduce.svg" />
        </div>
        <div
            className="sidebar_btn"
            id="btn_vision"
            onclick="location.href='footprints.js';"
        >
            <img src="./img/icons/dark_shoeprints.svg" />
        </div>
        <div
            className="sidebar_btn"
            id="btn_plan"
            onclick="location.href='recruit.js';"
        >
            <img src="./img/icons/dark_recruit.svg" />
        </div>
        <div
            className="sidebar_btn"
            id="btn_goal"
            onclick="location.href='qna.js';"
        >
            <img src="./img/icons/dark_headset.svg" />
        </div>
    </div>
</div>

);
}

export default App;