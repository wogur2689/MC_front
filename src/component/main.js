import style from './main.module.css';
import Title from './title/title';
import Classrule from './classrule/classrule';
import Find from './find/find';
import Support from './support/support';

function Main() {
  return (
    <div className={style.main}>
          <Title/>
          <Classrule/>
          <Find/>
          <Support/>
    </div>
  )
}

export default Main;