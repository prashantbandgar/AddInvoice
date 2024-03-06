import {useState} from 'react';
import {Box, Typography ,TextField,Button,styled} from "@mui/material";
import { saveInvoice } from '../services/api';

const Component =styled(Box)({
    marginTop:20,
    '& > p':{//used to handle child component inside using parent component
        fontSize:26,
        marginTop:20
    },
    '& > div > div':{
        marginRight: 20,
        minWidth:200
    }

})

const defaultObj ={
    vendor:'',
    product:'',
    amount:0,
    date:'',
    action:'pending'

}



    const AddInvoice = ({setAddInvoice}) => {
     const [invoice,setInvoice]=useState(defaultObj)

    const onValueChange=(e)=>{
        setInvoice({...invoice,[e.target.name]:e.target.value});


    }
     
    const addNewInvoice =async()=>{
        await saveInvoice({...invoice,amount : Number(invoice['amount'])});
          
        setAddInvoice(false);
            
    }


    return (
        <Component>
            <Typography>Add Invoice</Typography>
            <Box>
                <TextField
                varient="standard"
                placeholder="Enter vendor name"
               onChange={(e) =>onValueChange(e)}
               name="vendor"
               autoComplete='off'
                
                />
                 <TextField
                varient="standard"
                placeholder="Enter product name"
                onChange={(e) =>onValueChange(e)}
                name="product"
                autoComplete='off'
                />
                 <TextField
                varient="standard"
                placeholder="Enter amount(in Rs)"
                type="number"
                onChange={(e) =>onValueChange(e)}
                name="amount"
                autoComplete='off'
                />
                 <TextField
                varient="standard"
                placeholder="Enter date"
                type="date"
                onChange={(e) =>onValueChange(e)}
                name="date"
                autoComplete='off'
                
                />
                <Button 
                type="submit"
                variant="contained"
                onClick={addNewInvoice}
               
                > Add Invoice
                
                </Button>
            </Box>

        </Component>
    )

}
export default AddInvoice;