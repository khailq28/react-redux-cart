import React, { Component } from 'react'
import Header from './components/Header'
import ProductContainer from './containers/ProductContainer'
import Cart from './components/Cart'
import Message from './components/Message'
import Footer from './components/Footer'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductContainer />
                        <Message />
                        <Cart />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
