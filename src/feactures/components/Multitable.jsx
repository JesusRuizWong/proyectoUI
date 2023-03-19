// import axios from 'axios'
// import React, {useEffect, useState} from 'react'
// import { useAuthStore } from "../../hooks/useAuthStore"
// import { api } from '../../api';



// export const Multitable = () => {
//     const { startLogout, user } = useAuthStore();

//     const[datausuarios, setdatausuario]=useState([])

//     useEffect(() => {
//         const token=user.token
//         console.log(token)

//         api.get('/multitable').then(res => {
//             console.log(res.data)  
//             setdatausuario(res.data)          
//         }).catch(err => {
//             console.log(err)
//         })
      
//     }, [])


//     return(
//         <div>
//             <h2>Lista de usuarios</h2>
//         </div>
//     )
// }



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import React, {useEffect, useState} from 'react' ;
import { api } from '../../api'; 



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

export const Multitable=() => {

    const[datausuarios, setdatausuario]=useState([])

        useEffect(() => {
    
            api.get('/multitable').then(res => {
                
                console.log(res.data)  
                setdatausuario(res.data)          
                Object.entries(res.data)
                .map(entry => {
                    const [key,value] = entry
                    console.log({key,value})
                })

            }).catch(err => {
                console.log(err)
            })
          
        }, [])


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


