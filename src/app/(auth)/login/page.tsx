"use client";
import React from "react";
import { CheckCircle, Facebook, Instagram, Mail, Map } from "react-feather";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface FormData {
  email: string;
  password: string;
  remember: boolean;
}
const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    router.push("/home");
  };
  return (
    <div className="flex flex-row bg-white text-black ">
      <div>
        <div>
          <Image
            className="pl-52 pt-10 pb-10"
            src="/Images/background.jpg"
            alt=""
            width={823}
            height={700}
          />
        </div>
      </div>
      <div className="pl-16">
        <div className="flex flex-col ">
          <div className=" flex flex-row pt-16 pb-6 gap-x-64 ">
            <div className="flex flex-row gap-x-2 text-xs font-bold text-red">
              <div>TravelGuru</div>
              <Map size={15} />
            </div>
            <div>
              <CheckCircle size={20} />
            </div>
          </div>
          <hr className="border-gray-400 h-6" />
          <div>
            <div className="pb-6">
              <div className="text-[25px] font-bold">Sign in to Travelguru</div>
              <div className="flex flex-row gap-4 pt-1">
                <div className="text-xs">Don't have an account?</div>
                <div className="text-xs text-red font-bold">Sign up</div>
              </div>
            </div>
            <hr className="border-gray-400 h-6" />
          </div>
        </div>
        <div className="mx-auto mt-4 ml-2 mr-2 pb-6">
          <form
            onSubmit={handleSubmit(onSubmit)} // Add onError callback
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name" // added
                className="text-sm font-bold text-black block"
              ></label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="email" // added
                className="text-sm font-bold text-gray-600 block"
              ></label>
              <input
                {...register("email", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                })}
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="password" // added
                className="text-sm font-bold text-gray-600 block"
              ></label>
              <input
                {...register("password", { required: true })}
                type="password"
                className="w-full p-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
            <div>
              <button className="w-full p-2 border border-gray-300 rounded-lg mt-1 bg-red text-white">
                Continue
              </button>
            </div>
            <hr className="border-gray-400" />
            <div className="pl-36 text-grey text-sm">--OR--</div>
            <div className="flex items-center justify-between">
              <div>
                <div className="w-[250px] p-2 gap-x-2 rounded-lg mt-1 text-xs font-bold text-black flex flex-row pl-14 bg-skin">
                  <Image
                    src="/googlelogo.png"
                    width={15}
                    height={15}
                    alt="Google Logo"
                  />
                  <div>Sign in with Google</div>
                </div>
              </div>
              <div className="flex flex-row gap-x-4 ">
                <div className="rounded-lg mt-1 bg-skin p-2">
                  <Instagram size={15} />
                </div>
                <div className="rounded-lg mt-1 bg-skin p-2">
                  <Mail size={15} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
