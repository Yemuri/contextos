import React, { createContext, useState } from "react";
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
      //   if (resposta.data.id) {
      //     const token = resposta.data.token;
      //     localStorage.setItem("@tklogin2023", JSON.stringify(token));
      //   }
      console.log(resposta);
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
