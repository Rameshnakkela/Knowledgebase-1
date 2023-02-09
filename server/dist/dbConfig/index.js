"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blobService = exports.clientWithSAS = void 0;
const { TableClient, AzureSASCredential } = require("@azure/data-tables");
const { BlobServiceClient } = require("@azure/storage-blob");
const accName = "devgurukulstorage";
const acckey = "DCbw972fOatlWpJIUTtZOJUcTAwGb4nPscJ+wEACS1QPMoDHbdcPgbwWDZCAr3y8smWOw30WIb48+AStSYrh6Q==";
const tableName = "categories";
const sasToken = "sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-03-06T11:23:49Z&st=2023-02-06T03:23:49Z&spr=https,http&sig=1rHz3PHMMb3Lwd8gTB7gcZQBGKrU57u%2FlB2uBqh3zPc%3D";
const clientWithSAS = (tableName) => {
    return new TableClient(`https://${accName}.table.core.windows.net`, tableName, new AzureSASCredential(sasToken));
};
exports.clientWithSAS = clientWithSAS;
///////blob service
const blobSasUrl = "https://devgurukulstorage.blob.core.windows.net/?sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-03-06T11:23:49Z&st=2023-02-06T03:23:49Z&spr=https,http&sig=1rHz3PHMMb3Lwd8gTB7gcZQBGKrU57u%2FlB2uBqh3zPc%3D";
const blobServiceClient = new BlobServiceClient(blobSasUrl);
const containerName = 'knowledebase';
const containerClient = blobServiceClient.getContainerClient(containerName);
const blobService = () => {
    return containerClient;
};
exports.blobService = blobService;
