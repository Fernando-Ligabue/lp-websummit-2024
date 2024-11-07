import { motion } from "framer-motion";
import LogoF from "../assets/logo-footer.svg";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <motion.section className="relative w-full max-w-[1140px] mx-auto  flex flex-col justify-center items-center ">
      <div className="w-full py-12 px-2 xl:px-0">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center py-8">
          <div className="w-full max-w-28">
            <img src={LogoF} alt="logo" />
          </div>
          <div className="w-full max-w-fit flex flex-col sm:flex-row justify-end items-center gap-10 mt-5 sm:mt-0">
            <div className="w-full max-w-max min-h-[60px] flex flex-col justify-start items-start gap-1">
              <p className="w-full text-center sm:text-left font-custom font-semibold text-lg text-[#000F9F]">
                Contact
              </p>
              <span className="font-custom font-light text-lg text-[#000F9F]">
                websummit@cm-porto.pt
              </span>
            </div>
            <div className="w-full max-w-max min-h-[60px] flex flex-col justify-start items-start gap-1">
              <p className="font-custom font-semibold text-lg text-[#000F9F]">
                Connect to Porto
              </p>
              <div className="flex justify-between items-center gap-6 font-custom font-light text-lg text-[#000F9F]">
                <a href="https://www.linkedin.com/company/camaramunicipalporto/" target="_blank">
                  <FaLinkedinIn size={24} />
                </a>
                <a href="https://www.facebook.com/CamaraMunicipaldoPorto" target="_blank">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://www.instagram.com/cmporto/?hl=pt" target="_blank">
                  <FaInstagram size={24} />
                </a>
                <a href="https://www.youtube.com/user/CamaraDoPorto" target="_blank">
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t-[1px] border-[#000F9F] h-[1px]"></hr>
        <div className="w-full flex flex-col sm:flex-row justify-between items-center py-8">
          <div className="w-full max-w-max p-2 flex gap-8">
            <a
              href="https://www.porto.pt/en/privacy-policy"
              target="_blank"
              className="font-custom font-medium text-lg text-[#000F9F]"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.porto.pt/en/cookies-policy"
              target="_blank"
              className="font-custom font-medium text-lg text-[#000F9F]"
            >
              Cookies Policy
            </a>
          </div>
          <div className="w-full max-w-fit flex justify-end items-center gap-10">
            <div className="w-full max-w-max flex flex-col justify-center sm:justify-start items-center sm:items-start gap-1">
              <p className="w-full max-w-[300px] sm:max-w-max text-center sm:text-left font-custom font-medium text-lg text-[#000F9F]">
                All Rights Reserved &copy; {year}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
