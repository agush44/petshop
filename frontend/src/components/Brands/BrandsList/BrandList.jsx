import { brands } from "../../../data/brandsData";
import ItemList from "../../../UI/ItemList/ItemList";
import { BrandsListContainer, Card, Img } from "./BrandList.styles";

const BrandList = () => {
  const renderBrand = (brand, index) => (
    <BrandsListContainer>
      <Card key={index}>
        <Img src={brand} alt={`Marca ${index + 1}`} />
      </Card>
    </BrandsListContainer>
  );

  return <ItemList title="Marcas" items={brands} renderItem={renderBrand} />;
};

export default BrandList;
