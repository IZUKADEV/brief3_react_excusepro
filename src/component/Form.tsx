import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  { key: "sport", label: "Sport", icon: "🏋️" },
  { key: "programmation", label: "Programmation", icon: "💻" },
  { key: "retard", label: "Retard", icon: "⏰" },
  { key: "transport", label: "Transport", icon: "🚌" },
];

const tones = ["Créatif", "Sérieux", "Drôle", "Formel"];

function AnimatedField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <label className="block font-medium mb-1">{label}</label>
      {children}
    </motion.div>
  );
}

function Card({ selected, onClick, icon, title }: { selected?: boolean; onClick?: () => void; icon: string; title: string }) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.04 }}
      className={`flex flex-col items-center justify-center py-9 px-4 rounded-xl border shadow-sm transition-all w-full
        ${selected ? "bg-violet-600 text-white border-violet-600" : "bg-gray-100 text-gray-700 border-gray-200"}`}
      onClick={onClick}
      aria-pressed={selected}
      style={{ minWidth: 90 }}
    >
      <span className="text-3xl mb-2">{icon}</span>
      <span className="text-base font-semibold">{title}</span>
    </motion.button>
  );
}

export default function Form() {
  const [reason, setReason] = useState("");
  const [context, setContext] = useState("");
  const [tone, setTone] = useState(tones[0]);
  const [category, setCategory] = useState(categories[0].key);

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.section
        className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-8"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-3xl font-bold mb-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Créer une excuse
        </motion.h1>
        <motion.p
          className="mb-6 text-gray-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Remplissez le formulaire ci-dessous et recevez instantanément une excuse personnalisée adaptée à votre besoin.
        </motion.p>
        <motion.form className="space-y-4" initial="hidden" animate="visible">
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
          >
            <label className="block font-medium mb-2">Catégorie</label>
            <div className="flex gap-3">
              {categories.map(cat => (
                <Card
                  key={cat.key}
                  selected={category === cat.key}
                  onClick={() => setCategory(cat.key)}
                  icon={cat.icon}
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
      </motion.section>
    </motion.main>
  );
}