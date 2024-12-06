import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import { db, storage } from "@/db/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

const Product = ({ product, onDelete }) => {
  const router = useRouter();
  const productId = product?.id;

  const handleDelete = async () => {
    try {
      const productRef = doc(db, "products", productId);
      await deleteDoc(productRef);
      onDelete(productId);
      router.refresh();
    } catch (error) {
      console.log("Erreur lors de la suppression:", error);
    }
  };

  const handleEdit = () => {
    router.push(`/admin/accueil/modifier-produit/${productId}`);
  };

  return (
    <div className="border p-4 w-full rounded-xl">
      <div className="relative h-[200px]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl">{product.name}</h3>
      <p>{product.price}€</p>
      <p className="text-black/50 my-5">{product.description}</p>
      <div className="flex items-center justify-between">
        <button onClick={handleDelete} className="text-red-500">
          Supprimer
        </button>
        <Button onClick={handleEdit}>Modifier</Button>
      </div>
    </div>
  );
};

export default Product;
