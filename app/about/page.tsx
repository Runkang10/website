import { MainBox } from "@/components/MainBox";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "About",
  description: "About me.",
};

const About = () => {
  return <MainBox includeNavBar></MainBox>;
};

export { metadata };
export default About;
