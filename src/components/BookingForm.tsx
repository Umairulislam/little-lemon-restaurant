import { Restaurant } from "../assets"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { bookingSchema } from "../schema/booking"
import type { BookingFormData } from "../types/types"
import emailjs from "@emailjs/browser"
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "../../env"
import { format } from "date-fns"
import Modal from "./Modal"
import { CircleCheckBig } from "lucide-react"
import { useState } from "react"

const BookingForm = () => {
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({ resolver: zodResolver(bookingSchema) })

  const onSubmit = async (data: BookingFormData) => {
    const date = format(new Date(data.date), "EEEE, dd-MM-yyyy")
    const time = format(new Date(`1970-01-01T${data.time}:00`), "hh:mm a")

    const formData = {
      to_name: data.name,
      from_name: "Little Lemon",
      message: `Hello ${data.name}, your table has been reserved for ${date} at ${time}.`,
      reply_to: data.email,
    }

    setLoading(true)
    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      )
      if (response.status === 200) {
        setShowModal(true)
        reset()
      } else {
        alert("Failed to reserve your table. Please try again later.")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      alert(
        "An error occurred while reserving your table. Please try again later."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-6 bg-light">
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
          <h3 className="text-black">Book Your Table Now</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="booking_form mx-auto"
          >
            <div>
              <label htmlFor="name">Full Name</label>
              <input {...register("name")} />
              <p>{errors.name?.message}</p>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" {...register("email")} />
              <p>{errors.email?.message}</p>
            </div>
            <div>
              <label htmlFor="number">Phone Number</label>
              <input type="tel" {...register("number")} />
              <p>{errors.number?.message}</p>
            </div>
            <div>
              <label htmlFor="date">Choose Date</label>
              <input type="date" {...register("date")} />
              <p>{errors.date?.message}</p>
            </div>
            <div>
              <label htmlFor="time">Choose Time (5:00 - 10:00 PM)</label>
              <input type="time" {...register("time")} />
              <p>{errors.time?.message}</p>
            </div>
            <div>
              <label htmlFor="guests">Number of Guests</label>
              <input type="number" {...register("guests")} />
              <p>{errors.guests?.message}</p>
            </div>
            <div>
              <label htmlFor="occasion">Occasion</label>
              <select {...register("occasion")}>
                <option value="">Select an Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
              </select>
              <p>{errors.occasion?.message}</p>
            </div>
            <div className="align-items-center mt-4">
              <button
                type="submit"
                className="btn btn-dark px-4 me-md-2 rounded-4"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-grow spinner-grow-sm"
                      aria-hidden="true"
                      role="status"
                    ></span>
                    <span role="status"> Reserving ...</span>
                  </>
                ) : (
                  "Reserve a Table"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Mpodal */}
      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false)
          }}
        >
          <div className="mb-3 text-primary">
            <CircleCheckBig size={80} />
          </div>
          <h5 className="modal-title mb-1 fw-bold">Reservation Confirmed!</h5>
          <p>
            Your reservation has been confirmed. Check your email for details.
          </p>
        </Modal>
      )}
    </section>
  )
}

export default BookingForm
