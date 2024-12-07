const CardHero = () => {
  return (
    <div className="flex items-center gap-10">
      {cards.map((card, index) => (
        <div key={index}>
          <img
            src={card.image}
            alt={card.alt}
            className={`
          h-auto w-[100vw] rounded-t-full
          ${index === 0 && "hidden md:block rotate-[-15deg] translate-y-[30%]"}
          ${index === 1 && "rotate-[-8deg] translate-y-[25%]"}  
          ${index === 2 && "transform translate-y-[20%]"}
          ${index === 3 && "rotate-[8deg] translate-y-[25%]"} 
          ${index === 4 && "hidden md:block rotate-[15deg] translate-y-[30%]"} 
        `}
          />
        </div>
      ))}
    </div>
  );
};

const cards = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "photo de mannequin",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617724757497-79b54c5444d2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "photo de mannequin",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "photo de mannequin",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "photo de mannequin",
  },
  {
    image:
      "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "photo de mannequin",
  },
];

export default CardHero;
