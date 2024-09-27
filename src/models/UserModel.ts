import { Schema, model, Document } from 'mongoose';
import { components } from '../generated/v1';

type UserType = components['schemas']['User'];

interface IUser extends Document {
  username: UserType['username'];
  email: UserType['email'];
  _id: UserType['_id'];
}

type UserInput = components['schemas']['UserInput'];

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
});

UserSchema.virtual('id').get(function() {
  return this._id.toString();
});

UserSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (_doc, ret) { 
    ret.id = ret._id;
    delete ret._id; 
  }
});

const UserModel = model<IUser>('User', UserSchema);

export { UserModel };
export type { IUser, UserInput };

