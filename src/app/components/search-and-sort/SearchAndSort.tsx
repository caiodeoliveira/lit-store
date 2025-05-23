import { Search, AlignLeft } from "react-feather";



const SearchAndSort = () => {
    return (
        <>
          <div className="flex items-center justify-between  w-11/12">
            <div className="relative w-full max-w-[429px]">
              <button className="absolute left-3 top-1/2 -translate-y-1/2 p-1">
                <Search size={18} color="#112E38" />
              </button>
              <input
                type="text"
                placeholder="Pesquisar e filtrar"
                className="w-full h-[31px] pl-10 border border-[#112E38] bg-white text-[#344054] rounded-full"
              />
            </div>

            <button className="flex items-center justify-around w-[95px] h-[32px] border border-[#E1E5EA] rounded-[26px] text-[#390054] text-[12px] cursor-pointer hover:bg-[#FFFFFF]">
              <AlignLeft size={16} />
              <span>Ordenar</span>
            </button>
          </div>
        </>
    )
}

export default SearchAndSort;