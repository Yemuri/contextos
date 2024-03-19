import React, { createContext, useState } from "react";
import apiLocal from "../api/ApiLocal";

export const Contexts = createContext();

export default function AuthProvider({ children }) {
  const autenticado = false;
  const nome = "Yemuri";

  async function handleLogar(email, password) {
    try {
      console.log(email, password);
    } catch (err) {
      alert("Erro de login");
    }
  }

  return (
    <Contexts.Provider value={{ autenticado, nome, handleLogar }}>
      {children}
    </Contexts.Provider>
  );
}
