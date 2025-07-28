function StarRating({
    index,
    clickCount,
    hoverCount,
    handleClick,
    handleHover,
  }: {
    index: number;
    clickCount: number;
    hoverCount: number;
    handleClick: (index: number) => void;
    handleHover: (index: number) => void;
  }) {
    // Highlight if hovering or clicked
    const isActive =
      hoverCount >= 0 ? index <= hoverCount : index <= clickCount;
  
    return (
      <div
        className={`cursor-pointer text-2xl ${
          isActive ? 'text-orange-300' : 'text-gray-400'
        }`}
        onMouseEnter={() => handleHover(index)}
        onClick={() => handleClick(index)}
      >
        &#9733;
      </div>
    );
  }
  
  export default StarRating;
  