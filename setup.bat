@echo off

REM Determine the directory where set-up.bat is located
set SCRIPT_DIR=%~dp0
cd /d %SCRIPT_DIR%

echo Setting up Node.js, Git, Next.js, and cloning repository...

REM Check if Node.js is installed and determine its version
node -v > node_version.txt 2>&1
findstr /i "v18." node_version.txt > nul
IF %ERRORLEVEL% NEQ 0 (
  echo Node.js version 18 is not installed. Installing Node.js version 18...
  
  REM Download and install Node.js LTS version 18
  bitsadmin.exe /transfer "NodeInstaller" https://nodejs.org/dist/v18.17.0/node-v18.17.0-x64.msi %CD%\node.msi
  echo Downloading Node.js installer...
  msiexec.exe /i %CD%\node.msi
  
  REM Verify Node.js installation
  node -v > nul 2>&1
  IF %ERRORLEVEL% NEQ 0 (
    echo Warning: Node.js installation failed. Continuing with setup...
  ) ELSE (
    npm -v > nul 2>&1
    IF %ERRORLEVEL% NEQ 0 (
      echo Warning: npm installation failed. Continuing with setup...
    )
  )
) ELSE (
  echo Node.js version 18 is already installed.
)
del node_version.txt

REM Check if Git is installed
git --version > nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
  echo Git is not installed. Installing Git...
  
  REM Download Git installer
  bitsadmin.exe /transfer "GitInstaller" https://github.com/git-for-windows/git/releases/download/v2.35.1.windows.1/Git-2.35.1-64-bit.exe %CD%\git-installer.exe
  echo Downloading Git installer...
  %CD%\git-installer.exe /SILENT /COMPONENTS="icons,ext,assoc"
  
  REM Verify Git installation
  git --version > nul 2>&1
  IF %ERRORLEVEL% NEQ 0 (
    echo Warning: Git installation failed. Continuing with setup...
  ) ELSE (
    echo Git is installed.
  )
) ELSE (
  echo Git is already installed.
)

REM Clone the conferencecontrol repository into the current directory
echo Cloning conferencecontrol repository...
git clone https://github.com/wandtechnologies/conferencecontrol > nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
  echo Warning: Failed to clone repository. Continuing with setup...
) ELSE (
  REM Navigate into the cloned directory
  cd conferencecontrol
  
  REM Install project dependencies
  echo Installing project dependencies...
  npm install > nul 2>&1
  IF %ERRORLEVEL% NEQ 0 (
    echo Warning: Failed to install project dependencies. Continuing with setup...
  ) ELSE (
    echo Project dependencies installed.
  )
)

echo Setup completed.
pause
