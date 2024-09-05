import MainApp from "./mainapp/MainApp.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';

const  App = () => {
    return (
      <AuthProvider>
        <BrowserRouter>
          <MainApp />
        </BrowserRouter>
      </AuthProvider>
    );
}

export default App;