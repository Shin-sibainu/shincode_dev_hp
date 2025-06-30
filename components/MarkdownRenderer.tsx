'use client';

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Headings
          h1: ({ children }) => (
            <h1 className="text-3xl md:text-4xl font-bold mb-8 mt-12 text-white tracking-tight">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-10 text-blue-300">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl md:text-2xl font-bold mb-4 mt-8 text-purple-300">
              {children}
            </h3>
          ),
          
          // Paragraphs
          p: ({ children }) => (
            <p className="text-gray-200 leading-relaxed mb-6 text-base md:text-lg">
              {children}
            </p>
          ),
          
          // Lists
          ul: ({ children }) => (
            <ul className="text-gray-200 my-6 space-y-3 list-disc list-inside">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="text-gray-200 my-6 space-y-3 list-decimal list-inside">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-200 leading-relaxed">
              {children}
            </li>
          ),
          
          // Blockquotes
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-l-blue-500 bg-blue-950/30 text-gray-200 px-6 py-4 my-8 rounded-r-lg italic">
              {children}
            </blockquote>
          ),
          
          // Inline code
          code: ({ className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || '');
            const inline = !match;
            
            if (!inline && match) {
              return (
                <div className="my-8 overflow-x-auto">
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-xl shadow-lg"
                    customStyle={{
                      margin: 0,
                      borderRadius: '0.75rem',
                      background: '#0a0a0a',
                      border: '1px solid #374151',
                      whiteSpace: 'pre',
                      overflowX: 'auto',
                    }}
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                </div>
              );
            }
            
            return (
              <code
                className="text-blue-300 bg-gray-800 px-2 py-1 rounded-md font-mono text-sm break-words overflow-wrap-anywhere"
                {...props}
              >
                {children}
              </code>
            );
          },
          
          // Links
          a: ({ children, href }) => (
            <a
              href={href}
              className="text-blue-400 no-underline hover:text-blue-300 hover:underline transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          
          // Strong and emphasis
          strong: ({ children }) => (
            <strong className="text-white font-semibold">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="text-gray-300 italic">{children}</em>
          ),
          
          // Horizontal rule
          hr: () => (
            <hr className="border-gray-700 my-12" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}