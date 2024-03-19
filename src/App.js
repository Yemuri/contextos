import Rotas from "./routes/RotasIndex";
import AuthProvider from "./Contexts/Context";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div>
      <AuthProvider>
        <Rotas />
        <Toaster position="top-center" />
      </AuthProvider>
    </div>
  );
}
