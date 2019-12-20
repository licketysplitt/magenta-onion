export default {
    "type": "object",
    "name": "site_menus",
    "title": "Site Menus",
    "fields": [
        {
            "type": "array",
            "name": "main",
            "title": "Main menu",
            "description": "List of items for Main menu",
            "validation": null,
            "of": [
                {
                    "type": "site_menu_item"
                }
            ]
        },
        {
            "type": "array",
            "name": "layouts",
            "title": "Layouts menu",
            "description": "List of items for Layouts menu",
            "validation": null,
            "of": [
                {
                    "type": "site_menu_item"
                }
            ]
        },
        {
            "type": "array",
            "name": "submenu",
            "title": "Submenu menu",
            "description": "List of items for Submenu menu",
            "validation": null,
            "of": [
                {
                    "type": "site_menu_item"
                }
            ]
        },
        {
            "type": "array",
            "name": "footer",
            "title": "Footer menu",
            "description": "List of items for Footer menu",
            "validation": null,
            "of": [
                {
                    "type": "site_menu_item"
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ]
}