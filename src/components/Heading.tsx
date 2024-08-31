/**
 * @description h1 heading
 * @param {string} content
 * @param {string} subcontent
 * @returns {JSX.Element}
 * @example
 * <h1 content="Hi" subcontent="world">{content}{subcontent}</h1>
 */

interface Props {
  content: string;
  subcontent: string;
}
export function Heading({ content, subcontent }: Props) {
  return (
    <h1>
      {content}
      {subcontent}
    </h1>
  );
}
