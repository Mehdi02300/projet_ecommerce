import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, uploadProductImage } from "@/db/firebaseConfig";

export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    <div>
      <h2>Ajouter un produit</h2>
      <form onSubmit={handleAddProduct}>
        <div>
          <label>Nom du produit:</label>
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        </div>

        <div>
          <label>Prix du produit:</label>
          <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />
        </div>

        <div>
          <label>Description du produit:</label>
          <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} required />
        </div>

        <div>
          <label>Image du produit:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} required />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Ajout en cours..." : "Ajouter le produit"}
        </button>
      </form>
    </div>
  );
}
