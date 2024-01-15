'use server'

import prisma from "@/prisma/prismaClient";


export default async function reservationToDB(formData){
    try {

        const name = formData.get('name')
        const phone = formData.get('phone')
        const email = formData.get('email')
        const date = formData.get('date')
        const people = formData.get('people')
        const message = formData.get('message')

        const newEntry = await prisma.littleLemonReservations.create({
            data: {
                name: name,
                phone: phone,
                email: email,
                date: date,
                people: people,
                message: message
            },
        })
       

    } catch (error) {
        return Response.json({ error: `An error ${error} occurred` });
    }
}