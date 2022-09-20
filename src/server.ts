import BookingController from "./controllers/BookingController";
import HouseController from "./controllers/HouseController";
import UserController from "./controllers/UserController";

async function main(){
    const userController = new UserController()
    const houseController = new HouseController()
    const bookingController = new BookingController()

    const bookings = await bookingController.findAll()
    console.log(bookings)
}

main()