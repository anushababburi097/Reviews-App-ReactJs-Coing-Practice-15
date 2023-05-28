import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onClickRightArrow = () => {
    // If we click the right arrow, this method will trigger
    const {activeReviewIndex} = this.state //  We are destructuring the state variable activeReviewIndex
    const {reviewsList} = this.props // We are destructuring the reviewsList array from props

    if (activeReviewIndex < reviewsList.length - 1) {
      // Checking whether the activeReviewIndex is less than the length of reviewsList - 1 (to get the last item index of reviewsList)
      this.setState(prevState => ({
        // If the above condition satisfies, then the state variable activeReviewIndex will increase to +1
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeftArrow = () => {
    // If we click the left arrow, this method will trigger
    const {activeReviewIndex} = this.state //  We are destructuring the state variable activeReviewIndex//

    if (activeReviewIndex > 0) {
      // Checking whether the activeReviewIndex is greater than 0
      this.setState(prevState => ({
        // If the above condition satisfies, then the state variable activeReviewIndex will decrease to -1
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewDetails = reviewsList[activeReviewIndex]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            data-testid="leftArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            type="button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
