# VTU Results Portal Documentation

## Project Structure

```
/
├── src/                    # Source code
│   ├── app/               # Next.js App Router
│   │   ├── api/          # API routes
│   │   ├── portal/       # Portal pages
│   │   ├── result/       # Result pages
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Shadcn/ui components
│   │   ├── social-buttons.tsx
│   │   └── theme-provider.tsx
│   ├── lib/              # Utilities and configurations
│   │   └── utils.ts      # Utility functions
│   ├── data/             # Student data and types
│   │   ├── students.ts   # Type definitions
│   │   └── students-data.ts # Student records
│   └── hooks/            # Custom React hooks
│       └── use-toast.ts  # Toast notifications
├── public/               # Static assets
├── docs/                 # Documentation
└── Configuration files
```

## API Endpoints

- `GET /api/students/[usn]` - Get student by USN
- `GET /api/students` - Get all students with search/filter
- `POST /api/validate` - Validate student credentials
- `GET /api/csv` - Export data as CSV
- `GET /api/download` - Generate PDF/CSV reports

## Development

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
```

## Features

- 608+ student records with local data
- Search and filter functionality
- PDF/CSV export capabilities
- Responsive design with dark/light theme
- Type-safe with TypeScript