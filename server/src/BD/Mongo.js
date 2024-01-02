import mongoose from 'mongoose';


const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.8xwn7mp.mongodb.net/?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL);
        console.log('Database connected succefully')
    } catch (error) {
        console.log(`Error while connecting with the database`, error)
    }
}

export default Connection;