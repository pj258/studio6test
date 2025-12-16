# Změny v Mouse Scale Image Gallery

## Implementované úpravy

### 1. Aktualizace dat (src/data.js)
- ✅ Nahrazení původních demo projektů skutečnými projekty ze složky `public/images/studio`
- ✅ Přidáno 13 projektů: Architektura, Barokní slavnosti, Fenomén, Foto, Gahura, Hortus, Jinotaje, Křížová cesta, Litomyšl, Mrva, Památník Baťa, Portmoneum, Princip
- ✅ Podpora pro více obrázků na projekt pomocí pole `images`
- ✅ Struktura projektu obsahuje: name, client, description, folder, images, year

### 2. Animace/Prolínání obrázků
Implementováno automatické střídání obrázků pro projekty s více fotografiemi:

#### Double Component (src/components/double/index.jsx)
- ✅ Přidán state pro sledování aktuálního indexu obrázku
- ✅ UseEffect hook pro automatické střídání obrázků každé 3/3.5 sekundy
- ✅ Fade-in animace při změně obrázku (0.8s)
- ✅ Každý projekt s více obrázky se automaticky prolíná

#### Triple Component (src/components/triple/index.jsx)
- ✅ Přidán state pro sledování 3 samostatných indexů obrázků
- ✅ UseEffect hook s různými intervaly (3s, 3.5s, 4s) pro rozmanitost
- ✅ Fade-in animace při změně obrázku (0.8s)
- ✅ Nezávislé prolínání každého projektu

### 3. CSS Animace
- ✅ Přidána `@keyframes fadeIn` animace do obou SCSS modulů
- ✅ Smooth přechod s opacity 0 → 1 (0.8s ease-in-out)

### 4. Aktualizace Page.js
- ✅ Změněn nadpis na "Studio 6 - Vizuální komunikace a expozice"
- ✅ Aktualizováno rozložení galerie pro zobrazení všech 13 projektů
- ✅ Layout: Double → Triple → Double (reversed) → Triple → Triple

## Projekty s více obrázky
Následující projekty mají implementované automatické prolínání:
- **Fenomén**: 4 obrázky
- **Hortus**: 2 obrázky
- **Křížová cesta**: 3 obrázky
- **Litomyšl**: 4 obrázky
- **Památník Baťa**: 2 obrázky
- **Princip**: 8 obrázků

## Technické detaily
- Automatické střídání probíhá pomocí `setInterval`
- Každý projekt má vlastní interval pro přirozenější efekt
- Cleanup funkce zajišťuje správné odstranění intervalů
- `key` prop na Image komponentě zajišťuje správné překreslení
- Animace CSS zajišťuje plynulé přechody

## Jak přidat další obrázky
1. Vytvořte složku v `public/images/studio/nazev-projektu/`
2. Přidejte obrázky do složky
3. Aktualizujte `src/data.js`:
```javascript
{
    name: "Název projektu",
    client: "Studio 6",
    description: "Popis projektu",
    folder: "nazev-projektu",
    images: [
        "obrazek1.jpg",
        "obrazek2.jpg",
        "obrazek3.jpg"
    ],
    year: 2024,
}
```

Obrázky se budou automaticky prolínat s fade efektem!




