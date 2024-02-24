import './App.css';
import LoginForm from './LoginForm';
function App() {
  return (
    <div className="App">
      <div className='header' style={{backgroundColor: 'blue', display:'flex'}}>
        {/* <p style={{display:'flex', 
        marginBlockStart:'0', marginBlockEnd:'0'}}>hurd</p> */}
        <div style={{color:'deepskyblue'}}>hurd</div>
      </div>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
