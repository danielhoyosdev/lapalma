import React from 'react'

// Components
import Header from './components/Header'
import Nosotros from './components/Nosotros'
import Servicios from './components/Servicios'
import Diplomas from './components/Diplomas'
import Clientes from './components/Clientes'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

// Styles
import "./assets/css/styles.css"

class App extends React.Component {
	render() {
		return(
			<>
				<Header />
				<Nosotros />
				<Servicios />
				<Diplomas />
				<Clientes />
				<Contacto />
				<Footer />
			</>
		)
	}
}

export default App;