
import { Document, pdfjs} from "react-pdf";


function Resume() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
    const local = "https://pdfhost.io/v/xDwjGossV_Best_Project_Scheduling_Software"
    return (
        <>
            <Document file={local} />
        </>
   );
}

export default Resume;
