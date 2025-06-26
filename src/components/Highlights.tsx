import { highligts } from "../data/data"

const Highlights = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="mb-5">
          <div className="d-flex justify-content-between flex-wrap">
            <h2>This weeks specials!</h2>
            <div>
              <button
                type="button"
                className="btn btn-primary px-4 me-md-2 rounded-4 text-nowrap"
              >
                Online menu
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-5">
            {highligts.map((item) => (
              <div className="col" key={item.id}>
                <div className="card text-dark" style={{ width: "16rem" }}>
                  <img
                    src={item.image}
                    className="card-img-top h-25"
                    alt="Greek Salad"
                  />
                  <div className="card-body">
                    <div className="d-flex justify-content-between items-center fw-semibold">
                      <p>{item.title}</p>
                      <p>{item.price}</p>
                    </div>
                    <p className="fs-7">{item.description}</p>
                    <div className="d-flex justify-content-between items-center">
                      <a href="#" className="">
                        {item.order}
                      </a>
                      <item.icon />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights
