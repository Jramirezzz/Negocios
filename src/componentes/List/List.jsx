import { ListCheck, BadgeDollarSign, ChartSpline, Users, House } from "lucide-react";

import "./List.css";

export function List() {
  return (
    <ul className="customList">
      <li>
        <ListCheck className="icon" />
        <span>Consejos Prácticos de expertos financieros</span>
      </li>
      <li>
        <BadgeDollarSign className="icon" />
        <span>Evita errores costosos y toma decisiones inteligentes</span>
      </li>
      <li>
        <ChartSpline className="icon" />
        <span>Descubre cómo ahorrar, invertir y multiplicar tu dinero</span>
      </li>
      <li>
        <Users className="icon" />
        <span>Crea hábitos financieros sólidos con nuestro acompañamiento</span>
      </li>
      <li>
        <House className="icon" />
        <span>Aprende a comprar tu primera casa sin errores</span>
      </li>
    </ul>
  );
}