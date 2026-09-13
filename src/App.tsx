import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/nav";
import Technologies from "./components/Technologies/technologies";
import type { Itech } from "./types/technologytype";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

const technologiesFetch = async():Promise<Itech[]> => {
  const res = await fetch("./data.json");
  const data = await res.json();
  return data;
}

function App() {

  const technologiesPromise = technologiesFetch();
  return (
    <>
    <Nav/>
    <Banner/>
    <Suspense fallback={<h2 className="text-4xl text-center color-gradient-text mt-15 mb-15 font-bold font-serif"><span className="text-black">Loading</span>...Please wait for a few seconds!!</h2>}>
    <Technologies technologiesPromise={technologiesPromise} />
    </Suspense>
    <ToastContainer />
    <Footer/>
    </>
  )
}

export default App