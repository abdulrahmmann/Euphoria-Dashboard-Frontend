export interface UserModel {
  id: string;
  userName: string;
  email: string;
  phoneNumber?: string;
  role: string;
  isActive: boolean;
  joinedDate: string;
  profileImageUrl?: string;
}
