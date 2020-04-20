/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld(
	'electron',
	{
		helloWorld: () => {
			console.log('Hello from Preload');
		}
	}
);
