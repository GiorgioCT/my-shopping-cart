import React, { Component } from 'react';
//import logo from './logo.svg';
import OrderItem from './OrderItem';
import './App.css';

class App extends Component {
  state = {totale:0}
  quantitaCambiata(amount){
    this.setState({totale:this.state.totale + amount})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2> My Shopping cart</h2>
        </div>
        <div>
          <OrderItem
            image="http://i.imgur.com/Kw0xkRw.png"
            product="Halo 5: Guardians"
            price={29.99}
            onQuantityChange={this.quantitaCambiata.bind(this)}
            />
        </div>
        <div>
          <OrderItem
            image="http://news.xbox.com/wp-content/uploads/Forza-Horizon-3_Boxshots_XB1_Left_RGB.jpg"
            product="Forza Horizon 3"
            price={49.99}
            onQuantityChange={this.quantitaCambiata.bind(this)}

            />
        </div>
        <div>
          <OrderItem
            image="http://www.gearsofwarart.com/images/gears-boxart.png"
            product="Gears of War 4"
            price={39.99}
            onQuantityChange={this.quantitaCambiata.bind(this)}
            />
        </div>
        <div>
          <h3>Totale: {this.state.totale} Euro</h3>
        </div>

      </div>
    );
  }
}

export default App;
