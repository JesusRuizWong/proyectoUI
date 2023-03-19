import React, {  useEffect, useState} from "react"; 
import {collection,getDocs} from 'firebase/firestore'
import { db} from '../../api/firebaseConfigs/firebase'
import Carousel from 'better-react-carousel'
import { Box,Paper,InputBase,IconButton,Typography,Button } from "@mui/material";




export const CarouselBanner= () => {
      
  // 1. configurar hooks
  const [items,setItems] =useState([])  //devuelve un valo con estado y una funcion para actualizarla
        
  //2. referencias ala db de firebase
  const itemsCollection = collection(db,"carouselBanner")
  
  //3. funcion para mostrar tdosos los doc     
  const getItems = async () =>{
  try {
   const data = await getDocs(itemsCollection)
    let p = data.docs.map((doc) => ({...doc.data(), id:doc.id }));
    setItems(p);
    console.log(p);        
  } catch (error) {
    console.log(error)
  }       
  } 

 useEffect( ()=> {
  getItems()
}, [])
  
    return (
      <Box sx={{ backgroundColor: 'transparent',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection:'column',
        marginTop:'5rem'
      }}  >

        <Box  sx={{display:'flex', justifyContent:'center',flexWrap:'wrap' }}>   
        <Carousel cols={1} rows={1} gap={0} loop showDots hideArrow scrollSnap mobileBreakpoint={380} sx={{display:'flex', justifyContent:'center',     }} >
                { items.map( (item) => (
                            <Carousel.Item   key={item.id}    sx={{display:'flex' ,justifyContent:'center',    
                            //  borderRadius:'1rem', 
                                  }}>
                              <Box sx={{backgroundColor:'white',  height:'600px' , position:'relative' ,  display:'inline-block' ,     width:'100%'   

                              //  borderRadius:'1rem' 
                               }}>
                               <Box  component='img'    
                                 id='bannerImg'
                                     sx={{ 
                                     height: '100%',
                                     width:'100%'   ,  objectFit:'cover',

                                    
                                    //  borderRadius:'1rem 1rem 0 0'
                                     }} src={item.imgurl} alt={item.title}>
                               </Box> 
                               
                               <Box sx={{position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)'}} >
                                   <Typography sx={{fontWeight:'600' ,fontSize:'1.1rem', color:'color2', marginBlock:'1rem'}} >{item.title} </Typography> 
                                   <Typography  sx={{textOverflow:'ellipsis', marginInline:'10%',width:'80%', height:'50px' ,
                                    overflow:'hidden', whiteSpace:'pre-line'}}>{item.subtitle} </Typography><p>... </p>
                               </Box>
                 
                               {/* <Box >
                                   <Button size="small" variant="outlined"  sx={{marginInline:'0.5rem'}} onClick={() =>{ handleClickOpen(item.id)}}>Ver Más</Button>
                               </Box> */}
                              </Box>
                           </Carousel.Item>           
                ))}
        </Carousel>
        </Box> 



      </Box>
    );
  };
  
  