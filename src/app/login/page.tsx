"use client"

import React, { useState } from "react";
import Input from "../components/input/input";
import Image from "next/image";
import loginPhotoBig from "../assets/images/login-page-background.png";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

    return (
            <>
            <div className="relative min-h-screen bg-gray-100">

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-white shadow-md rounded-lg p-6 w-96">
                    <h2 className="text-black text-2xl font-semibold text-center mb-4">Entrar</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input placeholder={"Ex:lucas.93@gmail.com"} label="E-mail" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input placeholder={"Digite sua senha"} label="Senha" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <button type="submit" className="w-full bg-[#0B9D9A] text-white py-2 rounded-md hover:bg-[#038886] transition cursor-pointer">
                        Entrar
                        </button>
                    </form>
                    {/* TODO: Definir como font global a DM Sans */}
                    <button
                        className="
                            w-[168px]
                            h-[28px]
                            rounded-[8px]
                            text-xs
                            border
                            border-[#D0D5DD]
                            bg-white
                            px-[24px]
                            py-[8px]
                            text-[#667085]
                            flex
                            items-center
                            justify-center
                            block mx-auto
                            mt-5
                            cursor-pointer
                            hover:text-[#0B9D9A]
                            ">
                        Esqueci minha senha
                    </button> {/* Direcionar E-mail para backend e definir recuperação*/}
                </div>

                    <p className="absolute left-1/2 -translate-x-1/2 bottom-[60px] mt-4 text-[#121212] text-center text-sm">
                        Não possui conta? <a href="/register" className="text-[#0B9D9A] hover:underline">Clique Aqui</a>
                    </p>
                
                <div className="h-[70%] absolute right-0 top-1/5 -translate-y-1/3 p-4 ml-100">
                
                    <h1 className="w-[420px] h-[200px] items-center absolute flex justify-center items-center text-white text-3xl font-bold text-center">Bem-vindo de volta ao LitStore!</h1>

                    <Image
                        className="max-h-screen w-full object-cover"
                        src={loginPhotoBig}
                        alt="imagem de boas-vindas"
                        width={560}
                        height={800}/>
                </div>
            </div>
            </>
    )
}