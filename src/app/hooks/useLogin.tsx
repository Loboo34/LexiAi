import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";

export function useLogin() {
  const authContext = useAuth(); // Get authContext from context
  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  const { setUser } = authContext;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function login(email: string, password: string) {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      console.log("user:", data.user);

      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { login, loading, error };
}
