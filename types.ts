
export interface Option {
  id: string;
  text: string;
  votes: number;
  imageUrl?: string;
}

export interface Poll {
  id: string;
  title: string;
  description: string;
  authorId: string;
  authorName: string;
  createdAt: number;
  options: Option[];
  voters: string[]; // List of Device IDs/User IDs who voted
}

export interface User {
  id: string;
  name: string;
  phoneOrEmail: string;
  deviceId: string;
}

export interface AppState {
  user: User | null;
  polls: Poll[];
  deviceId: string;
}
