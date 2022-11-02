import React from 'react';
import {
    MDBCard,
    MDBCardTitle,
    MDBCardBody,
    MDBCardHeader
} from 'mdb-react-ui-kit';

export default function Card(props) {

    function tmoney () {
        let totalm =0 ;
        props.data.map(item => (
            totalm += Number(item.money)
        ))
        return totalm
    }
    function Rest () {
        let r =0 ;
        props.data.map(item => (
            r = Number(item.money) - (Number(item.food) + Number(item.clothes) + Number(item.transport))
        ))
        return r
    }
    function tfood () {
        let totalf =0 ;
        props.data.map(item => (
            totalf += Number(item.food)
        ))
        return totalf
    }
    function tclothes () {
        let totalc =0 ;
        props.data.map(item => (
            totalc += Number(item.clothes)
        ))
        return totalc
    }
    function ttransport () {
        let totalt =0 ;
        props.data.map(item => (
            totalt += Number(item.transport)
        ))
        return totalt
    }
    return (
        <div>
            <div className='row'>
                <div className='col'>
                    <MDBCard background='primary' className='text-white mb-3'>
                        <MDBCardHeader>My money</MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardTitle>
                            {props.data.length >0 ? tmoney()  : 0}  
                            </MDBCardTitle>DH
                        </MDBCardBody>
                    </MDBCard>
                </div>
                <div className='col'>
                    <MDBCard background='primary' className='text-white mb-3'>
                        <MDBCardHeader>The Rest</MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardTitle>
                            {props.data.length >0 ? Rest()  : 0}  
                            </MDBCardTitle>DH
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <MDBCard background='secondary' className='text-white mb-3'>
                        <MDBCardHeader>Food</MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardTitle>{props.data.length >0 ? tfood()  : 0}</MDBCardTitle>DH

                        </MDBCardBody>
                    </MDBCard>
                </div>
                <div className='col'>
                    <MDBCard background='success' className='text-white mb-3'>
                        <MDBCardHeader>Clothes</MDBCardHeader>
                        <MDBCardBody>
                            <MDBCardTitle>{props.data.length >0 ? tclothes()  : 0}</MDBCardTitle>DH

                        </MDBCardBody>
                    </MDBCard>
                </div>
                <div className='col'>
                    <MDBCard background='danger' className='text-white mb-3'>
                    <MDBCardHeader>Transport</MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle>{props.data.length >0 ? ttransport()  : 0}</MDBCardTitle>DH

                    </MDBCardBody>
                </MDBCard></div>
            </div>










        </div>
    );
}