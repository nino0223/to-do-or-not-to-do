import { createClient } from "../lib/supabase"
import Login from "./login/page";

export default function Home() {
  return (
    <div>
      <Login/>
    </div>
  );
}
