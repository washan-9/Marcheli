import mongoose, { Schema, Document } from 'mongoose';

export interface IQuestionnaireResponse extends Document {
  questionnaireId: string; // ID del cuestionario respondido
  studentId: string;       // ID del estudiante en Postgres
  answers: {
    questionId: string;
    value: string | number; // Texto, opción elegida o valor de escala
  }[];
  score: number;           // Puntaje calculado (suma de riskWeight, etc.)
  riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  submittedAt: Date;
}

const QuestionnaireResponseSchema: Schema = new Schema({
  questionnaireId: { type: String, required: true, index: true },
  studentId: { type: String, required: true, index: true },
  answers: [
    {
      questionId: { type: String, required: true },
      value: { type: Schema.Types.Mixed, required: true },
    }
  ],
  score: { type: Number, default: 0 },
  riskLevel: {
    type: String,
    enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'],
    default: 'LOW'
  },
  submittedAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.models.QuestionnaireResponse ||
  mongoose.model<IQuestionnaireResponse>('QuestionnaireResponse', QuestionnaireResponseSchema);
