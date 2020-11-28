const settings = {
  "name": "alt-live",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Welcome to altlive.",
      "description": "Bespoke stag, hen & sten party slanning services."
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
              "Our Services",
              "/our-services/"
            ],
            [
              "Contact Us",
              "/contact-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://wp.alt-live.co.uk/wp-json",
          "homepage": "/homepage"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
