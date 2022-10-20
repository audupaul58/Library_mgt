import mongoose from 'mongoose';


const connectionDB = async () => {
    mongoose.connect(process.env.BACKEND_API);
}

export default connectionDB