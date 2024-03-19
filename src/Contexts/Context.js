import React, { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import apiLocal from "../api/ApiLocal";

export const Contexts = createContext();

export default function AuthProvider({ children }) {
  const autenticado = false;
  const nome = "Yemuri";

  async function handleLogar(email, password) {
    try {
      const resposta = await apiLocal.post("/LoginUsuarios", {
        email,
        password,
      });

      console.log(resposta);
    } catch (err) {
      toast.error(err.response.data.error);
    }
  }

  return (
    <Contexts.Provider value={{ autenticado, nome, handleLogar }}>
      {children}
    </Contexts.Provider>
  );
}
