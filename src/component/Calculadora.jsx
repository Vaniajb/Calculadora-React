import React, { useState } from 'react'
import './Calculadora.css'
import Container from '@mui/material/Container';


export default function Calculadora() {
    const [num, setNum] = useState(0);
    const [oldnum, setOldNum] = useState();
    const [operador, setOperador] = useState();

    function operadores(e){
        let operador1 = e.target.value
        setOperador(operador1);
        setOldNum(num);
        setNum(0);
    }

    function inputNum(e){
        var input = e.target.value;
        if(num === 0){
            setNum(input)
        }else{
            setNum(num + input)
        }
    }

    function  clear(e){
        setNum(0)
    }

    function porcentagem(){
        setNum(num / 100)
    }

    function maisMenos(){
        if(num>0){
            setNum(-num)
        }else{
            setNum(Math.abs(num))
        }
    }

    function calcular(){
        if(operador === "+"){
            setNum(parseFloat(oldnum) + parseFloat(num))
        }else if(operador === "-"){
            setNum(oldnum - num)
        }else if(operador ==="X"){
            setNum(oldnum * num)
        }else if (operador === "/"){
            setNum(parseFloat(oldnum) / parseFloat(num))
        }
    }

  return ( 
    
  <Container maxWidth="xs">
    <div className='fundo'>
        <h1 className='result'>{num}</h1>
       <button className='orange' onClick={clear} >AC</button>
       <button className='orange' onClick={maisMenos} >+/-</button>
       <button className='orange' onClick={porcentagem} >%</button>
       <button className='orange' onClick={operadores} value="/">/</button>

       <button className='gray' onClick={inputNum} value={7} >7</button>
       <button className='gray' onClick={inputNum} value={8} >8</button>
       <button className='gray' onClick={inputNum} value={9}>9</button>

       <button className='orange' onClick={operadores} value="X">X</button>

       <button className='gray' onClick={inputNum} value={4}>4</button>
       <button className='gray'onClick={inputNum} value={5}>5</button>
       <button className='gray'onClick={inputNum} value={6}>6</button>

       <button className='orange'onClick={operadores} value="-" >-</button>

       <button className='gray' onClick={inputNum} value={1}>1</button>
       <button className='gray' onClick={inputNum} value={2}>2</button>
       <button className='gray'onClick={inputNum} value={3}>3</button>

       <button className='orange' onClick={operadores} value="+">+</button>

       <button className='gray'onClick={inputNum} value={0} >0</button>
       <button className='gray' onClick={inputNum} value=",">,</button>
       <button className='orange' onClick={calcular} value="=">=</button>
        
    </div>
    </Container>

  )
}
