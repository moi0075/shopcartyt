import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <Container className="bg-shop-light-pink">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        assumenda nostrum magnam corporis. Unde eveniet, tenetur illum debitis
        ipsum quaerat doloremque animi? Ducimus commodi blanditiis dolorem
        perferendis quos mollitia nesciunt?
      </p>
      <Button size="lg">Check out</Button>
    </Container>
  );
};

export default Home;
