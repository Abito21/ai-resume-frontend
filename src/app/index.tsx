import { Toaster } from "react-hot-toast";
import Providers from "./providers";
import AppRouter from "./router";

export default function App() {
  return (
    <Providers>
      <AppRouter />
      <Toaster />
    </Providers>
  );
}