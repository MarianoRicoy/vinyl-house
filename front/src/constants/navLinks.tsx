import { categories } from "@/helpers/categories";
import { routes } from "@/routes";

const generateLinksCategories = (cates: Icategory[]) => {
  return cates.map((category) => ({
    href: `${routes.products}?category=${category.id}`,
    label: category.name,
  }));
};

export const NavLinks = [
  // {
  //   href: routes.profile,
  //   label: "Perfil"
  // },
  // {
  //   href: routes.cart,
  //   label: "Cart"
  // },
  // {
  //   href: routes.login,
  //   label: "Login"
  // },
  // {
  //   href: routes.landing,
  //   label: "Landing"
  // },
  // {
  //   href: routes.products,
  //   label: "Productos"
  // }
  ...generateLinksCategories(categories).slice(0,5),
];

