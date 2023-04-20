import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeSyntaxHighlighter = ({code}) => {
  const codeString = code;
  return (
    <SyntaxHighlighter 
        language="javascript" 
        // wrapLines={true} 
        style={docco}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeSyntaxHighlighter;