angular.module("ValentineApp").controller("PortfolioController", [
    "$scope",
    function($scope) {
        $scope.test = "hey";

        $scope.projects = [
            {
            title: "Avery Harden Music",
            subheading: "Artist",
            imgUrl: "../resources/portfolio-avery.jpg",
            description: "Single-page for Los Angeles based hip-hop artist Avery Harden.",
            link: "http://averyhardenmusic.com",
            classes: ""
            },
            {
            title: "Winston Dark",
            subheading: "E-Commerce (in progress)",
            imgUrl: "../resources/portfolio-winston.jpg",
            description: "Wordpress/WooCommerce application for online apparel and lifestyle retailer Winston Dark.",
            link: "http://winstondark.com",
            classes: ""
            },
            {
            title: "Sprague Visuals",
            subheading: "Photography Portfolio",
            imgUrl: "../resources/portfolio-sprague.jpg",
            description: "Portfolio for photographer Andrew Sprague. Built with Bootstrap & Angular for a clean, responsive SPA feel.",
            link: "http://spraguevisuals.com",
            classes: "shadow-box-accent"
            },
            {
            title: "Cray Visuals",
            subheading: "Portfolio",
            imgUrl: "../resources/sprague.png",
            description: "Website for photographer Andrew Sprague, used angular bootstrap blah blah",
            link: "http://spraguevisuals.com",
            classes: "shadow-box-accent"
            }
        ];
    }
]);
