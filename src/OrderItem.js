import React,{Component} from 'react';
import Thumbnail from './Thumbnail';
import Product from './Product';

export default class OrderItem extends Component{

  constructor(props){
    super(props)//permette di accedere al costruttore e di comunicare tra i parenti
    this.state={
      quantita:0

    }


  }




    render(){
      console.log("sto elaborando il JSX e facendo il diff con il virtual DOM")
        return (
            <div style={{backgroundColor: "orange", display: "flex", justifyContent: "flex-start", padding: 10}}>
                <Thumbnail url={this.props.image}/>
                <Product name={this.props.product} price={this.props.price}/>
                <div style={{margin: 20}}>
                    <div>Quantità: {this.state.quantita}</div>
                    <br></br>
                    <div>
                        <button onClick={() => {
                            this.setState({quantita: this.state.quantita + 1})
                            this.props.onQuantityChange(this.props.price)
                          }
                          }>
                          Aggiungi</button>

                        &nbsp;
                        <button onClick={() =>{
                             if(this.state.quantita>0){
                              this.setState({quantita: this.state.quantita - 1})
                              this.props.onQuantityChange(-this.props.price)
                            }
                          }
                          }>
                          Rimuovi</button>

                    </div>
                    <br></br>

                    <h5>SubTotale:{this.props.price*this.state.quantita}</h5>

                </div>
            </div>

        );
    }
}
