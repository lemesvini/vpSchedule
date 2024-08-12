type TimeCardProps = {
    value: string;
    onSelect: (time: string) => void;
    isSelected: boolean; // New prop to indicate if the time is selected
  };
  
  function TimeCard({ value, onSelect, isSelected }: TimeCardProps) {
    return (
      <div
        onClick={() => onSelect(value)}
        className={`cursor-pointer p-2 rounded-lg hover:bg-[#0D6EFD] ${
          isSelected ? "bg-[#0D6EFD] text-white" : "bg-[#525252] text-white"
        }`}
      >
        {value}
      </div>
    );
  }
  
  export default TimeCard;
  