import FirstPage from "@/Pages/FirstPage";
import { Footer } from "@/components/ui/Footer";
import { Spotlight } from "@/components/ui/spotlight";
import { MobileGuard } from "@/components/ui/MobileGuard";
export default function Home() {
  return (
    <>
      {" "}
      <MobileGuard />
      <Spotlight
        className="top-0 left-0 h-[200%] w-[200%] md:-top-20 md:left-60 md:h-[169%] md:w-[138%]"
        fill="white"
      />
      <FirstPage></FirstPage> <Footer></Footer>
    </>
  );
}
