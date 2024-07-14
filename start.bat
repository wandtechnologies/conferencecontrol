@echo off

REM Pull latest changes from the repository
git pull

REM Start the Next.js development server
start "" npm run dev
timeout /t 5 /nobreak >nul

REM Open localhost URLs in the browser
start "" http://localhost:3000
timeout /t 3 /nobreak >nul
start "" http://localhost:3000/admin/manage-list
timeout /t 3 /nobreak >nul
start "" http://localhost:3000/table
