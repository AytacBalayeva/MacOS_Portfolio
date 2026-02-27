import { useState } from "react";
import WindowWrapper from "./../hoc/WindowWrapper";
import WindowControls from "./../components/WindowControls";
import { ArrowLeftToLine, ArrowRightToLine, Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();
const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a
          href="files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>
      <div>
        <Document file="files/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} renderAnnotationLayer renderTextLayer />
        </Document>

        <div className="flex justify-between px-4 py-2">
          <p>
            Page {pageNumber} of {numPages ?? "..."}
          </p>
          <div>
            {" "}
            <button
              onClick={() =>
                setPageNumber((prev) => (prev <= 1 ? prev : prev - 1))
              }
              disabled={pageNumber <= 1}
              className="cursor-pointer"
            >
              <ArrowLeftToLine className="icon" />
            </button>
            <button
              onClick={() =>
                setPageNumber((prev) => (prev < numPages ? prev + 1 : prev))
              }
              className="cursor-pointer"
              disabled={pageNumber >= numPages}
            >
              <ArrowRightToLine className="icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
