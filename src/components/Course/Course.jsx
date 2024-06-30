import PropTypes from 'prop-types';

const Course = ({course}) => {

    const {title, description, cover, price, credit_hour} = course;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={cover}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title ">{title}</h2>
    <p>{description}</p>
    <div className="flex justify-between ">
        <p className="text-xl font-bold text-orange-600">Price: ${price}</p>
        <p className="text-xl font-medium text-orange-600">Credit Hour: {credit_hour}</p>
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Select</button>
    </div>
  </div>
</div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
}   


export default Course;