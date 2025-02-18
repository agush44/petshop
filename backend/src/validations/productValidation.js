import Joi from "joi";

const productSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(500).optional(),
  category: Joi.string()
    .valid(
      "alimentos",
      "accesorios",
      "piedras sanitarias",
      "golosinas y snacks"
    )
    .required(),
  price: Joi.number().positive().precision(2).required(),
  stock: Joi.number().integer().min(0).required(),
  image: Joi.string()
    .pattern(/^https?:\/\/.*cloudinary\.com\/.*$/i)
    .optional(),
  animalType: Joi.string().valid("perros", "gatos").required(),
  createdAt: Joi.date()
    .default(() => new Date())
    .iso(),
});

export { productSchema };
