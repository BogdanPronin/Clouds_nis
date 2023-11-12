import mongoose, { Document, Schema } from 'mongoose';

export interface Chair extends Document {
    size: string;
    material: string;
    color: string;
    name: string;
    hexCode: string;
    quantity: number;
    cost: number;
    description?: string;
    image: string;
}

const ChairSchema = new Schema<Chair>({
    size: {
        type: String, required: true
    },
    material: {
        type: String, required: true
    },
    color: {
        type: String, required: true
    },
    name: {
        type: String, required: true
    },
    hexCode: {
        type: String, required: true
    },
    quantity: {
        type: Number, default: 0
    },
    cost: {
        type: Number, required: true
    },
    description: {
        type: String
    },
    image: {
        type: String, required: true
    },
});

export const ChairModel = mongoose.model<Chair>('Chair', ChairSchema);
