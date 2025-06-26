import { Star } from "lucide-react"
import { testimonials } from "../data/data"

const Testimonials = () => {
  return (
    <section className="py-6 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-5 ">
          {testimonials.map((item) => (
            <div className="col" key={item.id}>
              <div
                className="card text-dark d-flex flex-col card-body gap-2 h-100"
                style={{ width: "16rem" }}
              >
                <div className="d-flex">
                  <Star fill="#f4ce14" strokeWidth="0" />
                  <Star fill="#f4ce14" strokeWidth="0" />
                  <Star fill="#f4ce14" strokeWidth="0" />
                  <Star fill="#f4ce14" strokeWidth="0" />
                  <Star strokeWidth="1" />
                </div>
                <div className="d-flex justify-content-between align-items-center gap-2">
                  <img
                    src={item.image}
                    alt="avatar1"
                    className="rounded-circle "
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                    }}
                  />
                  <p>{item.name}</p>
                </div>
                <div>
                  <p>{item.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
