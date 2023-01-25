type IProps = {
    arr: Array<string>,
    fetchVehicleVinData: (params: string) => void
}

export const LastQueriesModal = (props: IProps) => {
    const {arr, fetchVehicleVinData} = props

    const fetchVehicleByVinQuery = (event: any) => {
        fetchVehicleVinData(event.target.innerText)
    }
    return (
        <>
            {
                arr.length ? <ul className='heading_modal'>
                    {arr.map((value, index) => (
                        <li
                            key={index + value}
                            onClick={fetchVehicleByVinQuery}
                        >{value}
                        </li>
                    ))}
                </ul> : null
            }
        </>)
}