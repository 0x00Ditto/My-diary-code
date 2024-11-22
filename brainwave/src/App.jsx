import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "../src/components/Header";

const App = () => {
  return (
    <div>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      </div>
      <ButtonGradient />
    </div>
  );
};
export default App;
