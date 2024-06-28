import { forgotPassword, clearAllForgotResetPassErrors } from "@/store/slices/forgotResetPasswordSlice";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import  SpecialLoadingButton from "./sub-components/SpecialLoadingButton";
import { Input } from "@/components/ui/input";
import  { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

const ForgotPassword = ()=>{
    const [email, setEmail] = useState("");
    const {loading, error, message} = useSelector((state)=>state.forgotPassword);
    const dispatch = useDispatch();
    const { isAuthenticated} = useSelector((state)=>state.user);

    const navigateTo = useNavigate();

    const handleForgotPassword = ()=>{
        dispatch(forgotPassword(email));
    }
    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch(clearAllForgotResetPassErrors());
        }
        if(isAuthenticated){
            navigateTo("/");
        }
        if (message !== null) {
            toast.success(message);
        }
    }, [dispatch, isAuthenticated, error, loading]);

    return (<>
        <div className="w-full lg:grid lg:min-h-[100vh] lg:grid-cols-2 xl:min-h-[100vh]">
      <div className="min-h-[100vh] flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6 border-2 border-gray-300 p-5 rounded-lg">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Forgot Password</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required

              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Link
                  to="/login"
                  className="ml-auto inline-block text-sm underline"
                >
                  Remember your password?
                </Link>
              </div>
            </div>
            {loading ? (
              <SpecialLoadingButton content={"Loggin In"} />
            ) : (
              <Button
                onClick={() => handleForgotPassword(email)}
                className="w-full"
              >
                Send mail
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-muted">
        <img src="/login.png" alt="login" />
      </div>
    </div>
    </>);

}

export default ForgotPassword;