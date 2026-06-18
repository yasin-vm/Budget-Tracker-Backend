import User from "../models/userModels.js";

export const signup= async (req,res)=>{
try{
    const {name,dob,phone,email,username,password}=req.body;
    const existingUser= await User.findOne({email})
    if(existingUser){
      res.status(400).json({success:false,message:'user already exist'})
        return
    }
    if(!name||!dob){
        res.send('')
    }



   const user = await   User.create({name,dob,phone ,email,username,password})
   console.log(user);
   res.status(201).json({success:true,message:'signup success',data:user})
}catch(error){
    console.log(error);

    res.status(500).json({
        success:false,
        message:error.message
    });
}

}



export const login = async (req,res) => {

    try {

       const { username, password } = req.body;

       console.log("Received username:", username);

       const user = await User.findOne({ username });

       console.log("Found user:", user);

        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }

        if(user.password !== password){
            return res.status(401).json({
                success:false,
                message:"Wrong password"
            });
        }

        res.status(200).json({
            success:true,
            message:"Login successful",
            data:user
        });

    } catch(error){

        console.log(error);

        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

//to retrive data from sign up details toward to profile
export const getProfile = async (req,res) => {

    try {

        const { userId } = req.params;

        const user = await User.findById(userId);

        res.status(200).json({
            success:true,
            data:user
        });

    } catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

//updating current profile and database
export const updateProfile = async (req,res) => {

    try {

        const { _id, name, dob, email, username, phone } = req.body;

        const user = await User.findByIdAndUpdate(
            _id,
            {
                name,
                dob,
                email,
                username,
                phone
            },
            { returnDocument: 'after' }
        );

        res.status(200).json({
            success:true,
            data:user
        });
        console.log("Updated User:", user);

    } catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });
    }
}

