
import Banner from "./component/Banner";
import About from "@/app/about/page";
import Text from "./component/Text";
import Services from "./services/page";

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

    </main>
  );
}
