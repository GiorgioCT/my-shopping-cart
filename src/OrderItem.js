import React,{Component} from 'react';
import Thumbnail from './Thumbnail';
import Product from './Product';

const styles={
  wrapper:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:'center',
    padding:0,
    borderStyle:'solid',
    borderWidth:1,
    margin:10
  }
};

export default class OrderItem extends Component{

  state={quantita:0}


  increaseQuantity(){
    this.setState({quantita:this.state.quantita+1});
    this.props.onQuantityChange(this.props.price);
  }

  decreaseQuantity(){
    if(this.state.quantita>0){
      this.setState({quantita:this.state.quantita-1});
      this.props.onQuantityChange(-this.props.price);
    }
  }

    render(){
      const subtotale=(this.props.price*this.state.quantita).toFixed(2);
      //console.log("sto elaborando il JSX e facendo il diff con il virtual DOM")
        return (
            <div style={{backgroundColor: "orange", display: "flex", justifyContent: "flex-start", padding: 10}}>
                <Thumbnail url={this.props.image}/>
                <Product name={this.props.product} price={this.props.price}/>
                <div style={{margin: 20}}>
                    <div>Quantità: {this.state.quantita}</div>
                    <br></br>
                    <div>
                        <button onClick={this.increaseQuantity.bind(this)}>Aggiungi</button>
                        &nbsp;
                        <button onClick={this.decreaseQuantity.bind(this)}>Rimuovi</button>

                    </div>
                    <br></br>

                    <h5>SubTotale:{subtotale} Euro</h5>

                </div>
            </div>

        );
    }
}
