import React, {useEffect, useState,} from "react";
import {Route, Routes} from "react-router-dom";
//redux
import {useDispatch} from "react-redux";
import {useGetVehicleVariableListQuery, useLazyGetVehicleByVinQuery} from "./store/vinDecoderApi/vinDecoder.api";
import {useAppActions} from "./hooks/redux.actions";
//thunks
import {setReducedItems} from './store/thunks/setReducedItems.thunk'
//components
import {Loader} from "./components/Loader";
import {Navigation} from "./components/Navigation";
//pages
import {FullInfoPage} from "./pages/FullInfoPage";
import {MainPage} from "./pages/MainPage";
//
import {ToastContainer, toast} from 'react-toastify';

function App() {

    const dispatch: any = useDispatch()
    const [fetchVehicleByVin, {data, isLoading, isError}] = useLazyGetVehicleByVinQuery()
    const {data: variableData, isLoading: isVariableListLoading} = useGetVehicleVariableListQuery('')
    const {setValueItems, setVariableDataList, setModalState} = useAppActions()

    const [modalRef, setModalRef] = useState<HTMLInputElement>()
    const handleSetModalRef = (ref: HTMLInputElement) => {
        setModalRef(ref)
    }

    useEffect(() => {
        if (data) {
            setValueItems(data)
            toast.success(data.Message, {theme:'colored'});
        }
        if (variableData) {
            setVariableDataList(variableData.Results)
            // toast.info(variableData.Message, {theme:'colored'})
        }
        if (data && variableData) dispatch(setReducedItems())

    }, [data, variableData])

    const handleSearchVehicleByVin = (searchedValue: string) => {
        fetchVehicleByVin(searchedValue)
    }

    const toggleModalSearchHistory = (event: any) => {
        if (event == modalRef) {
            setModalState(true)
            return
        }
        setModalState(false)
    }

    return (
        <section className='wrapper' onClick={e => toggleModalSearchHistory(e.target)}>
            <Navigation handleSetModalRef={handleSetModalRef} handleSearchVehicleByVin={handleSearchVehicleByVin}/>
            {isLoading && <Loader/>}
            {isError && <p style={{color: 'red'}}>Error</p>}
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/full'} element={<FullInfoPage/>}/>
            </Routes>
            <ToastContainer position={"bottom-right"}/>
        </section>
    )
}

export default App

