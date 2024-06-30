
import PropTypes from "prop-types";

const Bookmarks = ({purchase,totalCredit}) => {
    
    const remainingCreditHour = 20 - totalCredit;
    const totalPrice = purchase.reduce((total, course) => total + course.price, 0);
    console.log(totalPrice);
    return (
        <div className="w-1/3">
            <h1 className="text-white">Bookmarks</h1>
            <p>Remaining Credit Hour: {remainingCreditHour}</p>
            <p>Total Purchase: {purchase.length}</p>

            {
                purchase.map(course => <p key={course.id} className="text-white">{course.title}</p>)
            }
            <p className="text-white">Total Price: ${totalPrice}</p>
            <p>Total Credit Hour: {totalCredit}</p> 
        </div>
    );
};

Bookmarks.propTypes={
    purchase:PropTypes.array
}

export default Bookmarks;