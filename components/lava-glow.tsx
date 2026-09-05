export function LavaGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="lava-blob lava-blob-1" />
      <div className="lava-blob lava-blob-2" />
      <div className="lava-blob lava-blob-3" />
      <div className="lava-blob lava-blob-4" />
      {/* darken/vignette overlay to keep text legible */}
      <div className="absolute inset-0 bg-background/40" />
    </div>
  )
}
