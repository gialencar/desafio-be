import "./App.css";
import searchIcon from "./assets/search.svg";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-between py-8 max-sm:py-5 px-8 max-sm:flex-col max-sm:gap-7 ">
        <h1>Funcionários</h1>
        <div className="flex justify-end items-center relative">
          <input
            placeholder="Pesquisar"
            className="border border-gray-10 rounded-lg px-4 py-3 w-72 max-sm:w-full"
          />
          <img
            src={searchIcon}
            className="absolute w-6 mr-4"
            alt="Search Icon"
          />
        </div>
      </div>
    </>
  );
}

export default App;
