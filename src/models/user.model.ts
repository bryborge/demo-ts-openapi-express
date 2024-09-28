import { Schema, model, Document } from 'mongoose';
import { components } from '../generated/v1';

/**
 * Type definition for the User schema described in the OpenAPI specification.
 */
type UserType = components['schemas']['User'];

/**
 * Type definition for the User input schema described in the OpenAPI
 * specification.
 */
type UserInput = components['schemas']['UserInput'];

/**
 * The User interface, representing the shape of a user in the database.
 *
 * @interface IUser
 * @extends {Document}
 */
interface IUser extends Document {
  username: UserType['username'];
  email: UserType['email'];
  _id: UserType['_id'];
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
});

/**
 * Virtual property that returns the user's ID in string format. This is
 * necessary to avoid the `ObjectID` type from Mongoose.
 */
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

/**
 * The User model, representing the user collection in the database.
 */
const UserModel = model<IUser>('User', UserSchema);

export { UserModel };
export type { IUser, UserInput };
