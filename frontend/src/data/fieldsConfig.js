export const productFields = [
  { label: "Nombre", name: "name", placeholder: "Nombre del producto" },
  { label: "Descripción", name: "description", placeholder: "Descripción" },
  { label: "Precio", name: "price", type: "number", placeholder: "Precio" },
  { label: "Stock", name: "stock", type: "number", placeholder: "Cantidad" },
  {
    label: "Categoría",
    name: "category",
    type: "select",
    options: [
      "alimentos",
      "accesorios",
      "piedras sanitarias",
      "golosinas y snacks",
    ],
    placeholder: "Selecciona una categoría",
  },
  { label: "Imagen (URL)", name: "image", placeholder: "URL de la imagen" },
  {
    label: "Tipo de Animal",
    name: "animalType",
    placeholder: "Ej: Perros, Gatos",
  },
  {
    label: "Descuento (%)",
    name: "discount",
    type: "number",
    placeholder: "Descuento",
  },
  {
    label: "Expiración del Descuento",
    name: "discountExpiresAt",
    type: "date",
    placeholder: "Expiración",
  },
];
