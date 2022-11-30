import style from './main.module.css';
import Title from './title/title';
import Classrule from './classrule/classrule';
import Find from './find/find';
import Support from './support/support';
import Keyword from './keyword/keyword';

function Main() {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <Title />
        <Keyword />
        <Classrule />
        <Find />
        <Support />
      </div>
    </div>
  );
}

export default Main;