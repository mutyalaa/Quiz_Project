import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';
import LoginForm from './Project/DashBoard/Signin';
import QuestionForm from './Project/DashBoard/QuestionInput';
import CreateQuestions from './Project/DashBoard/CreateQuestions';
import { QuestionsProvider } from './Project/QuestionsOverview'
import UserProfile from './Project/DashBoard/UserPanel';

import HomePage from './Project/DashBoard/StartPage';
import UserLogin from './Project/DashBoard/UserSignin';
import UserCreateAccount from './Project/DashBoard/UserSignup';
import AdminCreateAccount from './Project/DashBoard/AdminSignup';
import AdminProfile from './Project/DashBoard/AdminPanel';
import InstructionsPage from './Project/DashBoard/Guide'
import QuestionsStart from './Project/DashBoard/QuestionsBegin';
import QuestionsAttempt from './Project/DashBoard/QuestionsTest';
import UserProfileWithScores from './Project/DashBoard/QuizResults';
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  return (
    <QuestionsProvider>
    <Router>
      <div className="App">
        <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path="/admin-login" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/create-account" element={<AdminCreateAccount/>} />
          <Route  path='/user-login' element={<UserLogin onLogin={handleLogin}/>}/>
          <Route path='user-create-account' element={<UserCreateAccount/>}/>
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path='/user-profile' element={<UserProfile/>}/>
          <Route path="/create-quiz" element={<QuestionForm/>} />
          <Route path='/create-questions' element={<CreateQuestions/>}/>
          <Route path='/instruction-popup' element={<InstructionsPage/>}/>
          <Route path='/questions/start' element={<QuestionsStart/>}/>
          <Route path='/questions/:technology' element={<QuestionsAttempt/>}/>
          <Route path='/view-results' element={<UserProfileWithScores/>}/>
        </Routes>
      </div>
    </Router>
    </QuestionsProvider>
  ); 
}

export default App;

