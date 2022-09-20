import { PrismaClient, Booking } from "@prisma/client";

class BookingController {
    private prisma: PrismaClient

    constructor(){
        this.prisma = new PrismaClient()
    }
    
    async findAll(){
        try{
            return this.prisma.booking.findMany({
                select: {
                    user: {
                        select: {
                            name: true
                        }
                    },
                    house: {
                        select: {
                            title: true
                        }
                    },
                    startDate: true,
                    endDate: true
                }
            })
        }catch(e){
            return e
        }
    }

    async create(data: Omit<Booking, 'id'>){
        try{
            return this.prisma.booking.create({
                data: {
                    ...data
                }
            })
        }catch(e){
            console.log(e)
        }
    }
}

export default BookingController;