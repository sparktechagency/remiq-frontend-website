import { MdLock, MdOutlineEmail , MdPhone } from "react-icons/md"; 
import {CiUser} from "react-icons/ci"

const forgetFields = [
  {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    className:
      "!bg-secondary !text-white !w-full !py-4 valid:bg-secondary placeholder:!text-gray-300 !border-none !mb-4  ",
    prefix: <MdOutlineEmail size={20} color="#6B7280" />,
  },
];  

const loginFields = [
  {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    className:
      "!bg-secondary !text-white !w-full !py-4 valid:bg-secondary outline-none placeholder:!text-gray-300 !border-none !mb-2  ",
    prefix: <MdOutlineEmail size={20} color="#6B7280" />,
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    className:
      "!bg-secondary !text-white !w-full !py-4 valid:bg-secondary placeholder:!text-gray-300 !border-none !mb-2  ",
    prefix: <MdLock size={20} color="#6B7280" />,
  },
];  


const resetFields = [
  {
    name: "password",
    type: "password",
    placeholder: "Enter your Password",
    label: "New Password",
    className:
      "!bg-secondary !text-white !w-full !py-4 valid:bg-secondary placeholder:!text-gray-300 !border-none !mb-4  ",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    label: "New Password",
    className:
      "!bg-secondary !text-white !w-full !py-4 valid:bg-secondary placeholder:!text-gray-300 !border-none !mb-4  ",
  },
]; 


const singUpFields = [
    {
    name: "username",
    type: "username",
    placeholder: "Enter your username",
    label: "Username",
    className:
      "!bg-secondary !text-white !w-full !py-4 valid:bg-secondary outline-none placeholder:!text-gray-300 !border-none   ",
    prefix:<CiUser size={20} color="#6B7280"/>
  },
  {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    className:
      "!bg-secondary !text-white !w-full !py-4 valid:bg-secondary outline-none placeholder:!text-gray-300 !border-none   ",
    prefix:<MdOutlineEmail size={20} color="#6B7280"/>
  },
    {
    name: "contact",
    type: "text",
    placeholder: "Enter your Phone Number",
    label: "Phone Number",
    className:
      "!bg-secondary !text-white !w-full !py-4 valid:bg-secondary outline-none placeholder:!text-gray-300 !border-none   ",
    prefix:<MdPhone size={20} color="#6B7280"/>
  },
  {
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Password",
    className:
      "!bg-secondary !text-white !w-full !py-4 valid:bg-secondary placeholder:!text-gray-300 !border-none  ",
    prefix:<MdLock size={20} color="#6B7280"/>
  },
];

export { loginFields , forgetFields , resetFields , singUpFields };