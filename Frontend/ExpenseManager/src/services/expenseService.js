import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization =
      `Bearer ${token}`;
  }

  return config;
});

export const createExpense = async (
  expenseData
) => {
  const response = await API.post(
    "/expenses",
    expenseData
  );

  return response.data;
};
export const getExpenses = async (
  month,
  year
) => {
  const response = await API.get(
    `/expenses?month=${month}&year=${year}`
  );

  return response.data;
  
};

export const updateExpense =
  async (id, data) => {
    const response =
      await API.put(
        `/expenses/${id}`,
        data
      );

    return response.data;
};

export const deleteExpense =
  async (id) => {
    const response =
      await API.delete(
        `/expenses/${id}`
      );

    return response.data;
};