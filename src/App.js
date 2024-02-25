import './App.css';
import LoginForm from './LoginForm';
function App() {
  return (
    <div className="App">
      <div className="app-header">hurd</div>
      
      { /* Parent Div for the div that will have the login form */ }
      <div className='parent-div-1'>

        { /* parent div for the login form */ }
        <div className='parent-div-2'>
          
          { /* custom login form created */ }
          <LoginForm></LoginForm>
        </div>

      </div>
    </div>
  );
}

export default App;
