const http = require("http");

const sunucu = http.createServer((istek, yanit) => {
  console.log(istek.method, istek.url);

  if (istek.method !== "GET") {
    yanit.writeHead(405, {
      "Content-Type": "text/plain; charset=utf-8",
      "Allow": "GET"
    });
    yanit.end("Yonteme izin verilmiyor");
    return;
  }

  if (istek.url === "/") {
    yanit.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });
    yanit.end(`
      <!DOCTYPE html>
      <html lang="tr">
      <head>
        <meta charset="utf-8">
        <title>Web Programlama</title>
      </head>
      <body>
        <h1>Merve'nin Web Sunucusu</h1>
        <a href="/hakkimda">Hakkimda</a>
      </body>
      </html>
    `);
    return;
  }

  yanit.writeHead(404, {
    "Content-Type": "text/plain; charset=utf-8"
  });
  yanit.end("Sayfa bulunamadı");
});

sunucu.listen(3000, () => {
  console.log("Sunucu http://localhost:3000 adresinde calisiyor");
});