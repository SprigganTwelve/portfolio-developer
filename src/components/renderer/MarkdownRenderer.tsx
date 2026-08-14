import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
     content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
     return (
          <ReactMarkdown
               remarkPlugins={[remarkGfm]}
               components={{
                    h1: ({ children }) => <h1 className="mb-6 text-4xl font-bold tracking-tight">{children}</h1>,

                    h2: ({ children }) => <h2 className="mb-4 mt-10 text-2xl font-semibold">{children}</h2>,

                    h3: ({ children }) => <h3 className="mb-3 mt-8 text-xl font-semibold">{children}</h3>,

                    p: ({ children }) => <p className="mb-5 text-base leading-7 text-gray-700">{children}</p>,

                    strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,

                    ul: ({ children }) => <ul className="mb-6 ml-6 list-disc space-y-2">{children}</ul>,

                    ol: ({ children }) => <ol className="mb-6 ml-6 list-decimal space-y-2">{children}</ol>,

                    li: ({ children }) => <li className="pl-2">{children}</li>,

                    blockquote: ({ children }) => (
                         <blockquote className="my-6 border-l-4 pl-5 italic text-gray-600">{children}</blockquote>
                    ),

                    a: ({ href, children }) => (
                         <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium text-primary-start underline underline-offset-4 hover:text-primary-end"
                         >
                              {children}
                         </a>
                    ),

                    pre: ({ children }) => (
                         <pre className="my-6 overflow-x-auto bg-primary-end p-5 text-sm leading-6 text-white shadow-md">
                              {children}
                         </pre>
                    ),

                    code: ({ children }) => <code className="font-mono">{children}</code>,

                    hr: () => <hr className="my-10 border-t border-muted" />,

                    // tables
                    table: ({ children }) => (
                         <div className="my-8 overflow-x-auto border shadow-md">
                              <table className="w-full border-collapse text-sm">{children}</table>
                         </div>
                    ),

                    thead: ({ children }) => <thead className="bg-slate-100">{children}</thead>,

                    tbody: ({ children }) => <tbody className="divide-y divide-slate-200">{children}</tbody>,

                    tr: ({ children, ...props }) => {
                         const isEven = props.node?.position?.start.line
                              ? props.node.position.start.line % 2 === 0
                              : false;

                         return <tr className={isEven ? "bg-slate-50" : "bg-white"}>{children}</tr>;
                    },

                    th: ({ children }) => (
                         <th className="px-5 py-3 text-left font-semibold text-slate-900">{children}</th>
                    ),

                    td: ({ children }) => <td className="px-5 py-3 align-top text-slate-700">{children}</td>,
               }}
          >
               {content}
          </ReactMarkdown>
     );
};

export default MarkdownRenderer;
