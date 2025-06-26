import { RestaurantFood } from "../assets"

const Hero = () => {
  return (
    <section className="bg-dark py-5">
      <div className="container text-white">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={RestaurantFood}
              className="d-block mx-lg-auto img-fluid rounded-2"
              alt="Bootstrap Themes"
              width="350"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1
              className="display-5 fw-bold lh-1 mb-3"
              style={{ color: "var(--primary-color)" }}
            >
              Little Lemon
            </h1>
            <h1 className="display-6 fw-bold lh-1 mb-5">Chicago</h1>

            <p className="lead mb-5">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div>
              <button
                type="button"
                className="btn btn-primary px-4 me-md-2 rounded-4"
              >
                Reserve a table
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
