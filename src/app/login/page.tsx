"use client"

import Input from "../components/input/input";
import Image from "next/image";
import loginPhotoBig from "../assets/images/login-page-background.png";
import { useForm } from "react-hook-form";
import { LoginSchema, loginSchema } from "../_validators/login-validators";
import { zodResolver } from "@hookform/resolvers/zod";


export default function Login() {

  const { register, handleSubmit } = useForm({
        resolver: zodResolver(loginSchema)
    });


  const onSubmit = (data: LoginSchema) => {
    console.log("E-mail: ", data.email);
    console.log("Senha: ", data.password);
  };


    return (
        <>
            <div className="relative min-h-screen bg-gray-100">

                <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 p-4 bg-white shadow-md rounded-lg p-6 w-96 mr-100px">
                    <h2 className="text-black text-2xl font-semibold text-center mb-4">Entrar</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black">
                        <Input
                            className="
                                text-black
                                border-[#AEB0B3B2]
                                border
                                rounded-md
                                px-3
                                py-2
                                outline-none
                                focus:ring-2
                                focus:ring-blue-500"
                            placeholder={"Ex:lucas.93@gmail.com"}
                            label="E-mail"
                            type="email"
                            id="email"
                            {...register("email")}
                        />
                        <Input
                            className="
                                text-black
                                border-[#AEB0B3B2]
                                border
                                rounded-md
                                px-3
                                py-2
                                outline-none
                                focus:ring-2
                                focus:ring-blue-500"
                            placeholder={"Digite sua senha"}
                            label="Senha"
                            type="password"
                            id="password"
                            {...register("password")}

                        />

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
                            hover:text-[#0B9D9A]">
                        Esqueci minha senha
                    </button> {/* Direcionar E-mail para backend e definir recuperação*/}
                </div>

                    <p className="absolute left-1/3 -translate-x-1/2 bottom-[60px] mt-4 text-[#121212] text-center text-sm">
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