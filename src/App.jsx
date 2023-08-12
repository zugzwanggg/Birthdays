import { useState } from 'react'
import './styles/App.scss'
import { nanoid } from 'nanoid'
import Card from './components/bitrthdayCard'
import People from './data'

function App() {

  const [birthdayCard, setBirthdayCard] = useState(People)


  return (
    <>
      <div className="container">
        <h3>{birthdayCard.length} birthdays today</h3>
        <ul className='card-list'>
          {birthdayCard.map(x=> <Card 
            key={nanoid()} id={x.id}  name={x.name} yearOld={x.yearOld} img={x.img}
          />)}
        </ul>
        <button onClick={()=>setBirthdayCard([])}>Clear All</button>
      </div>
    </>
  )
}


export default App
