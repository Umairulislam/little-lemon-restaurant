import { Form } from "react-router"
import { Restaurant } from "../assets"

const BookingForm = () => {
  return (
    <section className="px-4 py-5 bg-light">
      <div className="container">
        <div>
          <img
            src={Restaurant}
            alt="restaurant"
            height="200px"
            className="object-fit-cover rounded-4 w-100"
          />
        </div>
        <div className="text-center mt-5">
          <h1 className="text-secondary ">Book Your Table Now</h1>
          <Form action="./" method="post" className="booking_form mx-auto">
            <div>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="number">Phone Number</label>
              <input type="tel" id="number" name="number" />
            </div>
            <div>
              <label htmlFor="date">Choose Date</label>
              <input type="date" id="date" name="date" />
            </div>
            <div>
              <label htmlFor="time">Choose Time (5:00 - 10:00 PM)</label>
              <input type="time" id="time" name="time" />
            </div>
            <div>
              <label htmlFor="guests">Number of Guests</label>
              <input type="number" id="guests" name="guests" min="1" max="10" />
            </div>
            <div>
              <label htmlFor="occasion">Occasion</label>
              <select name="occasion" id="occasion">
                <option value="none">Select an Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </div>
            <div className="align-items-center mt-4">
              <button
                type="button"
                className="btn btn-secondary px-4 me-md-2 rounded-4"
              >
                Reserve a table
              </button>
            </div>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default BookingForm
