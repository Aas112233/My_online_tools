# My Online Tools

A collection of useful online tools in a single web application.

## Features

This project contains several handy tools:

1. **Scientific Calculator** - Perform advanced mathematical calculations with a comprehensive set of functions
2. **Barcode & QR Code Generator** - Generate various types of barcodes and QR codes with customization options
3. **Design QR Code** - Create stylish QR codes with templates and design options
4. **PDF Tools** - Various PDF processing tools for document manipulation
5. **Extra Tools** - Additional utility tools for everyday tasks

### Enhanced Barcode & QR Code Generator Features

Our enhanced barcode generator includes:

- **Multiple Barcode Types**: Support for CODE128, EAN-13, EAN-8, UPC, CODE39, ITF, and more
- **QR Code Generation**: Create scannable QR codes with customizable colors
- **Bulk Generation**: Generate multiple barcodes at once by entering values on separate lines
- **Advanced Customization**: Adjust width, height, margins, colors, fonts, and text options
- **PDF Export**: Download all generated barcodes in a single PDF file with customizable layout
- **Responsive Design**: Works on desktop and mobile devices

### Scientific Calculator Features

- **Advanced Functions**: Trigonometric, logarithmic, exponential, and statistical functions
- **Memory Operations**: Store and recall values for complex calculations
- **History Tracking**: Keep track of previous calculations
- **Responsive Design**: Works on all device sizes

## Project Structure

- `index.html` - Main page with navigation to all tools
- `calculator.html` - Scientific calculator tool
- `barcode.html` - Barcode and QR code generator with bulk generation and PDF export
- `design-qr.html` - Stylish QR code designer
- `pdf.html` - PDF processing tools
- `extra.html` - Additional tools
- `css/styles.css` - Enhanced styles for all pages with modern UI design
- `js/script.js` - JavaScript functionality

## How to Use

Simply open `index.html` in a web browser to access all tools through the navigation menu, or directly open any of the individual tool files.

### Barcode & QR Code Generator Usage

1. Navigate to the Barcode & QR Code Generator tool
2. Enter text to encode in the input field
3. Select the desired barcode type from the dropdown
4. Customize appearance using the Advanced Options panel
5. For bulk generation:
   - Click the "Bulk Generation" button
   - Enter one value per line in the text area
   - All barcodes will be generated automatically
   - Use the "Download All Barcodes as PDF" button to export your barcodes
6. Adjust PDF settings using the customization options:
   - Choose how many barcodes per page
   - Toggle barcode value display

## Technologies Used

- HTML5
- CSS3 with modern layout techniques (Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- External libraries:
  - JsBarcode for barcode generation
  - QRCode.js for QR code generation
  - html2canvas for PDF export functionality
  - jsPDF for PDF document creation

## Deployment

This is a client-side only application that can be deployed by simply hosting the files on any web server or static site hosting service.

### GitHub Pages Deployment

To deploy on GitHub Pages:
1. Push your code to a GitHub repository
2. Go to Repository Settings
3. Scroll to the GitHub Pages section
4. Select the branch to deploy from (usually main)
5. Your site will be available at `https://[username].github.io/[repository-name]/`

## Recent Enhancements

- Modernized UI with gradient navigation and improved visual design
- Added bulk barcode generation capability
- Implemented PDF export functionality for generated barcodes
- Enhanced responsive design for better mobile experience
- Improved navigation consistency across all tools
- Added smooth animations and hover effects