import mongoose from 'mongoose';
export default   function Connection () {
mongoose.connect(process.env.DBPASS).then(()=>console.log('\\/ done for mongo ')).catch((err)=>console.log(err));
}