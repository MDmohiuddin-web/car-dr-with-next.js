import Banner from "./component/Banner";
import About from "@/app/about/page";
import Text from "./component/Text";
import Services from "./services/page";
import Contact from "./contact/page";
import Products from "./component/Products";

export default function Home() {
  return (
    <main className="text-black">
      <Banner></Banner>
      <About></About>
      <Text
        text1={`Service`}
        text2={`Our Service Area`}
        text3={`the majority have suffered alteration in some form, by injected humour, or randomized words which dent look even slightly believable.`}
      ></Text>
      <Services></Services>
      <Contact></Contact>
      
      <Products></Products><Text
        text1={`Team`}
        text2={`Meet Our Team`}
        text3={`the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.`}
      ></Text>
    </main>
  );
}
