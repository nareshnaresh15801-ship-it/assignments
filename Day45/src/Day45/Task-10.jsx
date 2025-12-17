import { useState } from "react";

function FeedbackForm() {
  const [feedback, setFeedback] = useState({
    comment: "",
    rating: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFeedback((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Feedback</h3>

 
      <div>
        <textarea
          name="comment"
          value={feedback.comment}
          onChange={handleChange}
          placeholder="Your feedback"
        />
      </div>

     
      <div>
        <select
          name="rating"
          value={feedback.rating}
          onChange={handleChange}
        >
          <option value="">Select rating</option>
          <option value="1">1 - Poor</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5 - Excellent</option>
        </select>
      </div>

    
      <label>
        <input
          type="checkbox"
          name="subscribe"
          checked={feedback.subscribe}
          onChange={handleChange}
        />
        Subscribe to updates
      </label>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;