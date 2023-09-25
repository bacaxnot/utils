import { ComponentPropsWithRef, ElementType, ReactNode } from "react";

type HTMLTag = ElementType<any>;

/**
 * A custom type that accepts a generic HTML tag as a prop. This is useful to infer the correct props for a given HTML tag. This is equivalent to `React.ComponentPropsWithRef<Tag>`.
 */
export type AllHTMLProps<T extends HTMLTag> = ComponentPropsWithRef<T>;

/**
 * A custom FunctionComponent that accepts a generic HTML tag as a prop. This is useful to infer the correct props for a given HTML tag.
 * @example
 * const MyComponent: CustomFC<"div"> = (props) => {
 *  return <div {...props} />;
 * };
 * In the above example, the props argument will be inferred to be of type `AllHTMLProps<"div">`, which is equivalent to `React.ComponentPropsWithRef<"div">`.
 */
export type CustomFC<Tag extends HTMLTag, Props = object> = (
  props: AllHTMLProps<Tag> & Props
) => ReactNode;
