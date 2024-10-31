import Banner from "./component/Banner";
import About from "@/app/about/page";
import Text from "./component/Text";
import Services from "./services/page";
import Contact from "./contact/page";
import Products from "./component/Products";
import Team from "./component/Team";
import ChooseUsCards from "./component/ChooseUsCards";

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
      <Text
        text1={`Popular Products`}
        text2={`Browse Our Products`}
        text3={`the majority have suffered alteration in some form, by injected humour, or randomized words which dent look even slightly believable.`}
      ></Text>
      <Products></Products>
      <Text
        text1={`Team`}
        text2={`Meet Our Team`}
        text3={`the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.`}
      ></Text>
      <Team></Team>
      <Text
        text1={`Core Features`}
        text2={`Why Choose Us`}
        text3={`the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.`}
      ></Text>
      <ChooseUsCards></ChooseUsCards>
    </main>
  );
}
