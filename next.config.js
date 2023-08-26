import { dirname, join } from 'node:path';
import { fileURLToPath } from 'url';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: [join(dirname(fileURLToPath(import.meta.url)), 'styles')]
  }
};

export default nextConfig;
