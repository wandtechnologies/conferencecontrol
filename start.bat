@echo off
start "" npm run dev
timeout /t 1 /nobreak >nul
start "" http://localhost:3000
timeout /t 1 /nobreak >nul
start "" http://localhost:3000/admin/manage-list
timeout /t 1 /nobreak >nul
start "" http://localhost:3000/table
