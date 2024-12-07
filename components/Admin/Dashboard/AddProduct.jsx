"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, uploadProductImage } from "@/db/firebaseConfig";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductImage(file);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const imageUrl = await uploadProductImage(productImage);
      if (!imageUrl) {
        setError("Erreur lors du téléchargement de l'image.");
        return;
      }

      const productData = {
        name: productName,
        price: productPrice,
        description: productDescription,
        imageUrl: imageUrl,
      };

      // Utiliser addDoc au lieu de setDoc pour générer un ID automatique
      await addDoc(collection(db, "products"), productData);

      setProductName("");
      setProductPrice("");
      setProductDescription("");
      setProductImage(null);
      window.location.reload();
    } catch (err) {
      console.error("Erreur lors de l'ajout du produit:", err);
      setError("Erreur lors de l'ajout du produit.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className={"h-screen"}>
      <button onClick={() => router.back()} className="flex gap-2 mt-32 hover:underline">
        <ArrowLeft /> <span>Retour</span>
      </button>
      <form
        onSubmit={handleAddProduct}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Ajouter un produit</h2>

        <div className="space-y-2">
          <label className="block text-gray-700 font-semibold">Nom du produit:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Entrez le nom du produit"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 font-semibold">Prix du produit:</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Entrez le prix du produit"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 font-semibold">Description du produit:</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Entrez une description pour le produit"
            rows="4"
          ></textarea>
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 font-semibold">Image du produit:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="text-center">
          <Button theme="primary">{loading ? "Ajout en cours..." : "Ajouter le produit"}</Button>
        </div>
      </form>
    </Container>
  );
}
