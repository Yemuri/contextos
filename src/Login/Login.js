import { useState, useContext } from "react";
import { Contexts } from "../Contexts/Context";

export default function Login() {
  const { handleLogar } = useContext(Contexts);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Digite seu email" />
        <br />
        <input type="text" placeholder="Digite sua senha" />
        <br />
        <button>Enviar</button>
      </form>
    </div>
  );
}
