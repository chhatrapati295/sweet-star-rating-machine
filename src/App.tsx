import { useState } from 'react';
import StarRating from './StarRating.tsx';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [hoverCount, setHoverCount] = useState(-1); // -1 means no hover

  const handleClick = (index: number) => {
    setClickCount(index);
  };

  const handleHover = (index: number) => {
    setHoverCount(index);
  };

  const handleMouseLeave = () => {
    setHoverCount(-1);
  };

  return (
    <main className='p-8'>
      <div
        className="flex gap-1 items-center"
        onMouseLeave={handleMouseLeave} // reset hover on leave
      >
        {new Array(5).fill(0).map((_, i) => (
          <StarRating
            key={i}
            index={i}
            clickCount={clickCount}
            hoverCount={hoverCount}
            handleClick={handleClick}
            handleHover={handleHover}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
