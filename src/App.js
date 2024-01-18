import { Provider } from 'react-redux';
import Body from './component/Body';
import appStore from './redux/appStore';

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
