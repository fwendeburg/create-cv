import { createGlobalStyle } from 'styled-components';

export const BodyAndRootStyles = createGlobalStyle`
    body {
        background-color: rgb(204, 204, 204);
        font-family: 'Poppins', sans-serif;
        -webkit-print-color-adjust: exact;
    }

    #root {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    #print-page {
        display: none;
    }

    /*Removes the date and URl of the pdf to print*/ 
    @page { 
        size: auto;  
        margin: 0mm; 
    }

    @media print {
        #print-page {
            display: flex;
        }

        #navbar {
            display: none;
        }

        #footer {
            display: none;
        }

        #content-container {
            display: none;
        }
    }
`