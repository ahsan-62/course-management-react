
import PropTypes from "prop-types";

const Bookmarks = ({purchase,totalCredit}) => {
    
    const remainingCreditHour = 20 - totalCredit;
    const totalPrice = purchase.reduce((total, course) => total + course.price, 0);
    console.log(totalPrice);
    return (
        <div className=" w-full mx-2 md:w-1/3 order-1 md:order-2 ">

            <div className='bg-[#412929d9] rounded-lg'>
            <h1 className='text-2xl font-bold text-[#f6f229] text-center p-3'>Credit hour remaining :{remainingCreditHour} hr </h1>
            <hr />
            <h1 className='text-2xl font-bold text-[#fcf5f5]  p-3' >Total Course: {purchase.length}</h1>
            <hr />
            {
                purchase.map((course,index) => <h1 className='text-xl font-semibold text-[#080707] m-4 p-4 rounded-lg bg-white '  key={index} >{index+1}. {course.title}</h1>)
            }
            <hr />

            <p className="text-[#7dcfa2] text-xl p-5">Total Price: {totalPrice} TK</p>
            <hr />
            <p className="text-[#7dcfa2] text-xl p-5">Total Credit Hour: {totalCredit}</p> 
            <hr />

            <div className="flex justify-center">
            {
                purchase.length > 0 && <button className="px-5 m-5 btn btn-primary text-[#000000] bg-[#f6f229]">Pay Now</button>
            }

            </div>
            </div>
            
            
        </div>
    );
};

Bookmarks.propTypes={
    purchase:PropTypes.array,
    totalCredit:PropTypes.number
}

export default Bookmarks;