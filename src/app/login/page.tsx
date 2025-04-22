"use client"; 

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link"; // Importação do Link

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }
    setError("");
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-4"
      >
        <Card className="w-full shadow-2xl rounded-2xl bg-white">
          <CardContent className="p-6">
            {/* Espaço para imagem no topo */}
            <div className="flex justify-center mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXzzIfA4JgD9IwRtrhhOtqW39J3NBQundgSg&s" // substitua com o caminho da sua imagem
                alt="Logo"
                className="h-20 w-auto"
              />
            </div>

            <h1 className="text-2xl font-bold text-center mb-4">Bem-vindo</h1>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="Login"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <motion.p
                  className="text-red-500 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {error}
                </motion.p>
              )}

              {/* Envolvendo o botão com o Link */}
              <Link href="/dashboard">
                <Button
                  type="submit"
                  className="mt-4 w-full p-4 -600 text-white rounded-lg shadow-lg hover:bg-purple-700 focus:ring-4 focus:ring-500 transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-100"
                >
                  Entrar
                </Button>
              </Link>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
