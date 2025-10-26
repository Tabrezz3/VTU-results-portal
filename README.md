# 🎓 VTU Results Portal

A modern, fast, and user-friendly web application for viewing VTU (Visvesvaraya Technological University) student results. Built with Next.js 15, TypeScript, and Tailwind CSS.

# The website is live at :
[https://vtu-results-portal.vercel.app/](https://vtu-results-portal.vercel.app/)
- use 3VC24IS081 or Tabrez Ahamed for search reference .

## ✨ Features

- **🔍 Smart Search**: Search by USN or student name with intelligent matching
- **📊 Detailed Results**: View complete academic performance including SGPA, percentage, and subject-wise marks
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **⚡ Lightning Fast**: Embedded data for instant results without external API calls
- **📄 PDF Access**: Direct links to official result PDFs
- **📈 Rankings**: Class and college rank information
- **📋 CSV Export**: Download complete results data in CSV format

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Tabrezz3/VTU-results-portal.git
   cd vtu-results-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
vtu-results-portal/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── csv/          # CSV export endpoint
│   │   └── validate/     # Student validation endpoint
│   ├── portal/           # Main search interface
│   ├── result/           # Result display pages
│   └── layout.tsx        # Root layout
├── data/                  # Student data
│   ├── students.ts       # Data processing & search logic
│   └── students-data.ts  # Raw student data (608 records)
├── components/           # Reusable UI components
└── lib/                  # Utility functions
```

## 📊 Data Overview

The application contains **608 student records** across **10 sections** (A-J) with:

- Complete academic performance data
- Subject-wise marks and grades
- SGPA and percentage calculations
- Class and college rankings
- Direct PDF links to official results

### Supported Departments
- **CSE** - Computer Science Engineering
- **ISE** - Information Science Engineering  
- **ECE** - Electronics & Communication Engineering
- **EEE** - Electrical & Electronics Engineering
- **ME** - Mechanical Engineering
- **CV** - Civil Engineering

## 🔧 API Endpoints (for example)

### Student Validation
```http
GET /api/validate?usn=3VC24CS096
GET /api/validate?fullName=PAVITHRA R
```

**Response:**
```json
{
  "ok": true,
  "student": {
    "usn": "3VC24CS096",
    "fullName": "PAVITHRA R",
    "totalMarks": 689,
    "percentage": 86.1,
    "sgpa": 9.35,
    "subjects": [...],
    "section": "A SEC",
    "classRank": 1,
    "collegeRank": 4
  }
}
```


## 🎯 Usage Examples


## 🛠️ Technical Details

### Built With
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI
- **Icons**: Lucide React

### Key Features
- **Server-Side Rendering**: Fast initial page loads
- **Client-Side Search**: Instant search results
- **Embedded Data**: No external API dependencies
- **Type Safety**: Full TypeScript coverage
- **Responsive Design**: Mobile-first approach

### Performance Optimizations
- Embedded JSON data for zero-latency access
- Efficient search algorithms with similarity matching
- Cached processed data to avoid re-parsing
- Optimized bundle size with tree shaking

## 📝 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run type checking
npm run type-check
```

### Adding New Data

1. Update `data/students-data.ts` with new student records
2. Ensure the `RawStudentData` type matches your data structure
3. Add any new subject codes to `SUBJECT_NAMES` mapping in `data/students.ts`

### Subject Code Format
```typescript
"BMATS201:87 (P)"  // Code:Marks (Status)
// Status: P = Pass, F = Fail, A = Absent
```

## 🔍 Search Algorithm

The application uses a sophisticated search system:

1. **Exact USN Match**: Direct USN lookup (highest priority)
2. **Exact Name Match**: Complete name matching
3. **Partial Name Match**: Word-by-word matching with similarity scoring
4. **Fuzzy Search**: Character-based similarity for suggestions

### Search Features
- Case-insensitive matching
- Partial word matching
- Typo tolerance
- Smart suggestions
- Multiple match types

## 📱 User Interface

### Search Portal
- Clean, intuitive search interface
- Real-time validation
- Loading states and error handling
- Responsive design

### Results Display
- Comprehensive student information
- Subject-wise performance breakdown
- Grade calculations and status indicators
- PDF download links
- Navigation controls

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


<div align="center">
  <p>Made with ❤️ for VTU students</p>
  <p>
    <a href="#-features">Features</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-api-endpoints">API</a> •
    <a href="#-development">Development</a>
  </p>
</div>
