import { ReactNode } from "react";

/**
 * HoverSlideText – wrap text labels so they slide up on parent :hover.
 * The parent element (button / a) needs the group class "group/slide".
 *
 * Usage:
 *   <button className="group/slide ...">
 *     <HoverSlideText>Call to Counsel</HoverSlideText>
 *     <svg ... />
 *   </button>
 */
export function HoverSlideText({
  children,
  className = "",
  slideHeight,
}: {
  children: ReactNode;
  className?: string;
  slideHeight?: string;
}) {
  const text = typeof children === "string" ? children : undefined;

  return (
    <span
      className={`hover-slide ${className}`}
      style={slideHeight ? ({ "--slide-h": slideHeight } as React.CSSProperties) : undefined}
    >
      <span data-text={text}>{children}</span>
    </span>
  );
}
