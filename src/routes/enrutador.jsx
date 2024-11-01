import Inicio from "../pages/Inicio";
import Dashboard from "../pages/Dashboard";
import Servicios from "../components/Servicios";
import Contacto from "../components/Contacto";
import Acerca from "../components/Acerca";

export let enrutadorApp = [
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "servicios",
        element: <Servicios />,
      },
      {
        path: "contacto",
        element: <Contacto />,
      },
      {
        path: "acerca",
        element: <Acerca />,
      },
    ],
  },
];
