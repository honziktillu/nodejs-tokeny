# nodejs-tokeny
<img src="https://cdn-media-1.freecodecamp.org/images/hLS-y6VnzymEtlA4KLHiQYz9AOBbfGytmdAE" width="400">

Jak pracovat s tokeny

## Základní Teorie
Předtím než se něco dozvíte o tokenech, tak by to chtělo znát pár základních pojmů. Těmi jsou `Autentizace` a `Autorizace`. Tyhle slova můžete bězně potkávat při zabezpečování nějaké aplikace či systému. 
### Autentizace
Autentizace je proces ověřování daného uživatele na základě nějakých údajů, které potvrzují identitu daného uživatele. Když se identita uživatele autentizuje - ověří, tak následně může začít proces autorizace.
### Autorizace
Autorizace je proces ve kterém je autentizovanému uživateli povoleno přistupovat k určitým zdrojům na základě přidělených oprávnění. Jinak řečeno je to proces, který určuje jestli můžete přistupovat k určité funkci, akci, stránce, souboru atd.

## JWT
JSON Web Token (JWT) je [RFC7519](https://datatracker.ietf.org/doc/html/rfc7519) internetový standard pro výměnu informací mezi jednou a druhou stranou. Hlavní podstatou `není skrýt` data během komunikace, ale `zajistit`, že data během komunikace `nebyla pozměněna` - autenticita dat. Jednodušeji řečeno. JWT je [JSON](https://www.json.org/json-en.html) objekt, který se skládá ze tří částí.
### JWT části
1. Header (hlavička)
2. Payload (data)
3. Signature (podpis)

### Jak takový JWT může vypadat?
Pro nádherný vyzobrazení nám může pomoct stránka [jwt.io](https://jwt.io), kde můžeme vidět JWT barevně rozdělený.
JWT může mít například tuto enkódovanou podobu:
*`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkphbiBUaWxsIiwiaWF0IjoxNTE2MjM5MDIyfQ.fRVMZRp-wSXBOeoqxV7hbEkArRATjOUjKEsttB4h8Zw`*

- *`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`* - header
- *`eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkphbiBUaWxsIiwiaWF0IjoxNTE2MjM5MDIyfQ`* - payload
- *`fRVMZRp-wSXBOeoqxV7hbEkArRATjOUjKEsttB4h8Zw`* - signature

V dekódované podobě by náš token vypadal takhle:
- `{
  "alg": "HS256",
  "typ": "JWT"
}` - header
- `{
  "sub": "1234567890",
  "name": "Jan Till",
  "iat": 1516239022
}` - payload
- `HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  256-bit-secret
)` - signature

Vysvětlené části:
- header (hlavička) - Ve hlavičce je vepsáno jakým způsobem se bude generovat podpis tokenu. *`"alg": "HS256"`* řiká, že token bude podepsán pomocí algoritmu `HMAC-SHA256`
- payload (data) - Data, které náš token přenáší. Pro JWT jsou některé [názvy](https://en.wikipedia.org/wiki/JSON_Web_Token#Standard_fields) v `""` předem definovány. Jinak si názvy můžeme utvářet dle libosti.
- signature (podpis) - Způsob, kterým bude probíhat výpočet podpisu pro náš JWT.

## Práce s JWT v NodeJS
### Co budeme potřebovat
- Znalosti z předchozích hodin - `JavaScript`, `NodeJS`, `MongoDB` nebo nějakou jinou databázi
- `VSC` nebo nějaké jiné IDEčko
- `Postman`

### Postup
- Vytvoříme (znovu použijeme) API, která bude komunikovat s databází (v našem případě MongoDB)
- Doinstalujeme moduly `jsonwebtoken` a `bcryptjs`
- Vytvoříme registraci a přihlášení
- Vytvoříme middleware pro autentizaci
- V routes/index.js nastavíme autorizaci pro GET /

