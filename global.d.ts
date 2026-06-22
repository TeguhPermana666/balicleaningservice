// Memaksa TypeScript mengenali semua file berektensi .json sebagai modul
declare module "*.json" {
  const value: any;
  export default value;
}