import './App.css';
import Main from "./components/Main";
import CoursesContainer from './components/CoursesContainer';
function App() {
  return (
    <div className="App">
      <div className="coursesSection">
        <Main title="Expand your career opportunities with Python" description="Take one of Udemy’s range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You’ll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to both beginners and advanced developers alike." courseName="Python"></Main>
        <CoursesContainer></CoursesContainer>  
      </div>
    </div>
  );
}

export default App;
