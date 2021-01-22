import './App.css';
import MyHeader from './components/header/MyHeader';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import ContactForm from './components/contactForm/ContactForm';

function App() {
  return (
    <div>
      <MyHeader />
      <Main />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
