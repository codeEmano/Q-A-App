import React ,{ useState } from 'react';
import data from './data'
import Question from './questionsDisplay';
function App() {
  const [loggedIn,setLog]=useState(false);
  console.log("anoman",loggedIn);
  let [arr,changeStatusCheck]=useState(data)
  const changeStatus = () => {
    setLog(prevStat => !prevStat)
  }
 // function handleChangeId(id)
  function handleChangeId(qid,oid) //the question id is passed here
  {
    //console.log("id=",id)
    changeStatusCheck((prevArr) =>{
      console.log("changeStatusCheck",prevArr)
      const updArr=prevArr.map((data) =>{
        if(data.id===qid && oid===data.options.op1.opid)
          {
            console.log("if",data)
            const newData={...data,opid:!data.options.op1.opid}
            console.log("newData",newData)
              return newData
          }    
          else if(data.id===qid && oid===data.options.op2.opid)
          {
            console.log("if",data)
            const newData={...data,opid:!data.options.op2.opid}
            console.log("newData",newData)
              return newData
          }    
          else
          {
            const newData={...data,opid:!data.options.op3.opid}
            console.log("newData",newData)
              return newData
          }
      //return data
    })
      console.log("anoman",updArr)
      
    
    console.log("handleChange",arr) 
    return updArr;//necessary to return something in state else undefined will be returned that was the main problem
  })
}
 // const display=useDisplay()
 console.log("arr= ",arr)
 

  const buttonDisplay= loggedIn ? "Log off" : "Log in"
  const newArr= arr && arr.map((data) =>  { console.log("map",arr)
  return (
      <Question quiz={data} key={data.id} 
        handleChange={handleChangeId} />)}) 
  
    
    return (
    <div>
    {newArr}
    <br />
    <button onClick={changeStatus}>{buttonDisplay}</button>
    </div>
  )
}
export default App;
