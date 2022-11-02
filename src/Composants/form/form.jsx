import React, { Component } from 'react';
import './form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../alert/alert';
import swal from 'sweetalert';


export default function Form(props) {
    return (
        
        <div action="" className='form'> 
          
          <div className='mn'>
              <input type="number" min='0' name='money'  className="form-control" placeholder='Money' onChange={props.handleOnChange} required/>
              
          </div>
          <div className='fd'>
              <input type="text"  className="form-control" placeholder='Food' required />
              <input type="text"  className="form-control" placeholder='Price' name='food' required onChange={props.handleOnChange}/>
          </div>
          <div className='cs'>
              <input type="text"  className="form-control" placeholder='clothes' required/>
              <input type="number"  className="form-control" placeholder='Price' name='clothes' required onChange={props.handleOnChange} />
          </div>
          <div className='tr'>
              <input type="text"  className="form-control" placeholder='transport' required />
              <input type="number"  className="form-control" placeholder='Price' name='transport' required onChange={props.handleOnChange} />
          </div>
          <div className='bn'>
              <button type='submit'  className="btn btn-primary" onClick={props.onAddAchat}>Add achats</button>
          </div>
        </div>
      )
}



