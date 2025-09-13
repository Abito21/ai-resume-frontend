import ReactMarkdown from "react-markdown";

interface MarkdownComponentProps {
  children: string;
  className?: string;
}

export const MarkdownComponent = ({ children }: MarkdownComponentProps) => {
  return (
    <div className={"prose"}>
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
};