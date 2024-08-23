import MainApp from "./mainapp/MainApp.jsx";
import { AuthProvider } from './context/AuthContext';

const  App = () => {
    return (
        <AuthProvider>
            <MainApp />
        </AuthProvider>
    )
}

export default App;