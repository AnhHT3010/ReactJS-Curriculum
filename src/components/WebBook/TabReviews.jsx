import PropTypes from "prop-types";

const TabReviews = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      {/* <ul>
        {reviews.map((userReview, index) => (
          <>
            <li key={index}>{userReview.name}</li>
            <li key={index}>{userReview.review}</li>
          </>
        ))}
      </ul> */}
      <div></div>
    </div>
  );
};

TabReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TabReviews;
