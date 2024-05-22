import withTM from 'next-transpile-modules';

// List of modules to transpile
const transpileModules = [
  'rc-util',  // Add any other modules that need to be transpiled here
];

const nextConfig = {
  // Other Next.js configurations
};

export default withTM(transpileModules)(nextConfig);
