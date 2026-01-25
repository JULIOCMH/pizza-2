import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPizzas = async () => {
  const data = await readFile(join(__dirname, "../db/pizzas.json"), "utf-8");
  return JSON.parse(data);
};

const getPizza = async (id) => {
  const pizzas = await getPizzas();
  return pizzas.find((pizza) => pizza.id === id);
};

export const pizzaModel = {
  getPizzas,
  getPizza,
};
