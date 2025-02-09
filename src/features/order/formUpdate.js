// Handling Form Submission with useState and useEffect
//Instead of using action(), you can use React's local state to handle form input values and submission.

import { Form, useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateOrder() {
  const [formData, setFormData] = useState({
    customer: "",
    phone: "",
    address: "",
    priority: false,
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Submitted data:", formData); // You can send this to an API
    navigate(`/order-summary`); // Navigate to another page after submission
  }

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="customer"
            value={formData.customer}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            checked={formData.priority}
            onChange={handleChange}
          />
          <label htmlFor="priority">Want to give your order priority?</label>
        </div>

        <button type="submit">Order Now</button>
      </Form>
    </div>
  );
}

export default CreateOrder;
