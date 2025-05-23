
interface FilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const Filter = ({ selectedCategory, setSelectedCategory }: FilterProps) => {
  const categories = [
    "Todos",
    "Ficção",
    "Não-Ficção",
    "Romance",
    "Fantasia",
    "Mistério",
    "Biografia",
    "História",
    "Ciência",
  ];

  return (
    <div className="flex flex-wrap items-center justify-center w-160 gap-3 mx-auto mt-10">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-4 py-1 rounded-full text-sm md:text-base font-medium transition-all cursor-pointer ${
            selectedCategory === category
              ? "bg-[#EA7C2D]"
              : "bg-[#B3B3C1] hover:bg-gray-300"
          }`}
          onClick={() => {
            if (category !== "Todos" && selectedCategory === category) {
              // Se um filtro (exceto "Todos") já ativo for clicado novamente, volta a ativar "Todos"
              setSelectedCategory("Todos");
            } else {
              setSelectedCategory(category);
            }
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;