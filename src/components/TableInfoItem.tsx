import React from "react";
//models
import {IReducedItems} from "../models/model";

export const TableInfoItem = ({VehicleInformation}: { VehicleInformation: IReducedItems }) => {
    const {Value, Variable, GroupName, Description} = VehicleInformation

    return (
        <tr>
            <td>{GroupName}</td>
            <td>{Variable}</td>
            <td dangerouslySetInnerHTML={{__html: Description}}/>
            <td>{Value}</td>
        </tr>

    )
}