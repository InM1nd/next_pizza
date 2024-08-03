import { Categories, Container, Filters, ProductCard, ProductsGroupList, SortPopup, Title, TopBar } from "@/components/shared";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All Pizzas" size="lg" className="font-extrabold"/> 
      </Container>
      
      <TopBar/>

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">

          {/* Filter */}
          <div className="w-[250px]">
            <Filters/>
          </div>
          
          {/* List of Products Pizza */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList 
                title="Pizza" 
                categoryId={1} 
                items={[
                  {
                    id:1,
                    name: '123213',
                    imageUrl: "",
                    price: 30,
                    items: [{price: 30}],
                  },
                  {
                    id:1,
                    name: '123213',
                    imageUrl: "",
                    price: 30,
                    items: [{price: 30}],
                  },
                  {
                    id:1,
                    name: '123213',
                    imageUrl: "",
                    price: 30,
                    items: [{price: 30}],
                  },
                  {
                    id:1,
                    name: '123213',
                    imageUrl: "",
                    price: 30,
                    items: [{price: 30}],
                  },
                  {
                    id:1,
                    name: '123213',
                    imageUrl: "",
                    price: 30,
                    items: [{price: 30}],
                  },
                  {
                    id:1,
                    name: '123213',
                    imageUrl: "",
                    price: 30,
                    items: [{price: 30}],
                  },
                  {
                    id:1,
                    name: '123213',
                    imageUrl: "",
                    price: 30,
                    items: [{price: 30}],
                  },
                  {
                    id:1,
                    name: '123213',
                    imageUrl: "",
                    price: 30,
                    items: [{price: 30}],
                  },
                  {
                    id:1,
                    name: '123213',
                    imageUrl: "",
                    price: 30,
                    items: [{price: 30}],
                  },
                ]} 
              />
            </div>
          </div>

        </div>
      </Container>
    </>
  );
}
