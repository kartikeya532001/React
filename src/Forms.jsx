import React from 'react';
import { useState } from 'react';
import './Forms.css';
function Forms(){
    const [inputData, setInput] = useState({
        name: '',
        email: '',
        number: '',
        inputUser: ''
    })
    function inputEvent(event){
        const name = event.target.name;
        const value = event.target.value;
        setInput((preValue)=>{
            if(name === 'name')
            return{  
                name: value,
                email: preValue.email,
                number: preValue.number,
                inputUser: preValue.inputUser
            }
            if(name === 'email')
            return{  
                name: preValue.name,
                email: value,
                number: preValue.number,
                inputUser: preValue.inputUser
            }
            if(name === 'number')
            return{  
                name: preValue.name,
                email: preValue.email,
                number: value,
                inputUser: preValue.inputUser
            }
            if(name === 'inputUser')
            return{  
                name: preValue.name,
                email: preValue.email,
                number: preValue.number,
                inputUser: value
            }
        })
    }
        function onSubmits(event){
            event.preventDefault();
            let Data = JSON.stringify(inputData);
            if(inputData.inputUser != null){
                console.log("Data to be send at backend: " + Data);
                let h = new Headers();
                h.append("Content-Type","application/json");
                fetch('http://localhost:3000/',{
                method: 'POST',
                body: Data,
                headers: h
            }).then((response) => {
                return response.json;
            }).then((result)=>{
                alert(result);
            })
        }
        else{
            window.alert("Your password fields are not same please re-enter");
        }
            // fetch('',{
            //     method: 'POST',
            //     body: 
            // })
        }
    return(
        <div id='forms'>
            <h2 className='form-heading'>Interested in this hostel?</h2>
            {/* <p>Hello {inputData.name} {inputData.email} {inputData.password} {inputData.conPassword}</p> */}
            <form className='form' onSubmit={onSubmits}>
                <input type = 'text' placeholder='Enter your name' name='name' onChange={inputEvent}></input><br />
                <input type = 'email' placeholder="Enter you email" name='email' onChange={inputEvent}></input><br />
                <input type = 'text' placeholder="Enter your phone number" name='number' onChange={inputEvent}></input><br />
                <input type = 'text' placeholder="What do you want to know?" name='inputUser' onChange={inputEvent}></input><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}
export default Forms;