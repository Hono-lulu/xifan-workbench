const { app, BrowserWindow, shell } = require('electron');
const APP_URL = 'https://wcnfbz1nacy2.doubaoapps.com/app/app_17g13v26w38';

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 420,
    minHeight: 620,
    icon: __dirname + '/icon.ico',
    autoHideMenuBar: true,
    title: '稀饭专属工作台',
    backgroundColor: '#FDF6EC'
  });
  win.loadURL(APP_URL);
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url && url.startsWith('http')) shell.openExternal(url);
    return { action: 'deny' };
  });
  // 偶发加载失败(如 -3 中止)时自动重载
  win.webContents.on('did-fail-load', (_e, code, _desc) => {
    if (code === -3) return;
    win.loadURL(APP_URL);
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
