import './App.css';
import Collections from './components/Collections';
import Colours from './components/Colours';
import Featured from './components/Featured';
import Rooms from './components/Rooms';
import Styles from './components/Styles';

function App() {
  return (
    <div className='px-[20px] my-20'>
      <h2 className='main_heading'>Shop Wallpapers</h2>
      <div className='filter_container'>
        <Collections />
        <Styles />
        <Colours />
        <Rooms />
        <Featured />
      </div>
    </div>
  );
}

export default App;
