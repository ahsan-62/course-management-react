import { useState } from 'react';
import './App.css';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import { toast } from 'react-toastify';

function App() {
  const [purchase, setPurchase] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);

  const handlePurchase = (course) => {
    const availableCourse = purchase.find(c => c.id === course.id);

    if (!availableCourse) {
      if (totalCredit + course.credit_hour <= 20) {
        const newPurchase = [...purchase, course];
        setPurchase(newPurchase);
        setTotalCredit(totalCredit + course.credit_hour);
        toast.success('🦄Course Added Succesfully!')
      } else {
        toast.error('Credit hour limit exceeded!', 
      )}
    } else {
      toast.info('Course already added!')
    }
  };

  return (
    <>
      <Header />
      <main className='container mx-auto mt-5 flex gap-3'>
        <Courses handlePurchase={handlePurchase} />
        <Bookmarks purchase={purchase} totalCredit={totalCredit} />
      </main>
    </>
  );
}

export default App;
