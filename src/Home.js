import React, { useContext } from "react";
import CarouselComponent from "./CarouselComponent";
import ItemList from "./ItemList";
import cartContext from "./CartContext";

function Home() {
  const { state } = useContext(cartContext);
  console.log(state);
  return (
    <div>
      <CarouselComponent />
      <ItemList products={state.products} />
    </div>
  );
}

export default Home;
