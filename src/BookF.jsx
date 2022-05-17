import React from 'react';
import { useState } from 'react';
import './BookF.css';
function BookF(){
    const [inputData, setInput] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        transID: '',
        nameHostel: ''
    })
    function inputEvent(event){
        const name = event.target.name;
        const value = event.target.value;
        setInput((preValue)=>{
            if(name === 'name')
            return{  
                name: value,
                email: preValue.email,
                phoneNumber: preValue.phoneNumber,
                transID: preValue.transID,
                nameHostel: preValue.nameHostel
            }
            if(name === 'email')
            return{  
                name: preValue.name,
                email: value,
                phoneNumber: preValue.phoneNumber,
                transID: preValue.transID,
                nameHostel: preValue.nameHostel
            }
            if(name === 'phoneNumber')
            return{  
                name: preValue.name,
                email: preValue.email,
                phoneNumber: value,
                transID: preValue.transID,
                nameHostel: preValue.nameHostel
            }
            if(name === 'conPassword')
            return{  
                name: preValue.name,
                email: preValue.email,
                phoneNumber: preValue.phoneNumber,
                transID: value,
                nameHostel: preValue.nameHostel
            }
            if(name === 'nameHostel')
            return{
                name: preValue.name,
                email: preValue.email,
                phoneNumber: preValue.phoneNumber,
                transID: preValue.transID,
                nameHostel: value
            }
        })
    }
        function onSubmits(event){
            event.preventDefault();
            let Data = JSON.stringify(inputData);
            if(inputData.transID != null){
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
            window.alert("Enter the transaction ID");
        }
        }
    return(
        <div id='formsComplete'>
            <div id='forms1'>
                <h1 className='form-heading1'>Book Hostel</h1>
                <p className='form-content'></p>
                <form className='form1' onSubmit={onSubmits}>
                    <input type = 'text' placeholder='Enter your name' name='name' onChange={inputEvent}></input><br />
                    <input type = 'email' placeholder="Enter you email" name='email' onChange={inputEvent}></input><br />
                    <input type = 'text' placeholder="Enter phone number" name='phoneNumber' onChange={inputEvent}></input><br />
                    <input type = 'text' placeholder="Enter transaction ID" name='transID' onChange={inputEvent}></input><br />
                    <input type = 'text' placeholder="Name of Hostel" name='nameHostel' onChange={inputEvent}></input><br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
}
export default BookF;