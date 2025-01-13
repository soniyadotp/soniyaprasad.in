import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import React, { ReactNode } from 'react';

import { SmartImage, SmartLink, Text } from '@/once-ui/components';
import { HeadingLink } from '@/components';

import { TextProps } from '@/once-ui/interfaces';
import { SmartImageProps } from '@/once-ui/components/SmartImage';

type TableProps = {
    data: {
        headers: string[];
        rows: string[][];
    };
};

function Table({ data }: TableProps) {
    const headers = data.headers.map((header, index) => (
        <th key={index}>{header}</th>
    ));
    const rows = data.rows.map((row, index) => (
        <tr key={index}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
            ))}
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    children: ReactNode;
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
    if (href.startsWith('/')) {
        return (
            <SmartLink href={href} {...props}>
                {children}
            </SmartLink>
        );
    }

    if (href.startsWith('#')) {
        return <a href={href} {...props}>{children}</a>;
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    );
}

function createImage({ alt, src, ...props }: SmartImageProps & { src: string }) {
    if (!src) {
        console.error("SmartImage requires a valid 'src' property.");
        return null;
    }

    return (
        <SmartImage
            className="my-20"
            enlarge
            radius="m"
            aspectRatio="16 / 9"
            alt={alt}
            src={src}
            {...props}
        />
    );
}

function slugify(str: string): string {
    return str
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/&/g, '-and-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-');
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
    const CustomHeading = ({ children, ...props }: TextProps) => {
        const slug = slugify(children as string);
        return (
            <HeadingLink
                style={{ marginTop: 'var(--static-space-24)', marginBottom: 'var(--static-space-12)' }}
                level={level}
                id={slug}
                {...props}
            >
                {children}
            </HeadingLink>
        );
    };

    CustomHeading.displayName = `Heading${level}`;

    return CustomHeading;
}

function createParagraph({ children }: TextProps) {
    return (
        <Text
            style={{ lineHeight: '150%' }}
            variant="body-default-m"
            onBackground="neutral-medium"
            marginTop="8"
            marginBottom="12"
        >
            {children}
        </Text>
    );
}

function CodeBlock({ children, ...props }: { children: ReactNode }) {
    return (
        <pre
            style={{
                maxWidth: '100%',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                backgroundColor: '#f5f5f5',
                padding: '1rem',
                borderRadius: '4px',
                boxSizing: 'border-box',
            }}
            {...props}
        >
            {children}
        </pre>
    );
}

function InlineCode({ children, ...props }: { children: ReactNode }) {
    return (
        <code
            style={{
                backgroundColor: '#f5f5f5',
                padding: '0.2rem 0.4rem',
                borderRadius: '4px',
                fontSize: '90%',
                wordWrap: 'break-word',
            }}
            {...props}
        >
            {children}
        </code>
    );
}

const components = {
    p: createParagraph as any,
    h1: createHeading(1) as any,
    h2: createHeading(2) as any,
    h3: createHeading(3) as any,
    h4: createHeading(4) as any,
    h5: createHeading(5) as any,
    h6: createHeading(6) as any,
    img: createImage as any,
    a: CustomLink as any,
    Table,
    pre: CodeBlock,
    code: InlineCode,
};

type CustomMDXProps = MDXRemoteProps & {
    components?: typeof components;
};

export function CustomMDX(props: CustomMDXProps) {
    return (
        <MDXRemote
            {...props}
            components={{ ...components, ...(props.components || {}) }}
        />
    );
}
