import Footer2 from '../components/layouts/Footer2';
import Header3 from '../components/layouts/Header3';
import Link from 'next/link';

import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import pdfFile from '../assets/SCORPIONS.pdf'



export default function MintPage() {    

  return (
    
        <>		
            <Document file={pdfFile}>
                <Page pageNumber={1} />
            </Document>
        </>
        
  	);
}
