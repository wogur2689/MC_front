import style from '../common/style.css';
import reset from '../common/reset.css';
import Title from './title/title';
import Classrule from './classrule/classrule';
import Find from './find/find';

function Main() {
  return (
    <div>
          <Title/>
          <Classrule/>
          <Find/>
    </div>
  )
}

export default Main;