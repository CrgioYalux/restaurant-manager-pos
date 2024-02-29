export default function ButtonStandar({ children, className, onClick }) {
  return (
    <div
      className={`cursor-pointer rounded-lg h-10 grow-1 flex justify-center items-center text-white font-semibold  hover:scale-[1.03] transition border border-white/40 select-none
        ${className ? className : "bg-amber-500 hover:bg-amber-400"}`}
      onClick={onClick}
    >
      <div className="m-5">{children}</div>
    </div>
  );
}
