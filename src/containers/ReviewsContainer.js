import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";

class ReviewsContainer extends Component {
  render() {
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          restaurantId={this.props.restaurant.id}
        />
        <Reviews
          updateReview={this.props.updateReview}
          reviews={this.props.reviews}
          deleteReview={this.props.deleteReview}
          restaurantId={this.props.restaurant.id}
          addReview={this.props.addReview}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ reviews }) => {
  return { reviews };
};

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: "ADD_REVIEW", review }),
  deleteReview: id => dispatch({ type: "DELETE_REVIEW", id }),
  updateReview: review => dispatch({ type: "UPDATE_REVIEW", review })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewsContainer);
