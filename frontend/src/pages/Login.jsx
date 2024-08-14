import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import useSingIn from "react-auth-kit/hooks/useSignIn";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const singIn = useSingIn();
  const navigate = useNavigate();
  const isAuth = useIsAuthenticated()

  const sumbitHandler = async () => {
    try {
      setLoading(true)
      const response = await axios.post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      });

      singIn({
        auth: {
          token: response.data.authorization.token,
        },
        userState: {
          user: response.data.user.name,
          email: response.data.user.name,
        },
      });
      setLoading(false)
      navigate("/");
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/")
    }
  }, [])

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Login</title>
        </Helmet>
      </HelmetProvider>
      <NavBar />
      {loading ? (
        <section className="w-screen h-screen flex justify-center items-center">
          <span class="loader"></span>
        </section>
      ) : (
        <section className="flex justify-center items-center w-screen h-screen p-4 relative">
          <form action="#" className="flex flex-col lg:w-1/3 md:w-1/2 w-full gap-3 border border-black p-4">
            <h1 className="w-full flex justify-center font-bold text-2xl">Login</h1>
            <div className="flex flex-col">
              <label htmlFor="email" className="font-bold text-lg">Email</label>
              <input
                type="text"
                id="email"
                className="border-b border-black"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="font-bold text-lg">Password</label>
              <input
                type="text"
                id="password"
                className="border-b border-black"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </div>
            <button
              className="bg-[#1f1f1f] text-white py-2 my-4 border border-white hover:bg-white hover:border-black hover:text-black transition-all duration-200"
              type="submit"
              onClick={() => sumbitHandler()}
            >
              submit
            </button>
            <div className="flex justify-between items-center">
              don't have account?
              <a href="/" className="underline hover:text-blue-800 transition-all duration-200">register</a>
            </div>
          </form>
        </section>
      )}
    </>
  );
}
