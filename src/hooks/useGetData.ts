import { useEffect, useState } from "react";
import { DoctorAttributeType, DoctorType, ResponseType } from "../components/types";

const useGetData = () => {
    const [data, setData] = useState<DoctorType[]>([])
    const [hospitalOptions, setHospitalOptions] = useState<DoctorAttributeType[]>([])
    const [specOptions, setSpecOptions] = useState<DoctorAttributeType[]>([])

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
            })
            .catch((err) => {
                console.log(err.message)
            })
        }, [])

    useEffect(() => {
        if (data) {
            setHospitalOptions(data.map(item => item.hospital))
            setSpecOptions(data.map(item => item.specialization))
        }
    }, [data])

    return {
        data,
        hospitalOptions,
        specOptions,
    }
}

export default useGetData