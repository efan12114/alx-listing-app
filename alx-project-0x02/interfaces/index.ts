export interface HeaderProps {}

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size?: "sm" | "md" | "lg";
  shape?: "sm" | "md" | "full";
  onClick?: () => void;
  children: React.ReactNode;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size?: "sm" | "md" | "lg";
  shape?: "sm" | "md" | "full";
  onClick?: () => void;
  children: React.ReactNode;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  size?: "sm" | "md" | "lg";
  shape?: "sm" | "md" | "full";
  onClick?: () => void;
  children: React.ReactNode;
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}