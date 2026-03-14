import { Suspense } from "react";
import Countries from "./components/Countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<p>React world on the go....</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
