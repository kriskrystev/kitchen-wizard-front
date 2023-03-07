import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider as RouterDomProvider } from 'react-router-dom';
import { Provider as ReduxStoreProvider } from 'react-redux';
import { store } from './app/store';
import router from './routes/router';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<ReduxStoreProvider store={store}>
		<RouterDomProvider router={router}/>
	</ReduxStoreProvider>
);
