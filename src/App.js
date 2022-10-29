import Main from './component/main';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/*<Header/>*/}
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/introduce" element={<Main/>}></Route>
            <Route path="/vision" element={<Main/>}></Route>
            <Route path="/plan" element={<Main/>}></Route>
            <Route path="/goal" element={<Main/>}></Route>
          </Routes>
          </BrowserRouter>
      {/*<Footer/>*/}
    </div> 
  );
}

export default App;
