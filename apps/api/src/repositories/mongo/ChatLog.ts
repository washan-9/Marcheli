import mongoose, { Schema, Document } from 'mongoose';

export interface IChatLog extends Document {
  userId: string; // ID del estudiante en Postgres
  sessionId: string; // Para agrupar mensajes de una misma conversación
  messages: {
    sender: 'USER' | 'BOT';
    content: string;
    timestamp: Date;
    sentimentScore?: number; // Calculado por FastAPI
    flags?: string[]; // Banderas de riesgo detectadas (ej. "ANSIEDAD", "CRISIS")
  }[];
  overallRiskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  createdAt: Date;
  updatedAt: Date;
}

const ChatLogSchema: Schema = new Schema({
  userId: { type: String, required: true, index: true },
  sessionId: { type: String, required: true, index: true },
  messages: [
    {
      sender: { type: String, enum: ['USER', 'BOT'], required: true },
      content: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
      sentimentScore: { type: Number },
      flags: [{ type: String }],
    }
  ],
  overallRiskLevel: { 
    type: String, 
    enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'], 
    default: 'LOW' 
  }
}, { timestamps: true });

export default mongoose.models.ChatLog || mongoose.model<IChatLog>('ChatLog', ChatLogSchema);
