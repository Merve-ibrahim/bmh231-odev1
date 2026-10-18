const http = require("http");
const dayjs = require("dayjs");

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
<h1>Merve'nin Web Programlama Projesi</h1>      
  <a href="/hakkimda">Hakkimda</a>
      </body>
      </html>
    `);
    return;
  }
  if (istek.url === "/hakkimda") {
    yanit.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8"
    });
    yanit.end(`
      <!DOCTYPE html>
      <html lang="tr">
      <head>
        <meta charset="utf-8">
        <title>Hakkımda</title>
      </head>
      <body>
        <h1>Hakkımda</h1>
        <p>Ben Merve İBRAHİM. Bilgisayar Mühendisliği öğrencisiyim.</p>
        <p>Bu sunucuyu Web Programlama dersi için geliştiriyorum.</p>
        <a href="/">Ana Sayfa</a>
      </body>
      </html>
    `);
    return;
  }
    if (istek.url === "/api/ders") {
    yanit.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8"
    });

    yanit.end(JSON.stringify({
      kod: "BMH231",
      ad: "Web Programlama",
      gun: "Cuma"
    }));
    return;
  }
    if (istek.url === "/api/agep") {
    const bugun = dayjs().startOf("day");
    const sonTeslim = dayjs("2026-11-01");
    const kalanGun = sonTeslim.diff(bugun, "day");

    yanit.writeHead(200, {
      "Content-Type": "application/json; charset=utf-8"
    });

    yanit.end(JSON.stringify({
      sonTeslim: sonTeslim.format("DD.MM.YYYY"),
      kalanGun: kalanGun
    }));
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