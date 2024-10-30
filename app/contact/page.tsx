import { MainBox } from "@/components/MainBox";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Contact Me",
};

const Contact = () => {
  return <MainBox includeNavBar></MainBox>;
};

export { metadata };
export default Contact;
