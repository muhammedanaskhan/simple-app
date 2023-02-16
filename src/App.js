import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [activity, setActivity] = useState('')
  const [listData, setListData] = useState([])

  function addActivity() {
    // setListData([...listData, activity])
    setListData((listData) => {
      const updatedList = [...listData, activity]
      setActivity('')
      return updatedList
      
    })
  }

  function removeActivity(i) {
    const updated= listData.slice(i+1)
    setListData(updated)
  }

  return (
    <div className="App">
      <h1>TODO App</h1>

      <div>
        <input type='text' className='activity__input' placeholder='Enter goal' value={activity} onChange={(e) => setActivity(e.target.value)}></input>
        <button  onClick={addActivity}>Add</button>
      </div>

      <h2>Here're your targets</h2>

      {listData!=[] && listData.map((entry, i) => {
          return(
            <>
              <p key={i}>
                <div>{entry}</div>
                <div><button onClick={() => removeActivity(i)}>remove</button></div>
              </p>
            </>
          )
      }) }
    
    </div>
  );
}

export default App;
