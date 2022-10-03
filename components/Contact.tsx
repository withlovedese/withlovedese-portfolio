import React from "react";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "../typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

const Contact = ({ pageInfo }: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:semielumaro@gmail.com?subject=${data.subject}&body=Hi, I'm ${data.name}, 
    ${data.message} 
    I'd love to chat with you sometime! You can reach me at ${data.email}`;
  };

  return (
    <div className="relative h-screen flex flex-col justify-evenly items-center text-center md:text-left md:flex-row max-w-7xl p-10 mx-auto">
      <h3 className="absolute top-20 tracking-[20px] uppercase text-purple-9 font-extrabold text-center">
        Contact me
      </h3>

      <div className="flex flex-col space-y-4 absolute top-36 sm:justify-center">
        <h4 className="text-semibold text-3xl text-center">Talk to me!</h4>

        <div className="space-y-5 flex flex-col items-center justify-center">
          <div className="flex items-center space-x-5">
            <PhoneRoundedIcon className="text-purple-9 h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-lg">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5">
            <EmailRoundedIcon className="text-purple-9 h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-lg">{pageInfo.email}</p>
          </div>
          <div className="flex items-center space-x-5">
            <LocationOnIcon className="text-purple-9 h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-lg">{pageInfo.address}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col mx-auto w-fit md:space-y-3 space-y-1"
        >
          <div className="flex md:space-x-2 space-x-1">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Monkey D. Luffy"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="pirateking@gmail.com"
            />
          </div>
          <input
            className="contactInput"
            type="text"
            placeholder="Subject"
            {...register("subject")}
          />
          <textarea
            className="contactInput"
            placeholder="Message"
            {...register("message")}
          />
          <button
            type="submit"
            className="bg-purple-9 md:py-5 md:px-10 py-3 px-5 rounded-md text-purple-2 font-bold md:text-lg text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
