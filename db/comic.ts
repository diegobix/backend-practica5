import mongoose from "npm:mongoose";
import { Comic } from "../types.ts";
import setDocumentId from "../lib/setDocumentId.ts";

const comicSchema = new mongoose.Schema<Comic>({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: false },
  formato: { type: String, required: true },
});

comicSchema.set("toJSON", {
  transform: setDocumentId,
});

export const ComicModel = mongoose.model("Comic", comicSchema);