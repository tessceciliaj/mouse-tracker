import React, { useState } from "react";

const Header = ({ title, initialCount }) => {
  const [count, setCount] = useState(initialCount || 0);

  return (
    <div className="flex flex-col items-center">
      <p className="absolute  top-4 left-4 text-accentPurple" data-testid="count">
        {count}
      </p>
      <h1 className="text-xl py-4">{title}</h1>
      <h3>Welcome to your own clickathon!</h3>
    </div>
  );
};

export default Header;
