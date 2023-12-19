

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const SignUp = () => {
    const {createUser}=useContext(AuthContext)
    const handleLogin=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>console.log(error))

    }
    return (
        <form onSubmit={handleLogin} className="my-3 rounded-xl">
        <div style={{ boxShadow: "0 .5rem 1rem rgba(0,0,0,.15)", }} className="px-10 py-14  border  w-3/4 mx-auto rounded-lg " >
            <div className="flex flex-col items-center leading-[50px] justify-center">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
                    </div>
                </div>
                <h2 className="text-4xl text-center font-bold text-[#0060af] mt-4">Hey, Good to see you!</h2>
                <p>Sign Up to get going with our recruitment process! </p>
            </div>
            <hr className="my-4 border" />
            <div className="space-y-5">
                <h2 className="text-2xl font-semibold">Name</h2>
                <input type="text" placeholder="Enter Your Name" name="name" className="input input-bordered  input-lg w-full " />
                <h2 className="text-2xl font-semibold">Email Address</h2>
                <input type="text" placeholder="Enter Your Email" name="email" className="input input-bordered  input-lg w-full " />
                <h2 className="text-2xl font-semibold">Password</h2>
                <input type="password" placeholder="Enter Your Password" name="password" className="input input-bordered input-lg w-full " />
            </div>


            <input className="color-[#fff] text-2xl text-white w-full mt-4 bg-[#0060AF] h-14 text-center rounded-md" type="submit" value="Submit" />
            <h2 className="text-center font-serif text-xs mt-2">Already Have An Account <Link className="text-red-400" to='/signup'>Please Sign In</Link></h2>
        </div>

    </form>
    );
};

export default SignUp;