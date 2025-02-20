import { brands } from "../../../data/brandsData";
import ItemList from "../../../UI/ItemList/ItemList";
import { Title, BrandsListContainer, Card, Img } from "./BrandList.styles";

const BrandList = () => {
  const renderBrand = (brand, index) => (
    <BrandsListContainer>
      <Card key={index}>
        <Img src={brand} alt={`Marca ${index + 1}`} />
      </Card>
    </BrandsListContainer>
  );

  return (
    <>
      <Title>Brands</Title>
      <ItemList items={brands} renderItem={renderBrand} />;
    </>
  );
};

export default BrandList;
