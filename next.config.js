module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader",
    });

    return config;
  },
};
