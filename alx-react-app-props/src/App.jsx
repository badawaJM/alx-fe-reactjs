
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <>

      <div>
      <UserContext.Provider value={userData}>
      <ProfilePage />
      </UserContext.Provider>
       <WelcomeMessage />
       <Header />
       <MainContent />
       <Footer/>
       <Header />
       <Counter/>
      </div>
    </>
  )
}

export default App
