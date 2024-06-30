import { useState } from 'react'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'

function App() {

  const [purchase, setPurchase] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
 
  const handlePurchase = (course) => {
    const availableCourses=purchase.find(c=>c.id===course.id);
    if(!availableCourses){
    if(totalCredit+course.credit_hour <= 20 ){
      const newPurchase = [...purchase, course];
    setPurchase(newPurchase);
    setTotalCredit(totalCredit+course.credit_hour);
    
    }
    else {
      alert('Credit limit reached! Cannot add more courses.');
    }
  }
  else{
    alert('Course already added!');
  }
}

  console.log(purchase)

  return (
    <>
      <Header></Header>
      <main className=' container mx-auto mt-5 flex gap-3 '>
        <Courses handlePurchase={handlePurchase}></Courses>
        <Bookmarks purchase={purchase} totalCredit={totalCredit}  ></Bookmarks>
      </main>
    </>
  )
}

export default App
