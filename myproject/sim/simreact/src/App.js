import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import Main from './SimMain';
import TopShirts from './TopShirts';
import TopTShirts from './TopTShirts';
import TopBlouse from './TopBlouse';
import BottomPants from './BottomPants';
import BottomSkirts from './BottomSkirts';
import Onepiece from './Onepiece';
import Outer from './Outer';
import QandA from './QandA';
import Write from './WritePage'


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/TopShirts' element={<TopShirts />} />
          <Route path='/TopTShirts' element={<TopTShirts />} />
          <Route path='/TopBlouse' element={<TopBlouse />} />
          <Route path='/BottomPants' element={<BottomPants />} />
          <Route path='/BottomSkirts' element={<BottomSkirts />} />
          <Route path='/Onepiece' element={<Onepiece />} />
          <Route path='/Outer' element={<Outer />} />
          <Route path='/QandA' element={<QandA />} />
          <Route path='/WritePage' element={<Write />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;