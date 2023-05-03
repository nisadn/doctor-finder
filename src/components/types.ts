export type DoctorAttributeType = {
    id: string
    name: string
}

export type DoctorType= {
    doctor_id: string
    name: string
    about: string
    imgUrl: string
    price: string
    specialization: DoctorAttributeType
    hospital: DoctorAttributeType
}

export type ResponseType = {
    doctor_id: string
    name: string
    about: string
    photo: {
        url: string
    }
    price: {
        formatted: string
    }
    specialization: DoctorAttributeType
    hospital: DoctorAttributeType[]
}