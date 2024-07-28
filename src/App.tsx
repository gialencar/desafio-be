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

  useEffect(() => {
    fetch("http://localhost:3000/employees")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployees(data);
      });
  }, []);

  return (
    <>
      <Header />

      <div className="flex justify-between py-8 max-sm:py-5 px-8 max-sm:flex-col max-sm:gap-7 max-w-screen-xl mx-auto">
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

      <main className="max-w-screen-xl mx-auto flex justify-center px-8">
        <table className="w-full">
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
            {employees.map((employee) => (
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
