import axios from 'axios';
import React, { useState } from 'react'

const Openai = () => {

    const [prompt, setPrompt] = useState([]);
    const [data, setData] = useState([]);

    const Dtaup = (e) =>{
        setPrompt(e.target.value);
    }



    const Post = (e) =>{
        e.preventDefault();
        axios.post("https://stawro.xyz/api/chat/chatgpt",{prompt})
        .then(res =>{
            if(res){
                setData(res.data)
            }else{
                alert("something went Wrong")
            }
        })
    }

  return (
    <div>
      <center>
        <form onSubmit={Post}>
            <input type='text' onChange={Dtaup} required /><br/>
            <button type='submit'>get</button>
        </form>
        <div>
            <span>AI {data}</span>
        </div>
      </center>
    </div>
  )
}

export default Openai
