# Sehatin App - Health & Fitness Tracker

Aplikasi kesehatan dan kebugaran berbasis React Native dengan Expo yang dapat dijalankan melalui Expo Go.

## Fitur Utama

- **Beranda**: Melihat statistik kesehatan harian (langkah, kalori, air, tidur)
- **Aktivitas**: Mencatat dan mengelola aktivitas olahraga
- **Profil**: Mengelola informasi pribadi dan tujuan kesehatan

## Cara Menjalankan Aplikasi

### Prasyarat
- Node.js terinstal
- Expo CLI terinstal secara global
- Expo Go app di smartphone Anda

### Langkah-langkah

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Jalankan Development Server**
   ```bash
   npm start
   ```

3. **Scan QR Code**
   - Buka aplikasi Expo Go di smartphone Anda
   - Scan QR code yang muncul di terminal atau browser
   - Aplikasi akan terbuka secara otomatis

### Alternatif Perintah

- **Android**: `npm run android`
- **iOS**: `npm run ios` (membutuhkan macOS)
- **Web**: `npm run web`

## Struktur Proyek

```
SehatinApp/
├── src/
│   ├── components/       # Komponen reusable
│   │   ├── HealthCard.tsx
│   │   └── ProgressBar.tsx
│   ├── screens/         # Halaman/halaman aplikasi
│   │   ├── HomeScreen.tsx
│   │   ├── ActivityScreen.tsx
│   │   └── ProfileScreen.tsx
│   ├── navigation/      # Navigasi aplikasi
│   │   └── TabNavigator.tsx
│   └── types/          # TypeScript types
│       └── index.ts
├── App.tsx             # Entry point
└── package.json        # Dependencies
```

## Teknologi yang Digunakan

- **React Native** dengan TypeScript
- **Expo** untuk development
- **React Navigation** untuk navigasi
- **React Native Vector Icons** untuk icons

## Troubleshooting

### Error saat instalasi
Jika terjadi error saat instalasi dependencies:
```bash
npm cache clean --force
npm install
```

### Error saat running
Jika aplikasi tidak muncul di Expo Go:
1. Pastikan smartphone dan komputer terhubung ke jaringan yang sama
2. Restart development server dengan `npm start`
3. Clear cache dengan `expo start -c`

## Kontribusi

Silakan fork dan buat pull request untuk kontribusi pada proyek ini.
