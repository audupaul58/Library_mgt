import ConnectionDB from '../../utils/connection';
import Inventory from '../../utils/mdels';


const handler = async (req, res)=> {
     
    try{
    //const {name, isbn, category, total_quantity, available_quantity, issued_quantity, price} = req.body;
    console.log("Coonecting")
    await ConnectionDB()

    console.log("Coonected to db")

    const addNew = await Inventory.create(req.body)

    console.log(addNew)

    res.json(addNew)

     }catch(error){
        res.json(error)
     }
  }
  
  export default handler