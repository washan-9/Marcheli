import mongoose, { Schema, Document } from 'mongoose';

export interface IQuestionnaire extends Document {
  title: string;
  description?: string;
  questions: {
    id: string;
    text: string;
    type: 'TEXT' | 'MULTIPLE_CHOICE' | 'SCALE';
    options?: string[];
    riskWeight?: number; // Peso para el cálculo de riesgo en el Sentinel Engine
  }[];
  createdBy: string; // ID del especialista en Postgres
  createdAt: Date;
  updatedAt: Date;
}

const QuestionnaireSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  questions: [
    {
      id: { type: String, required: true },
      text: { type: String, required: true },
      type: { type: String, enum: ['TEXT', 'MULTIPLE_CHOICE', 'SCALE'], required: true },
      options: [{ type: String }],
      riskWeight: { type: Number, default: 0 },
    }
  ],
  createdBy: { type: String, required: true }
}, { timestamps: true });

export default mongoose.models.Questionnaire || mongoose.model<IQuestionnaire>('Questionnaire', QuestionnaireSchema);
