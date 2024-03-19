import { useState, useContext } from "react";
import { Contexts } from "../Contexts/Context";
import { toast } from "react-hot-toast";

export default function Login() {
  const { handleLogar } = useContext(Contexts);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    try {
      e.preventDefault();
      if (!email || !password) {
        toast.error("Existem campos em branco");
        return;
      }
      await handleLogar(email, password);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
