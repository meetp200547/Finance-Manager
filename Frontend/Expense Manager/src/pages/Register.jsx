import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../services/authService";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    formData.password !==
    formData.confirmPassword
  ) {
    alert("Passwords do not match");
    return;
  }

  try {
    const data = await registerUser({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    console.log(data);

    alert("Registration Successful");

    navigate("/");
  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Registration Failed"
    );
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Start tracking your expenses today
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
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
              placeholder="Create password"
              required
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-green-600 font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}