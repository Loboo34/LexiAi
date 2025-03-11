"use client"; // Ensure it runs only on the client side

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Define the authentication context type
interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Create an empty AuthContext with default values
const AuthContext = createContext<AuthContextType | null>(null);

// Hook to access AuthContext
export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider component to wrap the app
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Function to handle login
  async function login(email: string, password: string) {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");

      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      router.push("/dashboard"); // Redirect after login
    } catch (error: any) {
      console.error("Login Error:", error.message);
    }
  }

  // Function to handle logout
  function logout() {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/login"); // Redirect after logout
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
