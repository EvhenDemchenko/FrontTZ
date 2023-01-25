//models
import {IValueResults} from "../models/model";

type IProps = {
    VehicleValues: IValueResults
}
export const MainPageItem = (props: IProps) => {
    const {Value, Variable} = props.VehicleValues
    return (
        <div className='mainPage_content-item'>
            <p className='mainPage_item-var'>{Variable}: </p>
            <p className='mainPage_item-val'> {Value}</p>
        </div>
    )
}