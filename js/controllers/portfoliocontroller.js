angular.module("ValentineApp").controller("PortfolioController", [
    "$scope",
    function($scope) {

        $scope.projects = [
            {
            title: "Avery Harden Music",
            subheading: "Artist",
            imgUrl: "../resources/portfolio-avery.jpg",
            description: "Single-page for Los Angeles based hip-hop artist Avery Harden.",
            link: "http://averyhardenmusic.com",
            },
            {
            title: "Winston Dark",
            subheading: "E-Commerce (in progress)",
            imgUrl: "../resources/portfolio-winston.jpg",
            description: "Wordpress/WooCommerce application for online apparel and lifestyle retailer Winston Dark.",
            link: "http://winstondark.com",
            },
            {
            title: "Sprague Visuals",
            subheading: "Photography Portfolio",
            imgUrl: "../resources/portfolio-sprague.jpg",
            description: "Portfolio for photographer Andrew Sprague. Built with Bootstrap & Angular for a clean, responsive SPA feel.",
            link: "http://spraguevisuals.com",
            },
            {
            title: "Database of the Moon",
            subheading: "API",
            imgUrl: "../resources/portfolio-moon.jpg",
            description: "A simple, RESTful API developed as a resource for others learning about AJAX/API calls. This project is intended for future expansion.",
            link: "http://dbofthemoon.com",
            }
        ];
    }
]);
