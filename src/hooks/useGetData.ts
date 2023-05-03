import { useEffect, useState } from "react";
import { DoctorAttributeType, DoctorType, ResponseType } from "../components/types";

const useGetData = () => {
    const [data, setData] = useState<DoctorType[]>([])
    const [hospitalOptions, setHospitalOptions] = useState<DoctorAttributeType[]>([])
    const [specOptions, setSpecOptions] = useState<DoctorAttributeType[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetch(`https://run.mocky.io/v3/c9a2b598-9c93-4999-bd04-0194839ef2dc`)
            .then((response) => response.json())
            .then((actualData) => {
                const tempData = actualData.data.map((item: ResponseType) => {
                    return {
                        doctor_id: item.doctor_id,
                        name: item.name,
                        about: item.about,
                        imgUrl: item.photo.url,
                        price: item.price.formatted,
                        specialization: item.specialization,
                        hospital: item.hospital[0],
                    }
                })
                setData(tempData)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err.message)
            })
        }, [])

    useEffect(() => {
        setLoading(true)
        if (data) {
            const tempHospital = data.map(item => item.hospital)
            const tempHospitalName = data.map(item => item.hospital.name)
            setHospitalOptions(tempHospital.filter((item, index) => {
                return tempHospitalName.indexOf(item.name) === index
            }))
            const tempSpec = data.map(item => item.specialization)
            const tempSpecName = data.map(item => item.specialization.name)
            setSpecOptions(tempSpec.filter((item, index) => {
                return tempSpecName.indexOf(item.name) === index
            }))
        }
        setLoading(false)
    }, [data])

    return {
        data,
        hospitalOptions,
        specOptions,
        loading
    }
}

export default useGetData