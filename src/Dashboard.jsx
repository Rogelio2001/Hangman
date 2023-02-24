import DataTable, { createTheme } from 'react-data-table-component';
import './Dashboard.css';
import { useState } from 'react';

//Styles
const customStyles = {
  rows: {
    style: {
      minHeight: '102px',
      innerWidth: '80px'
    },
  },
  headCells: {
    style: {
      paddingLeft: '18px',
      paddingRight: '18px',
    },
  },
  cells: {
    style: {
      paddingLeft: '18px',
      paddingRight: '18px',
    },
  },
};

//Theme
createTheme('solarized', {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198',
  },
  background: {
    default: '#002b36',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
}, 'dark');

//Tabla
const columns = [
  {
    name: 'Nombre',
    selector: row => row.Nombre,
    sortable: true,
  },
  {
    name: 'Juegos Ganados',
    selector: row => row.juegosGanados,
    sortable: true,
  },
  {
    name: 'Juegos Perdidos',
    selector: row => row.juegosPerdidos,
    sortable: true,
  },
];

//Tabla(Data)
const Dashboard = () => {
  const [data, setData] = useState([
    {
      id: 1,
      Nombre: 'Leticia',
      juegosGanados: 4,
      juegosPerdidos: 5,
    },
    {
      id: 2,
      Nombre: 'Rogelio',
      juegosGanados: 4,
      juegosPerdidos: 5,
    },
  ]);

  //Variables juegos ganados y perdidos y nombre
  const [nombreJugador, setNombreJugador] = useState("");
  const [juegosGanados, setJuegosGanados] = useState(0);
  const [juegosPerdidos, setJuegosPerdidos] = useState(0);
 
  //Añadir jugador (Datos)
  const handleAddRow = () => {
    setData(prevData => [
      ...prevData,
      {
        id: prevData.length + 1,
        Nombre: 'Nuevo Jugador',
        juegosGanados: 0,
        juegosPerdidos: 0,
      }
    ]);
  };

//Añadir jugador (Boton y tabla)
  return (
    <div className='rdTable'>
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
        theme="solarized"
      />
      <button onClick={handleAddRow}>Agregar jugador</button>
    </div>
  );
};

export default Dashboard;

