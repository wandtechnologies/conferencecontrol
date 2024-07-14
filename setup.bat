@echo off
echo Setting up Node.js, Next.js, and cloning repository...

REM Check if Node.js is installed
node -v
IF %ERRORLEVEL% NEQ 0 (
  echo Node.js is not installed. Installing Node.js...
  
  REM Download and install Node.js LTS version
  REM Modify the URL to the latest LTS version as needed
  bitsadmin.exe /transfer "NodeInstaller" https://nodejs.org/dist/v14.17.5/node-v14.17.5-x64.msi %CD%\node.msi
  msiexec.exe /i %CD%\node.msi /quiet
  
  REM Verify Node.js installation
  node -v
  npm -v
) ELSE (
  echo Node.js is already installed.
)

REM Install Next.js globally (if not already installed)
npm install -g next@14

REM Clone the conferencecontrol repository
git clone https://github.com/wandtechnologies/conferencecontrol
cd conferencecontrol

REM Install project dependencies
npm install

REM Create start.bat for running the Next.js development server
echo @echo off > start.bat
echo npm run dev >> start.bat

REM Open localhost URLs in the browser
echo Opening localhost URLs...
start "" http://localhost:3000
timeout /t 5 /nobreak >nul
start "" http://localhost:3000/admin/manage-list
timeout /t 5 /nobreak >nul
start "" http://localhost:3000/table

echo Setup completed.
pause
