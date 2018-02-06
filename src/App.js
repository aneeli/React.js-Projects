import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// class ShrinkText extends React.Component{
//   state={
//     scale:1
//   };
//  componentDidUpdate(){
//    const node = this.node
//   const {offsetWidth} = node
//   const parentwidth = node.offsetparent.offsetWidth
//   const scale = offsetWidth/parentwidth

//   if(scale>1){
//     this.setState({
//       scale:1/scale
//     })  }else{
//       this.setState({
//         scale:1
//       })
//   }
//  } render(){
//    const scale=this.state
//     return
//     (
//     <div {...this.props} 
//     style={{ transform: 'scale(${scale},${scale})'}}
//     ref ={node => this.node=node}/>
//     )
  
//   }
// }
class App extends React.Component{
  state={
    value: null,
displayValue :'0',
OperandWaiting:false,
operator:null,
  }

  clearAll(){
    this.setState({
      displayValue:'0'
    })
  }

  inputNumber(number){
    const { displayValue,OperandWaiting } = this.state

if(OperandWaiting){
  this.setState({

displayValue: String(number),
OperandWaiting:false
  })
}
  else{
 this.setState({
displayValue: displayValue ==='0' ? String(number) : displayValue + number


  })
}
}
toggle(){
  const {displayValue} = this.state
this.setState({
  displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(1): '-' + displayValue
})
}

inputDot(){
const{ displayValue, OperandWaiting} = this.state

if(OperandWaiting){
  this.setState({
    displayValue: '.',
    OperandWaiting:false
  })
}else{
if(displayValue.indexOf('.') === -1){
  this.setState({
    displayValue : displayValue +'.'
  })
}}
}
percent(){
  const{displayValue}= this.state
 const number= parseFloat(displayValue)
  this.setState({
   displayValue: String(number)/100
  })
 }
operation(nextoperator){

  const {value,displayValue,operator } = this.state
  const nextvalue = parseFloat(displayValue)
  const operations = {
    '/':(prevalue,nextvalue)=> prevalue/nextvalue,
    '+':(prevalue,nextvalue)=> prevalue+nextvalue,
    '-':(prevalue,nextvalue)=> prevalue-nextvalue,
    '*':(prevalue,nextvalue)=> prevalue*nextvalue,
    '=':(prevalue,nextvalue)=> nextvalue

  }
  if(value === null){
    this.setState({
      value : nextvalue
    })
  }
    else if(operator){
      const currentvalue = value||0
      const computedValue = operations[operator](currentvalue,nextvalue)
   
      this.setState({
        value:computedValue,
        displayValue: String(computedValue)
      })
    }
  
  this.setState({
    OperandWaiting: true,
    operator:nextoperator
  })
}

    render(){
      const {displayValue} =this.state
        return(
            <div className="App">
             
              <div class="container">
                       <h1> Calculator</h1>

                       <table>
                         <div className="row">
                       <tr><div className="display">{displayValue}</div></tr>
                      </div>
                       <tr>
                       <div className="row">
                      <td> <button className="number0" onClick={()=>this.inputNumber(0)}>0</button></td>
                      <td> <button className="number" onClick={()=>this.inputDot()}>.</button></td>
                      <td> <button className="number_spl" row-span="2" onClick={()=>this.operation('=')}>=</button></td>
                      </div> 
                       </tr> 
                       <tr>
                       <div className="row">
                      <td> <button className="number" onClick={()=>this.percent(0)}>%</button></td>
                      <td> <button className="number" onClick={()=>this.toggle()}>+/-</button></td>
                      <td><button className="number_spl" onClick={()=> this.clearAll()}>AC</button></td>
                      <td> <button className="number_spl" onClick={()=> this.operation('/')}>/</button></td>
                       </div> 
                       </tr>                   
                       <tr>
                       <div className="row">
                      <td> <button className="number" onClick={() =>this.inputNumber(1)}>1</button></td>
                      <td> <button className="number" onClick={()=>this.inputNumber(2)}>2</button></td>
                      <td> <button className="number" onClick={()=>this.inputNumber(3)}>3</button></td>
                      <td> <button className="number_spl" onClick={()=>this.operation('+')}>+</button></td>
                      </div> 
                       </tr>                       
                       <tr>
                       <div className="row">
                      <td> <button className="number" onClick={()=>this.inputNumber(4)}>4</button></td>
                      <td> <button className="number" onClick={()=>this.inputNumber(5)}>5</button></td>
                      <td> <button className="number" onClick={()=>this.inputNumber(6)}>6</button></td>
                      <td> <button className="number_spl" onClick={()=>this.operation('-')}>-</button></td>
                      </div> 
                       </tr>                   
                       
                       <tr>
                       <div className="row">
                      <td> <button className="number" onClick={() =>this.inputNumber(7)}>7</button></td>
                      <td> <button className="number" onClick={() =>this.inputNumber(8)}>8</button></td>
                      <td> <button className="number" onClick={() =>this.inputNumber(9)}>9</button></td>
                      <td> <button className="number_spl" onClick={()=>this.operation('X')}>X</button></td>
                      </div> 
                       </tr> 
                     
                      
                         
                           </table>  
                           </div>    
                           </div>                    
        );
    }
}

export default App;
