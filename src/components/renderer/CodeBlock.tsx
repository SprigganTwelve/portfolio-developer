import { CheckCircle, Copy } from "lucide-react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
     children: string;
     language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, language = "text" }) => {
     const [copied, setCopied] = useState(false);
     const code = children.replace(/\n$/, "");
     const handleCopy = async () => {
          await navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
     };

     return (
          <div className="mt-3 mb-10 overflow-hidden border border-muted bg-foreground shadow-md">
               {/* Header */}
               <div className="flex items-center justify-between border-b border-muted px-4 py-2">
                    <span className="font-mono text-sm font-medium uppercase tracking-wide text-slate-400">
                         {language}
                    </span>

                    <button
                         type="button"
                         onClick={handleCopy}
                         className="rounded-md px-2.5 py-1 text-sm text-slate-400 transition-colors hover:text-white"
                    >
                         {copied ? <CheckCircle size={14} /> : <Copy size={14} />}
                    </button>
               </div>

               {/* Code */}
               <div className="p-5">
                    <SyntaxHighlighter
                         language={language}
                         style={vscDarkPlus}
                         customStyle={{
                              margin: 0,
                              padding: 0,
                              background: "transparent",
                         }}
                         codeTagProps={{
                              className: "font-mono text-sm",
                              style: {
                                   fontFamily: "JetBrains Mono, monospace",
                                   lineHeight: "1.7",
                              },
                         }}
                         wrapLongLines={true}
                    >
                         {code}
                    </SyntaxHighlighter>
               </div>
          </div>
     );
};

export default CodeBlock;
