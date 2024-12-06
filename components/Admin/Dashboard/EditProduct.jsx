"use client";

import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "@/db/firebaseConfig";
import { useParams, useRouter } from "next/navigation";
import Container from "@/components/ui/Container";
import { ArrowLeft } from "lucide-react";

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
    <Container className={"h-screen mt-32"}>
      <button onClick={() => router.back()} className="flex gap-2 mb-10">
        <ArrowLeft /> <span>Retour</span>
      </button>
      <div className="">
        <h2 className="text-2xl mb-4">Modifier le produit</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Nom du produit:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-2">Prix du produit:</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-2">Description du produit:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-2">Image du produit:</label>
            <input
              type="file"
              className="w-full p-2 border rounded"
              accept="image/*"
              onChange={(e) => setProductImage(e.target.files[0])}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? "Mise à jour..." : "Mettre à jour le produit"}
          </button>
        </form>
      </div>
    </Container>
  );
};

export default EditProduct;
