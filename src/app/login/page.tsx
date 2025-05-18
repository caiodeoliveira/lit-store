"use client"

import React, { useState } from "react";
import Input from "../components/input/input";
import loginBackgroundImage from "../assets/images/login-background-photo.png";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

    return (
        <>
    <div className="flex items-center justify-center h-screen min-h-screen"
    style={{
        backgroundImage: `url(${loginBackgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative",
      }}
    >

        <div className="p-4 bg-white shadow-md rounded-lg p-6 w-96">
            <h2 className="text-black text-2xl font-semibold text-center mb-4">Entrar</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder={"Ex:lucas.93@gmail.com"} label="E-mail" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder={"Digite sua senha"} label="Senha" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Entrar
                </button>
            </form>

            <button className="mt-3 text-blue-500 text-sm hover:underline">Esqueci minha senha</button> {/* Direcionar E-mail para backend e definir recuperação*/}

            <p className="mt-4 text-gray-700 text-center text-sm">
                Não possui conta? <a href="/register" className="text-blue-500 hover:underline">Clique Aqui</a>
            </p>
        </div>
        
        {/* <div className="">
            <h1>Bem-vindo !</h1>
            <Image
                src={loginPhotoBig}
                alt="imagem de boas-vindas"
                width={612}
                height={408}/>
        </div> */}
    </div>
        </>
    )
}