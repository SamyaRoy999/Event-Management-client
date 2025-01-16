import InteractiveHoverButton from "@/Components/ui/interactive-hover-button";

export function HoverButtonDemo({ children }) {
  return (
    <div className="relative justify-center">
      <InteractiveHoverButton>{children}</InteractiveHoverButton>
    </div>
  );
}
