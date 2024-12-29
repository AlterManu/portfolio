import Link from "next/link";
import { useState } from "react";

const socialArray = [
  {
    title: "email",
    message: "emtuero@hotmail.com",
    url: "mailto:emtuero@hotmail.com;subject=Hello",
    icon: "email",
  },
  {
    title: "linkedin",
    message: "linkedin.com/in/emanuel-mt",
    url: "https://www.linkedin.com/in/emanuel-mt",
    icon: "linkedin",
  },
  {
    title: "github",
    message: "github.com/ManuuMT",
    url: "https://github.com/ManuuMT",
    icon: "github",
  },
];

const SocialNetwork = ({ social, selected, setSelected }) => {
  return (
    <div className="flex">
      <div
        className="w-0 h-0 rotate-[-135deg] mt-2 mr-1"
        style={{
          borderLeft: "10px solid transparent",
          borderRight: "10px solid transparent",
          borderTop: "10px solid #00e1ff",
        }}
      />
      <Link
        href={social.url}
        className="relative w-full"
        onMouseEnter={() => setSelected(social.title)}
        onMouseLeave={() => setSelected(null)}
      >
        <div
          className="bg-[#00e1ff] w-full h-full absolute z-20 top-0 left-0 transition-all duration-300 cursor-pointer flex items-center px-2"
          style={{
            clipPath:
              social.title === selected ? "inset(0 0 0)" : "inset(50% 0 50%)",
          }}
        >
          <h3 className="text-[#000] text-3xl">{social.message}</h3>
        </div>
        <h3>{social.title}</h3>
      </Link>
    </div>
  );
};

export default function Contact() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="contact-sectionn w-screen mt-[20vh] flex justify-center py-[5vh]">
      <div className="container flex justify-center">
        <div className="w-full flex justify-center items-center text-5xl">
          <div className="flex justify-center gap-20">
            <div className="w-1/2">
              <div className="w-full flex justify-end">
                <h3 className="w-3/5">feel free to connect with me</h3>
              </div>
            </div>
            <div className="w-1/2 flex flex-col">
              {socialArray.map((social) => (
                <SocialNetwork
                  social={social}
                  key={social.title}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
