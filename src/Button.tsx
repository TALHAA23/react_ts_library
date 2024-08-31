/**
 * @description A button component.
 * @param {string} label The label to display on the button.
 * @returns {JSX.Element} The button element.
 * @example
 * <Button label="Click me" />
 */

interface Props {
  label: string;
}

export function Button({ label }: Props) {
  return <button>{label}</button>;
}
