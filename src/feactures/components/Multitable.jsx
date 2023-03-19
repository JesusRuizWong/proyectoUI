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





export const Multitable=() => {

    const[datausuarios, setdatausuario]=useState([])


        useEffect(() => {
    
            api.get('/multitable').then(res => {
                
                console.log(res.data)  
                setdatausuario(res.data['multitable'])          
                // Object.entries(res.data)
                // .map(entry => {
                //     const [key,value] = entry
                //     console.log({key,value})
                // })



       

            }).catch(err => {
                console.log(err)
            })

        }, [])


  return (
    <TableContainer component={Paper} sx={{marginTop:'5rem'}}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>A basic table example with a caption</caption>
        
        <TableHead>
            <TableRow >
              <TableCell>    id               </TableCell>
              <TableCell align="right">   Name          </TableCell>
    
            </TableRow>
        </TableHead>
        <TableBody>
          {datausuarios.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.code}
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
     
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


