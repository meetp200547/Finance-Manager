import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../services/authService";
import ThemeToggle from "../components/ThemeToggle";

export default function Login({darkMode , setDarkMode}) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      console.log(data);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      alert("Login Successful");

      navigate("/home");
    } catch (error) {
      console.error(error);
      
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="  relative 
    min-h-screen

  bg-slate-100
  dark:bg-slate-900

  flex
  items-center
  justify-center">
  {/* theme toggle at top right*/}
    <div className="absolute top-4 right-4">
    <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
      <div className="w-full max-w-md  bg-white
  dark:bg-slate-800

  text-black
  dark:text-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Expense Manager
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Login to manage your expenses
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full  bg-white
  dark:bg-slate-700

  text-black
  dark:text-white

  border
  border-gray-300
  dark:border-slate-600 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full 
               bg-white
  dark:bg-slate-700

  text-black
  dark:text-white

  border
  border-gray-300
  dark:border-slate-600 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-medium"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}