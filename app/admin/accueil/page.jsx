"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/db/firebaseConfig"; // Assurez-vous que le chemin d'import est correct
import { onAuthStateChanged } from "firebase/auth";
import AdminDashboard from "@/components/Admin/Dashboard/AdminDashboard";

export default function AdminTableau() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/admin/connexion");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div>
      <AdminDashboard />
    </div>
  );
}
