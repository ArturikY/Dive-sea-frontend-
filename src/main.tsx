import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './assets/index.css'
import './assets/style.scss'
import { Router } from './components/Router'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<Router />
		</Provider>
	</React.StrictMode>
)
