# Tailwind CSS v projektu

## ✅ Instalace dokončena!

Tailwind CSS je nyní plně integrován do projektu Mouse Scale Image Gallery.

## 📦 Co bylo nainstalováno

```bash
npm install -D tailwindcss postcss autoprefixer
```

## 📁 Vytvořené soubory

1. **tailwind.config.js** - Konfigurace Tailwind CSS
2. **postcss.config.js** - Konfigurace PostCSS pro zpracování Tailwind
3. **src/app/globals.css** - Aktualizováno s Tailwind direktivami

## 🎨 Jak používat Tailwind

### 1. Základní utility třídy

```jsx
// Barvy textu
<h1 className="text-blue-500">Nadpis</h1>
<p className="text-gray-600">Text</p>

// Vlastní barva (jako máte #B6483B)
<span className="text-[#B6483B]">Text</span>

// Font
<span className="font-bold">Tučný text</span>
<span className="italic">Kurzíva</span>

// Velikosti
<h1 className="text-4xl">Velký nadpis</h1>
<p className="text-lg">Větší text</p>
```

### 2. Layout a spacing

```jsx
// Margin a padding
<div className="mt-4 mb-8 p-6">
  // mt-4 = margin-top: 1rem (16px)
  // mb-8 = margin-bottom: 2rem (32px)  
  // p-6 = padding: 1.5rem (24px)
</div>

// Flexbox
<div className="flex justify-center items-center gap-4">
  // Flex kontejner s centrovaným obsahem a mezerou 1rem
</div>

// Grid
<div className="grid grid-cols-3 gap-6">
  // Grid se 3 sloupci a mezerou 1.5rem
</div>
```

### 3. Responzivní design

```jsx
<div className="text-sm md:text-base lg:text-lg">
  // Mobilní: malý text
  // Tablet (md): normální text
  // Desktop (lg): větší text
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  // Mobilní: 1 sloupec
  // Tablet: 2 sloupce
  // Desktop: 3 sloupce
</div>
```

### 4. Hover a interaktivní stavy

```jsx
<button className="bg-blue-500 hover:bg-blue-700 transition-colors">
  Tlačítko
</button>

<div className="opacity-50 hover:opacity-100 transition-opacity">
  Obsah
</div>
```

### 5. Kombinace s SCSS moduly

Můžete kombinovat Tailwind s existujícími SCSS moduly:

```jsx
import styles from './style.module.scss';

<div className={`${styles.myClass} flex items-center gap-4`}>
  // SCSS třída + Tailwind utility
</div>
```

## 🎯 Praktické příklady pro váš projekt

### Styling nadpisů projektů

```jsx
<h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-[#B6483B] transition-colors">
  {project.name}
</h3>
```

### Styling popisů

```jsx
<p className="text-sm text-gray-600 leading-relaxed">
  {project.description}
</p>
```

### Card s Tailwind

```jsx
<div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
  <h3 className="text-2xl font-bold mb-4">Název</h3>
  <p className="text-gray-700">Obsah</p>
</div>
```

### Responzivní kontejner

```jsx
<div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
  {/* Obsah */}
</div>
```

## 🔧 Užitečné Tailwind utility

| Třída | Popis |
|-------|-------|
| `w-full` | width: 100% |
| `h-screen` | height: 100vh |
| `rounded-lg` | border-radius: 0.5rem |
| `shadow-lg` | box-shadow (velký) |
| `opacity-50` | opacity: 0.5 |
| `transition-all` | plynulé přechody |
| `duration-300` | trvání animace 300ms |
| `ease-in-out` | easing funkce |

## 📚 Dokumentace

- [Tailwind CSS Dokumentace](https://tailwindcss.com/docs)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Tailwind Play](https://play.tailwindcss.com/) - Online playground

## 💡 Tipy

1. **VS Code Extension**: Nainstalujte "Tailwind CSS IntelliSense" pro autocomplete
2. **Prettier Plugin**: Pro automatické formátování Tailwind tříd
3. **Vlastní barvy**: Přidejte do `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      'studio': '#B6483B',
    }
  }
}
```

Pak můžete použít: `text-studio`, `bg-studio`, atd.

## 🚀 Hotovo!

Server se automaticky restartuje a Tailwind je připraven k použití. Vyzkoušejte přidat nějaké třídy do vašich komponent!




