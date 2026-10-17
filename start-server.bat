@echo off
title Blissful Munchkins Server
cd /d "%~dp0"
echo ========================================================
echo   Blissful Munchkins Photography Dev Server
echo   Opening: http://localhost:3000
echo ========================================================
start http://localhost:3000
powershell -NoProfile -ExecutionPolicy Bypass -Command "node node_modules\vite\bin\vite.js --port 3000 --host 0.0.0.0"
pause
