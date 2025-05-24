import React from "react";

const App = () => {
  const [theme, setTheme] = React.useState("light");
  const changeTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === "light" ? "dark" : "light";
    });
  };
  return (
    <div className= {theme === "light" ? "bg-white text-black h-screen" : "bg-black h-screen text-white"}>
     <div className="flex items-center justify-center h-full">
       <button
       className="px-4 py-2 border rounded font-bold" 
       onClick={changeTheme}>
        {
          theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
        }
       </button>
     </div>
    </div>
  );
};

export default App;
