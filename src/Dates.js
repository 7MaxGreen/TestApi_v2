import React from 'react';
import "./App.css";
import {data} from "./data";

const statusOpen = {
    backgroundColor:'yellow',
    height:'60px',
    width: '5px',
    position: 'absolute',
    left: '0',
    top: '8px',
    borderRadius: '5px',

  };

const statusClosed = {
    backgroundColor:'red',
    height:'60px',
    width: '5px',
    position: 'absolute',
    left: '0',
    top: '8px',
    borderRadius: '5px',

  };  
  
  function appendBorderOpen() {
    return <div className="border" style={statusOpen}></div>;
  }

  function appendBorderClosed() {
    return <div className="border" style={statusClosed}></div>;
  }


export const Dates = () => {
    return (

            <div className="container">
                <div className="container">
                    <h3>Status - open</h3>    
                    {data.filter(item =>  item.joinedWith === null && item.countActive === 0 && item.status === 'open')
                    .map(item => <div className="item"> <p>{item.sku}</p>  <small>{item.defaultSku}</small>{appendBorderOpen()}</div>)
                    }
                </div>
                <div className="container">    
                    <h3>Status - closed</h3> 
                    {data.filter(item =>  item.joinedWith === null &&  item.status === 'closed')
                    .map(item => <div className="item"> <p>{item.sku}</p>  <small>{item.defaultSku}</small>{appendBorderClosed()}</div>)
                    }
                </div>
                 
                <div className="container">
                <h3>Zone 1</h3>      
                    {data.filter(item => item.areaId === 1791 && item.joinedWith === 2861 || item.id === 2861)
                    .map(item => <div className="item"><p>{item.sku}</p>  <small>{item.defaultSku} </small></div>)}
                    <hr />
                    {data.filter(item => item.areaId === 1791 && item.joinedWith === 2971 || item.id === 2971)
                    .map(item => <div className="item"><p>{item.sku}</p>  <small>{item.defaultSku}</small></div>)}    
                    <hr />
                    {data.filter(item => item.areaId === 1791 && item.joinedWith === 2973 || item.id === 2973)
                    .map(item => <div className="item"><p>{item.sku}</p>  <small>{item.defaultSku}</small></div>)} 
                    <hr />
                    {data.filter(item => item.areaId === 1791 && item.joinedWith === 2974 || item.id === 2974)
                    .map(item => <div className="item"><p>{item.sku}</p>  <small>{item.defaultSku}</small></div>)} 
                    <hr />
                    {data.filter(item => item.areaId === 1791 && item.id === 2970)
                    .map(item => <div className="item"><p>{item.sku}</p>  <small>{item.defaultSku}</small></div>)}
                    <hr />
                    {data.filter(item => item.areaId === 1791 && item.id === 2979)
                    .map(item => <div className="item"><p>{item.sku}</p>  <small>{item.defaultSku}</small></div>)}
                    <hr />
                    {data.filter(item => item.areaId === 1791 && item.id === 2980)
                    .map(item => <div className="item"><p>{item.sku}</p>  <small>{item.defaultSku}</small></div>)}
                </div>
                
                <div className="container">
                <h3>Zone 2</h3>      
                    {data.filter(item => item.areaId === 1892).map(item => <div className="item"><p>{item.sku}</p>  <small>{item.defaultSku}</small></div>)}
                </div>
                <div className="container ">       
                <h3>Zone 4</h3>      
                    {data.filter(item => item.areaId === 1900).map(item => <div className="item"><p>{item.sku}</p>  <small>{item.defaultSku}</small></div>)}   
                </div>
                <div className="container">      
                <h3>Zone 5</h3>      
                    {data.filter(item => item.areaId === 1901).map(item => <div className="item"><p>{item.sku}</p>  <small>{item.defaultSku}</small></div>)}
                </div>  
                </div>            
            

    )
}
