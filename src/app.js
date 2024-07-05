import { getRandomColor } from "./utils";

export default function initApp() {
  const Button = document.createElement("button");
  Button.className = "button";
  Button.textContent = "Изменить цвет страницы";
  document.body.append(Button);

  Button.addEventListener("click", () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  });
}
