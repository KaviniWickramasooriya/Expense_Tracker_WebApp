import React from 'react'
import NavBar from '../../components/Navbar'
import Graph from '../../components/Graph'


const Home = () => {
  return (
    <div>
        <NavBar />
        <h1 
          className='text-4xl py-8 mb-10 text-white rounded' 
          style={{ backgroundColor: 'slategray', textAlign:'center', padding:'20px 0' }}
        >
          Expense Tracker
        </h1>

        <div className="grid md:grid-cols-2 gap-4">
          {/* chart */}
          <Graph/>

          {/* form */}
        </div>
    </div>
  )
}

export default Home;
