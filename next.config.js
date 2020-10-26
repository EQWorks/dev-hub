const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  defaultLayout: true,
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    process: () => {},
    phase: 'prebuild|loader|both',
  },
  reExportDataFetching: false,
})({
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      }
    }
    return config
  },
})
