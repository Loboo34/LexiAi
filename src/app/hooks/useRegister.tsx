import { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";

export function useRegister() {
  const authContext = useAuth();
  if (!authContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  const { setUser } = authContext;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function register(name: string, email: string, password: string) {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { register, loading, error };
}
