import './App.css';
import {HashRouter as Router, Routes, Route } from 'react-router-dom';
import VistaEdit from './pages/Edit';
import Register from './pages/Register';
import { useState } from 'react';
import ExcelJS from "exceljs"
import GlobalStyle from './GlobalStyle';
import { Colors } from './components/colors';

function getCurrentDate(separator = '/') {

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date < 10 ? `0${date}` : `${date}`}`
}

function App() {
  const [serie, setSerie] = useState('');
  const [qr, setQr] = useState('');
  const [codigoCliente, setCodigoCliente] = useState(null);
  const [codigoReprecentante, setCodigoReprecentante] = useState(null);
  const [codigoServicio, setCodigoServicio] = useState(null);
  const [tipoBomba, setTipoBomba] = useState(null);
  const [modeloBomba, setModeloBomba] = useState(null);
  const [comentario, setComentario] = useState("");
  const [dataRows, setDataRows] = useState([])
  const [indexEdit, setIndexEdit] = useState(-1)
  const [fecha, setFecha] = useState(getCurrentDate())

  const handleDownloadExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Datos');

    // Añadir encabezados
    worksheet.addRow(['Codigo Reprecentante','CodigoCliente', 'CodigoServicio', 'TipoBomba', 'ModeloBomba', 'Serie', 'CodigoQr', 'Comentario', "Fecha"]);

    // Añadir filas de datos
    dataRows.forEach(data => {
      worksheet.addRow([data.codigoReprecentante.value,data.codigoCliente.value, data.codigoServicio.value, data.tipoBomba.value, data.modeloBomba.value, data.serie, data.qr, data.comentario, data.fecha]);
    });

    // Guardar el archivo
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Inventario_${fecha}.xlsx`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <><GlobalStyle />
      <div style={{ backgroundColor: Colors.primary,height:"100%",padding:"20px 0" }}>
        <Router>
          <Routes>
            <Route index
              element={<Register
                data={{ indexEdit,codigoReprecentante, codigoCliente, codigoServicio, tipoBomba, modeloBomba, serie, qr, comentario, fecha }}
                changeData={{ setIndexEdit, setCodigoReprecentante, setCodigoCliente, setCodigoServicio, setTipoBomba, setModeloBomba, setSerie, setQr, setComentario, setFecha }}
                dataRows={dataRows}
                setDataRows={setDataRows}
                handleDownloadExcel={handleDownloadExcel}
              />} />

            <Route path='/edit/:id'
              element={
                <VistaEdit
                  data={{ indexEdit, codigoReprecentante, codigoCliente, codigoServicio, tipoBomba, modeloBomba, serie, qr, comentario }}
                  changeData={{ setIndexEdit, setCodigoReprecentante, setCodigoCliente, setCodigoServicio, setTipoBomba, setModeloBomba, setSerie, setQr, setComentario }}
                  dataRows={dataRows}
                  setDataRows={setDataRows}
                />} />

            <Route path='*' element={<></>} />

          </Routes>
        </Router>
      </div></>
  );
}

export default App;
