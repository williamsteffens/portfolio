/**
 * CropMarks
 * Four corner registration marks — blueprint-collage detail applied
 * to project cards. Positioned absolutely inside a `relative` parent.
 */
export default function CropMarks() {
  return (
    <>
      <span className="crop-mark crop-tl" />
      <span className="crop-mark crop-tr" />
      <span className="crop-mark crop-bl" />
      <span className="crop-mark crop-br" />
    </>
  );
}
