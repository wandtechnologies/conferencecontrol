@echo off

:restart
REM Pull latest changes from the repository
echo Pulling latest changes from the repository...
git pull
IF %ERRORLEVEL% NEQ 0 (
  echo Failed to pull latest changes. Exiting.
  pause
  exit /b %ERRORLEVEL%
)

REM Install project dependencies
echo Installing project dependencies...
call npm install
IF %ERRORLEVEL% NEQ 0 (
  echo npm install failed. Exiting.
  pause
  exit /b %ERRORLEVEL%
)

REM Check if Prisma schema exists and initialize if not
IF NOT EXIST .prisma-initialized (
    REM Install Prisma as a development dependency if not already installed
    echo Installing Prisma CLI...
    npm install prisma --save-dev
    IF %ERRORLEVEL% NEQ 0 (
    echo Prisma CLI installation failed. Exiting.
    pause
    exit /b %ERRORLEVEL%
    )

  echo Setting up Prisma database for the first time...
  call npx prisma init
  call npx prisma db push
  IF %ERRORLEVEL% NEQ 0 (
    echo Prisma database push failed. Exiting.
    pause
    exit /b %ERRORLEVEL%
  )

  REM Create a marker file to indicate Prisma initialization
  echo true > .prisma-initialized
  start /B cmd /c start.bat
)

REM Open localhost URLs in the browser
echo Opening URLs in the browser...
start "" http://localhost:3000
start "" http://localhost:3000/admin/manage-list
start "" http://localhost:3000/table

REM Start the Next.js development server and keep the window open
echo Starting the Next.js development server...
start "" /B npm run dev

REM Keep the script window open at the end
pause
