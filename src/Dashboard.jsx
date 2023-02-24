import DataTable, { createTheme } from 'react-data-table-component';
import './Dashboard.css';


const customStyles = {
    rows: {
        style: {
            
            minHeight: '102px', // override the row height
            innerWidth:'80px'
        },
    },
    headCells: {
        style: {
            paddingLeft: '18px', // override the cell padding for head cells
            paddingRight: '18px',
        },
    },
    cells: {
        style: {
            paddingLeft: '18px', // override the cell padding for data cells
            paddingRight: '18px',
        },
    },
    
    
};

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
  


const columns = [
    {
        name: 'Nombre',
        selector: row => row.Nombre,
        sortable: true,
    },
    {
        name: 'JuegosGanados',
        selector: row => row.JuegosGanados,
        sortable: true,
    },
    {
        name: 'JuegosPerdidos',
        selector: row => row.JuegosPerdidos,
        sortable: true,
    },

];

const data = [
    {
        id: 1,
        Nombre:'Leticia',
        JuegosGanados:'4',
        JuegosPerdidos:'5',

    },
    {
        id: 2,
        Nombre:'Rogelio',
        JuegosGanados:'4',
        JuegosPerdidos:'5',
    },
]



const Dashboard=()=> {
    return (
        <div className='rdTable'>
            <DataTable
            
            columns={columns}
            data={data}
            customStyles={customStyles}
            theme="solarized"
            
            
            
            
        />

        </div>
       
    );
};

export default Dashboard