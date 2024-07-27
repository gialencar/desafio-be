import svgImage from "../assets/logo-be.svg";

export default function Header() {
  return (
    <header className="px-8 max-sm:px-5 h-[60px] flex items-center shadow-3">
      <img src={svgImage} width={44} alt="BE logo" />
    </header>
  );
}
