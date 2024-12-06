"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth, db } from "@/db/firebaseConfig";
import Product from "./Product";
import Container from "@/components/ui/Container";
import AddProduct from "./AddProduct";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  const fetchProducts = async () => {
    const productsCollection = collection(db, "products");
    const productsSnapshot = await getDocs(productsCollection);
    const productsList = productsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProducts(productsList);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductDelete = async (productId) => {
    try {
      await deleteDoc(doc(db, "products", productId));
      await fetchProducts(); // Recharger les produits après la suppression
      router.refresh();
    } catch (error) {
      console.error("Erreur lors de la suppression:", error);
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log("Erreur lors de la déconnexion", error);
      });
  };

  return (
    <Container>
      <div className="min-h-screen mt-32">
        <div className="mb-10">
          <AddProduct />
        </div>

        <h2>Liste des produits</h2>
        <button onClick={handleSignOut} className="text-red-500">
          Déconnexion
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {products.map((product) => (
            <Product key={product.id} product={product} onDelete={handleProductDelete} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AdminDashboard;