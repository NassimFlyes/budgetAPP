import './App.css';
import Header from '../src/Composants/header/header';
import Form from '../src/Composants/form/form';
import Card from '../src/Composants/card/card';
import 'bootstrap/dist/css/bootstrap.min.css';
import PieChart from './Composants/chart/chart'
import Footer from './Composants/footer/footer';
//import Alert from './Composants/alert/alert';
//import RT_Footer from './Composants/alert/footer';
import swal from 'sweetalert';

 
import React, { Component } from 'react'
import { BarChart } from 'recharts';
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        data : [] ,
        id :0 ,
        money :0,
        food:0,
        clothes:0,
        transport:0
    }
   
} 


    handleOnChange= (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    
    onAddAchat = () => {
      
        this.setState(
            {
                data : [
                    ...this.state.data ,
                    {
                        id : this.state.id +=1 ,
                        money : this.state.money ,
                        food : this.state.food ,
                        clothes : this.state.clothes ,
                        transport : this.state.transport ,
                    }
                ]
            }
        )
    }
  render() {
    return (
      <div className="container">
      <div className='row'>
        <Header />
      </div>
      <div className='row'>
        <div className='col'>
          <Form handleOnChange={this.handleOnChange} 
            onAddAchat={this.onAddAchat}
            />
        </div>
        <div className='col'>
          <PieChart food={this.state.food} clothes={this.state.clothes} transport={this.state.transport} money={this.state.money} />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <Card data={this.state.data}/>
        </div>
        <div className='col'>
          <Footer/>
        </div>
      </div>
      
      
      
    </div>
    )
  }
}

