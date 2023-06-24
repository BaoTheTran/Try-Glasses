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

    renderProduct = (glasses,name,price,desc)=>{
        this.setState({
            glasses ,
            name,
            price ,
            desc,
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
                <button  className='col-2 btn btn-outline-success' onClick={()=>this.renderProduct(productList[0].url,productList[0].name,productList[0].price,productList[0].desc )}>
                    <img src="./glassesImage/g1.jpg" alt="" className='img-fluid'/>
                </button>
                <button  className='col-2 btn btn-outline-success'>
                    <img src="./glassesImage/g2.jpg" alt="" className='img-fluid' onClick={()=>this.renderProduct(productList[1].url,productList[1].name,productList[1].price,productList[1].desc )}/>
                </button>
                <button  className='col-2 btn btn-outline-success'>
                    <img src="./glassesImage/g3.jpg" alt="" className='img-fluid' onClick={()=>this.renderProduct(productList[2].url,productList[2].name,productList[2].price,productList[2].desc )}/>
                </button>
                <button  className='col-2 btn btn-outline-success'>
                    <img src="./glassesImage/g4.jpg" alt="" className='img-fluid' onClick={()=>this.renderProduct(productList[3].url,productList[3].name,productList[3].price,productList[3].desc)}/>
                </button>
                <button  className='col-2 btn btn-outline-success' >
                    <img src="./glassesImage/g5.jpg" alt="" className='img-fluid' onClick={()=>this.renderProduct(productList[4].url,productList[4].name,productList[4].price,productList[4].desc)}/>
                </button>
                <button  className='col-2 btn btn-outline-success'>
                    <img src="./glassesImage/g6.jpg" alt="" className='img-fluid' onClick={()=>this.renderProduct(productList[5].url,productList[5].name,productList[5].price,productList[5].desc)}/>
                </button>
            </div>
            <div className="row alert alert-info ">
                <button  className='col-2 btn btn-outline-success'>
                    <img src="./glassesImage/g7.jpg" alt="" className='img-fluid' onClick={()=>this.renderProduct(productList[6].url,productList[6].name,productList[6].price,productList[6].desc)}/>
                </button>
                <button  className='col-2 btn btn-outline-success'>
                    <img src="./glassesImage/g8.jpg" alt="" className='img-fluid' onClick={()=>this.renderProduct(productList[7].url,productList[7].name,productList[7].price,productList[7].desc)}/>
                </button>
                <button  className='col-2 btn btn-outline-success'>
                    <img src="./glassesImage/g9.jpg" alt="" className='img-fluid' onClick={()=>this.renderProduct(productList[8].url,productList[8].name,productList[8].price,productList[8].desc)}/>
                </button>
            </div>

        
      </div>)

    }
    

  render() {
    return (
        <div>
            {this.renderUI()}
        </div>
      
    )
  }
}
