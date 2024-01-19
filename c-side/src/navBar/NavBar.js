import React from "react";

const NavBar = () => {
  const menuList = ["About", "Services", "Products", "Prices", "Blog"];
  const subMenu = [
    {
      name: "About",
      content: ["About the Company", "CEO Portfolio", "more..."],
    },
    {
      name: "Services",
      content: ["Service 1", "Service 2", "more..."],
    },
    {
      name: "Products",
      content: ["Product1", "Product2", "Product3"],
    },
  ];

  console.log(subMenu[0].content);
  return (
    <div className="flex justify-center m-2">
      <div className="border flex justify-between p-4 gap-20">
        <div className="pl-4">LOGO</div>

        <ul className="flex gap-20">
          {menuList.map((item, index) => {
            console.log(index);
            return (
              <li
                key={index}
                onMouseEnter={() => {
                  subMenu[index] &&
                    document.getElementById(index).classList.remove("hidden");
                  document.getElementById(index).classList.add("block");
                }}>
                <button key={index} className="font-serif text-xl font-bold">
                  {item}
                </button>
                {subMenu[index] && (
                  <div
                    id={index}
                    className="hidden mt-4 border flex flex-col absolute"
                    onMouseLeave={() => {
                      subMenu[index] &&
                        document
                          .getElementById(index)
                          .classList.remove("block");
                      document.getElementById(index).classList.add("hidden");
                    }}>
                    {subMenu[index].content.map((subItem, subIndex) => (
                      <button key={subIndex}>{subItem}</button>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <div className="">Contact us</div>
      </div>
    </div>
  );
};

export default NavBar;
