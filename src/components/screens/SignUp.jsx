import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { BASE_URL } from "../general/Constants";
import Footer from "../includes/Footer";
import Header from "../includes/Header";
import { Helmet } from "react-helmet";

export default function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setmessage] = useState("");
  const { updateUserData } = useUserContext();
  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    setmessage("");
    e.preventDefault();

    axios
      .post(`${BASE_URL}/auth/register/`, { email, password, first_name: name })
      .then((Response) => {
        let data = Response.data.data;
        let status_code = Response.data.StatusCode;
        if (status_code === 6000) {
          localStorage.setItem("user_data", JSON.stringify(data));
          updateUserData({ type: "LOGIN", payload: data });
          navigate("/");
        } else {
          setmessage(Response.data.message);
        }
        console.log(data);
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
        <title>Sign Up</title>
      </Helmet>
      <Header />
      <div className="min-h-screen flex wrapper justify-center items-center my-10">
        <div className="bg-gray-300 w-[90%] sm:w-[75%] md:w-[55%] flex items-end justify-center rounded-xl p-12">
          <div className="pb-12 w-full">
            <h3 className="text-2xl font-bold mb-6">Register into Account</h3>
            <p className="text-lg mb-8">
              Create an account to access all the features
            </p>
            <form className="w-full" onSubmit={HandleSubmit}>
              <div className="mb-6">
                <input
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Name"
                  className="p-4 w-full border border-gray-400 rounded-lg focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <input
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Email"
                  className="p-4 w-full border border-gray-400 rounded-lg focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  className="p-4 w-full border border-gray-400 rounded-lg focus:outline-none"
                />
              </div>
              <Link
                to="/auth/login"
                className="text-blue-600 text-lg block mb-6"
              >
                Login Now
              </Link>
              {message && (
                <p className="text-center my-2 text-red-700">{message}</p>
              )}
              <div className="flex justify-center">
                <button className="bg-blue-600 text-white px-8 py-5 rounded-lg text-lg">
                  Create an Account
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
