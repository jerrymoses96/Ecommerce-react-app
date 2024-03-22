import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePathContext } from "../context/PathContext";
import { useUserContext } from "../context/UserContext";
import { BASE_URL } from "../general/Constants";
import Footer from "../includes/Footer";
import Header from "../includes/Header";

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
      <Header />
      <div className="min-h-screen flex justify-center items-center wrapper">
        {/* Right Container */}
        <div className="bg-gray-300 w-1/2 flex flex-col items-end justify-end rounded-lg p-8 ">
          <div className="w-full">
            <h3 className="text-2xl font-bold mb-4">Login to your Account</h3>
            <p className="text-lg mb-6">Enter email and password to login</p>
            <form className="w-full" onSubmit={HandleSubmit}>
              <div className="mb-4">
                <input
                  onChange={(e) => setusername(e.target.value)}
                  value={username}
                  type="email"
                  placeholder="Email"
                  className="p-4 w-full border rounded"
                />
              </div>
              <div className="mb-4">
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  className="p-4 w-full border rounded"
                />
              </div>
              <Link to="/auth/create/" className="text-blue-600 text-lg mb-4">
                Signup Now
              </Link>
              {message && (
                <p className="text-center my-2 text-red-700">{message}</p>
              )}
              <div className="flex justify-center ">
                <button className="bg-blue-600 text-white px-8 py-4 rounded text-lg">
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
