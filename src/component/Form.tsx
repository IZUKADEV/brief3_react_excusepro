import { useState, useEffect } from "react";
import type { ReactNode, FormEvent } from "react";
import { motion } from "framer-motion";

const categoryIcons: Record<string, ReactNode> = {
  sport: (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="2" y="10" width="4" height="4" rx="1" fill="currentColor"/><rect x="18" y="10" width="4" height="4" rx="1" fill="currentColor"/><rect x="7" y="11" width="10" height="2" rx="1" fill="currentColor"/></svg>
  ),
  programmation: (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 9l-2 3 2 3M16 9l2 3-2 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  retard: (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
  ),
  transport: (
    <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="10" rx="4" stroke="currentColor" strokeWidth="2"/><circle cx="7.5" cy="17.5" r="1.5" fill="currentColor"/><circle cx="16.5" cy="17.5" r="1.5" fill="currentColor"/></svg>
  ),
};

const categories = [
  { key: "sport", label: "Sport" },
  { key: "programmation", label: "Programmation" },
  { key: "retard", label: "Retard" },
  { key: "transport", label: "Transport" },
];

const tones = ["Créatif", "Sérieux", "Drôle", "Formel"];


function AnimatedField({ label, children }: { label: string; children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-start"
    >
      <label className="block font-medium mb-1 text-left">{label}</label>
      {children}
    </motion.div>
  );
}

function Card({ selected, onClick, icon, title }: { selected?: boolean; onClick?: () => void; icon: ReactNode; title: string }) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.04 }}
      className={`flex flex-col items-center justify-center py-7 px-2 rounded-xl border transition-all w-[120px] h-[120px] overflow-hidden
        ${selected ? "bg-violet-600 text-white border-violet-600" : "bg-gray-100 text-gray-700 border-gray-200"}`}
      onClick={onClick}
      aria-pressed={selected}
      style={{ minWidth: 120, maxWidth: 120 }}
    >
      <span className="mb-2">{icon}</span>
      <span className="text-sm font-semibold text-center truncate w-full block">{title}</span>
    </motion.button>
  );
}

function normalize(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/s$/, "");
}

export default function Form() {
  const [reason, setReason] = useState("");
  const [context, setContext] = useState("");
  const [tone, setTone] = useState(tones[0]);
  const [category, setCategory] = useState(categories[0].key);
  const [excuse, setExcuse] = useState<string | null>(null);
  const [excusesData, setExcusesData] = useState<Record<string, string[]> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("../back/api.json")
      .then(res => res.json())
      .then(data => {
        setExcusesData(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Erreur lors du chargement de la base d'excuses.");
        setLoading(false);
      });
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!excusesData) {
      setExcuse("La base d'excuses n'est pas disponible.");
      return;
    }

    const normalizedCategory = normalize(category);
    const jsonKey = Object.keys(excusesData).find(
      key => normalize(key) === normalizedCategory
    );
    const list = jsonKey ? excusesData[jsonKey] : undefined;
    if (Array.isArray(list) && list.length > 0) {
      const randomExcuse = list[Math.floor(Math.random() * list.length)];
      setExcuse(randomExcuse);
    } else {
      setExcuse("Aucune excuse trouvée pour cette catégorie.");
    }
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.section
        className="max-w-md mx-auto p-0 mt-8"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-3xl font-bold mb-2 text-left"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Créer une excuse
        </motion.h1>
        <motion.p
          className="mb-6 text-gray-600 text-left"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Remplissez le formulaire ci-dessous et recevez instantanément une excuse personnalisée adaptée à votre besoin.
        </motion.p>
        {loading ? (
          <div className="text-center text-gray-500">Chargement des excuses…</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <motion.form className="space-y-4" initial="hidden" animate="visible" onSubmit={handleSubmit}>
            <AnimatedField label="Pour quelle raison avez-vous besoin d'une excuse ?">
              <motion.input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Manqué mon cours de crossfit"
                value={reason}
                onChange={e => setReason(e.target.value)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                required
              />
            </AnimatedField>
            <AnimatedField label="Contexte additionnel">
              <motion.input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Pas allé m'entraîner depuis 2 semaines"
                value={context}
                onChange={e => setContext(e.target.value)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              />
            </AnimatedField>
            <AnimatedField label="Ton de l'excuse">
              <motion.select
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                value={tone}
                onChange={e => setTone(e.target.value)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                {tones.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </motion.select>
            </AnimatedField>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-col items-start"
            >
              <label className="block font-medium mb-2 text-left">Catégorie</label>
              <div className="flex gap-3 w-full">
                {categories.map(cat => (
                  <Card
                    key={cat.key}
                    selected={category === cat.key}
                    onClick={() => setCategory(cat.key)}
                    icon={categoryIcons[cat.key]}
                    title={cat.label}
                  />
                ))}
              </div>
            </motion.div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="w-full mt-4 bg-violet-600 text-white font-bold py-3 rounded-xl text-lg shadow-md hover:bg-violet-700 transition"
            >
              Générer
            </motion.button>
          </motion.form>
        )}
        {excuse && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 border-l-4 border-violet-600 bg-violet-50 text-violet-900 text-lg rounded"
          >
            <strong>Excuse générée :</strong><br />
            {excuse}
          </motion.div>
        )}
      </motion.section>
    </motion.main>
  );
}