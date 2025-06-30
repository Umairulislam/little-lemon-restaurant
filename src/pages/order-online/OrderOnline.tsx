import { OrderOnlineBanner } from "../../assets"
import { Dessert, Salad } from "../../components"

const OrderOnline = () => {
  return (
    <main className="py-6 bg-light">
      <div className="container">
        {/* <img
          src={OrderOnlineBanner}
          alt="restaurant"
          height="200px"
          className="object-fit-cover rounded-4 w-100"
        /> */}

        <Salad />
        <Dessert />
      </div>
    </main>
  )
}

export default OrderOnline
