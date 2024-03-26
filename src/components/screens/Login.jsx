import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePathContext } from "../context/PathContext";
import { useUserContext } from "../context/UserContext";
import { BASE_URL } from "../general/Constants";
import Footer from "../includes/Footer";
import Header from "../includes/Header";
import FooterNote from "../includes/FooterNote";
import { Helmet } from "react-helmet";

export default function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  const { updateUserData } = useUserContext();
  const navigate = useNavigate();

  const { pathname, setPathname } = usePathContext();

  const handleLoginSuccess = () => {
    // Clear stored path in context
    setPathname(null);
    // Redirect to stored path if it exists
    if (pathname) {
      navigate(pathname);
    } else {
      navigate("/");
    }
  };

  const HandleSubmit = (e) => {
    setmessage("");
    e.preventDefault();

    axios
      .post(`${BASE_URL}/auth/token/`, { username, password })
      .then((Response) => {
        console.log(Response.data);
        let data = Response.data;
        localStorage.setItem("user_data", JSON.stringify(data));
        updateUserData({ type: "LOGIN", payload: data });
        navigate("/");
        toast.success(`logged in to your account!`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        handleLoginSuccess();
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 401) {
          setmessage(error.response.data.detail);
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Header />
      <div className="wrapper flex min-h-screen items-center justify-center">
        {/* Right Container */}
        <div className="flex w-[100%] flex-col items-end justify-end rounded-lg bg-gray-300 p-8 sm:w-[75%] md:w-[55%] ">
          <div className="w-full">
            <h3 className="mb-4 text-2xl font-bold">Login to your Account</h3>
            <p className="mb-6 text-lg">Enter email and password to login</p>
            <form className="w-full" onSubmit={HandleSubmit}>
              <div className="mb-4">
                <input
                  onChange={(e) => setusername(e.target.value)}
                  value={username}
                  type="email"
                  placeholder="Email"
                  className="w-full rounded border p-4"
                />
              </div>
              <div className="mb-4">
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  className="w-full rounded border p-4"
                />
              </div>
              <Link to="/auth/create/" className="text-lg text-blue-600 ">
                Signup Now
              </Link>
              {message && (
                <p className="my-2 text-center text-red-700">{message}</p>
              )}
              <div className="flex justify-center ">
                <button className="mt-4 rounded bg-blue-600 px-8 py-4 text-lg text-white">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
