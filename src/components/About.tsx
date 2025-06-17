import { MarioAdrian1, MarioAdrian2 } from "../assets"

const About = () => {
  return (
    <section className="py-5 text-secondary">
      <div className="container col-xxl-8">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5 position-relative">
          <div className="col-lg-6 ">
            <img
              src={MarioAdrian1}
              className="img-fluid rounded-4 mario_position"
              alt="Bootstrap Themes"
              loading="lazy"
            />
            <img
              src={MarioAdrian2}
              className="img-fluid rounded-4 adrian_position"
              alt="Bootstrap Themes"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Little Lemon</h1>
            <h1 className="display-6 fw-bold lh-1 mb-5">Chicago</h1>

            <p className="lead mb-5">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
