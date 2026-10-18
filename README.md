# BMH231 - Odev 1

## Amac
Node.js ile basit bir HTTP sunucusu gelistirmek; Git, GitHub ve npm kullanimini uygulamak.

## Gereksinimler
- Node.js LTS ve npm
- Git
- 3000 numarali portun bos olmasi

## Kurulum ve Calistirma

```bash
git clone https://github.com/Merve-ibrahim/bmh231-odev1.git
cd bmh231-odev1
npm install
npm start
```

Windows PowerShell npm.ps1 hatasi verirse npm yerine npm.cmd kullanilabilir.

Tarayicida http://localhost:3000 adresini aciniz.
Sunucuyu durdurmak icin Ctrl+C kullaniniz.

## Desteklenen Yollar

| Yol / Yontem | Durum | Yanit |
|---|---|---|
| GET / | 200 | Ana sayfa (HTML) |
| GET /hakkimda | 200 | Kisisel tanitim (HTML) |
| GET /api/ders | 200 | Ders bilgileri (JSON) |
| GET /api/agep | 200 | AGEP tarihi ve kalan gun (JSON) |
| GET ile diger yollar | 404 | Sayfa bulunamadi |
| GET disindaki yontemler | 405 | Allow: GET basligi |

AGEP son teslim tarihi 01.11.2026 olarak alinmistir.
Kalan gun sayisi dayjs ile gun baslangicina gore hesaplanir.
Sunucu her istegin yontemini ve yolunu terminale yazar.

## Kullanilan Teknolojiler
Node.js http modulu ve dayjs paketi. Express kullanilmamistir.