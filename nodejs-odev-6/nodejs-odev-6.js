const koa = require("koa");
const app = new koa();

app.use((ctx) => {
  if (ctx.path === "/") ctx.body = "<h1>Index sayfasina hos geldiniz</h1>";
  else if (ctx.path === "/hakkimda")
    ctx.body = "<h1>Hakkimda sayfasina hos geldiniz</h1>";
  else if (ctx.path === "/iletisim")
    ctx.body = "<h1>Iletisim sayfasina hos geldiniz</h1>";
  else ctx.body = "<h1>404 sayfa bulunamadi</h1>";
});

port = 3000;

app.listen(port, () => {
  console.log(`${port} numarali port basarili bir sekilde uygulandi.`);
});