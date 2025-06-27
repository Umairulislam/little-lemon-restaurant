import { highligts } from "../data/data"

const Highlights = () => {
  return (
    <section className="py-6">
      <div className="container">
        <div className="mb-4">
          <div className="d-flex justify-content-between flex-wrap">
            <h3>This weeks specials!</h3>
            <div>
              <button
                type="button"
                className="btn btn-primary px-4 rounded-4 text-nowrap fw-semibold"
              >
                Online menu
              </button>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-2">
          {highligts.map((item) => (
            <div className="col" key={item.id}>
              <div className="card">
                <img
                  src={item.image}
                  className="card-img-top h-25"
                  alt={item.title}
                />
                <div className="card-body text-dark bg-light">
                  <div className="d-flex justify-content-between items-center fw-semibold">
                    <p className="text-black">{item.title}</p>
                    <p style={{ color: "#ee9972" }}>{item.price}</p>
                  </div>
                  <p className="fs-7">{item.description}</p>
                  <div className="d-flex justify-content-between items-center">
                    <a href="#" className="text-black fw-semibold">
                      {item.order}
                    </a>
                    <item.icon className="text-black" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Highlights
