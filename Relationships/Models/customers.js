const mongoose = require('mongoose');
const { Schema } = mongoose;

main()
    .then(() => console.log("connection created"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item: String,
    price: Number,
})

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        }
    ]
})

// Schema.pre("findOneDelete",async() => {
//     console.log("PRE")
// })

customerSchema.post("findOneAndDelete",async(cust) => {
    if(cust.orders.length){
        let result = await Order.deleteMany({_id: {$in : cust.orders}})
        console.log(result)
    }
})

const Order = mongoose.model("Order",orderSchema)
const Customer = mongoose.model("Customer",customerSchema)



const findCustomers = async () => {
    let result = await Customer.find({}).populate("orders")
    console.log(result[0])
}

const addCust = async () => {
    let newCust = new Customer({
        name : "Suvin Singh"
    })

    let newOrder = new Order({
        item : "Pizza",
        price: 250

    })

    newCust.orders.push(newOrder)

    await newOrder.save()
    await newCust.save()

    console.log("added new customer")
}

const DelCust =async () => {
    let data = await Customer.findByIdAndDelete("657d2cc22d5b22148237fafb")
    console.log(data)
}

DelCust()