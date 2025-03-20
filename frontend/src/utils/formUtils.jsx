export const formatProductData = (formData) => {
  return {
    ...formData,
    price: isNaN(Number(formData.price)) ? 0 : Number(formData.price),
    stock: isNaN(Number(formData.stock)) ? 0 : Number(formData.stock),
    discount: isNaN(Number(formData.discount)) ? 0 : Number(formData.discount),
    discountExpiresAt: formData.discountExpiresAt
      ? new Date(formData.discountExpiresAt).toISOString().split("T")[0]
      : "",
  };
};

export const handleFormChange = (e, setFormState) => {
  const { name, value } = e.target;
  setFormState((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};
