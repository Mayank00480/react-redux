import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import { useSelector } from 'react-redux';
function App() {
  const auth = useSelector(state => state.isAuth)
  return (
    <>
    <Header />
    { !auth && <Auth /> }
   {auth && <Counter />}

    </>
  );
}

export default App;
