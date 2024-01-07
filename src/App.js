import PhoneComponent from './components/PhoneComponent';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
    return (
        <>
        <Provider store={store}>
            <h1>Hello world</h1>
            <div className="section-one">
                <PhoneComponent />
            </div>
        </Provider>
        </>
    );
}

export default App;
