import mongoose from "mongoose";

interface IUser {
  username: string;
  email: string;
  birthdate: Date;
}

const UserSChema = new mongoose.Schema<IUser>({
  username: { type: String, required: true, default: "" },
  email: { type: String, required: true, default: "" },
  birthdate: { type: Date, required: true, default: new Date() },
});

const UserModel = mongoose.model<IUser>("user", UserSChema);

export { UserModel };
