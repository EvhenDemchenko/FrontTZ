type IProps = {
    arr: Array<string>,
    fetchVehicleVinData: (params: string, isHistory: boolean) => void
    setSearchedValue:(url:string)=>void
}

export const LastQueriesModal = (props: IProps) => {
    const {arr, fetchVehicleVinData, setSearchedValue} = props

    const fetchVehicleByVinQuery = (event: any) => {
        fetchVehicleVinData(event.target.innerText, true)
        setSearchedValue(event.target.innerHTML)
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