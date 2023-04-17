declare module "*.jpg" {
  const value: string;
  export default value;
}

export interface PostIdContext {
  value: number;
}
