import {Schema, model, models} from 'mongoose'


const inventorySchema = new Schema({
    name: String,
    isbn: String,
    category:String,
    total_quantity: Number,
    available_quantity:Number,
    issued_quantity:Number,
    price: Number

})

const Inventory = models.Inventory || model("Inventory", inventorySchema )

export default Inventory