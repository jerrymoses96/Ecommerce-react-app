import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { BASE_URL } from "../general/Constants";
import Footer from "../includes/Footer";
import Header from "../includes/Header";

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
      <div className="wrapper my-10 flex min-h-screen items-center justify-center">
        <div className="flex w-[90%] items-end justify-center rounded-xl bg-gray-300 p-12 sm:w-[75%] md:w-[55%]">
          <div className="w-full pb-12">
            <h3 className="mb-6 text-2xl font-bold">Register into Account</h3>
            <p className="mb-8 text-lg">
              Create an account to access all the features
            </p>
            <form className="w-full" onSubmit={HandleSubmit}>
              <div className="mb-6">
                <input
                  onChange={(e) => setname(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-lg border border-gray-400 p-4 focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <input
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg border border-gray-400 p-4 focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-lg border border-gray-400 p-4 focus:outline-none"
                />
              </div>
              <Link
                to="/auth/login"
                className="mb-6 block text-lg text-blue-600"
              >
                Login Now
              </Link>
              {message && (
                <p className="my-2 text-center text-red-700">{message}</p>
              )}
              <div className="flex justify-center">
                <button className="rounded-lg bg-blue-600 px-8 py-5 text-lg text-white">
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
