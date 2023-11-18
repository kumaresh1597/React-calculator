import React, { useState } from "react";

const Calculator = ()=>{

    const [num1,setNum1] = useState("");
    const [num2,setNum2] = useState("");
    const [result, setResult] = useState(0);
    const [status, setStatus] = useState(false);
    const [error, setError] = useState("");

    function validateInput(e){
        {
            if(num1 === ""){
                setStatus(false);
                setError("Num1 Cannot Be Empty");
            } else if ( num2 === ""){
                setStatus(false);
                setError("Num2 Cannot Be Empty");
            } else{
                calculateInputs(e.target.name)               
            }
        }
        
    }

    function calculateInputs(opr){
        {
                let n1 = Number(num1);
                let n2 = Number(num2);
                if(!isNaN(n1) && !isNaN(n2)){
                    setStatus(true);
                    setError("");
                    if(opr === "add"){
                        setResult(n1 + n2);
                    }else if(opr === "sub"){
                        setResult(n1 - n2);
                    }else if(opr === "mul"){
                        setResult(n1 * n2);
                    } else{
                        setResult(n1 / n2);
                    }
                } else{
                    setStatus(false);
                    setError("Enter Valid Input !!!");
                }
        }          
    }

    return (
        <div id="card">
            <div id="content">
            <div id="title">React Calculator</div>       
                <input type="text" placeholder="Num1" name="num1"
                onChange={(e)=>{setNum1(e.target.value)}}
                />
                <input type="text" placeholder="Num2" name="num2"
                onChange={(e)=>{setNum2(e.target.value)}}
                />

                <div id="operands">
                    <button onClick={validateInput} name="add">+</button>
                    <button onClick={validateInput} name="sub">-</button>
                    <button onClick={validateInput} name="mul">*</button>
                    <button onClick={validateInput} name="div">/</button>
                </div>

                {
                    (error === "") && (status) && (
                        <div className="result-box">
                            <div className="success">Success!</div>
                            <div className="messege">Result : {result}</div>
                        </div>
                    )
                }
                {
                    (error !== "") && (
                        <div className="result-box">
                            <div className="fail">Error!</div>
                            <div className="messege">{error}</div>
                        </div>
                    )
                }
            </div>           
        </div>
    )
}


export default Calculator;