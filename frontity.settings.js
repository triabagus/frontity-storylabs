const settings = {
  "name": "my-first-frontity-project",
  "state": {
    "frontity": {
      "url": "https://kulinerkota.com",
      "title": "Kuliner Kota - Referensi Lengkap Kuliner Khas di Indonesia",
      "description": "Referensi Terbaik Wisata Kuliner di Indonesia. Kuliner Khas, Tempat Makan Hingga Pusat Oleh-oleh Khas Daerah Kami Rangkum Lengkap Untuk Anda"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Kuliner",
              "#"
            ],
            [
              "Oleh-oleh",
              "#"
            ],
            [
              "Destinasi",
              "#"
            ],
            [
              "Resep",
              "/category/resep/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": true,
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://kulinerkota.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast",
    "@frontity/wp-comments",
  ]
};

export default settings;
