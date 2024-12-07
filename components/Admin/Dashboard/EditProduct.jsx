"use client";

import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/db/firebaseConfig";
import { useParams, useRouter } from "next/navigation";
import Container from "@/components/ui/Container";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

const EditProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      const productId = params?.productId;

      if (!productId) {
        setError("ID du produit manquant");
        return;
      }

      try {
        const productRef = doc(db, "products", productId);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          const data = productSnap.data();
          setProductName(data.name);
          setProductPrice(data.price);
          setProductDescription(data.description);
        } else {
          setError("Produit non trouvé");
          setTimeout(() => router.push("/admin/accueil"), 2000);
        }
      } catch (error) {
        setError("Erreur lors de la récupération du produit");
      }
    };

    fetchProduct();
  }, [params, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const productId = params?.productId;

    try {
      const productRef = doc(db, "products", productId);
      let updateData = {
        name: productName,
        price: Number(productPrice),
        description: productDescription,
      };

      if (productImage) {
        const imageRef = ref(storage, `products/${Date.now()}_${productImage.name}`);
        await uploadBytes(imageRef, productImage);
        const imageUrl = await getDownloadURL(imageRef);
        updateData.imageUrl = imageUrl;
      }

      await updateDoc(productRef, updateData);
      router.push("/admin/accueil");
    } catch (error) {
      setError("Erreur lors de la mise à jour du produit");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className={"h-screen"}>
      <button onClick={() => router.back()} className="flex gap-2 mt-32 hover:underline">
        <ArrowLeft /> <span>Retour</span>
      </button>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Mettre à jour un produit</h2>

        <div className="space-y-2">
          <label className="block text-gray-700 font-semibold">Nom du produit:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            placeholder="Entrez le nom du produit"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 font-semibold">Prix du produit:</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
            placeholder="Entrez le prix du produit"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 font-semibold">Description du produit:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
            placeholder="Entrez une description pour le produit"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-gray-700 font-semibold">Image du produit:</label>
          <input
            type="file"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            accept="image/*"
            onChange={(e) => setProductImage(e.target.files[0])}
          />
        </div>

        <div className="text-center">
          <Button theme="primary">{loading ? "Mise à jour..." : "Mettre à jour le produit"}</Button>
        </div>
      </form>
    </Container>
  );
};

export default EditProduct;
