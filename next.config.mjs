import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';
import rehypeHighlight from 'rehype-highlight';

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeHighlight], // Add rehype-highlight plugin here
  },
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default withNextIntl(withMDX(nextConfig));
