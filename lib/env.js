export const environment = () => process.env.NODE_ENV;
export const isProduction = () => environment() === 'production';
export const isDevelopment = () => environment() === 'development';
