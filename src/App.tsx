import Button from "./components/button/Button";
import Roulette from "./components/roulette/Roulette";

function App() {
  return (
    <>
      <main className="font-sub bg-backgroundColor m-0 flex min-h-dvh w-screen flex-col items-center justify-center gap-5 p-2 text-xl">
        <h1 className="font-main text-main bg-white text-5xl font-bold">
          음식 룰렛
        </h1>
        <Roulette />
        <Button>돌리기</Button>
      </main>
    </>
  );
}

export default App;
