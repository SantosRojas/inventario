import { BtnR } from "../components/elements"
import { Container, TitleG } from "../components/views"
import DataList from "../components/dataList"
import Formulario from "../components/formulario"
import { useState } from "react"
import DialogConfirm from "../components/dialog"

export function getCurrentDate(separator = '/') {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date < 10 ? `0${date}` : `${date}`}`
}


const Register = ({ data, changeData, dataRows, setDataRows, handleDownloadExcel }) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [indexDelete, setIndexDelete] = useState(-1)


    const handleClear = () => {
        if (indexDelete !==-1){
            handleDeleteRow(indexDelete)
        }else{
            setDataRows([])
        }
    }

    const handleDeleteRow = (index) => {
        const updatedRows = [...dataRows];
        updatedRows.splice(index, 1);
        setDataRows(updatedRows);
    };

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    return (
        <>
            <Container>
                <DialogConfirm openDialog={openDialog} setOpenDialog={setOpenDialog}  handleConfirm ={handleClear}/>
                <TitleG>Inventario BBRAUN</TitleG>
                <Formulario data={data}
                    changeData={changeData}
                    dataRows={dataRows}
                    setDataRows={setDataRows}
                    showButtonSave={true} />

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <BtnR onClick={handleClickOpen}>Borrar Todo</BtnR>
                    <BtnR onClick={handleDownloadExcel}>Descargar Excel</BtnR>
                </div>
            </Container>
            <Container>
                <DataList
                    openDialog ={openDialog}
                    setOpenDialog = {setOpenDialog}
                    changeData={changeData}
                    setIndexEdit={changeData.setIndexEdit}
                    dataRows={dataRows}
                    setIndexDelete = {setIndexDelete}
                    setDataRows={setDataRows} />
            </Container>
        </>
    )
}


export default Register