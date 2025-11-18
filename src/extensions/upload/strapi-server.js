'use strict';

const fs = require('fs');
const path = require('path');

module.exports = (plugin) => {
  const originalUpload = plugin.controllers.upload.upload;

  plugin.controllers.upload.upload = async (ctx) => {
    try {
      await originalUpload(ctx);
    } finally {
      // Clean up temp files after a delay to avoid EPERM errors
      if (ctx.request.files) {
        setTimeout(() => {
          Object.values(ctx.request.files).forEach((fileGroup) => {
            const files = Array.isArray(fileGroup) ? fileGroup : [fileGroup];
            files.forEach((file) => {
              if (file.path && fs.existsSync(file.path)) {
                try {
                  fs.unlinkSync(file.path);
                } catch (err) {
                  // Ignore cleanup errors on Windows
                  console.warn('Failed to clean up temp file:', file.path);
                }
              }
            });
          });
        }, 1000);
      }
    }
  };

  return plugin;
};
