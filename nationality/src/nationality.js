import React, { useState, useRef, useEffect } from 'react'

const Nationality = () => {
    const [name, setName] = useState("");
    const [nationalityPredict, setNationality] = useState("")
    const [predict , setPredict] = useState("")
    //useState for netionality, prediction and name
    const inputRef = useRef();
    // useRef:
    //https://medium.com/swlh/useref-explained-76c1151658e8
    useEffect(() => {
        inputRef.current.focus();
        }, [])
        //async function to fetch the api
    const handleSearch = async() => {
        let response = await
    fetch(`https://api.nationalize.io?name=${name}`);
    let data = await response.json();
    const prediction = data.country[0].probability
    // fetch the data of the probability 
    const nationalityData = data.country[0].country_id
    // fetch the country prediction
    console.log(data)
    setPredict(prediction)
    setNationality(nationalityData);
     }
     //setPredict to prediction
     //setNationality to nationalityData
  return (
    <div>
    <input ref={inputRef} value={name} onChange={(e) =>
    // https://stackoverflow.com/questions/71039088/what-is-onchange-e-setnamee-target-value-in-react-mean
    setName(e.target.value)} />
    <button onClick={handleSearch}>Calculate</button>
    <h3>Nationality, {nationalityPredict}</h3>
    <h3>Probability, {predict}</h3>
    </div>
  )
}

export default Nationality
//notes:
//
// nationality {object}
// probability {object}