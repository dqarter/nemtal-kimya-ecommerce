# NE-MTAL Kimya E-Ticaret Platformu 🧪🛒

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Context API](https://img.shields.io/badge/Context_API-000000?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/docs/context.html)

Necmettin Erbakan Mesleki ve Teknik Anadolu Lisesi (NE-MTAL) Döner Sermaye İşletmesi Kimya Teknolojisi alanı için geliştirilmiş, modern, hızlı ve duyarlı (responsive) e-ticaret ve katalog uygulamasıdır.

Bu proje, okul laboratuvarlarında üretilen profesyonel temizlik ve kimya ürünlerinin tanıtımını yapmak ve WhatsApp altyapısı üzerinden B2B/B2C sipariş süreçlerini yönetmek amacıyla geliştirilmiştir.

## 🌟 Özellikler

*   **Modern ve Hızlı Arayüz:** Vite ve React kullanılarak yüksek performanslı SPA (Single Page Application) mimarisi.
*   **Gece/Gündüz Modu (Dark Mode):** Tailwind CSS v4 ile tam uyumlu, kullanıcı tercihini `localStorage` üzerinden hatırlayan manuel tema yönetimi.
*   **Akıllı Sepet Yönetimi:** React Context API ile yönetilen; miktar artırma/azaltma, stok kontrolü ve anlık toplam tutar hesaplama özelliklerine sahip sağdan kayan sepet çekmecesi (Drawer).
*   **WhatsApp Sipariş Entegrasyonu:** Sepetteki ürünlerin varyantlarını ve toplam tutarını otomatik olarak formatlayıp kurumun resmi WhatsApp hattına ileten sipariş sistemi.
*   **Hızlı Bakış (Quick View) Modalı:** Kimyasal ürünler için kritik olan "Güvenlik Uyarıları"nı barındıran, sayfa değiştirmeden açılan detaylı ürün inceleme penceresi.
*   **Dinamik Filtreleme ve Arama:** Ürün isimlerine, stok kodlarına ve kategorilere göre anlık (real-time) sonuç getiren arama motoru.

## 🛠️ Kullanılan Teknolojiler

*   **Frontend:** React (Fonksiyonel Bileşenler & Hook'lar)
*   **Build Aracı:** Vite
*   **Stil & UI:** Tailwind CSS (v4)
*   **State Yönetimi:** Context API (`CartContext`)
*   **Bildirimler:** React Hot Toast
*   **Veri Mimarisi:** JSON (Statik katalog simülasyonu)

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1.  **Depoyu Klonlayın:**
    ```bash
    git clone [https://github.com/dqarter/nemtal-kimya-ecommerce.git](https://github.com/dqarter/nemtal-kimya-ecommerce.git)
    ```

2.  **Proje Dizinine Girin:**
    ```bash
    cd nemtal-kimya-ecommerce
    ```

3.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```

4.  **Geliştirme Sunucusunu Başlatın:**
    ```bash
    npm run dev
    ```
    Tarayıcınızda `http://localhost:5173` adresine giderek projeyi görüntüleyebilirsiniz.

## 📱 Ekran Görüntüleri
<img width="2502" height="1366" alt="Ekran görüntüsü 2026-04-30 032210" src="https://github.com/user-attachments/assets/9a14d206-9fa0-4c1b-b904-3879f8c14de1" />

<img width="2499" height="1360" alt="Ekran görüntüsü 2026-04-30 032221" src="https://github.com/user-attachments/assets/a0a02619-cac4-4b13-b881-fba44afec332" />

## 🧑‍💻 Geliştirici

**Akira** (Front-end Software Developer)
*   GitHub: [@dqarter](https://github.com/dqarter)
*   Eğitim: Dumlupınar Üniversitesi - Ön Yüz Yazılım Geliştirme
