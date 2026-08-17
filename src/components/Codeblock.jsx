import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Codeblock({ code, language = "javascript" }) {
  return (
    <div className="rounded-xl justify-center overflow-hidden w-fit h-full border border-line hover:border-arcane-500/60 transition-colors shadow-lg">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          background: '#120A1F',
          minHeight: '100%',
          overflowX: 'hidden',
          paddingRight: 35
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
