import React, { Component } from 'react';
import data from "./dataGlasses.json";


export default class Glasses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList : data,
            glasses: null,
            name: null,
            price: null,
            desc: null,
        };
    }

    renderProduct = (index)=>{
        const {productList} = this.state;
        this.setState({
            glasses: productList[index].url,
            name : productList[index].name,
            price : productList[index].price,
            desc: productList[index].desc,
        })
       
    }

    renderUI = ()=>{
        const {productList} = this.state;
        return(<div className='container'>
        <div className="form-group" >
            <div className="row">
            <div className="col-4">
                <img src="./glassesImage/model.jpg" alt="" className='model' />
            </div>
            <div className='col-4 text-center '>
                <h1>TRY GLASSES ONLINE</h1>
                <div className='alert alert-warning'>
                    Mời bạn thử kiếng!
                    <h2>{this.state.name} </h2>
                    <p>{this.state.price} </p>
                    <p>{this.state.desc } </p>
                </div>
                
            </div>
            <div className="col-4">
                <img src="./glassesImage/background.jpg" alt="" className='img-fluid bg' />
            </div>
            <div className='glasses'>
                <img src={this.state.glasses} alt="" className='img-fluid'/>
            </div>
            </div>
        </div> 

            <div className="row alert alert-info">
                <button  className='col-2 btn btn-outline-success' onClick={()=>this.renderProduct(0)}>
                    <img src="./glassesImage/g1.jpg" alt="" className='img-fluid'/>
                </button>
                <button  className='col-2 btn btn-outline-success'>
                    <img src="./glassesImage/g2.jpg" alt="" className='img-fluid' onClick={()=>this.renderProduct(1)}/>
                </button>
                <button  className='col-2 btn btn-outline-success'>
                    <img src="./glassesImage/g3.jpg" alt="" className='img-fluid' onClick={()=>this.renderProduct(2)}/>
                </button>
                <button  className='col-2 btn btn-outline-success'>
                    <img src="./glassesImage/g4.jpg" alt="" className='img-fluid' onClick={()=>this.renderProduct(3)}/>
                </button>
                <button  className='col-2 btn btn-outline-success' >
                    <img src="./glassesImage/g5.jpg" alt="" className='img-fluid' onClick={()=>this.renderProduct(4)}/>
                </button>
                <button  className='col-2 btn btn-outline-success'>
                    <img src="./glassesImage/g6.jpg" alt="" className='img-fluid' onClick={()=>this.renderProduct(5)}/>
                </button>
            </div>
            <div className="row alert alert-info ">
                <button  className='col-2 btn btn-outline-success'>
                    <img src="./glassesImage/g7.jpg" alt="" className='img-fluid' onClick={()=>this.renderProduct(6)}/>
                </button>
                <button  className='col-2 btn btn-outline-success'>
                    <img src="./glassesImage/g8.jpg" alt="" className='img-fluid' onClick={()=>this.renderProduct(7)}/>
                </button>
                <button  className='col-2 btn btn-outline-success'>
                    <img src="./glassesImage/g9.jpg" alt="" className='img-fluid' onClick={()=>this.renderProduct(8)}/>
                </button>
            </div>
      </div>);
    }

  render() {

    return (
        <div>
            {this.renderUI()}
        </div>
      
    )
  }
}
