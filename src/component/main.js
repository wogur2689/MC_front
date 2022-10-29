import style from '../common/style.css';
import Header from './header';
import Sidebar from './sidebar';
import Number from './number';

function Main() {
  return (
    <div id='page'>
      <Sidebar /> {/* nav */}
        <main>
          <Header/>
              <Number/>{/* 줄번호 */}
        </main>
    </div>
  )
}

export default Main;