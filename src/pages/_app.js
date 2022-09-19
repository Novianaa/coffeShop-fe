import '../styles/globals.css'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';


const App = ({ Component, pageProps }) => {


  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App;
