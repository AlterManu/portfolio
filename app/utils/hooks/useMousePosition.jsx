import { useEffect } from "react";

const useMousePosition = () => {
  const updateMousePosition = (e) => {
    document.body.style.setProperty("--x", e.clientX);
    document.body.style.setProperty(
      "--y",
      e.clientY +
        window.scrollY -
        window.innerHeight * 5 -
        window.innerHeight * 0.2
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY; // Scroll actual en píxeles
      const style = getComputedStyle(document.body);

      // Obtener el scroll anterior almacenado en --scroll
      let prevScroll = parseFloat(style.getPropertyValue("--scroll")) || 0;

      // Calcular la diferencia de scroll
      const diffScroll = currentScroll - prevScroll;

      // Obtener la posición actual del cursor en --y
      let y = parseFloat(style.getPropertyValue("--y")) || 0;

      // Sumar la diferencia del scroll a la posición del cursor
      const updatedY = y + diffScroll;

      console.log("updatedY -----> ", updatedY);
      // Actualizar el valor de --y y --scroll
      document.body.style.setProperty("--y", updatedY);
      document.body.style.setProperty("--scroll", currentScroll);
    });

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
};

export default useMousePosition;
