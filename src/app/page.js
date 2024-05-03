import { Suspense } from "react";
import { Todos } from "./components/Todos.js";

const Page = () => {
  return (
    <section>
      <Suspense fallback={<p>Loading todos...</p>}>
        <Todos />
      </Suspense>
      {/* <Suspense fallback={<p>Loading movies...</p>}>
        <Movies />
      </Suspense> */}
      {/* <Suspense fallback={<p>Loading weather...</p>}></Suspense> */}
    </section>
  );
};

export default Page;
