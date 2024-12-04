const Filter = ({ setCategorie }) => {
  return (
    <div className="mb-6">
      <label htmlFor="categorie" className="text-gray-700 font-medium mr-2">
        Filtrer par catégorie :
      </label>
      <select
        id="categorie"
        onChange={(e) => setCategorie(e.target.value)}
        className="border px-3 py-2 rounded-md"
      >
        <option value="all">Toutes les catégories</option>
        <option value="electronique">Électronique</option>
        <option value="mode">Mode</option>
        <option value="maison">Maison</option>
      </select>
    </div>
  );
};

export default Filter;
