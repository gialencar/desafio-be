import { useEffect, useState } from "react";
import "./App.css";
import searchIcon from "./assets/search.svg";
import Header from "./components/Header";
import { formatPhoneNumber } from "./utils/formatPhoneNumber";

type Employee = {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
};

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState<string>("");
  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      });
  }, []);

  const toggleRow = (id: string) => {
    setExpandedRows((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  return (
    <>
      <Header />

      <div className="flex justify-between py-8 max-sm:py-5 px-8 max-sm:flex-col max-sm:gap-7 max-w-screen-xl mx-auto">
        <h1>Funcionários</h1>
        <div className="flex justify-end items-center relative">
          <input
            placeholder="Pesquisar"
            className="border border-gray-10 rounded-lg px-4 py-3 w-72 max-sm:w-full"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
          <img
            src={searchIcon}
            className="absolute w-6 mr-4"
            alt="Search Icon"
          />
        </div>
      </div>

      <main className="max-w-screen-xl mx-auto flex justify-center px-8 max-sm:px-5">
        {/* table mobile */}
        <table className="sm:hidden w-full">
          <thead className="bg-gradient-to-b from-blue-primary-gradient-start to-blue-primary-gradient-end text-white-neutral">
            <tr>
              <th className="rounded-tl-lg pl-4">FOTO</th>
              <th className="text-center">NOME</th>
              <th className="rounded-tr-lg text-right pr-8"> ● </th>
            </tr>
          </thead>
          <tbody>
            {employees
              .filter((employee) => {
                return (
                  employee.name.toLowerCase().includes(search.toLowerCase()) ||
                  employee.job.toLowerCase().includes(search.toLowerCase()) ||
                  employee.phone.includes(search)
                );
              })
              .map((employee) => (
                <tr key={employee.id}>
                  <td className="pl-4">
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="rounded-full w-[34px] h-[34px] mr-3"
                    />
                  </td>
                  <td className="text-center">{employee.name}</td>
                  <td className="text-right pr-5">
                    <button className="" onClick={() => toggleRow(employee.id)}>
                      {expandedRows.includes(employee.id) ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="text-blue-primary-gradient-end"
                        >
                          <path d="m18 15-6-6-6 6" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="text-blue-primary-gradient-end"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      )}
                    </button>
                    <div
                      className={`${
                        expandedRows.includes(employee.id)
                          ? "max-h-80"
                          : "max-h-0"
                      } overflow-hidden transition-all duration-300 ease-in-out`}
                    >
                      <div className="flex flex-col gap-2">
                        <p className="text-sm text-gray-500 font-bold">
                          Cargo: <br />
                          <span className="font-normal">{employee.job}</span>
                        </p>
                        <p className="text-sm text-gray-500 font-bold">
                          Data de admissão:
                          <br />
                          <span className="font-normal">
                            {new Date(
                              employee.admission_date
                            ).toLocaleDateString()}
                          </span>
                        </p>
                        <p className="text-sm text-gray-500 font-bold">
                          Telefone:
                          <br />
                          <span className="font-normal">
                            {formatPhoneNumber(employee.phone)}
                          </span>
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* table desktop */}
        <table className="w-full max-sm:hidden">
          <thead className="bg-gradient-to-b from-blue-primary-gradient-start to-blue-primary-gradient-end text-white-neutral">
            <tr>
              <th className="rounded-tl-lg pl-8">FOTO</th>
              <th>NOME</th>
              <th>CARGO</th>
              <th>DATA DE ADMISSÃO</th>
              <th className="rounded-tr-lg">TELEFONE</th>
            </tr>
          </thead>
          <tbody>
            {employees
              .filter((employee) => {
                return (
                  employee.name.toLowerCase().includes(search.toLowerCase()) ||
                  employee.job.toLowerCase().includes(search.toLowerCase()) ||
                  employee.phone.includes(search)
                );
              })
              .map((employee) => (
                <tr key={employee.id}>
                  <td className="pl-8">
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="rounded-full w-10 h-10 mr-3"
                    />
                  </td>
                  <td>{employee.name}</td>
                  <td>{employee.job}</td>
                  <td>
                    {new Date(employee.admission_date).toLocaleDateString()}
                  </td>
                  <td>{formatPhoneNumber(employee.phone)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default App;
