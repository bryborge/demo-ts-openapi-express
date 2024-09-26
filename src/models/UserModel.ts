import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
});

const UserModel = model<IUser>('User', UserSchema);

export default UserModel;
