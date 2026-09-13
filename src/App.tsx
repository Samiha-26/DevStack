import { Suspense } from "react";
import Banner from "./components/Banner";
import Nav from "./components/nav";
import Technologies from "./components/Technologies/technologies";
import type { Itech } from "./types/technologytype";
import { ToastContainer } from "react-toastify";

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
    <Suspense fallback={<h2>Loading...Wait for a few minutes</h2>}>
    <Technologies technologiesPromise={technologiesPromise} />
    </Suspense>
    <ToastContainer />
    </>
  )
}

export default App