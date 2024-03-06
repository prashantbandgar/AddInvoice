import Header from "../components/Header";
import React ,{ useState } from "react";
import {Box ,Typography , Button} from "@mui/material";
import AddInvoice from "../components/AddInvoice";

const Home = ()=>{
  const[addInvoice,setAddInvoice]=useState(false);

  const toggleInvoice=()=>{
    setAddInvoice(true);


  }
    return (
      <>
      <Header />
      <Box style={{margin :20}}>
        <Typography variant="h4" style={{margin:15}}>Pending Invoices</Typography>
         { !addInvoice && <Button Button 
          variant="contained" 
          style={{marginTop:15}}
          onClick={()=>toggleInvoice()}
        >Add Invoice</Button>
         }
        
        {addInvoice && <AddInvoice setAddInvoice={setAddInvoice} />}
      </Box>
      </>
    )
}

export default Home;
