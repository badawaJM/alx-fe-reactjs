
import './App.css'
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
function App() {
  
  return (
    <>

      <div>
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
