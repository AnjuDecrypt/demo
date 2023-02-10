import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import CustomSelect from './components/CustomSelect';
import Table from './components/Table';

const styles={
  select:{
  width:"100",
  maxWidth:600
  }
}
function App() {
  return (
    <div className="App">
     <Test/>
     <CustomSelect style={styles.select} />
     <Table/>
    
    </div>
  );
}

export default App;
