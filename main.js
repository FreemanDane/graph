const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function CreateWindow()
{
	mainWindow = new BrowserWindow({
		width:960,
		height:600
	});
	mainWindow.loadURL('file://' + __dirname + '/index.html');
	mainWindow.on("closed",function(){
		mainWindow = null;
	})
}

app.on("ready", CreateWindow);

app.on("window-all-closed",function(){
	if (process.platform != "darwin"){
		app.quit();
	}
});

app.on("activite", function(){
	if(mainWindow===null){
        createWindow();
    }
});